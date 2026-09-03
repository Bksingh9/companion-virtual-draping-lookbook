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
  curatedStyleCounts,
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
  fetch: async () => ({ ok: false, json: async () => ({ error: "qa fallback" }) }),
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
    location: { protocol: "https:", hostname: "bksingh9.github.io" },
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
assert(qa.state.lookbookItems.length === 1, "Create Lookbook must save a Lookbook item");
assert(currentHtml.includes("saved to Lookbook"), "Result must say saved to Lookbook");
assert(currentHtml.includes("Generate Lookbook Video"), "Result must include video action");
noOldNames();

qa.copyPromptToClipboard();
assert(clipboardText.includes("TRENDS AI Senior Stylist"), "Copy Prompt must write reverse prompt");
qa.shareCurrentLook();
assert(shareCalls === 1, "Share action must invoke share sheet");
await qa.generateLookbookVideo();
assert(qa.state.videoStatus === "demo", "Static flow must show video preview mode");
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
assert(currentHtml.includes("Latest Lookbook"), "Lookbook must show latest saved hero");
assert(currentHtml.includes("Share/Bag"), "Lookbook must show final progress step");
const lookId = qa.state.lookbookItems[0].id;
qa.removeLookbookItem(lookId);
assert(qa.state.lookbookItems.length === 0, "Saved Lookbook item must remove");

qa.resetTryOnFlow();
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
    "video preview",
    "cast TV",
    "bag count",
    "profile",
    "lookbook remove",
    "female surprise lane",
  ],
}, null, 2));
