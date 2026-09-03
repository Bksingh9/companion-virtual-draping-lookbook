import fs from "node:fs";
import vm from "node:vm";

const source = fs.readFileSync(new URL("../app.js", import.meta.url), "utf8");
const code = `${source}

globalThis.__qa = {
  addCurrentLook,
  autoSuggestLook,
  castCurrentLook,
  closeGallery,
  copyPromptToClipboard,
  createLookbookFromStyle,
  curatedStyleCounts,
  curatedLookbookStyles,
  generateLookbookVideo,
  openGallery,
  pickSize,
  previewProductId,
  removeLookbookItem,
  resetTryOnFlow,
  routeTo,
  selectGalleryImage,
  selectGalleryTab,
  shareCurrentLook,
  startProductDraping,
  state,
  surpriseMeForTheDay,
  visibleGalleryImages,
};
`;

let currentHtml = "";
let shareCalls = 0;
let clipboardText = "";

const app = {
  className: "",
  set innerHTML(value) {
    currentHtml = String(value);
  },
  get innerHTML() {
    return currentHtml;
  },
};

const sandbox = {
  clearTimeout,
  console,
  fetch: async (url, options = {}) => {
    const path = String(url);
    if (path.includes("/api/analyze-upload-image")) {
      const body = JSON.parse(options.body || "{}");
      const gender = /female|women|avaasa|ethnic/i.test(`${body.title || ""} ${body.meta || ""} ${body.requestedGenderLane || ""}`)
        ? "female"
        : "male";
      const category = gender === "female" ? "Ethnic" : "Casual";
      return {
        ok: true,
        json: async () => ({
          mode: "vertex-analysis",
          recommendedGenderLane: gender,
          preferredCategory: category,
          confidence: 0.91,
          tags: [category, gender === "female" ? "Women Topwear" : "Men Topwear"],
          note: `Vertex analysis selected the ${gender} ${category.toLowerCase()} catalogue lane.`,
        }),
      };
    }
    if (path.includes("/api/generate-tryon-image")) {
      return {
        ok: true,
        json: async () => ({
          mode: "vertex-try-on",
          status: "done",
          imageDataUrl: "",
          imageUrl: "/generated-images/qa-lookbook.png",
          imagePath: "/generated-images/qa-lookbook.png",
          imageUri: "",
          message: "AI virtual draping image generated.",
        }),
      };
    }
    if (path.includes("/api/generate-lookbook-video")) {
      return {
        ok: true,
        json: async () => ({
          mode: "vertex",
          status: "done",
          videoUrl: "/generated-videos/qa-lookbook.mp4",
          videoUri: "/generated-videos/qa-lookbook.mp4",
          operationName: "qa-operation",
          message: "Vertex generated the lookbook video.",
        }),
      };
    }
    return { ok: false, json: async () => ({ error: "unexpected QA API path" }) };
  },
  URLSearchParams,
  FileReader: class {},
  Image: class {
    set src(_value) {
      this.naturalWidth = 900;
      this.naturalHeight = 1500;
      setTimeout(() => this.onload && this.onload(), 0);
    }
  },
  navigator: {
    clipboard: {
      writeText: async (value) => {
        clipboardText = String(value);
      },
    },
    share: async () => {
      shareCalls += 1;
    },
  },
  setTimeout,
  window: {
    clearTimeout,
    localStorage: {
      getItem: () => "",
      setItem: () => {},
    },
    location: { protocol: "https:", hostname: "bksingh9.github.io", search: "" },
    requestAnimationFrame: (fn) => setTimeout(fn, 0),
    scrollTo: () => {},
    setTimeout,
  },
  document: {
    querySelector(selector) {
      return selector === "#app" ? app : null;
    },
    querySelectorAll() {
      return [];
    },
  },
};

vm.createContext(sandbox);
vm.runInContext(code, sandbox, { filename: "app.js" });

const qa = sandbox.__qa;
const tick = (ms = 60) => new Promise((resolve) => setTimeout(resolve, ms));

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function noOldNames() {
  assert(
    !/Virtual Draping Product|Try On Virtually|Render On Me|Start Virtual Draping|Continue Virtual Draping|Drape Into Lookbook|Saved Drapes|Draping Lookbook|guide his toward/.test(currentHtml),
    "Old or broken feature naming leaked into current screen",
  );
}

assert(qa.curatedStyleCounts.male === 25, "Expected 25 male curated styles");
assert(qa.curatedStyleCounts.female === 25, "Expected 25 female curated styles");
assert(qa.curatedStyleCounts.maleSurprises === 10, "Expected 10 male daily surprises");
assert(qa.curatedStyleCounts.femaleSurprises === 10, "Expected 10 female daily surprises");
assert(qa.curatedLookbookStyles.length === 50, "Expected 50 total curated style definitions");
assert(new Set(qa.curatedLookbookStyles.map((style) => style.id)).size === 50, "Curated style IDs must be unique");
assert(currentHtml.includes("AI Lookbook"), "Home must expose AI Lookbook");
noOldNames();

qa.routeTo("tryon");
assert(currentHtml.includes("Full body image for AI Lookbook"), "Pre-upload empty card must mention AI Lookbook");
assert(currentHtml.indexOf("lookbook-progress") < currentHtml.indexOf("tryon-stage"), "Lookbook progress must appear before upload stage");
assert(!currentHtml.includes("real-model-stadium.jpg"), "Real model must not be preselected before upload");
noOldNames();

qa.openGallery();
assert(currentHtml.includes("Image gallery"), "Gallery dialog must open");
assert(currentHtml.includes("real-model-stadium.jpg"), "Gallery must include real model tile");
qa.selectGalleryTab("Favorites");
assert(qa.visibleGalleryImages().length === 1, "Favorites tab must filter gallery");
qa.selectGalleryTab("TRENDS");
assert(qa.visibleGalleryImages().every((item) => item.id !== "real-model-stadium"), "TRENDS gallery tab must hide camera roll tile");
qa.selectGalleryTab("Recents");

qa.selectGalleryImage("real-model-stadium");
await tick();
assert(qa.state.uploadConfirmed, "Upload must be confirmed");
assert(qa.state.selectedId === qa.previewProductId, "Upload must not preselect PDP");
assert(currentHtml.includes("Style Read Complete"), "Style read must show after upload");
assert(currentHtml.includes("Suggested Products Based On Upload"), "Suggestions must unlock after upload");
noOldNames();

qa.autoSuggestLook();
assert(qa.state.route === "pdp", "Auto suggest must open PDP");
assert(currentHtml.includes("Create Lookbook"), "PDP must expose Create Lookbook CTA");
assert(currentHtml.indexOf("lookbook-progress") < currentHtml.indexOf("pdp-hero"), "PDP progress must appear before hero");
qa.pickSize("M");
assert(qa.state.selectedSize === "M", "Size selection must update state");
noOldNames();

await qa.startProductDraping();
assert(qa.state.route === "tryon", "Create Lookbook must return to result studio");
assert(qa.state.renderStatus === "rendered", "Create Lookbook must produce result");
assert(qa.state.tryOnMode === "vertex-try-on", "Create Lookbook must use Vertex VTO mode");
assert(qa.state.lookbookItems.length === 1, "Create Lookbook must save a Lookbook item");
assert(currentHtml.includes("saved to Lookbook"), "Result must say saved to Lookbook");
assert(currentHtml.includes("Generate Lookbook Video"), "Result must include video action");
noOldNames();

qa.copyPromptToClipboard();
assert(clipboardText.includes("TRENDS AI Senior Stylist"), "Copy Prompt must write reverse prompt");
qa.shareCurrentLook();
assert(shareCalls === 1, "Share action must invoke share sheet");
await qa.generateLookbookVideo();
assert(qa.state.videoStatus === "ready", "Lookbook video must become ready only from Veo");
assert(qa.state.videoMode === "vertex", "Lookbook video must use Vertex mode");
assert(qa.state.videoUrl.includes("/generated-videos/qa-lookbook.mp4"), "Lookbook video must expose a playable generated video URL");
qa.castCurrentLook();
assert(qa.state.route === "tv", "Cast TV must open TV preview");
qa.addCurrentLook();
assert(qa.state.bagItems.length === 1, "Add To Bag must add one item");
assert(currentHtml.includes("1 catalogue look added"), "Bag copy must show live count");

qa.routeTo("account");
assert(currentHtml.includes("Saved Looks"), "Profile must use saved looks copy");
assert(currentHtml.includes("Continue Lookbook"), "Profile must continue Lookbook");
noOldNames();

qa.routeTo("lookbook");
assert(currentHtml.includes("Curated Lookbook Library"), "Lookbook must expose curated library");
assert(currentHtml.includes("50 occasion ideas"), "Lookbook must show full 50-style library count");
assert(currentHtml.includes("Male Styles"), "Lookbook must show male style lane");
assert(currentHtml.includes("Female Styles"), "Lookbook must show female style lane");
assert(currentHtml.includes("Create Lookbook"), "Lookbook library cards must expose Create Lookbook actions");
assert(currentHtml.includes("Latest Lookbook"), "Lookbook must show latest saved hero");
assert(currentHtml.includes("Share/Bag"), "Lookbook must show final progress step");
const lookId = qa.state.lookbookItems[0].id;
qa.removeLookbookItem(lookId);
assert(qa.state.lookbookItems.length === 0, "Saved Lookbook item must remove");
assert(currentHtml.includes("Curated Lookbook Library"), "Empty Lookbook must still keep curated library visible");

qa.createLookbookFromStyle("female-office-power-edit");
assert(qa.state.route === "pdp", "Create Lookbook from library after upload must open PDP");
assert(qa.state.selectedGender === "female", "Library style must set female lane");
assert(qa.state.selectedId !== qa.previewProductId, "Library style must anchor to a real catalogue PDP");
noOldNames();

for (const style of qa.curatedLookbookStyles) {
  qa.createLookbookFromStyle(style.id);
  assert(qa.state.route === "pdp", `Style ${style.id} must route to PDP`);
  assert(qa.state.selectedGender === style.gender, `Style ${style.id} must keep its gender lane`);
  assert(qa.state.selectedId !== qa.previewProductId, `Style ${style.id} must map to a catalogue product`);
}

qa.resetTryOnFlow();
qa.createLookbookFromStyle("male-brunch-denim-reset");
assert(qa.state.route === "tryon", "Create Lookbook before upload must return to upload screen");
assert(qa.state.galleryOpen, "Create Lookbook before upload must open gallery guardrail");
assert(qa.state.selectedGender === "male", "Library guardrail must preserve requested male lane");
qa.closeGallery();
qa.surpriseMeForTheDay();
assert(qa.state.galleryOpen, "Surprise before upload must request upload first");
qa.closeGallery();
qa.selectGalleryImage("female-ethnic-gallery-model");
await tick();
qa.surpriseMeForTheDay();
assert(qa.state.route === "pdp", "Female Surprise after upload must open PDP");
assert(qa.state.selectedGender === "female", "Female gallery tile must route to female lane");

console.log(JSON.stringify({
  ok: true,
  counts: qa.curatedStyleCounts,
  verified: [
    "AI Lookbook naming",
    "upload guardrail",
    "gallery selection",
    "suggested products",
    "PDP Create Lookbook",
    "saved Lookbook result",
    "Vertex VTO contract",
    "Veo video contract",
    "cast TV",
    "bag count",
    "profile",
    "50-style curated lookbook library",
    "library create-look guardrail",
    "library create-look PDP route",
    "all 50 curated styles route to PDP",
    "lookbook remove",
    "female surprise lane",
  ],
}, null, 2));
