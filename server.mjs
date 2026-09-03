import crypto from "node:crypto";
import { createReadStream } from "node:fs";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const STATIC_ROOT = __dirname;
const DEFAULT_CREDENTIALS = path.join(__dirname, "service-account.json");

const config = {
  port: Number(process.env.PORT || 4173),
  credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS || DEFAULT_CREDENTIALS,
  location: process.env.GOOGLE_CLOUD_LOCATION || "us-central1",
  modelId: process.env.VERTEX_MODEL_ID || "veo-3.1-fast-generate-001",
  tryOnModelId: process.env.VERTEX_TRYON_MODEL_ID || "virtual-try-on-001",
  analysisModelId: process.env.VERTEX_ANALYSIS_MODEL_ID || "gemini-2.5-flash",
  outputGcsUri: process.env.VERTEX_OUTPUT_GCS_URI || "",
  tryOnOutputGcsUri: process.env.VERTEX_TRYON_OUTPUT_GCS_URI || process.env.VERTEX_OUTPUT_GCS_URI || "",
  resolution: process.env.VERTEX_VIDEO_RESOLUTION || "720p",
  enableVideo: process.env.VERTEX_ENABLE_VIDEO === "true",
  enableTryOn: process.env.VERTEX_ENABLE_TRYON !== "false",
  enableAnalysis: process.env.VERTEX_ENABLE_ANALYSIS !== "false",
  maxWaitMs: Number(process.env.VERTEX_VIDEO_MAX_WAIT_MS || 150000),
};

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".mp4": "video/mp4",
  ".svg": "image/svg+xml",
};

let serviceAccountCache;
let tokenCache;

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
  });
  res.end(JSON.stringify(body));
}

function publicError(error) {
  return error?.publicMessage || error?.message || "Request failed";
}

async function readRequestJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 35 * 1024 * 1024) {
      const error = new Error("Request body is larger than the 35 MB prototype limit");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  if (!chunks.length) return {};
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

async function loadServiceAccount() {
  if (serviceAccountCache) return serviceAccountCache;
  const raw = await readFile(config.credentialsPath, "utf8");
  const credentials = JSON.parse(raw);
  if (
    credentials.type !== "service_account" ||
    !credentials.project_id ||
    !credentials.client_email ||
    !credentials.private_key
  ) {
    throw new Error("Google credential file is not a complete service-account JSON");
  }
  serviceAccountCache = credentials;
  return credentials;
}

function base64url(input) {
  return Buffer.from(input)
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  if (tokenCache && tokenCache.expiry > now + 90) return tokenCache.accessToken;

  const credentials = await loadServiceAccount();
  const header = { alg: "RS256", typ: "JWT" };
  const claims = {
    iss: credentials.client_email,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const unsigned = `${base64url(JSON.stringify(header))}.${base64url(JSON.stringify(claims))}`;
  const signature = crypto.createSign("RSA-SHA256").update(unsigned).sign(credentials.private_key);
  const assertion = `${unsigned}.${base64url(signature)}`;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion,
    }),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error_description || data.error || "Google OAuth token request failed");
  }
  tokenCache = {
    accessToken: data.access_token,
    expiry: now + Number(data.expires_in || 3600),
  };
  return tokenCache.accessToken;
}

async function requestGoogleJson(url, body) {
  const accessToken = await getAccessToken();
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) {
    throw new Error(data?.error?.message || `Google API request failed with ${response.status}`);
  }
  return data;
}

function mimeTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".png") return "image/png";
  if (ext === ".jpg" || ext === ".jpeg") return "image/jpeg";
  throw new Error("Only PNG and JPEG images are supported for video generation");
}

function imagePayloadFromDataUrl(dataUrl, label = "Image") {
  const match = String(dataUrl || "").match(/^data:(image\/(?:png|jpeg));base64,(.+)$/);
  if (!match) {
    throw new Error(`${label} must be a PNG or JPEG data URL`);
  }
  return { bytesBase64Encoded: match[2], mimeType: match[1] };
}

async function imagePayloadFromStaticPath(rawPath, label = "Image") {
  const rawImagePath = String(rawPath || "").split("?")[0].replace(/^\.\//, "");
  if (!rawImagePath) throw new Error(`Missing ${label} path`);
  const safeRelativePath = rawImagePath.replace(/^\/+/, "");
  const resolved = path.resolve(STATIC_ROOT, safeRelativePath);
  if (!resolved.startsWith(`${STATIC_ROOT}${path.sep}`)) {
    throw new Error(`${label} path is outside the prototype folder`);
  }
  const bytes = await readFile(resolved);
  return {
    bytesBase64Encoded: bytes.toString("base64"),
    mimeType: mimeTypeFor(resolved),
  };
}

async function imagePayloadFromSource(source, label = "Image") {
  if (source?.imageDataUrl) {
    return imagePayloadFromDataUrl(source.imageDataUrl, label);
  }

  if (source?.imagePath) {
    return imagePayloadFromStaticPath(source.imagePath, label);
  }

  throw new Error(`Missing ${label} image`);
}

async function imagePayloadFromRequest(body) {
  if (body.imageDataUrl) {
    return imagePayloadFromDataUrl(body.imageDataUrl, "Uploaded image");
  }

  if (body.imagePath) {
    return imagePayloadFromStaticPath(body.imagePath, "Image");
  }

  throw new Error("Missing imagePath or imageDataUrl");
}

function tryOnOutputPrefix() {
  if (!config.tryOnOutputGcsUri) return "";
  const base = config.tryOnOutputGcsUri.endsWith("/") ? config.tryOnOutputGcsUri : `${config.tryOnOutputGcsUri}/`;
  return `${base}companion-tryon-${Date.now()}/`;
}

function composeProductDescription(product = {}) {
  return [
    product.brand,
    product.name,
    product.fabric,
    product.fit,
    product.occasion,
    product.color ? `colour ${product.color}` : "",
  ].filter(Boolean).join(", ");
}

function inferLaneFromText(value = "", fallbackGender = "male") {
  const text = String(value).toLowerCase();
  if (/\b(female|woman|women|girl|lady|ladies|her|she|kurta|saree|dress|ethnic|avaasa)\b/.test(text)) return "female";
  if (/\b(male|man|men|boy|him|he|shirt|tee|polo|bomber|trouser|teamspirit|netplay|performax)\b/.test(text)) return "male";
  return fallbackGender === "female" ? "female" : "male";
}

function inferCategoryFromText(value = "") {
  const text = String(value).toLowerCase();
  if (/office|work|meeting|presentation/.test(text)) return "Office";
  if (/formal|interview|event/.test(text)) return "Formal";
  if (/date|dinner|anniversary|party/.test(text)) return "Date";
  if (/sport|gym|active|run|walk/.test(text)) return "Sport Wear";
  if (/ethnic|festive|kurta|saree|wedding|celebration|function/.test(text)) return "Ethnic";
  if (/resort|vacay|holiday/.test(text)) return "Resort";
  if (/travel|airport|trip|commute/.test(text)) return "Travel";
  return "";
}

function fallbackUploadAnalysis(body = {}) {
  const text = `${body.title || ""} ${body.meta || ""} ${body.fallbackGender || ""}`;
  const lane = inferLaneFromText(text, body.fallbackGender);
  const preferredCategory = inferCategoryFromText(text) || (lane === "female" ? "Ethnic" : "Live Moment");
  return {
    mode: "local-fallback",
    recommendedGenderLane: lane,
    preferredCategory,
    confidence: 0.58,
    tags: [preferredCategory, lane === "female" ? "Women Topwear" : "Men Topwear"],
    note: `${lane === "female" ? "Female" : "Male"} catalogue lane selected from upload signals. Switch anytime if the styling lane is not right.`,
  };
}

function parseJsonish(text = "") {
  const clean = String(text).replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(clean);
  } catch {
    const match = clean.match(/\{[\s\S]*\}/);
    if (!match) return {};
    try {
      return JSON.parse(match[0]);
    } catch {
      return {};
    }
  }
}

function normalizeUploadAnalysis(raw = {}, fallback = fallbackUploadAnalysis()) {
  const lane = raw.recommendedGenderLane === "female" || raw.genderLane === "female"
    ? "female"
    : raw.recommendedGenderLane === "male" || raw.genderLane === "male"
      ? "male"
      : fallback.recommendedGenderLane;
  const category = inferCategoryFromText(raw.preferredCategory || raw.occasion || (raw.tags || []).join(" ")) || fallback.preferredCategory;
  const confidence = Number(raw.confidence);
  return {
    mode: raw.mode || "vertex-analysis",
    recommendedGenderLane: lane,
    preferredCategory: category,
    occasion: raw.occasion || "",
    confidence: Number.isFinite(confidence) ? Math.max(0, Math.min(1, confidence > 1 ? confidence / 100 : confidence)) : fallback.confidence,
    tags: Array.isArray(raw.tags) ? raw.tags.slice(0, 6) : fallback.tags,
    note: raw.note || fallback.note,
  };
}

function extractGeminiText(response = {}) {
  const parts = response?.candidates?.[0]?.content?.parts || [];
  return parts.map((part) => part.text || "").join("\n").trim();
}

async function analyzeUploadImage(body) {
  const fallback = fallbackUploadAnalysis(body);
  if (!config.enableAnalysis) return fallback;

  try {
    await loadServiceAccount();
    const image = await imagePayloadFromRequest(body);
    const prompt = [
      "You are the TRENDS Companion Senior Stylist image analysis layer for a retail prototype.",
      "Recommend the best catalogue lane for styling the uploaded shopper image: male or female.",
      "This is a catalogue-routing recommendation only, not a claim about gender identity.",
      "Also choose one preferredCategory from: Live Moment, Office, Date, Casual, Sport Wear, Ethnic, Resort, Formal, Travel, Celebration.",
      "Respect guardrails: adult shopper only, no fit guarantee, no body judgments, no sensitive identity claims.",
      "Return compact JSON only with keys: recommendedGenderLane, preferredCategory, occasion, confidence, tags, note.",
    ].join(" ");
    const response = await requestGoogleJson(
      publisherModelUrl(config.analysisModelId, "generateContent"),
      {
        contents: [
          {
            role: "user",
            parts: [
              { text: prompt },
              {
                inlineData: {
                  mimeType: image.mimeType,
                  data: image.bytesBase64Encoded,
                },
              },
            ],
          },
        ],
        generationConfig: {
          responseMimeType: "application/json",
          temperature: 0.15,
          maxOutputTokens: 512,
        },
      },
    );
    const raw = parseJsonish(extractGeminiText(response));
    return normalizeUploadAnalysis(raw, fallback);
  } catch (error) {
    return {
      ...fallback,
      message: error.message,
    };
  }
}

function composeTryOnPrompt(body) {
  const product = body.product || {};
  const environment = body.environment || {};
  const cameraMove = body.cameraMove || {};
  const style = body.lookbookStyle || {};
  const basePrompt = body.prompt || "";
  const gender = body.gender === "female" ? "female" : body.gender === "male" ? "male" : "adult";
  const productFallback = body.gender === "female" ? "selected womenswear product" : "selected menswear product";
  return [
    `Create a premium virtual draping image for an adult ${gender} shopper inside the TRENDS Companion app.`,
    "Use the person image as the identity, face, body, pose, and real-life avatar anchor.",
    `Drape the selected PDP catalogue product: ${composeProductDescription(product) || productFallback}.`,
    `Stylist intent: ${product.drapeNote || "make the product feel polished, wearable, and store-ready"}.`,
    `Curated lookbook edit: ${style.label || "Store Spotlight"} for ${style.occasion || "a store visit"}. ${style.reason || ""}`,
    `Journey context: ${environment.label || "Store Spotlight"} for ${environment.occasion || "in-store reveal"}; premium beige and black Companion retail mood.`,
    `Camera expectation for later video: ${cameraMove.label || "Orbit Reveal"}; ${cameraMove.framing || "vertical 9:16 full body"}.`,
    "Keep realistic proportions, natural hands, appropriate complete outfit coverage, clean garment boundaries, and accurate product colour/fabric.",
    "Do not create underwear-only output, distorted fingers, warped face, logos, floating UI text, or fit-guarantee claims.",
    basePrompt,
  ].filter(Boolean).join(" ");
}

function buildTryOnRequest(body, personImage, productImage) {
  const parameters = {
    sampleCount: 1,
    personGeneration: "allow-adult",
    safetySetting: "block-medium-and-above",
    addWatermark: false,
    enhancePrompt: true,
  };
  const storageUri = tryOnOutputPrefix();
  if (storageUri) parameters.storageUri = storageUri;

  return {
    instances: [
      {
        prompt: composeTryOnPrompt(body),
        personImage: {
          image: personImage,
        },
        productImages: [
          {
            image: productImage,
            productImageConfig: {
              productDescription: composeProductDescription(body.product),
            },
          },
        ],
      },
    ],
    parameters,
  };
}

function extractTryOnImageResult(response) {
  const predictions = Array.isArray(response?.predictions) ? response.predictions : [];
  for (const prediction of predictions) {
    const containers = [
      prediction?.images,
      prediction?.generatedImages,
      prediction?.output?.images,
      [prediction],
    ].filter(Boolean);

    for (const container of containers) {
      const images = Array.isArray(container) ? container : [container];
      for (const entry of images) {
        const image = entry?.image || entry;
        if (image?.raiFilteredReason) {
          const error = new Error(`Draping image filtered: ${image.raiFilteredReason}`);
          error.statusCode = 422;
          throw error;
        }
        const bytes = image?.bytesBase64Encoded || image?.bytesBase64 || "";
        if (bytes) {
          const mimeType = image?.mimeType || "image/png";
          return {
            imageDataUrl: `data:${mimeType};base64,${bytes}`,
            mimeType,
            imageUri: "",
          };
        }
        if (image?.gcsUri || image?.uri) {
          return {
            imageDataUrl: "",
            mimeType: image?.mimeType || "image/png",
            imageUri: image.gcsUri || image.uri,
          };
        }
      }
    }
  }

  throw new Error("Virtual draping completed without an image");
}

function publisherModelUrl(modelId, method) {
  const { location } = config;
  return `https://${location}-aiplatform.googleapis.com/v1/projects/${serviceAccountCache.project_id}/locations/${location}/publishers/google/models/${modelId}:${method}`;
}

async function generateVertexTryOnImage(body) {
  await loadServiceAccount();
  if (!config.enableTryOn) {
    return {
      mode: "mock",
      status: "mock_ready",
      imageDataUrl: "",
      imageUri: "",
      message: "Virtual draping endpoint is wired. Set VERTEX_ENABLE_TRYON=true to run Vertex VTO.",
    };
  }

  const personImage = await imagePayloadFromSource({
    imageDataUrl: body.personImageDataUrl,
    imagePath: body.personImagePath,
  }, "Person");
  const productImage = await imagePayloadFromSource({
    imageDataUrl: body.productImageDataUrl,
    imagePath: body.productImagePath,
  }, "Product");
  const response = await requestGoogleJson(
    publisherModelUrl(config.tryOnModelId, "predict"),
    buildTryOnRequest(body, personImage, productImage),
  );
  const imageResult = extractTryOnImageResult(response);
  return {
    mode: "vertex-try-on",
    status: "done",
    message: imageResult.imageDataUrl
      ? "AI virtual draping image generated."
      : "AI virtual draping image generated in Cloud Storage.",
    ...imageResult,
  };
}

function modelUrl(method) {
  return publisherModelUrl(config.modelId, method);
}

function outputPrefix() {
  if (!config.outputGcsUri) return "";
  const base = config.outputGcsUri.endsWith("/") ? config.outputGcsUri : `${config.outputGcsUri}/`;
  return `${base}companion-lookbook-${Date.now()}/`;
}

function buildVideoRequest(prompt, image) {
  const parameters = {
    aspectRatio: "9:16",
    sampleCount: 1,
    resizeMode: "pad",
    personGeneration: "allow_adult",
    resolution: config.resolution,
  };
  const storageUri = outputPrefix();
  if (storageUri) parameters.storageUri = storageUri;

  return {
    instances: [
      {
        prompt,
        image,
      },
    ],
    parameters,
  };
}

async function extractVideoResult(operation) {
  const response = operation?.response || {};
  const video =
    response?.videos?.[0] ||
    response?.generatedVideos?.[0]?.video ||
    response?.predictions?.[0]?.videos?.[0] ||
    {};
  const videoUri = video.gcsUri || video.uri || "";
  if (videoUri) return { videoUri, videoUrl: "" };

  const base64Video = video.bytesBase64Encoded || video.bytesBase64 || "";
  if (!base64Video) return { videoUri: "", videoUrl: "" };

  const outputDir = path.join(STATIC_ROOT, "generated-videos");
  await mkdir(outputDir, { recursive: true });
  const fileName = `lookbook-${Date.now()}.mp4`;
  await writeFile(path.join(outputDir, fileName), Buffer.from(base64Video, "base64"));
  return { videoUri: `/generated-videos/${fileName}`, videoUrl: `/generated-videos/${fileName}` };
}

function videoUriFromOperation(operation) {
  const response = operation?.response || {};
  const video =
    response?.videos?.[0] ||
    response?.generatedVideos?.[0]?.video ||
    response?.predictions?.[0]?.videos?.[0] ||
    {};
  return (
    video.gcsUri ||
    video.uri ||
    (video.bytesBase64Encoded || video.bytesBase64 ? "inline-video-bytes" : "")
  );
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchVideoOperation(operationName) {
  return requestGoogleJson(modelUrl("fetchPredictOperation"), { operationName });
}

function composeLookbookPrompt(body) {
  const product = body.product || {};
  const environment = body.environment || {};
  const cameraMove = body.cameraMove || {};
  const style = body.lookbookStyle || {};
  const basePrompt =
    body.prompt ||
    `Create a short vertical in-store fashion lookbook video for ${product.brand || "TRENDS"} ${product.name || "the selected catalogue product"}.`;
  return [
    basePrompt,
    "Use TRENDS AI Senior Stylist logic: read the PDP details, infer the best avatar environment, and keep the result warm, premium, and consumer-welcoming.",
    `Curated lookbook style: ${style.label || "Store Spotlight"}; category: ${style.category || "Curated"}; occasion: ${style.occasion || "store-ready styling"}; stylist reason: ${style.reason || "make the look useful and personal"}.`,
    `Environment avatar: ${environment.label || "Store Spotlight"}; scene: ${environment.scene || "clean retail lookbook stage"}; motion: ${environment.motion || "subtle full-body editorial movement"}.`,
    `Creator camera control: ${cameraMove.label || "Orbit Reveal"}; mood: ${cameraMove.mood || "premium scan"}; camera motion: ${cameraMove.motion || "slow full-body orbit with final hero hold"}; framing: ${cameraMove.framing || "vertical 9:16 full-body frame"}; beat: ${cameraMove.beat || "curiosity opening and gratification ending"}.`,
    `Consumer journey: curiosity, one surprise reveal beat, and gratification through ${environment.gratification || "a saved lookbook-ready outfit"}.`,
    "Reference mood: clean vertical full-body framing, cream/white studio polish, subtle branded editorial pacing, like the provided Pro Earth Men and Vacay Resortwear references.",
    "Preserve the avatar identity and show style, colour and drape only; do not imply a guaranteed fit.",
  ].join(" ");
}

async function generateVertexVideo(body) {
  await loadServiceAccount();
  const image = await imagePayloadFromRequest(body);
  const prompt = composeLookbookPrompt(body);

  if (!config.enableVideo) {
    return {
      mode: "mock",
      status: "mock_ready",
      message:
        "Vertex credential is wired server-side. Set VERTEX_ENABLE_VIDEO=true and VERTEX_OUTPUT_GCS_URI to run Veo.",
    };
  }

  const operation = await requestGoogleJson(
    modelUrl("predictLongRunning"),
    buildVideoRequest(prompt, image),
  );
  let current = operation;
  const deadline = Date.now() + config.maxWaitMs;

  while (!current.done && Date.now() < deadline) {
    await delay(15000);
    current = await fetchVideoOperation(current.name);
  }

  const { videoUri, videoUrl } = await extractVideoResult(current);
  return {
    mode: "vertex",
    status: current.done ? "done" : "running",
    operationName: current.name,
    videoUri,
    videoUrl,
    message: videoUri
      ? "Vertex generated the lookbook video."
      : current.done
        ? "Vertex operation completed, but no video URI was returned."
        : "Vertex video generation is still running.",
  };
}

async function vertexStatus() {
  const credentials = await loadServiceAccount();
  return {
    configured: true,
    credentialsType: credentials.type,
    projectIdPresent: Boolean(credentials.project_id),
    serviceAccountPresent: Boolean(credentials.client_email),
    privateKeyPresent: Boolean(credentials.private_key),
    location: config.location,
    modelId: config.modelId,
    tryOnModelId: config.tryOnModelId,
    analysisModelId: config.analysisModelId,
    outputGcsUriConfigured: Boolean(config.outputGcsUri),
    tryOnOutputGcsUriConfigured: Boolean(config.tryOnOutputGcsUri),
    videoEnabled: config.enableVideo,
    tryOnEnabled: config.enableTryOn,
    analysisEnabled: config.enableAnalysis,
  };
}

async function serveStatic(req, res) {
  const url = new URL(req.url, "http://localhost");
  const requested = decodeURIComponent(url.pathname === "/" ? "/index.html" : url.pathname);
  const resolved = path.resolve(STATIC_ROOT, requested.replace(/^\/+/, ""));
  if (!resolved.startsWith(`${STATIC_ROOT}${path.sep}`)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const fileStat = await stat(resolved);
    if (!fileStat.isFile()) throw new Error("Not a file");
    const type = mimeTypes[path.extname(resolved).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": type,
      "Cache-Control": type.startsWith("text/html") ? "no-store" : "public, max-age=60",
    });
    createReadStream(resolved).pipe(res);
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Not found");
  }
}

const server = createServer(async (req, res) => {
  try {
    if (req.method === "GET" && req.url?.startsWith("/api/vertex/status")) {
      sendJson(res, 200, await vertexStatus());
      return;
    }

    if (req.method === "POST" && req.url?.startsWith("/api/generate-lookbook-video")) {
      const body = await readRequestJson(req);
      sendJson(res, 200, await generateVertexVideo(body));
      return;
    }

    if (req.method === "POST" && req.url?.startsWith("/api/generate-tryon-image")) {
      const body = await readRequestJson(req);
      sendJson(res, 200, await generateVertexTryOnImage(body));
      return;
    }

    if (req.method === "POST" && req.url?.startsWith("/api/analyze-upload-image")) {
      const body = await readRequestJson(req);
      sendJson(res, 200, await analyzeUploadImage(body));
      return;
    }

    if (req.method === "POST" && req.url?.startsWith("/api/vertex-video-status")) {
      await loadServiceAccount();
      const body = await readRequestJson(req);
      if (!body.operationName) throw new Error("Missing operationName");
      const operation = await fetchVideoOperation(body.operationName);
      sendJson(res, 200, {
        mode: "vertex",
        status: operation.done ? "done" : "running",
        operationName: operation.name,
        videoUri: videoUriFromOperation(operation),
        message: operation.done ? "Vertex operation completed." : "Vertex operation is still running.",
      });
      return;
    }

    if (req.method === "GET" || req.method === "HEAD") {
      await serveStatic(req, res);
      return;
    }

    res.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Method not allowed");
  } catch (error) {
    sendJson(res, error.statusCode || 500, { error: publicError(error) });
  }
});

server.listen(config.port, () => {
  console.log(`Companion prototype: http://127.0.0.1:${config.port}/`);
  console.log(`Vertex video enabled: ${config.enableVideo ? "yes" : "no, mock mode"}`);
});
