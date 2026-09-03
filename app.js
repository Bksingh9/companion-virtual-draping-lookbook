const H = (name) => `./assets/figma-homepage/${name}`;
const P = (name) => `./assets/figma/${name}`;
const HC = (name) => `./assets/hardcoded-tryon/${name}`;
const UG = (name) => `./assets/user-gallery/${name}`;

const assets = {
  cellular: H("cellular.svg"),
  wifi: H("wifi.svg"),
  battery: H("battery.svg"),
  bag: H("bag.svg"),
  exit: H("exit.svg"),
  logo: H("logo.svg"),
  logoFooter: H("logo-footer.svg"),
  hero: H("hero.png"),
  heroDivider: H("hero-divider.svg"),
  dropdown: H("dropdown.svg"),
  dot: H("dot.svg"),
  barcode: H("barcode.svg"),
  bottomBarcode: H("bottom-barcode.svg"),
  order: H("order.svg"),
  apparel: H("apparel.svg"),
  tileDivider: H("tile-divider.svg"),
  offer: H("offer.svg"),
  hanger: H("hanger.svg"),
  navHome: H("home.svg"),
  navCategory: H("category.svg"),
  navWardrobe: H("wardrobe.svg"),
  navAccount: H("account.svg"),
  search: P("search.svg"),
  sample: HC("cream-tee-render.jpg"),
  realModel: UG("real-model-stadium.jpg"),
  lookbookSheet: HC("six-male-looks-sheet.png"),
};

const categoryAssets = [
  ["Men Topwear", "cat-men-topwear.png", "large", "cat-men"],
  ["Winter Wear", "cat-winter-1.png", "small", "cat-winter-1"],
  ["Bottomwear", "cat-bottomwear.png", "small", "cat-bottom"],
  ["Accessories", "cat-accessories.png", "small", "cat-accessories"],
  ["Footwear", "cat-footwear-1.png", "small", "cat-foot-1"],
  ["Winter wear", "cat-winter-2.png", "small", "cat-winter-2"],
  ["Bag", "cat-bag.png", "small", "cat-bag"],
  ["Footwear", "cat-footwear-2.png", "small", "cat-foot-2"],
  ["Sports wear", "cat-sports.png", "small", "cat-sports"],
  ["Women Topwear", "cat-women-topwear.png", "large", "cat-women"],
];

const brandImages = [
  "brand-avaasa.png",
  "brand-dnmx.png",
  "brand-3.png",
  "brand-4.png",
  "brand-5.png",
  "brand-6.png",
  "brand-7.png",
];

const environmentAvatars = [
  {
    id: "pro-earth-studio",
    label: "Pro Earth Studio",
    occasion: "sustainable everyday",
    scene: "warm cream studio, mindful retail lighting, natural material mood",
    motion: "slow full-body editorial turn with relaxed hands and gentle fabric breathing",
    gratification: "earth-conscious look unlocked",
    accent: "#b8a786",
    reference: "Inspired by the Pro Earth vertical studio reference.",
  },
  {
    id: "vacay-resortwear",
    label: "Vacay Resortwear",
    occasion: "holiday and resort",
    scene: "bright destination white studio, playful travel typography energy, crisp shadows",
    motion: "confident side step, sunglasses attitude, light shoulder turn",
    gratification: "destination-ready outfit reveal",
    accent: "#d37f5e",
    reference: "Inspired by the Vacay Resortwear reference.",
  },
  {
    id: "office-briefing",
    label: "Office Briefing",
    occasion: "work meetings",
    scene: "premium glass office lobby, clean marble floor, soft morning light",
    motion: "calm forward walk, slight blazer or shirt movement, composed posture",
    gratification: "boardroom-ready confidence",
    accent: "#5f7188",
    reference: "Corporate lookbook environment.",
  },
  {
    id: "casual-friday",
    label: "Casual Friday",
    occasion: "smart casual",
    scene: "modern cafe street corner, warm daylight, quiet city background",
    motion: "easy walking loop with natural arm movement and relaxed smile",
    gratification: "weekday-to-weekend switch",
    accent: "#8d9b6a",
    reference: "Lifestyle retail lookbook environment.",
  },
  {
    id: "date-night",
    label: "Date Night",
    occasion: "dinner date",
    scene: "low-lit restaurant entrance, polished black floor, warm amber highlights",
    motion: "subtle turn, confident pause, cinematic fabric highlights",
    gratification: "evening-ready reveal",
    accent: "#7f4f55",
    reference: "Evening editorial lookbook environment.",
  },
  {
    id: "formal-evening",
    label: "Formal Evening",
    occasion: "formal events",
    scene: "minimal gallery hallway, refined spotlighting, premium neutral walls",
    motion: "slow runway pivot with upright posture and clean trouser fall",
    gratification: "occasion-ready polish",
    accent: "#2f3338",
    reference: "Luxury catalogue lookbook environment.",
  },
  {
    id: "wedding-guest",
    label: "Wedding Guest",
    occasion: "celebrations",
    scene: "soft festive venue, muted gold decor, elegant daylight ambience",
    motion: "gentle entrance walk, celebratory posture, tasteful garment movement",
    gratification: "celebration look selected",
    accent: "#caa45d",
    reference: "Indian celebration lookbook environment.",
  },
  {
    id: "airport-lounge",
    label: "Airport Lounge",
    occasion: "travel",
    scene: "premium airport lounge, clean seating, cool daylight through windows",
    motion: "smooth travel walk, pocket adjustment, comfortable fit expression",
    gratification: "travel-smart outfit unlocked",
    accent: "#4d6f7b",
    reference: "Travel retail lookbook environment.",
  },
  {
    id: "weekend-cafe",
    label: "Weekend Cafe",
    occasion: "weekend plans",
    scene: "sunlit cafe patio, soft greenery, neutral architecture",
    motion: "relaxed lean and step, casual shoulder movement, natural cloth folds",
    gratification: "weekend plan ready",
    accent: "#9c765f",
    reference: "Casual lifestyle lookbook environment.",
  },
  {
    id: "festive-evening",
    label: "Festive Evening",
    occasion: "party and festival",
    scene: "night market lights, tasteful festive glow, premium retail styling",
    motion: "short confident walk with a reveal pause and warm light shimmer",
    gratification: "surprise festive avatar unlocked",
    accent: "#8a6fba",
    reference: "Gratification-led festive lookbook environment.",
  },
  {
    id: "gym-to-cafe",
    label: "Gym To Cafe",
    occasion: "active day",
    scene: "clean wellness studio opening into a bright cafe lane",
    motion: "energetic walk, small wrist adjustment, breathable fabric motion",
    gratification: "all-day active look ready",
    accent: "#557b68",
    reference: "Active lifestyle lookbook environment.",
  },
  {
    id: "store-spotlight",
    label: "Store Spotlight",
    occasion: "in-store reveal",
    scene: "TRENDS fitting zone and digital aisle, clean store mirror lighting",
    motion: "turntable-style reveal, scan-and-go ending frame, store TV ready",
    gratification: "in-store hero look unlocked",
    accent: "#202020",
    reference: "Store-first Companion lookbook environment.",
  },
];

const cameraDirectorMoves = [
  {
    id: "orbit-reveal",
    label: "Orbit Reveal",
    mood: "premium scan",
    motion: "begin locked at full-body center, move into a slow 18-degree orbit, pause on the front drape",
    framing: "vertical 9:16, full body, shoes visible, no crop above hair",
    beat: "quiet curiosity opening, clean final hero hold",
  },
  {
    id: "hero-push-in",
    label: "Hero Push-In",
    mood: "store hero",
    motion: "start with a full-body catalogue frame, then push in gently from knee-up to chest detail",
    framing: "keep trouser line and top drape readable before the detail move",
    beat: "product confidence reveal for the shopper",
  },
  {
    id: "runway-walk",
    label: "Runway Walk",
    mood: "try-on runway",
    motion: "one controlled step forward, natural arm movement, final front-facing still",
    framing: "full-body runway distance, centered avatar, steady lens",
    beat: "surprise walk-in before the saved lookbook frame",
  },
  {
    id: "side-step-freeze",
    label: "Side Step Freeze",
    mood: "vacay editorial",
    motion: "soft side step, micro shoulder turn, then freeze on the strongest garment angle",
    framing: "head-to-toe vertical frame with crisp negative space",
    beat: "destination-style reveal with a confident pause",
  },
  {
    id: "turntable-drape",
    label: "Turntable Drape",
    mood: "drape check",
    motion: "subtle turntable rotation from front to quarter angle and back to front",
    framing: "catalogue-correct full body with stable floor contact",
    beat: "helps the shopper inspect fall, colour and silhouette",
  },
  {
    id: "detail-to-full-body",
    label: "Detail To Body",
    mood: "fabric first",
    motion: "open on fabric texture and neckline, then pull back to a complete full-body outfit",
    framing: "avoid face distortion, return to centered full body by the end",
    beat: "small tactile surprise followed by outfit gratification",
  },
  {
    id: "mirror-reveal",
    label: "Mirror Reveal",
    mood: "fitting-room magic",
    motion: "start like a fitting mirror reflection, then settle into a direct catalogue view",
    framing: "premium store mirror lighting, full-body, realistic proportions",
    beat: "feels like a personal stylist reveal",
  },
  {
    id: "editorial-pan",
    label: "Editorial Pan",
    mood: "lookbook cover",
    motion: "slow vertical pan from shoes to face, then a tiny push back to full body",
    framing: "smooth lens, no text artifacts, garment remains the subject",
    beat: "fashion-magazine polish for the lookbook",
  },
  {
    id: "tv-poster-loop",
    label: "TV Poster Loop",
    mood: "store screen",
    motion: "minimal motion poster loop with a final 30-second store-TV ready hold",
    framing: "clean branded retail composition, high contrast, full outfit visible",
    beat: "shareable in-store gratification moment",
  },
  {
    id: "reward-reveal",
    label: "Reward Reveal",
    mood: "surprise drop",
    motion: "soft light wipe into the selected environment, then a confident still pose",
    framing: "adult male full-body avatar, stable hands, trouser coverage maintained",
    beat: "curiosity to surprise to reward in one short loop",
  },
];

const curatedLookbookStyles = [
  {
    id: "match-day-to-store",
    label: "Match-Day Edit",
    category: "Live Moment",
    occasion: "stadium evening to store visit",
    environmentId: "store-spotlight",
    cameraId: "reward-reveal",
    accent: "#d6a074",
    confidence: "96%",
    story: "I read the warm peach shirt, black denim base and high-energy stadium light, then turn it into a polished store-ready look.",
    reason: "Begin close to your uploaded mood, then add cleaner TRENDS layers so the outfit feels personal without losing the real moment.",
    cta: "Make this moment store-ready",
    productIds: ["teamspirit-beige-jacket-look", "netplay-navy-polo-look", "teamspirit-black-bomber-look", "dnmx-white-tee-trouser-look", "performax-olive-tee-look"],
    tags: ["Brand Store", "Smart Casual", "Store Exclusive Discount"],
  },
  {
    id: "office-sharp",
    label: "Office Sharp",
    category: "Office",
    occasion: "work meetings",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#5f7188",
    confidence: "94%",
    story: "A composed weekday edit with sharper collars, calmer colour and a cleaner trouser line.",
    reason: "Your base already has structure at the shirt and dark bottom, so a navy polo or beige layer makes the look meeting-ready.",
    cta: "Build a confident work look",
    productIds: ["netplay-navy-polo-look", "teamspirit-beige-jacket-look", "dnmx-white-tee-trouser-look", "teamspirit-black-bomber-look", "performax-olive-tee-look"],
    tags: ["Men Topwear", "Smart Casual", "Brand Store"],
  },
  {
    id: "date-night-edit",
    label: "Date Night Edit",
    category: "Date",
    occasion: "dinner date",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#7f4f55",
    confidence: "92%",
    story: "A warmer evening read: darker layers, cleaner contrast and one confident reveal.",
    reason: "Black and navy products lift the existing dark bottom into a sharper evening silhouette.",
    cta: "Reveal the evening version",
    productIds: ["teamspirit-black-bomber-look", "netplay-navy-polo-look", "teamspirit-beige-jacket-look", "dnmx-white-tee-trouser-look", "performax-olive-tee-look"],
    tags: ["Smart Casual", "Winter Collection", "Brand Store"],
  },
  {
    id: "casual-weekend",
    label: "Casual Weekend",
    category: "Casual",
    occasion: "weekend plans",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#9c765f",
    confidence: "95%",
    story: "Easy, wearable, and store-friendly: clean tees, relaxed movement and no over-styling.",
    reason: "The uploaded image already feels relaxed, so I keep comfort high and let the product colour do the work.",
    cta: "Keep it effortless",
    productIds: ["performax-olive-tee-look", "dnmx-white-tee-trouser-look", "netplay-navy-polo-look", "teamspirit-beige-jacket-look", "teamspirit-black-bomber-look"],
    tags: ["Men Topwear", "Smart Casual", "Reorder Products"],
  },
  {
    id: "sport-luxe",
    label: "Sport Luxe",
    category: "Sport Wear",
    occasion: "active day",
    environmentId: "gym-to-cafe",
    cameraId: "detail-to-full-body",
    accent: "#557b68",
    confidence: "90%",
    story: "A breathable active-to-cafe edit with controlled energy and clean full-body framing.",
    reason: "Olive and black keep it athletic without making the result look like gym-only apparel.",
    cta: "Make the active edit",
    productIds: ["performax-olive-tee-look", "teamspirit-black-bomber-look", "dnmx-white-tee-trouser-look", "netplay-navy-polo-look", "teamspirit-beige-jacket-look"],
    tags: ["Men Topwear", "Sports wear", "Smart Casual"],
  },
  {
    id: "ethnic-festive",
    label: "Ethnic Festive",
    category: "Ethnic",
    occasion: "festive evening",
    environmentId: "festive-evening",
    cameraId: "mirror-reveal",
    accent: "#caa45d",
    confidence: "88%",
    story: "A festive styling lane that keeps the catalogue garment wearable while adding richer occasion mood.",
    reason: "Neutral beige and deep black work as the safest base for festive layering until ethnic catalogue garments are added.",
    cta: "Preview the festive lane",
    productIds: ["teamspirit-beige-jacket-look", "teamspirit-black-bomber-look", "netplay-navy-polo-look", "dnmx-white-tee-trouser-look", "performax-olive-tee-look"],
    tags: ["Brand Store", "Winter Collection", "Store Exclusive Discount"],
  },
  {
    id: "resort-weekend",
    label: "Resort Weekend",
    category: "Resort",
    occasion: "vacay and brunch",
    environmentId: "vacay-resortwear",
    cameraId: "runway-walk",
    accent: "#d37f5e",
    confidence: "91%",
    story: "A lighter holiday edit with fresh contrast, relaxed drape and a clean vertical reveal.",
    reason: "White and olive products reset the stadium image into a travel-ready look without feeling costume-like.",
    cta: "Build the resort frame",
    productIds: ["dnmx-white-tee-trouser-look", "performax-olive-tee-look", "netplay-navy-polo-look", "teamspirit-beige-jacket-look", "teamspirit-black-bomber-look"],
    tags: ["Men Topwear", "Smart Casual", "Store Exclusive Discount"],
  },
  {
    id: "formal-evening-edit",
    label: "Formal Evening",
    category: "Formal",
    occasion: "premium events",
    environmentId: "formal-evening",
    cameraId: "turntable-drape",
    accent: "#2f3338",
    confidence: "89%",
    story: "A polished event edit with quieter lighting, darker contrast and more controlled posture.",
    reason: "The black bomber and beige jacket give stronger structure while keeping the outfit catalogue-real.",
    cta: "Sharpen the event look",
    productIds: ["teamspirit-black-bomber-look", "teamspirit-beige-jacket-look", "netplay-navy-polo-look", "dnmx-white-tee-trouser-look", "performax-olive-tee-look"],
    tags: ["Winter Collection", "Brand Store", "Smart Casual"],
  },
  {
    id: "airport-lounge-fit",
    label: "Airport Lounge",
    category: "Travel",
    occasion: "travel day",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#4d6f7b",
    confidence: "90%",
    story: "A comfortable travel edit with clean layers, low effort and a premium lounge finish.",
    reason: "The black trouser base is already travel friendly, so I prioritize breathable tops and light layers.",
    cta: "Make it travel-smart",
    productIds: ["performax-olive-tee-look", "teamspirit-beige-jacket-look", "dnmx-white-tee-trouser-look", "netplay-navy-polo-look", "teamspirit-black-bomber-look"],
    tags: ["Men Topwear", "Reorder Products", "Smart Casual"],
  },
  {
    id: "wedding-guest-edit",
    label: "Wedding Guest",
    category: "Celebration",
    occasion: "celebrations",
    environmentId: "wedding-guest",
    cameraId: "tv-poster-loop",
    accent: "#b88b42",
    confidence: "87%",
    story: "A celebratory edit that keeps it elegant, clean and premium for store-led lookbook sharing.",
    reason: "Until kurta or festive PDP assets are added, beige and black layered catalogue looks are the safest wedding-guest direction.",
    cta: "Create a celebration card",
    productIds: ["teamspirit-beige-jacket-look", "teamspirit-black-bomber-look", "netplay-navy-polo-look", "dnmx-white-tee-trouser-look", "performax-olive-tee-look"],
    tags: ["Brand Store", "Store Exclusive Discount", "Winter Collection"],
  },
];

const products = [
  {
    id: "trends-cream-tee-look",
    brand: "TRENDS",
    name: "Men Beige T-Shirt With Black Pants",
    source: "Store Catalogue",
    fabric: "Cotton jersey",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "96%",
    drapeNote: "A warm beige tee balances the black trouser line and keeps the look clean for daytime store styling.",
    occasion: "Everyday smart casual",
    price: "Rs.1,499",
    mrp: "Rs.2,999",
    off: "50% OFF",
    image: HC("cream-tee-card.jpg"),
    tryonImage: HC("cream-tee-render.jpg"),
    garment: "male-top",
    fit: "male-body-fit",
    color: "#d9cba6",
    tags: ["All Products", "Men Topwear", "Smart Casual", "Casual", "Travel", "Brand Store", "Scanned Products", "Store Exclusive Discount", "Reorder Products"],
  },
  {
    id: "dnmx-white-tee-trouser-look",
    brand: "DNMX",
    name: "Men White T-Shirt With Black Trousers",
    source: "Store Catalogue",
    fabric: "Soft cotton blend",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "93%",
    drapeNote: "The white tee gives strong contrast against black trousers, making the outfit easy to scan on the body.",
    occasion: "Clean casual",
    price: "Rs.1,699",
    mrp: "Rs.2,499",
    off: "32% OFF",
    image: HC("white-tee-trousers-card.jpg"),
    tryonImage: HC("white-tee-trousers-render.jpg"),
    garment: "male-top",
    fit: "male-body-fit",
    color: "#ffffff",
    tags: ["All Products", "Men Topwear", "Bottomwear", "Men Bottomwear", "Smart Casual", "Casual", "Office", "Resort", "Travel", "Scanned Products", "Store Exclusive Discount", "Reorder Products"],
  },
  {
    id: "teamspirit-beige-jacket-look",
    brand: "TEAMSPIRIT",
    name: "Men Beige Jacket With Black Pants",
    source: "Store Catalogue",
    fabric: "Lightweight twill",
    sizes: ["M", "L", "XL", "XXL"],
    styleMatch: "91%",
    drapeNote: "The jacket adds structure at the shoulder while the neutral tone stays close to the uploaded beige base.",
    occasion: "Layered weekend",
    price: "Rs.2,899",
    mrp: "Rs.4,599",
    off: "37% OFF",
    image: HC("beige-jacket-card.jpg"),
    tryonImage: HC("beige-jacket-render.jpg"),
    garment: "male-outer",
    fit: "male-body-fit",
    color: "#b69a70",
    tags: ["All Products", "Men Topwear", "Winter Collection", "Brand Store", "Office", "Formal", "Ethnic", "Celebration", "Scanned Products", "Store Exclusive Discount"],
  },
  {
    id: "netplay-navy-polo-look",
    brand: "NETPLAY",
    name: "Men Navy Polo With Black Pants",
    source: "Store Catalogue",
    fabric: "Pique cotton",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "89%",
    drapeNote: "Navy adds a sharper colour read while keeping the silhouette simple and easy to purchase.",
    occasion: "Smart casual",
    price: "Rs.1,799",
    mrp: "Rs.2,999",
    off: "40% OFF",
    image: HC("navy-polo-card.jpg"),
    tryonImage: HC("navy-polo-render.jpg"),
    garment: "male-top",
    fit: "male-body-fit",
    color: "#2d3f5f",
    tags: ["All Products", "Men Topwear", "Smart Casual", "Office", "Date", "Casual", "Brand Store", "Scanned Products", "Store Exclusive Discount"],
  },
  {
    id: "performax-olive-tee-look",
    brand: "PERFORMAX",
    name: "Men Olive T-Shirt With Black Pants",
    source: "Store Catalogue",
    fabric: "Breathable active cotton",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "88%",
    drapeNote: "Olive keeps the outfit grounded and works well for a more relaxed in-store recommendation.",
    occasion: "Relaxed casual",
    price: "Rs.1,399",
    mrp: "Rs.2,199",
    off: "36% OFF",
    image: HC("olive-tee-card.jpg"),
    tryonImage: HC("olive-tee-render.jpg"),
    garment: "male-top",
    fit: "male-body-fit",
    color: "#59633f",
    tags: ["All Products", "Men Topwear", "Smart Casual", "Casual", "Sport Wear", "Sports wear", "Travel", "Scanned Products", "Store Exclusive Discount", "Reorder Products"],
  },
  {
    id: "teamspirit-black-bomber-look",
    brand: "TEAMSPIRIT",
    name: "Men Black Bomber With Black Pants",
    source: "Store Catalogue",
    fabric: "Poly woven shell",
    sizes: ["M", "L", "XL", "XXL"],
    styleMatch: "92%",
    drapeNote: "The black bomber creates a single-tone outfit with a stronger streetwear read after draping.",
    occasion: "Evening casual",
    price: "Rs.2,999",
    mrp: "Rs.4,999",
    off: "40% OFF",
    image: HC("black-bomber-card.jpg"),
    tryonImage: HC("black-bomber-render.jpg"),
    garment: "male-outer",
    fit: "male-body-fit",
    color: "#202226",
    tags: ["All Products", "Men Topwear", "Winter Collection", "Brand Store", "Date", "Formal", "Sport Wear", "Celebration", "Scanned Products", "Store Exclusive Discount"],
  },
];

const previewProductId = products[0].id;
const galleryImages = [
  {
    id: "real-model-stadium",
    title: "Real Model Photo",
    meta: "Camera Roll",
    image: assets.realModel,
    guardrailStatus: "partial",
  },
  {
    id: "beige-gallery-model",
    title: "Beige Full Body",
    meta: "Gallery",
    image: assets.sample,
    guardrailStatus: "ready",
  },
];

const galleryTabs = ["Recents", "Favorites", "TRENDS"];

const state = {
  route: "home",
  previousRoute: "home",
  selectedId: previewProductId,
  renderedId: previewProductId,
  uploadedPhoto: null,
  renderStatus: "ready",
  cartCount: 0,
  bagItems: [],
  lookbookItems: [],
  castLook: null,
  selectedSize: "",
  selectedEnvironmentId: "store-spotlight",
  selectedCameraId: "reward-reveal",
  selectedLookbookStyleId: "match-day-to-store",
  uploadSourcePath: "",
  uploadedPhotoTitle: "",
  uploadedPhotoMeta: "",
  guardrailStatus: "pending",
  tryOnImageUrl: "",
  tryOnImageUri: "",
  tryOnMode: "",
  tryOnMessage: "",
  tryOnError: "",
  tryOnRequestToken: 0,
  videoStatus: "idle",
  videoUri: "",
  videoUrl: "",
  videoMode: "",
  videoOperationName: "",
  videoMessage: "",
  activeCollection: "All Products",
  activeOffer: "",
  scanCount: 0,
  searchQuery: "",
  carouselPaused: false,
  muted: false,
  galleryOpen: false,
  galleryTab: "Recents",
  uploadConfirmed: false,
  toast: "",
};

const app = document.querySelector("#app");
let toastTimer = 0;

function selectedProduct() {
  return products.find((product) => product.id === state.selectedId) || products[0];
}

function renderedProduct() {
  return products.find((product) => product.id === state.renderedId) || products[0];
}

function selectedEnvironment() {
  return environmentAvatars.find((environment) => environment.id === state.selectedEnvironmentId) || environmentAvatars[0];
}

function selectedCameraMove() {
  return cameraDirectorMoves.find((move) => move.id === state.selectedCameraId) || cameraDirectorMoves[0];
}

function selectedLookbookStyle() {
  return curatedLookbookStyles.find((style) => style.id === state.selectedLookbookStyleId) || curatedLookbookStyles[0];
}

function syncLookbookStyleInternals(style = selectedLookbookStyle()) {
  state.selectedEnvironmentId = style.environmentId;
  state.selectedCameraId = style.cameraId;
}

function currentRenderedImage(product = renderedProduct()) {
  return state.tryOnImageUrl || product.tryonImage;
}

function clearVideoState() {
  state.videoStatus = "idle";
  state.videoUri = "";
  state.videoUrl = "";
  state.videoMode = "";
  state.videoOperationName = "";
  state.videoMessage = "";
}

function clearTryOnOutput() {
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  if (state.renderStatus === "rendered") {
    state.renderStatus = state.selectedId === previewProductId ? "ready" : "selected";
  }
}

function selectLookbookStyle(id) {
  const style = curatedLookbookStyles.find((item) => item.id === id);
  if (!style) return;
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  state.activeCollection = style.tags[0] || "Men Topwear";
  state.searchQuery = "";
  clearTryOnOutput();
  render();
  flash(`${style.label} unlocked`);
}

function selectEnvironment(id) {
  const next = environmentAvatars.find((environment) => environment.id === id);
  if (!next) return;
  state.selectedEnvironmentId = next.id;
  clearVideoState();
  render();
  flash(`${next.label} avatar selected`);
}

function selectCameraMove(id) {
  const next = cameraDirectorMoves.find((move) => move.id === id);
  if (!next) return;
  state.selectedCameraId = next.id;
  clearVideoState();
  render();
  flash(`${next.label} camera selected`);
}

function latestLookbookItem() {
  return state.lookbookItems[0] || null;
}

function bagBadge() {
  const count = state.bagItems.length;
  return `<span class="bag-count">${count}</span>`;
}

function plpProducts() {
  return products.filter((product) => product.id !== previewProductId);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function filteredProducts() {
  const query = state.searchQuery.trim().toLowerCase();
  const collection = state.activeCollection;
  const visibleProducts = plpProducts();
  const base = collection === "All Products" || collection.startsWith("Search:")
    ? visibleProducts
    : visibleProducts.filter((product) => (product.tags || []).includes(collection));
  if (!query) return base.length ? base : visibleProducts;
  const matches = base.filter((product) => {
    return `${product.brand} ${product.name}`.toLowerCase().includes(query);
  });
  return matches.length ? matches : base;
}

function suggestedProductsForStyle(style = selectedLookbookStyle()) {
  const pool = plpProducts();
  const ordered = (style.productIds || [])
    .map((id) => pool.find((product) => product.id === id))
    .filter(Boolean);
  const remainder = pool.filter((product) => !ordered.some((item) => item.id === product.id));
  const candidates = [...ordered, ...remainder];
  const query = state.searchQuery.trim().toLowerCase();
  if (!query) return candidates;
  const matches = candidates.filter((product) => {
    return `${product.brand} ${product.name} ${product.occasion}`.toLowerCase().includes(query);
  });
  return matches.length ? matches : candidates;
}

function styleCategoryChips() {
  return curatedLookbookStyles.map((style) => style.category);
}

function routeTo(route, options = {}) {
  if (options.collection) {
    state.activeCollection = options.collection;
    state.searchQuery = "";
  }
  if (route !== state.route) state.previousRoute = state.route;
  state.route = route;
  if (route !== "tryon") state.galleryOpen = false;
  if (route !== "tryon" && route !== "pdp" && route !== "lookbook" && route !== "tv") state.renderStatus = "idle";
  if (route === "tryon" && state.renderStatus === "idle") state.renderStatus = "ready";
  render();
  resetScroll();
}

function resetTryOnFlow(options = {}) {
  state.selectedId = previewProductId;
  state.renderedId = previewProductId;
  state.uploadedPhoto = null;
  state.uploadSourcePath = "";
  state.uploadedPhotoTitle = "";
  state.uploadedPhotoMeta = "";
  state.guardrailStatus = "pending";
  if (!options.preserveStyle) state.selectedLookbookStyleId = "match-day-to-store";
  syncLookbookStyleInternals();
  state.renderStatus = "ready";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  state.galleryOpen = false;
  state.uploadConfirmed = false;
  routeTo("tryon");
}

function openGallery() {
  state.galleryOpen = true;
  state.galleryTab = "Recents";
  render();
}

function closeGallery() {
  state.galleryOpen = false;
  render();
}

function selectGalleryTab(tab) {
  if (!galleryTabs.includes(tab)) return;
  state.galleryTab = tab;
  render();
}

function visibleGalleryImages() {
  if (state.galleryTab === "Favorites") {
    return galleryImages.filter((item) => item.id === "real-model-stadium");
  }
  if (state.galleryTab === "TRENDS") {
    return galleryImages.filter((item) => item.id === "beige-gallery-model");
  }
  return galleryImages;
}

function validateUploadFile(file) {
  const allowedTypes = ["image/jpeg", "image/png"];
  if (!allowedTypes.includes(file.type)) {
    flash("Use a PNG or JPEG image");
    return false;
  }
  if (file.size > 12 * 1024 * 1024) {
    flash("Use an image under 12 MB");
    return false;
  }
  return true;
}

function imageGuardrailStatus(src) {
  return new Promise((resolve) => {
    const probe = new Image();
    probe.onload = () => {
      const ratio = probe.naturalHeight / Math.max(1, probe.naturalWidth);
      resolve(ratio >= 1.2 ? "ready" : "partial");
    };
    probe.onerror = () => resolve("partial");
    probe.src = src;
  });
}

function confirmUploadedImage(image, meta = {}) {
  state.uploadedPhoto = image;
  state.uploadSourcePath = meta.sourcePath || (String(image).startsWith("data:image/") ? "" : image);
  state.uploadedPhotoTitle = meta.title || "Uploaded Image";
  state.uploadedPhotoMeta = meta.meta || "Device Gallery";
  state.guardrailStatus = meta.guardrailStatus || "ready";
  state.renderedId = previewProductId;
  state.renderStatus = state.selectedId === previewProductId ? "ready" : "selected";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  state.uploadConfirmed = true;
  state.galleryOpen = false;
  state.activeCollection = selectedLookbookStyle().tags[0] || "Men Topwear";
  state.searchQuery = "";
  render();
  flash("Senior Stylist suggestions ready");
  resetScroll();
}

function selectGalleryImage(id) {
  const galleryImage = galleryImages.find((item) => item.id === id) || galleryImages[0];
  confirmUploadedImage(galleryImage.image, {
    title: galleryImage.title,
    meta: galleryImage.meta,
    sourcePath: galleryImage.image,
    guardrailStatus: galleryImage.guardrailStatus,
  });
}

function goBack() {
  const fallback = state.previousRoute && state.previousRoute !== state.route ? state.previousRoute : "home";
  routeTo(fallback, { force: true });
}

function flash(message) {
  window.clearTimeout(toastTimer);
  state.toast = message;
  render();
  toastTimer = window.setTimeout(() => {
    state.toast = "";
    render();
  }, 1600);
}

function selectProduct(id) {
  const next = products.find((product) => product.id === id);
  if (!next) return;
  if (state.route !== "pdp") state.previousRoute = state.route;
  state.selectedId = id;
  state.selectedSize = "";
  clearTryOnOutput();
  state.route = "pdp";
  state.renderStatus = state.renderedId === id ? "rendered" : "selected";
  render();
  resetScroll();
}

function startProductDraping() {
  if (!state.uploadConfirmed) {
    if (state.route !== "tryon") state.previousRoute = state.route;
    state.route = "tryon";
    state.renderStatus = "ready";
    state.galleryOpen = true;
    render();
    resetScroll();
    return;
  }
  if (state.route !== "tryon") state.previousRoute = state.route;
  state.route = "tryon";
  if (state.renderedId === state.selectedId) {
    state.renderStatus = "rendered";
    render();
    resetScroll();
    return;
  }
  renderOnModel();
}

async function renderOnModel() {
  if (!state.uploadConfirmed) {
    openGallery();
    return;
  }
  const product = selectedProduct();
  if (product.id === previewProductId) {
    const suggested = suggestedProductsForStyle()[0];
    if (suggested) {
      state.selectedId = suggested.id;
      selectProduct(suggested.id);
      flash("Pick a suggested product, then try it on");
    }
    return;
  }
  const style = selectedLookbookStyle();
  const environment = selectedEnvironment();
  const cameraMove = selectedCameraMove();
  const requestToken = Date.now();
  state.tryOnRequestToken = requestToken;
  state.renderStatus = "rendering";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnMode = "";
  state.tryOnError = "";
  state.tryOnMessage = `Senior Stylist is draping ${product.brand} for ${style.label}`;
  clearVideoState();
  render();
  resetScroll();
  try {
    if (window.location.protocol === "file:") {
      throw new Error("Run the local server to use Vertex virtual draping");
    }
    const personPayload = state.uploadedPhoto && state.uploadedPhoto.startsWith("data:image/")
      ? { personImageDataUrl: state.uploadedPhoto }
      : { personImagePath: state.uploadSourcePath || state.uploadedPhoto };
    const response = await fetch("/api/generate-tryon-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...personPayload,
        productImagePath: product.image,
        fallbackImagePath: product.tryonImage,
        lookbookStyle: style,
        environment,
        cameraMove,
        prompt: reverseLookbookPrompt(product, environment, cameraMove, style),
        product: {
          brand: product.brand,
          name: product.name,
          fabric: product.fabric,
          fit: product.fit,
          color: product.color,
          price: product.price,
          off: product.off,
          drapeNote: product.drapeNote,
          occasion: product.occasion,
        },
      }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Virtual draping failed");
    }
    if (state.tryOnRequestToken !== requestToken) return;
    state.renderedId = state.selectedId;
    state.tryOnImageUrl = data.imageDataUrl || (/^https?:/.test(data.imageUrl || "") ? data.imageUrl : product.tryonImage);
    state.tryOnImageUri = data.imageUri || "";
    state.tryOnMode = data.mode || "vertex-try-on";
    state.tryOnMessage = data.imageDataUrl || data.imageUrl
      ? "AI virtual draping image generated"
      : "AI render stored remotely. Showing the mapped catalogue result in this prototype.";
    state.renderStatus = "rendered";
    saveCurrentLookToLookbook({ silent: true });
    render();
    flash(data.mode === "mock" ? "Prototype drape ready" : "AI drape ready");
  } catch (error) {
    if (state.tryOnRequestToken !== requestToken) return;
    state.renderedId = state.selectedId;
    state.tryOnImageUrl = product.tryonImage;
    state.tryOnImageUri = "";
    state.tryOnMode = "premium-fallback";
    state.tryOnError = error.message;
    state.tryOnMessage = "Using the mapped catalogue render while AI draping is unavailable.";
    state.renderStatus = "rendered";
    saveCurrentLookToLookbook({ silent: true });
    render();
    flash("Premium fallback drape ready");
  }
}

function saveCurrentLookToLookbook(options = {}) {
  if (state.renderStatus !== "rendered") {
    flash("Try on virtually first");
    return false;
  }
  const product = renderedProduct();
  const environment = selectedEnvironment();
  const cameraMove = selectedCameraMove();
  const style = selectedLookbookStyle();
  const existing = state.lookbookItems.find((item) => (
    item.productId === product.id &&
    item.lookbookStyleId === style.id
  ));
  if (existing) {
    if (!options.silent) {
      routeTo("lookbook");
      flash("Already saved in Lookbook");
    }
    return true;
  }
  state.lookbookItems.unshift({
    id: `look-${product.id}-${Date.now()}`,
    productId: product.id,
    brand: product.brand,
    name: product.name,
    price: product.price,
    mrp: product.mrp,
    off: product.off,
    image: currentRenderedImage(product),
    productImage: product.image,
    styleMatch: product.styleMatch,
    lookbookStyleId: style.id,
    lookbookStyleLabel: style.label,
    lookbookStyleCategory: style.category,
    stylistReason: style.reason,
    confidence: style.confidence,
    environmentId: environment.id,
    environmentLabel: environment.label,
    gratification: environment.gratification,
    cameraId: cameraMove.id,
    cameraLabel: cameraMove.label,
    cameraMotion: cameraMove.motion,
    reversePrompt: reverseLookbookPrompt(product, environment, cameraMove, style),
    occasion: product.occasion,
    savedAt: "Just now",
  });
  if (!options.silent) {
    routeTo("lookbook");
    flash("Saved to Lookbook");
  }
  return true;
}

function addCurrentLook() {
  const product = state.renderStatus === "rendered" ? renderedProduct() : selectedProduct();
  const environment = selectedEnvironment();
  const style = selectedLookbookStyle();
  state.bagItems.unshift({
    id: `${product.id}-${Date.now()}`,
    brand: product.brand,
    name: product.name,
    price: product.price,
    size: state.selectedSize,
    environmentLabel: environment.label,
    lookbookStyleLabel: style.label,
    image: state.renderStatus === "rendered" ? currentRenderedImage(product) : product.image,
  });
  state.cartCount = state.bagItems.length;
  routeTo("bag");
}

function shareCurrentLook() {
  if (state.renderStatus !== "rendered") {
    flash("Try on virtually first");
    return;
  }
  saveCurrentLookToLookbook({ silent: true });
  const product = renderedProduct();
  const style = selectedLookbookStyle();
  const text = `I tried ${product.brand} ${product.name} as a ${style.label} look with Companion Virtual Draping at TRENDS.`;
  if (navigator.share) {
    navigator.share({ title: "My Companion Look", text }).catch(() => {});
    flash("Share sheet opened");
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).catch(() => {});
  }
  flash("Share text copied");
}

function castCurrentLook() {
  if (state.renderStatus !== "rendered") {
    flash("Try on virtually first");
    return;
  }
  saveCurrentLookToLookbook({ silent: true });
  const product = renderedProduct();
  state.castLook = {
    brand: product.brand,
    name: product.name,
    image: currentRenderedImage(product),
    price: product.price,
    lookbookStyleLabel: selectedLookbookStyle().label,
  };
  routeTo("tv");
  flash("Cast queued for store TV");
}

function removeLookbookItem(id) {
  state.lookbookItems = state.lookbookItems.filter((item) => item.id !== id);
  render();
  flash("Removed from Lookbook");
}

function viewLookbookItem(id) {
  const look = state.lookbookItems.find((item) => item.id === id);
  if (!look) return;
  if (state.route !== "tryon") state.previousRoute = state.route;
  state.selectedId = look.productId;
  state.renderedId = look.productId;
  if (look.lookbookStyleId) {
    state.selectedLookbookStyleId = look.lookbookStyleId;
    syncLookbookStyleInternals();
  }
  if (look.environmentId) state.selectedEnvironmentId = look.environmentId;
  if (look.cameraId) state.selectedCameraId = look.cameraId;
  state.tryOnImageUrl = look.image;
  state.tryOnImageUri = "";
  state.tryOnMode = "saved-lookbook";
  state.tryOnMessage = `${look.lookbookStyleLabel || "Lookbook"} look reopened`;
  clearVideoState();
  state.renderStatus = "rendered";
  state.route = "tryon";
  render();
  resetScroll();
}

function saveProductForLookbook() {
  if (state.renderStatus === "rendered" && state.renderedId === state.selectedId) {
    saveCurrentLookToLookbook();
    return;
  }
  startProductDraping();
  flash("Try on virtually to save this look");
}

function tryAnotherLook() {
  state.selectedId = previewProductId;
  state.renderedId = previewProductId;
  state.activeCollection = selectedLookbookStyle().tags[0] || "Men Topwear";
  state.searchQuery = "";
  state.renderStatus = "ready";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  state.route = "tryon";
  render();
  resetScroll();
}

function pickSize(size) {
  state.selectedSize = size || "";
  flash(`${state.selectedSize || "Size"} selected`);
}

function surpriseLook() {
  const style = curatedLookbookStyles[Math.floor(Math.random() * curatedLookbookStyles.length)] || curatedLookbookStyles[0];
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  state.activeCollection = style.tags[0] || "Men Topwear";
  const options = suggestedProductsForStyle(style);
  const product = options[Math.floor(Math.random() * options.length)] || options[0];
  state.selectedId = product.id;
  state.selectedSize = "";
  clearTryOnOutput();
  if (state.uploadConfirmed) {
    state.route = "pdp";
  } else {
    state.route = "tryon";
    state.galleryOpen = true;
  }
  render();
  resetScroll();
  flash(`${style.label} picked`);
}

function copyPromptToClipboard() {
  const product = state.renderStatus === "rendered" ? renderedProduct() : selectedProduct();
  const prompt = reverseLookbookPrompt(product, selectedEnvironment(), selectedCameraMove(), selectedLookbookStyle());
  if (navigator.clipboard) {
    navigator.clipboard.writeText(prompt).catch(() => {});
  }
  flash("Reverse prompt copied");
}

function reverseLookbookPrompt(product, environment = selectedEnvironment(), cameraMove = selectedCameraMove(), style = selectedLookbookStyle()) {
  const avatarAnchor = state.uploadedPhoto && state.uploadedPhoto.startsWith("data:image/")
    ? "Use the uploaded customer image as the avatar identity anchor and adapt the selected PDP outfit onto that person."
    : "Use the rendered catalogue try-on image as the first-frame avatar identity anchor.";
  return [
    "TRENDS AI Senior Stylist reverse prompt for a vertical 9:16 in-store lookbook video.",
    avatarAnchor,
    `PDP source: ${product.brand} ${product.name}, ${product.fabric}, ${product.fit}, colour ${product.color}, ${product.price}, ${product.off}.`,
    `Curated lookbook edit: ${style.label}, category ${style.category}, occasion ${style.occasion}. Senior Stylist reason: ${style.reason}`,
    `Occasion avatar: ${environment.label} for ${environment.occasion}. Environment: ${environment.scene}.`,
    `Motion grammar: ${environment.motion}. Match the clean full-body editorial pacing from the supplied Pro Earth and Vacay reference videos.`,
    `Camera director: ${cameraMove.label}. ${cameraMove.motion}. Framing: ${cameraMove.framing}. Beat: ${cameraMove.beat}.`,
    `Styling intent: ${product.drapeNote}`,
    `Journey: start with curiosity, reveal one tasteful surprise beat, then end with gratification: ${environment.gratification}.`,
    "Keep an adult male full-body frame, realistic trouser coverage, consistent face/body identity, unchanged garment category, premium store catalogue lighting, and no distorted hands or text artifacts.",
    "Do not imply guaranteed fit; show style, drape, colour, and occasion confidence only.",
  ].join(" ");
}

function videoPrompt(product) {
  return reverseLookbookPrompt(product);
}

async function generateLookbookVideo() {
  if (state.renderStatus !== "rendered") {
    flash("Try on me first");
    return;
  }
  const product = renderedProduct();
  const environment = selectedEnvironment();
  const cameraMove = selectedCameraMove();
  const style = selectedLookbookStyle();
  const renderedImage = currentRenderedImage(product);
  const payload = {
    productId: product.id,
    imagePath: product.tryonImage,
    prompt: videoPrompt(product),
    referenceStyle: "Clean vertical full-body lookbook, using cues from Pro Earth Men, Vacay Resortwear, and creator-style AI camera control.",
    environment,
    cameraMove,
    lookbookStyle: style,
    product: {
      brand: product.brand,
      name: product.name,
      fabric: product.fabric,
      fit: product.fit,
      color: product.color,
      price: product.price,
      off: product.off,
      drapeNote: product.drapeNote,
      occasion: product.occasion,
    },
  };
  if (renderedImage && renderedImage.startsWith("data:image/")) {
    payload.imageDataUrl = renderedImage;
    delete payload.imagePath;
  } else if (renderedImage && !renderedImage.startsWith("gs://")) {
    payload.imagePath = renderedImage;
  }
  state.videoStatus = "generating";
  state.videoUri = "";
  state.videoUrl = "";
  state.videoMode = "";
  state.videoOperationName = "";
  state.videoMessage = `Creating ${style.label} lookbook video`;
  render();

  try {
    const response = await fetch("/api/generate-lookbook-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data.error || "Video generation failed");
    }
    state.videoMode = data.mode || "vertex";
    state.videoOperationName = data.operationName || "";
    state.videoUri = data.videoUri || "";
    state.videoUrl = data.videoUrl || "";
    state.videoStatus = data.status === "done" || data.status === "mock_ready" ? "ready" : "running";
    state.videoMessage = data.message || (state.videoUri ? "Video generated on Vertex" : "Video request submitted");
    render();
    flash(state.videoMode === "mock" ? "Video flow ready" : "Vertex video ready");
  } catch (error) {
    state.videoStatus = "demo";
    state.videoMode = "local";
    state.videoMessage = window.location.protocol === "file:"
      ? "Run the local server to connect Vertex video generation"
      : error.message;
    render();
    flash("Video preview flow shown");
  }
}

function copyVideoUri() {
  if (!state.videoUri) {
    flash("No video URI yet");
    return;
  }
  if (navigator.clipboard) {
    navigator.clipboard.writeText(state.videoUri).catch(() => {});
  }
  flash("Video URI copied");
}

function handleOffer(offer) {
  state.activeOffer = offer;
  state.activeCollection = "Store Exclusive Discount";
  state.searchQuery = "";
  routeTo("discover");
  flash("Offer applied to PLP products");
}

function scanNext() {
  state.scanCount = Math.min(3, state.scanCount + 1);
  if (state.scanCount >= 3) {
    state.activeCollection = "Scanned Products";
    state.searchQuery = "";
    routeTo("discover");
    flash("Scan complete. Products unlocked");
    return;
  }
  state.route = "scan";
  render();
  flash(`Item ${state.scanCount} scanned`);
}

function shuffleLook() {
  const options = plpProducts();
  const currentIndex = options.findIndex((item) => item.id === state.selectedId);
  const next = options[(currentIndex + 1 + options.length) % options.length];
  state.selectedId = next.id;
  routeTo("tryon");
  state.renderStatus = state.renderedId === next.id ? "rendered" : "selected";
  flash(`${next.brand} look selected`);
}

function resetScroll() {
  window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "auto" }));
}

function topChrome() {
  if (state.route !== "home") return featureTopChrome();
  return `
    <header class="top-chrome" data-node-id="5516:46354">
      <div class="status-bar" data-node-id="3688:35694">
        <div class="status-time">9:41</div>
        <div class="dynamic-island"></div>
        <div class="status-levels">
          <img src="${assets.cellular}" alt="" />
          <img src="${assets.wifi}" alt="" />
          <img src="${assets.battery}" alt="" />
        </div>
      </div>
      <div class="app-bar" data-node-id="5516:46356">
        <button class="exit-button" data-route="home" aria-label="Exit">
          <span class="exit-button-inner">
            <span class="exit-icon"><img src="${assets.exit}" alt="" /></span>
            <span class="exit-text">Exit</span>
          </span>
        </button>
        <img class="top-logo" src="${assets.logo}" alt="TRENDS" />
        <button class="top-bag" data-route="bag" aria-label="Bag ${state.bagItems.length} items">
          <img src="${assets.bag}" alt="" />
          ${bagBadge()}
        </button>
      </div>
    </header>
  `;
}

function featureTopChrome() {
  const titles = {
    discover: ["Discover", state.activeCollection],
    tryon: ["Virtual Draping Product", "TRENDS"],
    pdp: ["Product Details", "Catalogue PDP"],
    lookbook: ["Lookbook", `${state.lookbookItems.length} saved looks`],
    tv: ["Store TV Preview", "30 sec cast"],
    scan: ["Scan Items", `${state.scanCount}/3 scanned`],
    orders: ["Order History", "TRENDS"],
    account: ["Account", "2,940 points"],
    bag: ["Bag", `${state.bagItems.length} looks`],
    search: ["Search", "TRENDS"],
  };
  const [title, subtitle] = titles[state.route] || ["Companion", "TRENDS"];
  const longTitle = ["tryon", "pdp", "lookbook", "tv"].includes(state.route);
  return `
    <header class="top-chrome feature-top" data-feature-header>
      <div class="status-bar" data-node-id="3688:35694">
        <div class="status-time">9:41</div>
        <div class="dynamic-island"></div>
        <div class="status-levels">
          <img src="${assets.cellular}" alt="" />
          <img src="${assets.wifi}" alt="" />
          <img src="${assets.battery}" alt="" />
        </div>
      </div>
      <div class="feature-app-bar">
        <button class="feature-back" data-action="back" aria-label="Back"><span></span></button>
        <div class="feature-title ${longTitle ? "long" : ""}">
          <strong>${title}</strong>
          <span>${subtitle}</span>
        </div>
        <button class="feature-search" data-route="search" aria-label="Search">
          <img src="${assets.search}" alt="" />
        </button>
        <button class="feature-bag" data-route="bag" aria-label="Bag ${state.bagItems.length} items">
          <img src="${assets.bag}" alt="" />
          ${bagBadge()}
        </button>
      </div>
    </header>
  `;
}

function heroSection() {
  return `
    <section class="hero-section" data-node-id="5516:46107">
      <img src="${assets.hero}" alt="" />
      <div class="hero-gradient"></div>
      <div class="hero-container" data-node-id="5516:46109">
        <div class="hero-copy" data-node-id="5516:46113">
          <div class="welcome">Welcome Ashutosh</div>
          <img class="hero-divider" src="${assets.heroDivider}" alt="" />
          <div class="store-stack">
            <div class="store-title-row">
              <strong>TRENDS, Phoenix Mall Of Asia</strong>
              <img src="${assets.dropdown}" alt="" />
            </div>
            <div class="store-meta">
              <span>Bangalore</span>
              <img src="${assets.dot}" alt="" />
              <span>Closes 9:30PM</span>
            </div>
          </div>
        </div>
        <div class="hero-actions" data-node-id="5516:46125">
          <button class="hero-tile" data-route="scan">
            <img src="${assets.barcode}" alt="" />
            <span>Scan Items</span>
          </button>
          <img class="tile-separator" src="${assets.tileDivider}" alt="" />
          <button class="hero-tile" data-route="orders">
            <img src="${assets.order}" alt="" />
            <span>Order History</span>
          </button>
          <img class="tile-separator" src="${assets.tileDivider}" alt="" />
          <button class="hero-tile" data-route="tryon">
            <img src="${assets.apparel}" alt="" />
            <span>Virtual Draping</span>
          </button>
        </div>
      </div>
    </section>
  `;
}

function discountSection() {
  const offers = [
    "Enjoy &#8377;1000 off on purchase of &#8377;2999",
    "Enjoy &#8377;500 off on purchase of &#8377;1999",
    "Get 20% off on original price",
  ];
  return `
    <section class="section discount-section" data-node-id="5516:46140">
      <h2 class="section-title">STORE EXCLUSIVE DISCOUNT</h2>
      <div class="discount-rail rail" data-node-id="5516:46142">
        ${offers.map((offer) => `
          <button class="discount-card" data-action="offer" data-offer="${offer.replace(/"/g, "&quot;")}" aria-label="${offer.replace(/&#8377;/g, "Rs.")}">
            <div class="discount-card-inner">
              <div class="offer-icon"><img src="${assets.offer}" alt="" /></div>
              <p>${offer}</p>
            </div>
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function categoryCard(index) {
  const [label, file, size, imgClass] = categoryAssets[index];
  return `
    <button class="${size === "large" ? "category-large" : "category-small"} category-card" data-route="discover" data-collection="${label}">
      <span class="category-image ${size}">
        <img class="${imgClass}" src="${H(file)}" alt="" />
      </span>
      <span>${label}</span>
    </button>
  `;
}

function categorySection() {
  return `
    <section class="section category-section" data-node-id="9211:79647">
      <h2 class="section-title">SHOP BY CATEGORY</h2>
      <div class="category-grid" data-node-id="9211:79649">
        <div class="category-row">
          ${categoryCard(0)}
          <div class="category-cluster">
            <div class="category-column">
              ${categoryCard(1)}
              ${categoryCard(2)}
            </div>
            <div class="category-column">
              ${categoryCard(3)}
              ${categoryCard(4)}
            </div>
          </div>
        </div>
        <div class="category-row">
          <div class="category-cluster">
            <div class="category-column">
              ${categoryCard(5)}
              ${categoryCard(6)}
            </div>
            <div class="category-column">
              ${categoryCard(7)}
              ${categoryCard(8)}
            </div>
          </div>
          ${categoryCard(9)}
        </div>
      </div>
    </section>
  `;
}

function brandSection() {
  return `
    <section class="section brand-section" data-node-id="5516:46291">
      <h2 class="section-title">SHOP BY BRANDS</h2>
      <div class="brand-rail rail" data-node-id="5516:46293">
        ${brandImages.map((file) => `
          <button class="brand-card" data-route="discover" data-collection="Brand Store">
            <img src="${H(file)}" alt="" />
          </button>
        `).join("")}
      </div>
    </section>
  `;
}

function timerMarkup() {
  return `<div class="timer"><b>3D</b><i></i><b>16H</b><i></i><b>8M</b><i></i><b>23S</b></div>`;
}

function carouselSection() {
  return `
    <section class="carousel-section" data-node-id="5516:46301">
      <div class="carousel-shell" data-node-id="5516:46302">
        <div class="carousel-track rail" data-node-id="5516:46303">
          <div class="carousel-slide first" data-route="discover" data-collection="Winter Collection"><img src="${H("carousel-winter.png")}" alt="" /></div>
          <div class="carousel-slide square text" data-route="discover" data-collection="Coming Soon Collection">
            <img src="${H("carousel-text.png")}" alt="" />
            <div class="carousel-caption">
              <strong>Coming Soon...</strong>
              <span>Indulge in nature's symphony, curated style for modern working women</span>
              ${timerMarkup()}
            </div>
          </div>
          <div class="carousel-slide square" data-route="discover" data-collection="Limited Time Collection">
            <img src="${H("carousel-timer.png")}" alt="" />
            <div class="carousel-caption">${timerMarkup()}</div>
          </div>
          <div class="carousel-slide square">
            <img src="${H("carousel-video.png")}" alt="" />
            <div class="carousel-controls">
              <button class="media-control" data-action="toggle-pause" aria-label="${state.carouselPaused ? "Play" : "Pause"}">${state.carouselPaused ? ">" : "II"}</button>
              <button class="media-control" data-action="toggle-volume" aria-label="${state.muted ? "Unmute" : "Mute"}">${state.muted ? "M" : ")))"}</button>
            </div>
          </div>
        </div>
        <div class="indicator-area" data-node-id="5516:46330">
          <div class="indicator">
            <span class="active"></span>
            <span class="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function footerSection() {
  return `
    <footer class="footer-section" data-node-id="5516:46348">
      <div class="footer-lockup">
        <img src="${assets.logoFooter}" alt="TRENDS" />
        <p>Built with love and care <span class="footer-heart">&#10084;</span> in Mumbai</p>
      </div>
      <p>Version 1.0</p>
    </footer>
    <div class="figma-tail-space"></div>
  `;
}

function homeScreen() {
  return `
    <main class="page homepage" data-screen="home">
      ${heroSection()}
      ${lookbookJourneySection()}
      ${discountSection()}
      ${categorySection()}
      ${brandSection()}
      ${carouselSection()}
      ${footerSection()}
    </main>
  `;
}

function lookbookJourneySection() {
  const style = selectedLookbookStyle();
  return `
    <section class="lookbook-entry-section">
      <div class="lookbook-entry-card">
        <div class="entry-kicker">
          <span>AI Senior Stylist</span>
          <b>${style.confidence}</b>
        </div>
        <div class="stylist-avatar-row">
          <span class="stylist-avatar">AI</span>
          <div>
            <h2>Good evening, Ashutosh</h2>
            <p>I can read your image, choose the right store catalogue pieces, and build a personal lookbook for office, dates, casual plans, sport wear, ethnic moments and more.</p>
          </div>
        </div>
        <div class="journey-steps">
          <span>Upload</span>
          <span>Style Read</span>
          <span>Lookbook</span>
        </div>
        <div class="home-style-preview rail">
          ${curatedLookbookStyles.slice(0, 5).map((item) => `
            <button class="home-style-chip ${item.id === style.id ? "active" : ""}" data-style="${item.id}" style="--style-accent:${item.accent}">
              <span>${item.category}</span>
              <strong>${item.label}</strong>
            </button>
          `).join("")}
        </div>
        <button class="wide-dark" data-route="tryon" data-preserve-style="true">Start Virtual Draping</button>
        <button class="wide-outline" data-action="surprise-look">Surprise Me</button>
      </div>
    </section>
  `;
}

function productCard(product) {
  const selected = product.id === state.selectedId;
  const style = selectedLookbookStyle();
  const rank = (style.productIds || []).indexOf(product.id);
  const reason = rank === 0 ? "Senior Stylist top pick" : `${product.styleMatch} match for ${style.category}`;
  return `
    <article class="product-card ${selected ? "selected" : ""}">
      <button class="product-image" data-select-product="${product.id}" aria-label="View ${product.name} product details">
        <img src="${product.image}" alt="${product.brand} ${product.name}" />
        <span class="catalogue-badge">${product.source || "Catalogue"}</span>
      </button>
      <div class="product-copy">
        <strong>${product.brand}</strong>
        <span>${product.name}</span>
        <div class="price-line">
          <b>${product.price}</b>
          <del>${product.mrp}</del>
          <em>${product.off}</em>
        </div>
        <em class="product-reason">${reason}</em>
        <button class="pdp-link" data-select-product="${product.id}">View PDP</button>
      </div>
    </article>
  `;
}

function analystNudge(context, product = selectedProduct()) {
  const style = selectedLookbookStyle();
  const copy = {
    discover: `I am reading catalogue PDPs against your ${style.label} brief. Pick a product and I will turn it into a draped lookbook result.`,
    upload: `Start with a real image. I will check the upload guardrails, read the mood, and unlock curated styles before showing suggestions.`,
    lookbook: `Saved looks become your digital closet. Reopen any one, generate a clip, share it, cast it, or add it to bag.`,
  }[context] || `I am matching ${product.brand} with your ${style.label} edit so the result feels personal, useful and store-ready.`;
  return `
    <section class="analyst-nudge">
      <span>AI Senior Stylist</span>
      <p>${copy}</p>
    </section>
  `;
}

function stylistPanel(product, compact = false) {
  const style = selectedLookbookStyle();
  const prePdpSuggestion = state.route === "tryon" && state.selectedId === previewProductId && state.renderStatus !== "rendered";
  return `
    <section class="stylist-panel ${compact ? "compact" : ""}">
      <div class="stylist-kicker">
        <span>AI Senior Stylist</span>
        <b>${style.confidence}</b>
      </div>
      <div class="stylist-avatar-row compact-row">
        <span class="stylist-avatar small">AI</span>
        <div>
          <h2>Welcome Ashutosh</h2>
          <p>${style.reason} ${prePdpSuggestion ? "For the first suggested product" : "For this PDP"}, ${product.drapeNote}</p>
        </div>
      </div>
      <div class="stylist-metrics">
        <span><b>Base</b> ${state.uploadConfirmed ? "Uploaded avatar" : "Upload pending"}</span>
        <span><b>Style</b> ${style.category} · ${style.occasion}</span>
        <span><b>Source</b> ${prePdpSuggestion ? "Suggested catalogue" : `${product.source || "Store Catalogue"} PDP`}</span>
      </div>
    </section>
  `;
}

function reversePromptPreview(product, environment = selectedEnvironment(), cameraMove = selectedCameraMove(), style = selectedLookbookStyle()) {
  return `${style.label}: use the uploaded identity with ${product.brand} ${product.name}, style it for ${style.occasion}, and preserve face, body proportions, trouser coverage, colour and drape.`;
}

function guardrailPanel(compact = false) {
  const statusCopy = state.uploadConfirmed
    ? state.guardrailStatus === "partial"
      ? "Accepted with a note: this lifestyle image can style the look, but a clean full-body front pose gives better drape."
      : "Image accepted. Catalogue suggestions are unlocked."
    : "Upload a clear adult image before suggestions unlock.";
  return `
    <section class="guardrail-panel ${compact ? "compact" : ""}">
      <div class="guardrail-heading">
        <span>Upload Guardrails</span>
        <strong>${state.uploadConfirmed ? "Checked" : "Required"}</strong>
      </div>
      <div class="guardrail-grid">
        <span>Adult image only</span>
        <span>Full body preferred</span>
        <span>Clear front pose</span>
        <span>No fit guarantee</span>
      </div>
      <p>${statusCopy}</p>
    </section>
  `;
}

function lookbookStudio(product, mode = "") {
  const style = selectedLookbookStyle();
  return `
    <section class="lookbook-studio ${mode}">
      <div class="lookbook-studio-heading">
        <div>
          <span>Curated Lookbook</span>
          <h2>${style.label}</h2>
        </div>
        <button data-action="surprise-look">Surprise</button>
      </div>
      <p>${style.story}</p>
      <div class="style-story">
        <span>Stylist Read</span>
        <strong>${style.cta}</strong>
        <p>${style.reason}</p>
      </div>
      <div class="lookbook-style-rail rail">
        ${curatedLookbookStyles.map((item) => `
          <button class="lookbook-style-card ${item.id === style.id ? "active" : ""}" data-style="${item.id}" style="--style-accent:${item.accent}">
            <span>${item.category}</span>
            <strong>${item.label}</strong>
            <em>${item.occasion}</em>
          </button>
        `).join("")}
      </div>
      ${guardrailPanel(true)}
      <div class="reverse-prompt-card">
        <span>Lookbook Prompt</span>
        <p>${reversePromptPreview(product, selectedEnvironment(), selectedCameraMove(), style)}</p>
        <button data-action="copy-prompt">Copy Prompt</button>
      </div>
    </section>
  `;
}

function pdpScreen() {
  const product = selectedProduct();
  const style = selectedLookbookStyle();
  const saved = state.lookbookItems.some((item) => item.productId === product.id && item.lookbookStyleId === style.id);
  return `
    <main class="page proto-screen" data-screen="pdp">
      <section class="pdp-hero">
        <div class="pdp-image">
          <img src="${product.image}" alt="${product.brand} ${product.name}" />
          <span class="catalogue-badge">${product.source}</span>
        </div>
        <div class="pdp-copy">
          <span>${product.brand}</span>
          <h1>${product.name}</h1>
          <div class="price-line pdp-price">
            <b>${product.price}</b>
            <del>${product.mrp}</del>
            <em>${product.off}</em>
          </div>
        </div>
      </section>

      <section class="pdp-section">
        <h2>Product Details</h2>
        <div class="detail-list">
          <span><b>Fabric</b>${product.fabric}</span>
          <span><b>Fit Read</b>Regular fit, draping-ready on uploaded image</span>
          <span><b>Stylist Edit</b>${style.category}</span>
          <span><b>Store</b>TRENDS, Phoenix Mall Of Asia</span>
        </div>
        <div class="size-row">
          ${product.sizes.map((size) => `<button class="${state.selectedSize === size ? "active" : ""}" data-action="size-pick" data-size="${size}">${size}</button>`).join("")}
        </div>
      </section>

      ${stylistPanel(product)}
      ${lookbookStudio(product, "pdp")}

      <section class="pdp-actions">
        <button class="wide-dark" data-action="start-draping">Try On Virtually</button>
        <button class="wide-outline" data-action="add-to-bag">Add To Bag</button>
        <button class="wide-outline" data-action="${saved ? "open-lookbook" : "save-product"}">${saved ? "Open Lookbook" : "Save For Lookbook"}</button>
      </section>
    </main>
  `;
}

function resultActionPanel(product) {
  if (state.renderStatus !== "rendered") return "";
  const videoActive = state.videoStatus !== "idle";
  const style = selectedLookbookStyle();
  return `
    <section class="result-actions">
      <div class="result-note">
        <strong>${product.brand} ${style.label} look ready</strong>
        <span>${state.tryOnMessage || "Preview shows style, colour and drape on the uploaded image."}${state.tryOnError ? ` Retry remains available if you want a fresh AI render.` : ""}</span>
      </div>
      ${videoActive ? videoStatusPanel(product) : ""}
      <button class="wide-dark" data-action="add-to-bag">Add To Bag</button>
      <div class="action-grid">
        <button data-action="generate-video">${state.videoStatus === "generating" || state.videoStatus === "running" ? "Generating..." : "Generate Video"}</button>
        <button data-action="render">Retry Draping</button>
        <button data-action="share-look">Share</button>
        <button data-action="cast-tv">Cast TV</button>
        <button data-action="open-lookbook">Lookbook</button>
        <button data-action="try-another">Try Another</button>
      </div>
    </section>
  `;
}

function videoStatusPanel(product) {
  const isBusy = state.videoStatus === "generating" || state.videoStatus === "running";
  const statusLabel = isBusy ? "Generating" : state.videoStatus === "ready" ? "Video Ready" : "Preview Mode";
  const style = selectedLookbookStyle();
  return `
    <div class="video-panel ${isBusy ? "busy" : ""}">
      <div class="video-thumb">
        ${state.videoUrl ? `
          <video src="${state.videoUrl}" playsinline muted loop controls></video>
        ` : `
          <img src="${currentRenderedImage(product)}" alt="${product.brand} ${product.name} video preview" />
        `}
        <span>${isBusy ? "Rendering" : "Lookbook Clip"}</span>
      </div>
      <div class="video-copy">
        <strong>${statusLabel}</strong>
        <p>${state.videoMessage || `Short ${style.label} lookbook video for this draped outfit.`}</p>
        ${state.videoUri ? `
          <button data-action="copy-video-uri">Copy Video URI</button>
          <em>${state.videoUri}</em>
        ` : ""}
      </div>
    </div>
  `;
}

function discoverScreen() {
  const chips = ["All Products", "Men Topwear", "Bottomwear", "Winter Collection", "Smart Casual"];
  const style = selectedLookbookStyle();
  const list = state.uploadConfirmed ? suggestedProductsForStyle(style) : filteredProducts();
  return `
    <main class="page proto-screen" data-screen="discover">
      <div class="proto-header">
        <h1>${state.uploadConfirmed ? "Suggested Catalogue Products" : "Discover"}</h1>
        <p>${state.uploadConfirmed ? `${style.label}: ${style.reason}` : `${escapeHTML(state.activeCollection)} from the in-store catalogue. Open a PDP, then drape it on the uploaded image.`}</p>
      </div>
      ${state.activeOffer ? `<div class="state-banner">${state.activeOffer}</div>` : ""}
      ${analystNudge("discover")}
      ${state.uploadConfirmed ? `
        <div class="lookbook-style-rail discover-style-rail rail">
          ${curatedLookbookStyles.map((item) => `
            <button class="lookbook-style-card ${item.id === style.id ? "active" : ""}" data-style="${item.id}" style="--style-accent:${item.accent}">
              <span>${item.category}</span>
              <strong>${item.label}</strong>
              <em>${item.occasion}</em>
            </button>
          `).join("")}
        </div>
      ` : `
        <div class="chip-row rail">
          ${chips.map((chip) => `
            <button class="chip ${chip === state.activeCollection ? "active" : ""}" data-action="collection" data-collection="${escapeHTML(chip)}">${chip}</button>
          `).join("")}
        </div>
      `}
      <div class="product-grid">
        ${list.map(productCard).join("")}
      </div>
    </main>
  `;
}

function tryOnScreen() {
  const product = selectedProduct();
  const displayProduct = renderedProduct();
  const showingRenderedLook = state.renderStatus === "rendered";
  const style = selectedLookbookStyle();
  const previewImage = showingRenderedLook ? currentRenderedImage(displayProduct) : state.uploadedPhoto;
  const suggestedProducts = suggestedProductsForStyle(style);
  const guidedProduct = showingRenderedLook
    ? displayProduct
    : product.id === previewProductId
      ? suggestedProducts[0] || product
      : product;
  const previewAlt = showingRenderedLook
    ? `${displayProduct.brand} ${displayProduct.name} rendered on male model`
    : `${state.uploadedPhotoTitle || "Uploaded user image"} preview`;
  const mirrorClass = state.renderStatus === "rendering" ? "rendering" : state.renderStatus === "rendered" ? "rendered" : state.renderStatus === "preview" ? "preview" : "";
  return `
    <main class="page proto-screen" data-screen="tryon">
      <div class="tryon-stage">
        <div class="tryon-panel">
          ${state.uploadedPhoto ? `
            <div class="mirror ${mirrorClass}">
              <img class="tryon-result-photo" src="${previewImage}" alt="${previewAlt}" />
              ${state.renderStatus === "rendering" ? `
                <div class="render-overlay">
                  <span>AI Senior Stylist</span>
                  <strong>Senior Stylist is draping this look</strong>
                  <em>${style.label} · ${product.brand}</em>
                </div>
              ` : ""}
              ${state.tryOnMode === "premium-fallback" && showingRenderedLook ? `<span class="render-fallback-badge">Mapped catalogue render</span>` : ""}
            </div>
          ` : `
            <div class="upload-zone">
              <div>
                <img src="${assets.apparel}" alt="" />
                <strong>Upload Image</strong>
                <span>Full body image for virtual draping</span>
              </div>
            </div>
          `}
          <div class="upload-actions">
            <button class="upload-button" data-action="open-gallery" aria-label="Upload image from gallery">
              <span>Upload Image</span>
            </button>
          </div>
        </div>
      </div>
      ${state.uploadConfirmed ? `
        <section class="upload-read-card">
          <span>Style Read Complete</span>
          <strong>${state.uploadedPhotoTitle || "Uploaded Image"}</strong>
          <p>${state.guardrailStatus === "partial" ? "Lifestyle image accepted. A clean full-body front pose will improve AI drape accuracy." : "Image accepted. I am matching your avatar to curated store catalogue edits."}</p>
        </section>
        ${stylistPanel(guidedProduct, true)}
      ` : `${analystNudge("upload")}${guardrailPanel()}`}
      ${state.uploadConfirmed ? lookbookStudio(guidedProduct, "compact") : ""}
      ${resultActionPanel(displayProduct)}
      ${state.uploadConfirmed ? `
        <div class="proto-header ready-products">
          <h1>Suggested Products For ${style.category}</h1>
          <p>${style.reason}</p>
        </div>
        <div class="product-grid">
          ${suggestedProducts.map(productCard).join("")}
        </div>
      ` : ""}
    </main>
  `;
}

function gallerySheet() {
  const visibleImages = visibleGalleryImages();
  return `
    <div class="gallery-layer" role="dialog" aria-modal="true" aria-label="Image gallery">
      <button class="gallery-scrim" data-action="close-gallery" aria-label="Close gallery"></button>
      <section class="gallery-sheet">
        <div class="gallery-handle" aria-hidden="true"></div>
        <header class="gallery-header">
          <button class="gallery-cancel" data-action="close-gallery">Cancel</button>
          <strong>Recents</strong>
          <span class="gallery-spacer" aria-hidden="true"></span>
        </header>
        <div class="gallery-subheader">
          <span>Photos</span>
          <em>Choose a real image for your Senior Stylist read</em>
        </div>
        <div class="gallery-albums" aria-label="Gallery albums">
          ${galleryTabs.map((tab) => `
            <button class="${state.galleryTab === tab ? "active" : ""}" type="button" data-gallery-tab="${tab}">${tab}</button>
          `).join("")}
        </div>
        <div class="gallery-grid">
          ${visibleImages.map((item) => `
            <button class="gallery-tile" data-gallery-image="${item.id}" aria-label="Select ${item.title}">
              <img src="${item.image}" alt="${item.title}" />
              <span>${item.title}</span>
            </button>
          `).join("")}
          <label class="gallery-upload-tile" aria-label="Choose image from device">
            <span>Browse</span>
            <em>Device</em>
            <input type="file" accept="image/png,image/jpeg" data-upload />
          </label>
        </div>
        <div class="gallery-guardrails">
          <span>Adult only</span>
          <span>Full body preferred</span>
          <span>PNG/JPEG</span>
          <span>Under 12 MB</span>
        </div>
      </section>
    </div>
  `;
}

function scanScreen() {
  const complete = state.scanCount >= 3;
  return `
    <main class="page proto-screen" data-screen="scan">
      <div class="proto-header">
        <h1>Scan Items</h1>
        <p>${state.scanCount}/3 items scanned. Scan three items to unlock matching catalogue products.</p>
      </div>
      <div class="placeholder-card">
        <div class="scan-meter">
          <span style="width:${Math.max(8, state.scanCount * 33.33)}%"></span>
        </div>
        <div class="scan-dots">
          <i class="${state.scanCount >= 1 ? "done" : ""}"></i>
          <i class="${state.scanCount >= 2 ? "done" : ""}"></i>
          <i class="${state.scanCount >= 3 ? "done" : ""}"></i>
        </div>
        <button class="wide-outline" data-action="${complete ? "open-scanned" : "scan-next"}">${complete ? "View Scanned Products" : "Scan Next Item"}</button>
      </div>
      ${discountSection()}
    </main>
  `;
}

function ordersScreen() {
  return `
    <main class="page proto-screen" data-screen="orders">
      <div class="proto-header">
        <h1>Order History</h1>
        <p>Recent Companion orders are ready to track or reorder.</p>
      </div>
      <div class="list-stack">
        ${products.slice(0, 3).map((product, index) => `
          <article class="order-card">
            <img src="${product.image}" alt="" />
            <div>
              <strong>${product.brand}</strong>
              <span>${index === 0 ? "Ready for pickup" : "Delivered"} · ${product.price}</span>
            </div>
            <button data-action="${index === 0 ? "track-order" : "reorder"}">${index === 0 ? "Track" : "Reorder"}</button>
          </article>
        `).join("")}
      </div>
    </main>
  `;
}

function accountScreen() {
  return `
    <main class="page proto-screen" data-screen="account">
      <div class="proto-header">
        <h1>Account</h1>
        <p>2,940 points available for this store visit.</p>
      </div>
      <div class="placeholder-card account-card">
        <strong>Ashutosh</strong>
        <span>TRENDS, Phoenix Mall Of Asia</span>
        <button class="wide-outline" data-action="redeem">Redeem Store Offer</button>
        <button class="wide-dark" data-route="tryon">Open Virtual Draping</button>
      </div>
    </main>
  `;
}

function bagScreen() {
  return `
    <main class="page proto-screen" data-screen="bag">
      <div class="proto-header">
        <h1>Bag</h1>
        <p>${state.bagItems.length} rendered looks added.</p>
      </div>
      ${state.bagItems.length ? `
        <div class="list-stack">
          ${state.bagItems.map((item) => `
            <article class="order-card">
              <img src="${item.image}" alt="" />
              <div>
                <strong>${item.brand}</strong>
                <span>${item.name} · ${item.price}${item.size ? ` · Size ${item.size}` : ""}${item.lookbookStyleLabel ? ` · ${item.lookbookStyleLabel}` : ""}</span>
              </div>
              <button data-remove="${item.id}">Remove</button>
            </article>
          `).join("")}
        </div>
      ` : `
        <div class="placeholder-card">
          <h2>No looks yet</h2>
          <p>Render a product on your image, then add it here.</p>
          <button class="wide-dark" data-route="tryon">Start Virtual Draping</button>
        </div>
      `}
    </main>
  `;
}

function lookbookScreen() {
  const latest = latestLookbookItem();
  return `
    <main class="page proto-screen" data-screen="lookbook">
      <div class="proto-header">
        <h1>Lookbook</h1>
        <p>Saved virtual draping looks from the TRENDS store catalogue.</p>
      </div>
      ${analystNudge("lookbook", latest ? renderedProduct() : selectedProduct())}
      ${latest ? `
        <section class="lookbook-hero">
          <div class="lookbook-hero-image">
            <img src="${latest.image}" alt="${latest.brand} ${latest.name} saved look" />
          </div>
          <div class="lookbook-hero-copy">
            <span>Latest Draped Look</span>
            <strong>${latest.brand}</strong>
            <p>${latest.name} · ${latest.lookbookStyleLabel || latest.environmentLabel || "Store Spotlight"} · ${latest.lookbookStyleCategory || latest.occasion}</p>
            <button class="wide-dark" data-view-look="${latest.id}">Open Look</button>
          </div>
        </section>
        <div class="lookbook-grid">
          ${state.lookbookItems.map((item) => `
            <article class="lookbook-card">
              <button class="lookbook-image" data-view-look="${item.id}" aria-label="Open ${item.name}">
                <img src="${item.image}" alt="${item.brand} ${item.name}" />
              </button>
              <div class="lookbook-copy">
                <span>${item.styleMatch} stylist match</span>
                <strong>${item.brand}</strong>
                <p>${item.name}</p>
                <em>${item.lookbookStyleLabel || item.environmentLabel || item.occasion} · ${item.lookbookStyleCategory || "Curated"} · ${item.savedAt}</em>
              </div>
              <div class="lookbook-card-actions">
                <button data-view-look="${item.id}">View</button>
                <button data-remove-look="${item.id}">Remove</button>
              </div>
            </article>
          `).join("")}
        </div>
      ` : `
        <section class="empty-lookbook">
          <img src="${assets.lookbookSheet}" alt="" />
          <h2>No saved looks yet</h2>
          <p>Upload a full body image, open a catalogue PDP, then drape and save the result here.</p>
          <button class="wide-dark" data-route="tryon">Upload Image</button>
          <button class="wide-outline" data-route="discover">Browse Catalogue</button>
        </section>
      `}
    </main>
  `;
}

function tvScreen() {
  const latest = latestLookbookItem();
  const product = renderedProduct();
  const cast = state.castLook || latest || {
    brand: product.brand,
    name: product.name,
    image: product.tryonImage,
    price: product.price,
  };
  return `
    <main class="page proto-screen" data-screen="tv">
      <section class="tv-stage">
        <div class="tv-frame">
          ${state.videoUrl ? `
            <video src="${state.videoUrl}" playsinline muted loop controls></video>
          ` : `
            <img src="${cast.image}" alt="${cast.brand} ${cast.name} on store TV" />
          `}
        </div>
        <div class="tv-copy">
          <span>Companion Cast</span>
          <h1>${cast.brand}</h1>
	          <p>${cast.name}${cast.lookbookStyleLabel ? ` · ${cast.lookbookStyleLabel}` : cast.environmentLabel ? ` · ${cast.environmentLabel}` : ""}</p>
          <div class="tv-progress"><span></span></div>
          <em>${state.videoUri ? `Vertex video: ${state.videoUri}` : "Store TV preview holds for 30 seconds, then returns to the promo loop."}</em>
        </div>
        <button class="wide-dark" data-action="add-to-bag">Add To Bag</button>
        <button class="wide-outline" data-action="open-lookbook">Open Lookbook</button>
      </section>
    </main>
  `;
}

function searchScreen() {
  const list = filteredProducts();
  return `
    <main class="page proto-screen" data-screen="search">
      <div class="proto-header">
        <h1>Search</h1>
        <p>Find in-store catalogue products, brands, offers, and draping-ready looks.</p>
      </div>
      <div class="search-panel">
        <input data-search-input value="${escapeHTML(state.searchQuery)}" placeholder="Search men's products" />
        <button data-action="search-submit">Search</button>
      </div>
      <div class="product-grid">
        ${list.map(productCard).join("")}
      </div>
    </main>
  `;
}

function bottomGroup() {
  const hasCatalogueSelection = state.selectedId !== previewProductId;
  const tryonLabel = !state.uploadConfirmed
    ? "Upload Image"
    : state.renderStatus === "rendered"
      ? "Add To Bag"
      : hasCatalogueSelection
        ? "Try On Me"
        : "View Suggested Products";
  const tryonAction = !state.uploadConfirmed
    ? "open-gallery"
    : state.renderStatus === "rendered"
      ? "add-to-bag"
      : hasCatalogueSelection
        ? "render"
        : "discover";
  const cta = {
    home: ["Scan Item", "scan", assets.bottomBarcode],
    discover: ["Upload Image For Draping", "tryon", assets.apparel],
    pdp: ["Try On Virtually", "start-draping", assets.apparel],
    tryon: [tryonLabel, tryonAction, assets.apparel],
    lookbook: [state.lookbookItems.length ? "Open Latest Look" : "Browse Catalogue", state.lookbookItems.length ? "open-latest-look" : "discover", assets.hanger],
    tv: ["Back To Lookbook", "lookbook", assets.hanger],
    scan: [state.scanCount >= 3 ? "Discover Products" : "Scan Next Item", state.scanCount >= 3 ? "discover" : "scan-next", assets.bottomBarcode],
    orders: ["Track Latest Order", "track-order", assets.bottomBarcode],
    account: ["Redeem Offer", "redeem", assets.apparel],
    bag: [state.bagItems.length ? "Checkout" : "Discover Products", state.bagItems.length ? "checkout" : "discover", assets.bag],
    search: ["Apply Search", "search-submit", assets.search],
  }[state.route] || ["Scan Item", "scan", assets.bottomBarcode];

  const active = state.route === "discover" || state.route === "search" || state.route === "pdp"
    ? "discover"
    : state.route === "tryon"
      ? "tryon"
      : state.route === "lookbook" || state.route === "tv"
        ? "lookbook"
        : "home";
  return `
    <footer class="bottom-group" data-node-id="5516:46365">
      <div class="bottom-cta" data-node-id="5516:46366">
        <button class="primary-button" data-cta="${cta[1]}">
          <img src="${cta[2]}" alt="" />
          <span>${cta[0]}</span>
        </button>
      </div>
      <nav class="bottom-nav" aria-label="Companion App Bottom Sheet" data-node-id="5516:46368">
        <button class="nav-item ${active === "home" ? "active" : ""}" data-route="home">
          <img src="${assets.navHome}" alt="" />
          <span>Home</span>
        </button>
        <button class="nav-item ${active === "discover" ? "active" : ""}" data-route="discover">
          <img src="${assets.navCategory}" alt="" />
          <span>Discover</span>
        </button>
        <button class="nav-item ${active === "tryon" ? "active" : ""}" data-route="tryon" aria-label="Virtual Draping Product">
          <img src="${assets.navWardrobe}" alt="" />
          <span class="nav-item-label-long">Virtual Draping<br />Product</span>
        </button>
        <button class="nav-item ${active === "lookbook" ? "active" : ""}" data-route="lookbook">
          <img src="${assets.hanger}" alt="" />
          <span>Lookbook</span>
        </button>
      </nav>
      <div class="home-indicator" data-node-id="5516:46369"><span></span></div>
    </footer>
  `;
}

function screen() {
  if (state.route === "home") return homeScreen();
  if (state.route === "discover") return discoverScreen();
  if (state.route === "pdp") return pdpScreen();
  if (state.route === "tryon") return tryOnScreen();
  if (state.route === "lookbook") return lookbookScreen();
  if (state.route === "tv") return tvScreen();
  if (state.route === "scan") return scanScreen();
  if (state.route === "orders") return ordersScreen();
  if (state.route === "account") return accountScreen();
  if (state.route === "bag") return bagScreen();
  if (state.route === "search") return searchScreen();
  return homeScreen();
}

function render() {
  app.className = state.route === "home" ? "" : "feature-mode";
  app.innerHTML = `${topChrome()}${screen()}${bottomGroup()}${state.galleryOpen ? gallerySheet() : ""}${state.toast ? `<div class="toast">${state.toast}</div>` : ""}`;
  bindEvents();
}

function bindEvents() {
  document.querySelectorAll("[data-route]").forEach((el) => {
    el.addEventListener("click", () => {
      const nextRoute = el.dataset.route;
      if (nextRoute === "tryon") {
        resetTryOnFlow({ preserveStyle: el.dataset.preserveStyle === "true" });
        return;
      }
      routeTo(nextRoute, { collection: el.dataset.collection });
    });
  });

  document.querySelectorAll("[data-action]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      const action = el.dataset.action;
      if (action === "back") {
        goBack();
        return;
      }
      if (action === "open-gallery") {
        openGallery();
        return;
      }
      if (action === "close-gallery") {
        closeGallery();
        return;
      }
      if (action === "offer") {
        handleOffer(el.dataset.offer || "Store offer applied");
        return;
      }
      if (action === "collection") {
        state.activeCollection = el.dataset.collection || "All Products";
        state.searchQuery = "";
        render();
        return;
      }
      if (action === "surprise-look") {
        surpriseLook();
        return;
      }
      if (action === "copy-prompt") {
        copyPromptToClipboard();
        return;
      }
      if (action === "toggle-pause") {
        state.carouselPaused = !state.carouselPaused;
        flash(state.carouselPaused ? "Carousel paused" : "Carousel playing");
        return;
      }
      if (action === "toggle-volume") {
        state.muted = !state.muted;
        flash(state.muted ? "Video muted" : "Video unmuted");
        return;
      }
      if (action === "shuffle") {
        shuffleLook();
        return;
      }
      if (action === "buy-outfit") {
        if (!state.uploadConfirmed) {
          openGallery();
          return;
        }
        state.renderStatus = "rendered";
        addCurrentLook();
        return;
      }
      if (action === "start-draping") {
        startProductDraping();
        return;
      }
      if (action === "render") {
        renderOnModel();
        return;
      }
      if (action === "add-to-bag") {
        addCurrentLook();
        return;
      }
      if (action === "save-product") {
        saveProductForLookbook();
        return;
      }
      if (action === "open-lookbook") {
        routeTo("lookbook");
        return;
      }
      if (action === "open-latest-look") {
        const latest = latestLookbookItem();
        if (latest) viewLookbookItem(latest.id);
        return;
      }
      if (action === "try-another") {
        tryAnotherLook();
        return;
      }
      if (action === "share-look") {
        shareCurrentLook();
        return;
      }
      if (action === "generate-video") {
        if (state.videoStatus === "generating" || state.videoStatus === "running") return;
        generateLookbookVideo();
        return;
      }
      if (action === "copy-video-uri") {
        copyVideoUri();
        return;
      }
      if (action === "cast-tv") {
        castCurrentLook();
        return;
      }
      if (action === "size-pick") {
        pickSize(el.dataset.size);
        return;
      }
      if (action === "scan-next") {
        scanNext();
        return;
      }
      if (action === "open-scanned") {
        state.activeCollection = "Scanned Products";
        state.searchQuery = "";
        routeTo("discover");
        return;
      }
      if (action === "track-order") {
        flash("Latest order tracking opened");
        return;
      }
      if (action === "reorder") {
        state.activeCollection = "Reorder Products";
        state.searchQuery = "";
        routeTo("discover");
        flash("Reorder products loaded");
        return;
      }
      if (action === "redeem") {
        handleOffer("Enjoy Rs.500 off on purchase of Rs.1999");
        return;
      }
      if (action === "checkout") {
        flash("Checkout prototype ready");
        return;
      }
      if (action === "search-submit") {
        const input = document.querySelector("[data-search-input]");
        if (input) state.searchQuery = input.value.trim();
        state.activeCollection = state.searchQuery ? `Search: ${state.searchQuery}` : "All Products";
        routeTo("discover");
        return;
      }
    });
  });

  document.querySelectorAll("[data-select-product]").forEach((el) => {
    el.addEventListener("click", () => selectProduct(el.dataset.selectProduct));
  });

  document.querySelectorAll("[data-env]").forEach((el) => {
    el.addEventListener("click", () => selectEnvironment(el.dataset.env));
  });

  document.querySelectorAll("[data-camera]").forEach((el) => {
    el.addEventListener("click", () => selectCameraMove(el.dataset.camera));
  });

  document.querySelectorAll("[data-style]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      selectLookbookStyle(el.dataset.style);
    });
  });

  document.querySelectorAll("[data-gallery-image]").forEach((el) => {
    el.addEventListener("click", () => selectGalleryImage(el.dataset.galleryImage));
  });

  document.querySelectorAll("[data-gallery-tab]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      selectGalleryTab(el.dataset.galleryTab);
    });
  });

  document.querySelectorAll("[data-upload]").forEach((input) => {
    input.addEventListener("change", (event) => {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!validateUploadFile(file)) {
        event.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onload = async () => {
        const image = String(reader.result || "");
        const guardrailStatus = await imageGuardrailStatus(image);
        confirmUploadedImage(image, {
          title: file.name.replace(/\.[^.]+$/, "") || "Uploaded Image",
          meta: "Device Gallery",
          guardrailStatus,
        });
      };
      reader.onerror = () => flash("Image upload failed");
      reader.readAsDataURL(file);
    });
  });

  document.querySelectorAll("[data-remove]").forEach((button) => {
    button.addEventListener("click", () => {
      state.bagItems = state.bagItems.filter((item) => item.id !== button.dataset.remove);
      state.cartCount = state.bagItems.length;
      render();
    });
  });

  document.querySelectorAll("[data-remove-look]").forEach((button) => {
    button.addEventListener("click", () => removeLookbookItem(button.dataset.removeLook));
  });

  document.querySelectorAll("[data-view-look]").forEach((button) => {
    button.addEventListener("click", () => viewLookbookItem(button.dataset.viewLook));
  });

  document.querySelectorAll("[data-search-input]").forEach((input) => {
    input.addEventListener("input", () => {
      state.searchQuery = input.value;
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        state.searchQuery = input.value.trim();
        state.activeCollection = state.searchQuery ? `Search: ${state.searchQuery}` : "All Products";
        routeTo("discover");
      }
    });
  });

  document.querySelectorAll("[data-cta]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.cta;
      if (action === "render") {
        if (state.renderStatus === "rendered") {
          addCurrentLook();
        } else {
          renderOnModel();
        }
        return;
      }
      if (action === "start-draping") {
        startProductDraping();
        return;
      }
      if (action === "add-to-bag") {
        addCurrentLook();
        return;
      }
      if (action === "surprise-look") {
        surpriseLook();
        return;
      }
      if (action === "copy-prompt") {
        copyPromptToClipboard();
        return;
      }
      if (action === "open-latest-look") {
        const latest = latestLookbookItem();
        if (latest) viewLookbookItem(latest.id);
        return;
      }
      if (action === "open-lookbook") {
        routeTo("lookbook");
        return;
      }
      if (action === "try-another") {
        tryAnotherLook();
        return;
      }
      if (action === "share-look") {
        shareCurrentLook();
        return;
      }
      if (action === "generate-video") {
        if (state.videoStatus === "generating" || state.videoStatus === "running") return;
        generateLookbookVideo();
        return;
      }
      if (action === "copy-video-uri") {
        copyVideoUri();
        return;
      }
      if (action === "cast-tv") {
        castCurrentLook();
        return;
      }
      if (action === "open-gallery") {
        openGallery();
        return;
      }
      if (action === "scan-next") {
        scanNext();
        return;
      }
      if (action === "track-order") {
        flash("Latest order tracking opened");
        return;
      }
      if (action === "redeem") {
        handleOffer("Enjoy Rs.500 off on purchase of Rs.1999");
        return;
      }
      if (action === "checkout") {
        flash("Checkout prototype ready");
        return;
      }
      if (action === "search-submit") {
        state.activeCollection = state.searchQuery ? `Search: ${state.searchQuery}` : "All Products";
        routeTo("discover");
        return;
      }
      if (action === "tryon") {
        resetTryOnFlow();
        return;
      }
      routeTo(action);
    });
  });
}

render();
