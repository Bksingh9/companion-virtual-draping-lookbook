import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import { Buffer } from "node:buffer";

const chromeCandidates = [
  process.env.CHROME_PATH,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
].filter(Boolean);

const chromePath = chromeCandidates.find((candidate) => existsSync(candidate));
if (!chromePath) {
  throw new Error("Chrome binary not found. Set CHROME_PATH to run browser QA.");
}

const requestedUrl = process.env.QA_URL || "http://127.0.0.1:4173/";
const port = Number(process.env.QA_CDP_PORT || 9433 + Math.floor(Math.random() * 300));
const profileDir = await mkdtemp(path.join(tmpdir(), "companion-chrome-qa-"));

const sleep = (ms) => delay(ms);

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }
  return response.json();
}

function apiBaseForAppUrl(url) {
  const parsed = new URL(url);
  const queryBase = parsed.searchParams.get("apiBase");
  if (queryBase) return queryBase.replace(/\/+$/, "");
  if (parsed.protocol === "file:" || parsed.hostname.endsWith("github.io")) return "http://127.0.0.1:4173";
  if (parsed.protocol === "http:" || parsed.protocol === "https:") return parsed.origin;
  return "";
}

async function maybeVertexStatus(url) {
  const apiBase = apiBaseForAppUrl(url);
  if (!apiBase) return null;
  try {
    return await fetchJson(new URL("/api/vertex/status", apiBase).href);
  } catch {
    return null;
  }
}

let appUrl = requestedUrl;
let videoProbe = { ready: false, hasVideo: false, message: "" };
const initialStatus = await maybeVertexStatus(requestedUrl);
assert(initialStatus?.tryOnEnabled, "Real Vertex try-on backend is not enabled for browser QA.");
assert(initialStatus?.videoEnabled, "Real Veo video backend is not enabled for browser QA.");

const chrome = spawn(chromePath, [
  "--headless=new",
  "--disable-gpu",
  "--no-first-run",
  "--no-default-browser-check",
  "--disable-background-networking",
  "--disable-sync",
  "--window-size=390,844",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDir}`,
  "about:blank",
], { stdio: "ignore" });

let cdp;

async function waitForChrome() {
  const endpoint = `http://127.0.0.1:${port}/json/version`;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const version = await fetchJson(endpoint);
      if (version.Browser) return;
    } catch {
      await sleep(125);
    }
  }
  throw new Error("Timed out waiting for Chrome DevTools endpoint.");
}

function decodeWsData(data) {
  if (typeof data === "string") return data;
  if (data instanceof ArrayBuffer) return Buffer.from(data).toString("utf8");
  if (ArrayBuffer.isView(data)) return Buffer.from(data.buffer).toString("utf8");
  return String(data);
}

async function connectCdp(wsUrl) {
  const ws = new WebSocket(wsUrl);
  await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Timed out connecting to CDP websocket.")), 10000);
    ws.addEventListener("open", () => {
      clearTimeout(timer);
      resolve();
    }, { once: true });
    ws.addEventListener("error", () => {
      clearTimeout(timer);
      reject(new Error("CDP websocket connection failed."));
    }, { once: true });
  });

  let id = 0;
  const pending = new Map();
  const eventWaiters = new Map();
  ws.addEventListener("message", (event) => {
    const message = JSON.parse(decodeWsData(event.data));
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message || JSON.stringify(message.error)));
      else resolve(message.result || {});
      return;
    }
    if (message.method && eventWaiters.has(message.method)) {
      const waiters = eventWaiters.get(message.method);
      eventWaiters.delete(message.method);
      waiters.forEach((resolve) => resolve(message.params || {}));
    }
  });

  function send(method, params = {}) {
    id += 1;
    const requestId = id;
    ws.send(JSON.stringify({ id: requestId, method, params }));
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        pending.delete(requestId);
        reject(new Error(`CDP command timed out: ${method}`));
      }, 30000);
      pending.set(requestId, {
        resolve: (value) => {
          clearTimeout(timer);
          resolve(value);
        },
        reject: (error) => {
          clearTimeout(timer);
          reject(error);
        },
      });
    });
  }

  function waitForEvent(method, timeoutMs = 15000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Timed out waiting for ${method}`)), timeoutMs);
      const wrappedResolve = (params) => {
        clearTimeout(timer);
        resolve(params);
      };
      const waiters = eventWaiters.get(method) || [];
      waiters.push(wrappedResolve);
      eventWaiters.set(method, waiters);
    });
  }

  return {
    close: () => ws.close(),
    send,
    waitForEvent,
  };
}

async function evaluate(expression) {
  const result = await cdp.send("Runtime.evaluate", {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  if (result.exceptionDetails) {
    const details = result.exceptionDetails.exception?.description || result.exceptionDetails.text || "Runtime exception";
    throw new Error(details);
  }
  return result.result?.value;
}

async function waitFor(name, expression, timeoutMs = 12000) {
  const started = Date.now();
  let lastValue = false;
  while (Date.now() - started < timeoutMs) {
    lastValue = await evaluate(`Boolean(${expression})`).catch(() => false);
    if (lastValue) return;
    await sleep(250);
  }
  const text = await evaluate("document.body ? document.body.innerText.slice(0, 1200) : ''").catch(() => "");
  const state = await evaluate("window.__COMPANION_QA_STATE__ || null").catch(() => null);
  throw new Error(`Timed out waiting for ${name}. Last state: ${JSON.stringify(state)}. Last page text: ${text}`);
}

async function click(selector, label = selector) {
  const clicked = await evaluate(`(() => {
    const el = document.querySelector(${JSON.stringify(selector)});
    if (!el) return false;
    el.scrollIntoView({ block: "center", inline: "center" });
    el.click();
    return true;
  })()`);
  assert(clicked, `Could not click ${label}`);
  await sleep(350);
}

async function closeChrome() {
  if (chrome.exitCode !== null) return;
  chrome.kill("SIGTERM");
  await Promise.race([
    new Promise((resolve) => chrome.once("exit", resolve)),
    sleep(3000),
  ]);
  if (chrome.exitCode === null) {
    chrome.kill("SIGKILL");
    await Promise.race([
      new Promise((resolve) => chrome.once("exit", resolve)),
      sleep(1500),
    ]);
  }
}

async function removeProfileDir() {
  for (let attempt = 0; attempt < 8; attempt += 1) {
    try {
      await rm(profileDir, { recursive: true, force: true });
      return;
    } catch (error) {
      if (attempt === 7) throw error;
      await sleep(250);
    }
  }
}

async function pageMetrics() {
  return evaluate(`(() => {
    const buttonSelector = [
      "[data-action]",
      "[data-route]",
      "[data-select-product]",
      "[data-create-style]",
      "[data-env]",
      "[data-camera]",
      "[data-style]",
      "[data-gender]",
      "[data-gallery-image]",
      "[data-gallery-tab]",
      "[data-view-look]",
      "[data-remove-look]",
      "[data-remove]",
      "[data-cta]"
    ].join(",");
    const deadButtons = Array.from(document.querySelectorAll("button")).filter((button) => {
      const rect = button.getBoundingClientRect();
      const visible = rect.width > 0 && rect.height > 0 && getComputedStyle(button).visibility !== "hidden";
      return visible && !button.matches(buttonSelector);
    }).map((button) => button.textContent.trim() || button.getAttribute("aria-label") || button.className);
    const bottom = document.querySelector(".bottom-group")?.getBoundingClientRect();
    return {
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      deadButtons,
      libraryCards: document.querySelectorAll("[data-create-style]").length,
      bottomVisible: bottom ? bottom.bottom <= window.innerHeight + 2 && bottom.top < window.innerHeight : false,
      resultImageLoaded: Boolean(document.querySelector(".tryon-result-photo")?.complete),
      bodyText: document.body.innerText,
    };
  })()`);
}

try {
  await waitForChrome();
  const target = await fetchJson(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(appUrl)}`, { method: "PUT" });
  cdp = await connectCdp(target.webSocketDebuggerUrl);
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  });
  const loaded = cdp.waitForEvent("Page.loadEventFired", 20000).catch(() => {});
  await cdp.send("Page.navigate", { url: appUrl });
  await loaded;

  await waitFor("home AI Lookbook", `document.body.innerText.includes("AI Lookbook")`);
  await click('[data-route="tryon"]', "Lookbook bottom navigation");
  await waitFor("empty upload card", `document.body.innerText.includes("Full body image for AI Lookbook")`);
  assert(!(await evaluate(`document.querySelector(".tryon-stage")?.innerHTML.includes("real-model-stadium.jpg")`)), "Upload image is preselected before user action.");

  await click('[data-action="open-gallery"]', "Upload Image");
  await waitFor("mobile gallery", `document.body.innerText.includes("Choose a real image for your Senior Stylist read") && document.body.innerHTML.includes("real-model-stadium.jpg")`);
  await click('[data-gallery-image="real-model-stadium"]', "real model gallery tile");
	  await waitFor("style read and suggestions", `(() => {
	    const text = document.body.innerText.toLowerCase();
	    return text.includes("style read complete") && text.includes("suggested products based on upload");
	  })()`, 70000);

  await click('[data-action="auto-suggest"]', "Auto Suggest From Upload");
  await waitFor("PDP Create Lookbook", `document.body.innerText.includes("Create Lookbook") && Boolean(document.querySelector(".pdp-hero"))`);

	  await click('[data-action="start-draping"]', "Create Lookbook");
	  await waitFor("Create Lookbook loading spinner", `(() => {
	    const qaState = window.__COMPANION_QA_STATE__ || {};
	    return qaState.renderStatus === "rendering" &&
	      document.body.innerText.includes("Senior Stylist is creating this Lookbook") &&
	      Boolean(document.querySelector(".render-overlay .loading-orbit"));
	  })()`, 8000);
	  await waitFor("rendering or result state", `document.body.innerText.includes("Senior Stylist is creating this Lookbook") || document.body.innerText.includes("saved to Lookbook")`, 8000);
	  await waitFor("rendered Lookbook result", `document.body.innerText.includes("saved to Lookbook") && document.body.innerText.includes("Generate Lookbook Video")`, 180000);
	  const renderMode = await evaluate(`(() => {
	    const text = document.body.innerText;
	    if (text.includes("Real Vertex VTO Lookbook image created and saved")) return "vertex-try-on";
	    return "rendered";
	  })()`);
	  assert(renderMode === "vertex-try-on", `Expected Vertex try-on image, received ${renderMode}`);

	  await click('[data-action="generate-video"]', "Generate Lookbook Video");
	  await waitFor("Generate Lookbook Video loading spinner", `(() => {
	    const qaState = window.__COMPANION_QA_STATE__ || {};
	    return (qaState.videoStatus === "generating" || qaState.videoStatus === "running") &&
	      document.body.innerText.includes("Creating Video") &&
	      Boolean(document.querySelector(".video-loader .loading-orbit"));
	  })()`, 8000);
	  await waitFor("real Veo video panel", `(() => {
	    const qaState = window.__COMPANION_QA_STATE__ || {};
	    return qaState.videoStatus === "ready" &&
	      qaState.videoMode === "vertex" &&
	      Boolean(qaState.videoUrl) &&
	      Boolean(document.querySelector(".video-thumb video"));
	  })()`, 210000);
	  videoProbe = await evaluate(`(() => ({
	    ready: document.body.innerText.includes("Video Ready"),
	    hasVideo: Boolean(document.querySelector(".video-thumb video")),
	    mode: document.querySelector(".video-copy p")?.textContent.includes("Vertex generated") ? "vertex" : "",
	    message: document.querySelector(".video-copy p")?.textContent.trim() || "",
	    src: document.querySelector(".video-thumb video")?.getAttribute("src") || ""
	  }))()`);
	  assert(videoProbe.ready && videoProbe.hasVideo, "Expected a playable Veo-generated video element.");
	  assert(videoProbe.mode === "vertex", `Expected Vertex video message, got ${videoProbe.message}`);
  await click('[data-action="open-lookbook"]', "Lookbook action");
  await waitFor("curated Lookbook library", `(() => {
    const text = document.body.innerText.toLowerCase();
    return text.includes("curated lookbook library") && text.includes("50 occasion ideas");
  })()`);
  assert(await evaluate(`(() => {
    const text = document.body.innerText.toLowerCase();
    return text.includes("male styles") && text.includes("female styles");
  })()`), "Lookbook lanes missing.");
  const libraryCreateControls = await evaluate(`document.querySelectorAll("[data-create-style]").length`);
  assert(libraryCreateControls >= 100, "Expected Create Lookbook controls for male and female curated styles.");

  await click('[data-create-style="female-office-power-edit"]', "female office style card");
  await waitFor("female PDP route", `document.body.innerText.includes("Create Lookbook") && document.body.innerText.includes("Female catalogue")`);
  await click('[data-action="add-to-bag"]', "Add To Bag from PDP");
  await waitFor("bag count", `document.body.innerText.includes("1 catalogue look added") && document.querySelector(".bag-count")?.textContent.trim() === "1"`);

  const metrics = await pageMetrics();
  assert(metrics.deadButtons.length === 0, `Visible buttons without handlers: ${metrics.deadButtons.join(", ")}`);
  assert(metrics.scrollWidth <= metrics.viewportWidth + 2, `Horizontal page overflow: ${metrics.scrollWidth}px > ${metrics.viewportWidth}px`);
  assert(metrics.bottomVisible, "Bottom navigation is not visible/aligned at the mobile viewport bottom.");

  console.log(JSON.stringify({
	    ok: true,
	    appUrl,
	    backend: {
	      tryOnEnabled: initialStatus.tryOnEnabled,
	      videoEnabled: initialStatus.videoEnabled,
	      modelId: initialStatus.modelId,
	      tryOnModelId: initialStatus.tryOnModelId,
	    },
	    renderMode,
	    videoMode: videoProbe.mode,
	    videoProbe,
    libraryCreateControls,
    deadButtons: metrics.deadButtons.length,
    viewport: {
      width: metrics.viewportWidth,
      scrollWidth: metrics.scrollWidth,
      bottomVisible: metrics.bottomVisible,
    },
  }, null, 2));
} finally {
  if (cdp) cdp.close();
  await closeChrome();
  await removeProfileDir();
}
