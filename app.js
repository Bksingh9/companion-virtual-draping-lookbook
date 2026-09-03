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

const currentLiveApiBase = "https://541c03e5d2796e.lhr.life";

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
    motion: "begin locked at full-body center, move into a slow 18-degree orbit, pause on the front styling",
    framing: "vertical 9:16, full body, shoes visible, no crop above hair",
    beat: "quiet curiosity opening, clean final hero hold",
  },
  {
    id: "hero-push-in",
    label: "Hero Push-In",
    mood: "store hero",
    motion: "start with a full-body catalogue frame, then push in gently from knee-up to chest detail",
    framing: "keep trouser line and top styling readable before the detail move",
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
    label: "Turntable Reveal",
    mood: "style check",
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
    framing: "adult shopper full-body avatar, stable hands, complete outfit coverage maintained",
    beat: "curiosity to surprise to reward in one short loop",
  },
];

const liveMomentCategories = [
  {
    id: "moment-live",
    category: "Live Moment",
    label: "Live Moment",
    prompt: "Style the outfit around the uploaded real-world scene, lighting and mood.",
  },
  {
    id: "moment-office",
    category: "Office",
    label: "Office",
    prompt: "Sharper, composed looks for work meetings and review days.",
  },
  {
    id: "moment-date",
    category: "Date",
    label: "Date",
    prompt: "Evening-friendly polish with warmer, more confident styling.",
  },
  {
    id: "moment-casual",
    category: "Casual",
    label: "Casual",
    prompt: "Easy everyday outfits for brunch, errands and relaxed plans.",
  },
  {
    id: "moment-sport",
    category: "Sport Wear",
    label: "Sport Wear",
    prompt: "Active-to-cafe pieces with movement, comfort and clean coverage.",
  },
  {
    id: "moment-ethnic",
    category: "Ethnic",
    label: "Ethnic",
    prompt: "Family, festive and cultural occasion edits from catalogue pieces.",
  },
  {
    id: "moment-formal",
    category: "Formal",
    label: "Formal",
    prompt: "Refined silhouettes for interviews, premium dinners and events.",
  },
  {
    id: "moment-travel",
    category: "Travel",
    label: "Travel",
    prompt: "Comfortable capsule looks for airport, commute and day trips.",
  },
  {
    id: "moment-resort",
    category: "Resort",
    label: "Resort",
    prompt: "Holiday and vacation edits with lighter, destination-ready styling.",
  },
  {
    id: "moment-celebration",
    category: "Celebration",
    label: "Celebration",
    prompt: "Rewarding event looks for parties, weddings and store-screen reveals.",
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
    story: "A lighter holiday edit with fresh contrast, relaxed fit and a clean vertical reveal.",
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

curatedLookbookStyles.forEach((style, index) => {
  style.gender = "male";
  style.dailySurprise = index < 10;
});

const maleProductRotation = [
  "teamspirit-beige-jacket-look",
  "netplay-navy-polo-look",
  "teamspirit-black-bomber-look",
  "dnmx-white-tee-trouser-look",
  "performax-olive-tee-look",
];

const femaleProductRotation = [
  "avaasa-pink-ethnic-set",
  "dnmx-olive-denim-coord",
  "avaasa-printed-kurta-set",
  "avaasa-yellow-festive-dress",
  "trends-white-pink-ethnic-look",
];

function slugifyStyle(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function rotatedProductIds(order, index) {
  return order.map((_, offset) => order[(index + offset) % order.length]);
}

function createCuratedLookbookStyle(blueprint, gender, index, dailySurprise = false) {
  const label = blueprint.label;
  const category = blueprint.category;
  const occasion = blueprint.occasion;
  const productIds = blueprint.productIds || rotatedProductIds(gender === "female" ? femaleProductRotation : maleProductRotation, index);
  const audience = gender === "female" ? "her" : "him";
  return {
    id: `${gender}-${slugifyStyle(label)}`,
    gender,
    label,
    category,
    occasion,
    environmentId: blueprint.environmentId,
    cameraId: blueprint.cameraId,
    accent: blueprint.accent,
    confidence: blueprint.confidence || "91%",
    dailySurprise,
    story: blueprint.story || `${label} is a curated ${category.toLowerCase()} lookbook edit for ${occasion}, built from the uploaded avatar read and the in-store catalogue.`,
    reason: blueprint.reason || `I use ${blueprint.angle} to guide ${audience} toward a specific outfit path without making the experience feel generic.`,
    cta: blueprint.cta || `Create ${label}`,
    productIds,
    tags: blueprint.tags || [
      gender === "female" ? "Women Topwear" : "Men Topwear",
      category,
      "Brand Store",
      "Store Exclusive Discount",
    ],
  };
}

const maleAdditionalLookbooks = [
  {
    label: "Monday Leadership",
    category: "Office",
    occasion: "weekly review and leadership huddle",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#4e6074",
    confidence: "93%",
    angle: "clean dark-bottom structure, quiet colour and a sharper first impression",
    tags: ["Men Topwear", "Office", "Smart Casual", "Brand Store"],
  },
  {
    label: "Startup Pitch",
    category: "Office",
    occasion: "pitch room and founder meeting",
    environmentId: "office-briefing",
    cameraId: "detail-to-full-body",
    accent: "#384b5d",
    confidence: "92%",
    angle: "a confident top layer and minimal contrast that reads smart on camera",
    tags: ["Men Topwear", "Office", "Formal", "Brand Store"],
  },
  {
    label: "Friday Team Dinner",
    category: "Date",
    occasion: "team dinner after work",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#8c5d57",
    confidence: "91%",
    angle: "evening colour depth, relaxed structure and a polished dinner silhouette",
    tags: ["Men Topwear", "Date", "Smart Casual", "Winter Collection"],
  },
  {
    label: "Brunch Denim Reset",
    category: "Casual",
    occasion: "weekend brunch",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#a27753",
    confidence: "95%",
    angle: "light top contrast and comfort-first styling for a fresh daytime look",
    tags: ["Men Topwear", "Casual", "Smart Casual", "Reorder Products"],
  },
  {
    label: "Monsoon Layer",
    category: "Travel",
    occasion: "cloudy commute and mall day",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#5c6f69",
    confidence: "89%",
    angle: "weather-ready layering that still feels light enough for indoor retail",
    tags: ["Men Topwear", "Travel", "Winter Collection", "Brand Store"],
  },
  {
    label: "Gym To Errands",
    category: "Sport Wear",
    occasion: "training, coffee and quick errands",
    environmentId: "gym-to-cafe",
    cameraId: "detail-to-full-body",
    accent: "#657f53",
    confidence: "90%",
    angle: "active comfort, breathable colour and a store-ready finish after the workout",
    tags: ["Men Topwear", "Sport Wear", "Sports wear", "Casual"],
  },
  {
    label: "Family Function",
    category: "Ethnic",
    occasion: "family celebration",
    environmentId: "festive-evening",
    cameraId: "mirror-reveal",
    accent: "#b9904b",
    confidence: "88%",
    angle: "warm neutrals and darker grounding so the look feels respectful and easy",
    tags: ["Men Topwear", "Ethnic", "Celebration", "Brand Store"],
  },
  {
    label: "Music Night",
    category: "Casual",
    occasion: "concert and late-evening plan",
    environmentId: "date-night",
    cameraId: "runway-walk",
    accent: "#5b4f63",
    confidence: "90%",
    angle: "streetwear contrast, movement and a stronger night-out visual",
    tags: ["Men Topwear", "Casual", "Date", "Winter Collection"],
  },
  {
    label: "Interview Ready",
    category: "Formal",
    occasion: "interview and introduction meeting",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#2f3d49",
    confidence: "92%",
    angle: "clean lines, simple colour and a composed full-body read",
    tags: ["Men Topwear", "Formal", "Office", "Smart Casual"],
  },
  {
    label: "Festive Morning",
    category: "Ethnic",
    occasion: "daytime festive visit",
    environmentId: "festive-evening",
    cameraId: "reward-reveal",
    accent: "#c7a44e",
    confidence: "89%",
    angle: "softer warm tones and a celebration cue that remains catalogue-real",
    tags: ["Men Topwear", "Ethnic", "Celebration", "Store Exclusive Discount"],
  },
  {
    label: "Store Drop Hero",
    category: "Live Moment",
    occasion: "new collection reveal",
    environmentId: "store-spotlight",
    cameraId: "tv-poster-loop",
    accent: "#d3aa78",
    confidence: "94%",
    angle: "a high-confidence store-TV composition with a hero product reveal",
    tags: ["Men Topwear", "Brand Store", "Store Exclusive Discount"],
  },
  {
    label: "Minimal Luxe",
    category: "Formal",
    occasion: "premium minimal dinner",
    environmentId: "formal-evening",
    cameraId: "turntable-drape",
    accent: "#303135",
    confidence: "90%",
    angle: "tonal restraint, black grounding and one premium material cue",
    tags: ["Men Topwear", "Formal", "Date", "Smart Casual"],
  },
  {
    label: "Campus Smart",
    category: "Casual",
    occasion: "college presentation and hangout",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#72866c",
    confidence: "91%",
    angle: "youthful comfort and a cleaner top choice that still feels everyday",
    tags: ["Men Topwear", "Casual", "Smart Casual", "Reorder Products"],
  },
  {
    label: "Long Drive",
    category: "Travel",
    occasion: "road trip and day out",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#6a7960",
    confidence: "90%",
    angle: "breathable layers and easy movement for a travel-day silhouette",
    tags: ["Men Topwear", "Travel", "Casual", "Smart Casual"],
  },
  {
    label: "Anniversary Dinner",
    category: "Date",
    occasion: "anniversary dinner",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#8f565f",
    confidence: "91%",
    angle: "a darker elevated outfit with a gentle reveal and confident posture",
    tags: ["Men Topwear", "Date", "Formal", "Winter Collection"],
  },
];

const femaleLookbookBlueprints = [
  {
    label: "Ethnic Pink Celebration",
    category: "Ethnic",
    occasion: "family celebration and festive gifting",
    environmentId: "festive-evening",
    cameraId: "mirror-reveal",
    accent: "#d88f9f",
    confidence: "95%",
    productIds: ["trends-white-pink-ethnic-look", "avaasa-printed-kurta-set", "avaasa-yellow-festive-dress", "avaasa-pink-ethnic-set", "dnmx-olive-denim-coord"],
    angle: "soft festive colour, graceful silhouette and a warm celebration frame",
    tags: ["Women Topwear", "Ethnic", "Celebration", "Brand Store"],
  },
  {
    label: "Office Power Edit",
    category: "Office",
    occasion: "work meetings and presentation day",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#596579",
    confidence: "93%",
    productIds: ["dnmx-olive-denim-coord", "avaasa-printed-kurta-set", "trends-white-pink-ethnic-look", "avaasa-pink-ethnic-set", "avaasa-yellow-festive-dress"],
    angle: "confident vertical line, polished neutral styling and sharper weekday energy",
    tags: ["Women Topwear", "Office", "Smart Casual", "Brand Store"],
  },
  {
    label: "Date Night Glow",
    category: "Date",
    occasion: "dinner date and rooftop evening",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#9b5661",
    confidence: "92%",
    angle: "soft contrast, a flattering reveal and richer evening colour",
    tags: ["Women Topwear", "Date", "Formal", "Celebration"],
  },
  {
    label: "Casual Brunch",
    category: "Casual",
    occasion: "brunch, coffee and friends",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#a98463",
    confidence: "94%",
    angle: "easy denim movement, relaxed topwear and a bright day-out read",
    tags: ["Women Topwear", "Casual", "Smart Casual", "Reorder Products"],
  },
  {
    label: "Sport Luxe Day",
    category: "Sport Wear",
    occasion: "wellness morning and active errands",
    environmentId: "gym-to-cafe",
    cameraId: "detail-to-full-body",
    accent: "#6d8168",
    confidence: "89%",
    angle: "active comfort translated into a polished store-ready outfit",
    tags: ["Women Topwear", "Sport Wear", "Sports wear", "Casual"],
  },
  {
    label: "Resort Flow",
    category: "Resort",
    occasion: "holiday resort and beachside brunch",
    environmentId: "vacay-resortwear",
    cameraId: "runway-walk",
    accent: "#df9870",
    confidence: "91%",
    angle: "light movement, resort colour and a graceful vacation silhouette",
    tags: ["Women Topwear", "Resort", "Travel", "Smart Casual"],
  },
  {
    label: "Formal Evening",
    category: "Formal",
    occasion: "premium dinner and event night",
    environmentId: "formal-evening",
    cameraId: "turntable-drape",
    accent: "#36363a",
    confidence: "90%",
    angle: "controlled lighting, elegant posture and a more refined outfit story",
    tags: ["Women Topwear", "Formal", "Date", "Celebration"],
  },
  {
    label: "Wedding Guest",
    category: "Celebration",
    occasion: "wedding guest and reception",
    environmentId: "wedding-guest",
    cameraId: "tv-poster-loop",
    accent: "#c79d48",
    confidence: "93%",
    angle: "occasion colour, graceful full-length silhouette and shareable celebration polish",
    tags: ["Women Topwear", "Ethnic", "Celebration", "Store Exclusive Discount"],
  },
  {
    label: "Airport Lounge",
    category: "Travel",
    occasion: "flight day and lounge stop",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#637989",
    confidence: "90%",
    angle: "comfort, pockets-ready practicality and a polished travel frame",
    tags: ["Women Topwear", "Travel", "Casual", "Smart Casual"],
  },
  {
    label: "Festive Morning",
    category: "Ethnic",
    occasion: "daytime pooja and family visit",
    environmentId: "festive-evening",
    cameraId: "reward-reveal",
    accent: "#d7bd4f",
    confidence: "94%",
    angle: "sunny colour, light festive detailing and a warm reveal moment",
    tags: ["Women Topwear", "Ethnic", "Celebration", "Brand Store"],
  },
  {
    label: "College Smart",
    category: "Casual",
    occasion: "campus day and project review",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#75876f",
    confidence: "91%",
    angle: "denim ease and clean casual styling that stays presentable",
    tags: ["Women Topwear", "Casual", "Smart Casual", "Reorder Products"],
  },
  {
    label: "Monday Meeting",
    category: "Office",
    occasion: "first meeting of the week",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#56677a",
    confidence: "92%",
    angle: "quiet confidence, composed colour and a neat vertical fit read",
    tags: ["Women Topwear", "Office", "Formal", "Brand Store"],
  },
  {
    label: "Weekend Market",
    category: "Casual",
    occasion: "shopping street and market walk",
    environmentId: "weekend-cafe",
    cameraId: "runway-walk",
    accent: "#b0825e",
    confidence: "90%",
    angle: "comfortable movement, breathable pieces and easy styling",
    tags: ["Women Topwear", "Casual", "Travel", "Smart Casual"],
  },
  {
    label: "Dinner With Friends",
    category: "Date",
    occasion: "friends dinner and photos",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#915766",
    confidence: "91%",
    angle: "evening-friendly polish without becoming too formal",
    tags: ["Women Topwear", "Date", "Casual", "Celebration"],
  },
  {
    label: "Monsoon Layer",
    category: "Travel",
    occasion: "rainy day and commute",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#68766d",
    confidence: "89%",
    angle: "light layers and practical comfort for changing weather",
    tags: ["Women Topwear", "Travel", "Smart Casual", "Brand Store"],
  },
  {
    label: "Family Function",
    category: "Ethnic",
    occasion: "home function and family photos",
    environmentId: "festive-evening",
    cameraId: "mirror-reveal",
    accent: "#bd904a",
    confidence: "93%",
    angle: "festive warmth, elegant length and a softer family-event mood",
    tags: ["Women Topwear", "Ethnic", "Celebration", "Store Exclusive Discount"],
  },
  {
    label: "Store Drop Hero",
    category: "Live Moment",
    occasion: "new collection reveal",
    environmentId: "store-spotlight",
    cameraId: "tv-poster-loop",
    accent: "#d1a576",
    confidence: "94%",
    angle: "a polished store-screen reveal that makes the catalogue feel personal",
    tags: ["Women Topwear", "Brand Store", "Store Exclusive Discount"],
  },
  {
    label: "Minimal Luxe",
    category: "Formal",
    occasion: "minimal premium dinner",
    environmentId: "formal-evening",
    cameraId: "turntable-drape",
    accent: "#3c3936",
    confidence: "90%",
    angle: "simple lines, graceful colour control and a premium evening finish",
    tags: ["Women Topwear", "Formal", "Date", "Smart Casual"],
  },
  {
    label: "Coffee Catch-Up",
    category: "Casual",
    occasion: "coffee catch-up",
    environmentId: "weekend-cafe",
    cameraId: "orbit-reveal",
    accent: "#9e7a64",
    confidence: "92%",
    angle: "fresh casual styling with enough polish for quick photos",
    tags: ["Women Topwear", "Casual", "Smart Casual", "Reorder Products"],
  },
  {
    label: "Evening Walk",
    category: "Sport Wear",
    occasion: "evening walk and relaxed outing",
    environmentId: "gym-to-cafe",
    cameraId: "detail-to-full-body",
    accent: "#788468",
    confidence: "88%",
    angle: "sport-inspired comfort with a calmer everyday finish",
    tags: ["Women Topwear", "Sport Wear", "Casual", "Travel"],
  },
  {
    label: "Interview Ready",
    category: "Formal",
    occasion: "interview and introduction call",
    environmentId: "office-briefing",
    cameraId: "hero-push-in",
    accent: "#3f4d59",
    confidence: "92%",
    angle: "composed colour, modest silhouette and clear professional intent",
    tags: ["Women Topwear", "Formal", "Office", "Smart Casual"],
  },
  {
    label: "Celebration Saree Mood",
    category: "Celebration",
    occasion: "sangeet-inspired evening",
    environmentId: "wedding-guest",
    cameraId: "reward-reveal",
    accent: "#c08872",
    confidence: "89%",
    angle: "festive movement and ceremony mood using available ethnic catalogue pieces",
    tags: ["Women Topwear", "Celebration", "Ethnic", "Store Exclusive Discount"],
  },
  {
    label: "Travel Capsule",
    category: "Travel",
    occasion: "two-day trip packing",
    environmentId: "airport-lounge",
    cameraId: "editorial-pan",
    accent: "#5f7780",
    confidence: "91%",
    angle: "mixable pieces and compact styling for repeatable travel outfits",
    tags: ["Women Topwear", "Travel", "Casual", "Brand Store"],
  },
  {
    label: "Sunday Ethnic",
    category: "Ethnic",
    occasion: "Sunday family lunch",
    environmentId: "festive-evening",
    cameraId: "mirror-reveal",
    accent: "#caa24f",
    confidence: "92%",
    angle: "soft ethnic detailing with comfortable all-day movement",
    tags: ["Women Topwear", "Ethnic", "Casual", "Celebration"],
  },
  {
    label: "Anniversary Glow",
    category: "Date",
    occasion: "anniversary dinner",
    environmentId: "date-night",
    cameraId: "side-step-freeze",
    accent: "#a45d70",
    confidence: "91%",
    angle: "romantic colour, clean frame and a rewarding final reveal",
    tags: ["Women Topwear", "Date", "Celebration", "Formal"],
  },
];

curatedLookbookStyles.push(
  ...maleAdditionalLookbooks.map((style, index) => createCuratedLookbookStyle(style, "male", index + curatedLookbookStyles.length, false)),
  ...femaleLookbookBlueprints.map((style, index) => createCuratedLookbookStyle(style, "female", index, index < 10)),
);

const curatedStyleCounts = {
  male: curatedLookbookStyles.filter((style) => style.gender === "male").length,
  female: curatedLookbookStyles.filter((style) => style.gender === "female").length,
  maleSurprises: curatedLookbookStyles.filter((style) => style.gender === "male" && style.dailySurprise).length,
  femaleSurprises: curatedLookbookStyles.filter((style) => style.gender === "female" && style.dailySurprise).length,
};

const products = [
  {
    id: "trends-cream-tee-look",
    gender: "male",
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
    gender: "male",
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
    gender: "male",
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
    gender: "male",
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
    gender: "male",
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
    gender: "male",
    brand: "TEAMSPIRIT",
    name: "Men Black Bomber With Black Pants",
    source: "Store Catalogue",
    fabric: "Poly woven shell",
    sizes: ["M", "L", "XL", "XXL"],
    styleMatch: "92%",
    drapeNote: "The black bomber creates a single-tone outfit with a stronger streetwear read after styling.",
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
  {
    id: "trends-white-pink-ethnic-look",
    gender: "female",
    brand: "TRENDS",
    name: "Women White Pink Ethnic Set",
    source: "Store Catalogue",
    fabric: "Printed cotton blend",
    sizes: ["XS", "S", "M", "L"],
    styleMatch: "95%",
    drapeNote: "A soft white and pink ethnic set gives a premium celebration read with graceful coverage and easy movement.",
    occasion: "Festive celebration",
    price: "Rs.2,499",
    mrp: "Rs.3,999",
    off: "38% OFF",
    image: P("wishlist-1.png"),
    tryonImage: P("wishlist-1.png"),
    garment: "female-ethnic-set",
    fit: "female-body-fit",
    color: "#e7b5be",
    tags: ["All Products", "Women Topwear", "Ethnic", "Celebration", "Date", "Brand Store", "Store Exclusive Discount", "Scanned Products"],
  },
  {
    id: "dnmx-olive-denim-coord",
    gender: "female",
    brand: "DNMX",
    name: "Women Olive Tank With Wide-Leg Denim",
    source: "Store Catalogue",
    fabric: "Rib cotton and denim",
    sizes: ["XS", "S", "M", "L"],
    styleMatch: "91%",
    drapeNote: "The olive top and wide-leg denim make a strong casual-to-travel look with relaxed proportions.",
    occasion: "Casual day out",
    price: "Rs.1,899",
    mrp: "Rs.2,999",
    off: "37% OFF",
    image: P("wishlist-2.png"),
    tryonImage: P("wishlist-2.png"),
    garment: "female-casual-set",
    fit: "female-body-fit",
    color: "#747052",
    tags: ["All Products", "Women Topwear", "Casual", "Travel", "Smart Casual", "Sport Wear", "Brand Store", "Reorder Products"],
  },
  {
    id: "avaasa-printed-kurta-set",
    gender: "female",
    brand: "AVAASA",
    name: "Women Printed Kurta With Palazzos",
    source: "Store Catalogue",
    fabric: "Printed rayon blend",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "94%",
    drapeNote: "The printed kurta gives a polished ethnic line with light palazzos for family and festive occasions.",
    occasion: "Ethnic family event",
    price: "Rs.2,199",
    mrp: "Rs.3,499",
    off: "37% OFF",
    image: P("wishlist-3.png"),
    tryonImage: P("wishlist-3.png"),
    garment: "female-kurta-set",
    fit: "female-body-fit",
    color: "#8b4f36",
    tags: ["All Products", "Women Topwear", "Ethnic", "Celebration", "Office", "Brand Store", "Store Exclusive Discount"],
  },
  {
    id: "avaasa-yellow-festive-dress",
    gender: "female",
    brand: "AVAASA",
    name: "Women Yellow Embroidered Dress",
    source: "Store Catalogue",
    fabric: "Light woven cotton",
    sizes: ["XS", "S", "M", "L", "XL"],
    styleMatch: "93%",
    drapeNote: "Yellow embroidery creates a bright festive morning look while staying soft and breathable.",
    occasion: "Festive morning",
    price: "Rs.2,699",
    mrp: "Rs.4,299",
    off: "37% OFF",
    image: P("wishlist-4.png"),
    tryonImage: P("wishlist-4.png"),
    garment: "female-festive-dress",
    fit: "female-body-fit",
    color: "#d6c54d",
    tags: ["All Products", "Women Topwear", "Ethnic", "Celebration", "Resort", "Brand Store", "Store Exclusive Discount"],
  },
  {
    id: "avaasa-pink-ethnic-set",
    gender: "female",
    brand: "AVAASA",
    name: "Women Pink Celebration Kurta Set",
    source: "Store Catalogue",
    fabric: "Soft festive woven",
    sizes: ["S", "M", "L", "XL"],
    styleMatch: "92%",
    drapeNote: "A pink ethnic story gives an elegant celebration option for users who want a warmer event look.",
    occasion: "Celebration edit",
    price: "Rs.2,399",
    mrp: "Rs.3,799",
    off: "37% OFF",
    image: P("wishlist-1.png"),
    tryonImage: P("wishlist-1.png"),
    garment: "female-kurta-set",
    fit: "female-body-fit",
    color: "#d89aa8",
    tags: ["All Products", "Women Topwear", "Ethnic", "Celebration", "Date", "Store Exclusive Discount", "Reorder Products"],
  },
];

const previewProductId = products[0].id;
const galleryImages = [
  {
    id: "real-model-stadium",
    title: "Real Model Photo",
    meta: "Camera Roll",
    image: assets.realModel,
    gender: "male",
    guardrailStatus: "partial",
  },
  {
    id: "beige-gallery-model",
    title: "Beige Full Body",
    meta: "Gallery",
    image: assets.sample,
    gender: "male",
    guardrailStatus: "ready",
  },
  {
    id: "female-ethnic-gallery-model",
    title: "Female Ethnic Sample",
    meta: "TRENDS Gallery",
    image: P("wishlist-1.png"),
    gender: "female",
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
  selectedLiveMoment: "Live Moment",
  selectedGender: "male",
  detectedGender: "",
  autoSuggestStatus: "idle",
  autoSuggestNote: "",
  dailySurpriseId: "",
  liveMomentLocked: false,
  latestAnalysisToken: 0,
  uploadSourcePath: "",
  uploadedPhotoTitle: "",
  uploadedPhotoMeta: "",
  guardrailStatus: "pending",
  tryOnImageUrl: "",
  tryOnImageUri: "",
  tryOnImagePath: "",
  tryOnMode: "",
  tryOnMessage: "",
  tryOnError: "",
  tryOnRequestToken: 0,
  videoStatus: "idle",
  videoUri: "",
  videoUrl: "",
  videoObjectUrl: "",
  videoMode: "",
  videoOperationName: "",
  videoRequestToken: 0,
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
  activeApiBase: "",
  apiBaseNotice: "",
  toast: "",
};

const app = document.querySelector("#app");
let toastTimer = 0;

function normalizedGender(value) {
  return value === "female" ? "female" : "male";
}

function genderLabel(gender = state.selectedGender) {
  return normalizedGender(gender) === "female" ? "Female" : "Male";
}

function genderStyles(gender = state.selectedGender) {
  const target = normalizedGender(gender);
  return curatedLookbookStyles.filter((style) => style.gender === target);
}

function genderProducts(gender = state.selectedGender) {
  const target = normalizedGender(gender);
  return products.filter((product) => product.gender === target && product.id !== previewProductId);
}

function defaultStyleForGender(gender = state.selectedGender) {
  const target = normalizedGender(gender);
  return genderStyles(target)[0] || curatedLookbookStyles[0];
}

function defaultUploadStyleForGender(gender = state.selectedGender) {
  const target = normalizedGender(gender);
  const styles = genderStyles(target);
  return styles.find((style) => style.category === "Casual" && !style.dailySurprise)
    || styles.find((style) => style.category === "Office" && !style.dailySurprise)
    || styles.find((style) => !style.dailySurprise)
    || defaultStyleForGender(target);
}

function liveMomentByCategory(category = state.selectedLiveMoment) {
  return liveMomentCategories.find((moment) => moment.category === category) || liveMomentCategories[0];
}

function relatedMomentCategories(category = state.selectedLiveMoment) {
  const related = {
    "Live Moment": ["Casual", "Travel", "Sport Wear", "Office"],
    Office: ["Formal", "Casual", "Live Moment"],
    Date: ["Formal", "Celebration", "Casual"],
    Casual: ["Live Moment", "Travel", "Sport Wear"],
    "Sport Wear": ["Casual", "Travel", "Live Moment"],
    Ethnic: ["Celebration", "Formal", "Date"],
    Formal: ["Office", "Date", "Celebration"],
    Travel: ["Casual", "Resort", "Sport Wear"],
    Resort: ["Travel", "Casual", "Date"],
    Celebration: ["Ethnic", "Date", "Formal"],
  };
  return [category, ...(related[category] || ["Casual", "Office", "Live Moment"])];
}

function styleForLiveMoment(gender = state.selectedGender, category = state.selectedLiveMoment, meta = {}) {
  const target = normalizedGender(gender);
  const styles = genderStyles(target);
  const exact = styles.find((style) => style.category === category && !style.dailySurprise)
    || styles.find((style) => style.category === category);
  return exact || uploadStyleForGender(target, meta);
}

function liveMomentOutlooks(category = state.selectedLiveMoment, gender = state.selectedGender, limit = 6) {
  const target = normalizedGender(gender);
  const categories = relatedMomentCategories(category);
  const styles = genderStyles(target);
  const ranked = [
    ...styles.filter((style) => style.category === category),
    ...categories.flatMap((item) => styles.filter((style) => style.category === item && style.category !== category)),
    ...styles,
  ];
  const unique = [];
  for (const style of ranked) {
    if (!unique.some((item) => item.id === style.id)) unique.push(style);
    if (unique.length >= limit) break;
  }
  return unique;
}

function defaultProductForGender(gender = state.selectedGender) {
  const target = normalizedGender(gender);
  if (target === "male") return products.find((product) => product.id === previewProductId) || products[0];
  return genderProducts(target)[0] || products.find((product) => product.id === previewProductId) || products[0];
}

function productMatchesGender(productId, gender = state.selectedGender) {
  const product = products.find((item) => item.id === productId);
  if (!product) return false;
  return product.gender === normalizedGender(gender);
}

function selectedProduct() {
  const product = products.find((item) => item.id === state.selectedId);
  if (product && productMatchesGender(product.id, state.selectedGender)) return product;
  return defaultProductForGender(state.selectedGender);
}

function renderedProduct() {
  const product = products.find((item) => item.id === state.renderedId);
  if (product && productMatchesGender(product.id, state.selectedGender)) return product;
  return selectedProduct();
}

function selectedEnvironment() {
  return environmentAvatars.find((environment) => environment.id === state.selectedEnvironmentId) || environmentAvatars[0];
}

function selectedCameraMove() {
  return cameraDirectorMoves.find((move) => move.id === state.selectedCameraId) || cameraDirectorMoves[0];
}

function selectedLookbookStyle() {
  const style = curatedLookbookStyles.find((item) => item.id === state.selectedLookbookStyleId);
  if (style && style.gender === normalizedGender(state.selectedGender)) return style;
  return defaultStyleForGender(state.selectedGender);
}

function syncLookbookStyleInternals(style = selectedLookbookStyle()) {
  state.selectedEnvironmentId = style.environmentId;
  state.selectedCameraId = style.cameraId;
  if (style.category) state.selectedLiveMoment = style.category;
}

function currentRenderedImage(product = renderedProduct()) {
  return state.tryOnImageUrl || product.tryonImage;
}

function clearVideoState() {
  if (state.videoObjectUrl && window.URL && window.URL.revokeObjectURL) {
    window.URL.revokeObjectURL(state.videoObjectUrl);
  }
  state.videoRequestToken = 0;
  state.videoStatus = "idle";
  state.videoUri = "";
  state.videoUrl = "";
  state.videoObjectUrl = "";
  state.videoMode = "";
  state.videoOperationName = "";
  state.videoMessage = "";
}

function clearTryOnOutput() {
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnImagePath = "";
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
  state.selectedGender = normalizedGender(style.gender);
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  state.liveMomentLocked = true;
  state.activeCollection = style.tags[0] || "Men Topwear";
  if (!productMatchesGender(state.selectedId, state.selectedGender)) {
    const nextProduct = suggestedProductsForStyle(style)[0] || defaultProductForGender(state.selectedGender);
    state.selectedId = nextProduct.id;
  }
  state.searchQuery = "";
  clearTryOnOutput();
  render();
  flash(`${style.label} unlocked`);
}

function selectLiveMoment(category) {
  const moment = liveMomentByCategory(category);
  state.selectedLiveMoment = moment.category;
  const style = styleForLiveMoment(state.selectedGender, moment.category, {
    title: `${state.uploadedPhotoTitle} ${state.autoSuggestNote}`,
    meta: `${state.uploadedPhotoMeta} ${moment.prompt}`,
  });
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  state.liveMomentLocked = true;
  if (!productMatchesGender(state.selectedId, state.selectedGender)) {
    state.selectedId = previewProductId;
  }
  if (state.route === "tryon" && state.renderStatus !== "rendered") {
    state.selectedId = previewProductId;
    state.renderStatus = "ready";
  } else if (state.route === "pdp") {
    const product = suggestedProductsForStyle(style)[0] || defaultProductForGender(state.selectedGender);
    state.selectedId = product.id;
    state.renderStatus = "selected";
  }
  state.activeCollection = style.tags[0] || (state.selectedGender === "female" ? "Women Topwear" : "Men Topwear");
  state.autoSuggestStatus = state.uploadConfirmed ? "ready" : state.autoSuggestStatus;
  state.autoSuggestNote = state.uploadConfirmed
    ? `${moment.label} selected. Choose one outlook below or open the top PDP match.`
    : state.autoSuggestNote;
  state.searchQuery = "";
  state.dailySurpriseId = "";
  clearTryOnOutput();
  render();
  flash(`${moment.label} outlooks ready`);
}

function setCatalogueLane(gender, options = {}) {
  const nextGender = normalizedGender(gender);
  const nextStyle = state.uploadConfirmed
    ? styleForLiveMoment(nextGender, state.selectedLiveMoment)
    : defaultStyleForGender(nextGender);
  state.selectedGender = nextGender;
  state.detectedGender = state.detectedGender || nextGender;
  state.selectedLookbookStyleId = nextStyle.id;
  syncLookbookStyleInternals(nextStyle);
  const nextProduct = suggestedProductsForStyle(nextStyle)[0] || defaultProductForGender(nextGender);
  state.selectedId = nextProduct.id;
  state.renderedId = previewProductId;
  state.selectedSize = "";
  state.activeCollection = nextStyle.tags[0] || (nextGender === "female" ? "Women Topwear" : "Men Topwear");
  state.searchQuery = "";
  state.dailySurpriseId = "";
  state.autoSuggestStatus = state.uploadConfirmed ? "ready" : "idle";
  state.autoSuggestNote = state.uploadConfirmed
    ? `${genderLabel(nextGender)} catalogue lane selected. I can auto-suggest a PDP look from here.`
    : "";
  clearTryOnOutput();
  state.renderStatus = state.uploadConfirmed ? "selected" : "ready";
  if (!options.silent) {
    render();
    flash(`${genderLabel(nextGender)} catalogue lane selected`);
  }
}

function autoSuggestLook(options = {}) {
  if (!state.uploadConfirmed) {
    state.galleryOpen = true;
    state.route = "tryon";
    render();
    resetScroll();
    flash("Upload an image first");
    return;
  }
  const style = styleForLiveMoment(state.selectedGender, state.selectedLiveMoment, {
    title: `${state.uploadedPhotoTitle} ${state.autoSuggestNote}`,
    meta: state.uploadedPhotoMeta,
  });
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  const product = suggestedProductsForStyle(style)[0] || defaultProductForGender(state.selectedGender);
  state.selectedId = product.id;
  state.renderedId = previewProductId;
  state.selectedSize = "";
  state.renderStatus = "selected";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnImagePath = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  state.autoSuggestStatus = "ready";
  state.autoSuggestNote = `${style.label} selected with ${product.brand} ${product.name} as the strongest PDP match.`;
  state.route = options.stay ? "tryon" : "pdp";
  render();
  resetScroll();
  flash("Auto suggestion ready");
}

function dailySurpriseStylesForGender(gender = state.selectedGender) {
  return genderStyles(gender).filter((style) => style.dailySurprise).slice(0, 10);
}

function dailySurpriseIndex(total) {
  if (!total) return 0;
  const dateKey = new Date().toISOString().slice(0, 10);
  const seed = `${dateKey}-${state.uploadedPhotoTitle || "guest"}-${state.selectedGender}`;
  let hash = 0;
  for (let index = 0; index < seed.length; index += 1) {
    hash = (hash * 31 + seed.charCodeAt(index)) >>> 0;
  }
  return hash % total;
}

function surpriseMeForTheDay(options = {}) {
  if (!state.uploadConfirmed) {
    state.galleryOpen = true;
    state.route = "tryon";
    render();
    resetScroll();
    flash("Upload an image first");
    return;
  }
  const choices = dailySurpriseStylesForGender(state.selectedGender);
  const style = options.random
    ? choices[Math.floor(Math.random() * choices.length)]
    : choices[dailySurpriseIndex(choices.length)];
  if (!style) return;
  state.selectedLookbookStyleId = style.id;
  state.dailySurpriseId = style.id;
  syncLookbookStyleInternals(style);
  state.liveMomentLocked = true;
  const productsForStyle = suggestedProductsForStyle(style);
  const product = productsForStyle[options.random ? Math.floor(Math.random() * productsForStyle.length) : 0] || defaultProductForGender(state.selectedGender);
  state.selectedId = product.id;
  state.renderedId = previewProductId;
  state.selectedSize = "";
  state.renderStatus = "selected";
  clearTryOnOutput();
  state.autoSuggestStatus = "ready";
  state.autoSuggestNote = `${style.label} is today's surprise. It is built for ${style.occasion} with ${product.brand} as the PDP anchor.`;
  state.route = "pdp";
  render();
  resetScroll();
  flash(`${style.label} picked for today`);
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
  return genderProducts(state.selectedGender);
}

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeApiBase(value = "") {
  return String(value || "").trim().replace(/\/+$/, "");
}

function addUniqueApiBase(list, base) {
  const normalized = normalizeApiBase(base);
  if (normalized && !list.includes(normalized)) list.push(normalized);
}

function apiBaseCandidates(preferredBase = "") {
  const params = new URLSearchParams(String(window.location.search || ""));
  const queryBase = normalizeApiBase(params.get("apiBase"));
  const candidates = [];
  addUniqueApiBase(candidates, preferredBase);
  addUniqueApiBase(candidates, state.activeApiBase);
  addUniqueApiBase(candidates, queryBase);
  try {
    addUniqueApiBase(candidates, window.localStorage?.getItem("companionApiBase"));
  } catch {
    // Ignore private browsing storage failures.
  }

  const hostname = String(window.location.hostname || "");
  const isStaticPage = window.location.protocol === "file:" || hostname.endsWith("github.io");
  if (isStaticPage) addUniqueApiBase(candidates, currentLiveApiBase);
  if (window.location.protocol !== "https:") addUniqueApiBase(candidates, "http://127.0.0.1:4173");
  if (!isStaticPage) candidates.push("");
  return candidates;
}

function rememberApiBase(base) {
  const normalized = normalizeApiBase(base);
  state.activeApiBase = normalized;
  state.apiBaseNotice = normalized ? `Connected to ${normalized}` : "Connected to current app server";
  try {
    if (normalized) {
      window.localStorage?.setItem("companionApiBase", normalized);
    } else {
      window.localStorage?.removeItem?.("companionApiBase");
    }
  } catch {
    // Ignore private browsing storage failures.
  }
}

function configuredApiBase() {
  if (state.activeApiBase) return state.activeApiBase;
  const params = new URLSearchParams(String(window.location.search || ""));
  return apiBaseCandidates(normalizeApiBase(params.get("apiBase")))[0] || "";
}

function apiUrl(path, base = configuredApiBase()) {
  return base ? `${base}${path}` : path;
}

function apiAssetUrl(value, base = configuredApiBase()) {
  const src = String(value || "");
  if (!src || /^(data:|blob:|https?:|gs:\/\/)/.test(src)) return src;
  return base && src.startsWith("/") ? `${base}${src}` : src;
}

function realBackendRequiredMessage(action) {
  const base = configuredApiBase();
  return `${action} needs the live Vertex backend${base ? ` at ${base}` : ""}. If this public link was opened with an old apiBase, reload with the latest share link or keep the Node server/tunnel running with Google credentials, then try again.`;
}

function recoverableApiStatus(status) {
  return [0, 404, 502, 503, 504].includes(Number(status || 0));
}

async function fetchApiJson(path, options = {}, config = {}) {
  const candidates = apiBaseCandidates(config.preferredBase);
  let lastError = null;
  for (const base of candidates) {
    try {
      const response = await fetch(apiUrl(path, base), options);
      const data = await response.json().catch(() => ({}));
      const status = Number(response.status || 0);
      if (response.ok || !recoverableApiStatus(status) || base === candidates[candidates.length - 1]) {
        rememberApiBase(base);
        return { response, data, base };
      }
      lastError = new Error(data.error || `Backend ${base || "same-origin"} returned ${status || "an unavailable response"}`);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError || new Error("No live Vertex backend was reachable");
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
  const pool = genderProducts(style.gender || state.selectedGender);
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
  return [...new Set(genderStyles().map((style) => style.category))];
}

function routeTo(route, options = {}) {
  if (options.collection) {
    state.activeCollection = options.collection;
    const currentGender = state.selectedGender;
    if (/^women/i.test(options.collection)) state.selectedGender = "female";
    if (/^men/i.test(options.collection)) state.selectedGender = "male";
    if (currentGender !== state.selectedGender) {
      const nextStyle = defaultStyleForGender(state.selectedGender);
      state.selectedLookbookStyleId = nextStyle.id;
      syncLookbookStyleInternals(nextStyle);
    }
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
  const baseGender = normalizedGender(options.preserveStyle ? state.selectedGender : state.detectedGender || state.selectedGender);
  const baseStyle = options.preserveStyle ? selectedLookbookStyle() : defaultStyleForGender(baseGender);
  const baseProduct = defaultProductForGender(baseGender);
  state.selectedGender = baseGender;
  state.selectedLookbookStyleId = baseStyle.id;
  state.selectedId = baseProduct.id;
  state.renderedId = previewProductId;
  state.uploadedPhoto = null;
  state.uploadSourcePath = "";
  state.uploadedPhotoTitle = "";
  state.uploadedPhotoMeta = "";
  state.guardrailStatus = "pending";
  state.autoSuggestStatus = "idle";
  state.autoSuggestNote = "";
  state.dailySurpriseId = "";
  state.liveMomentLocked = Boolean(options.preserveStyle);
  syncLookbookStyleInternals(baseStyle);
  state.renderStatus = "ready";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnImagePath = "";
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
    return galleryImages.filter((item) => item.id !== "real-model-stadium");
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

function inferGenderLaneFromText(value = "") {
  const text = String(value).toLowerCase();
  if (/\b(female|woman|women|girl|lady|ladies|her|she|kurta|saree|dress|ethnic|avaasa)\b/.test(text)) return "female";
  if (/\b(male|man|men|boy|him|he|shirt|tee|polo|bomber|trouser|teamspirit|netplay|performax)\b/.test(text)) return "male";
  return "";
}

function uploadGenderLane(meta = {}) {
  return normalizedGender(meta.gender || inferGenderLaneFromText(`${meta.title || ""} ${meta.meta || ""}`) || state.selectedGender);
}

function uploadStyleForGender(gender, meta = {}) {
  const target = normalizedGender(gender);
  const titleSignal = `${meta.title || ""} ${meta.meta || ""}`;
  const preferredCategory = inferCategoryFromText(titleSignal);
  const styles = genderStyles(target);
  return styles.find((style) => style.category === preferredCategory)
    || defaultUploadStyleForGender(target);
}

function inferCategoryFromText(value = "") {
  const text = String(value).toLowerCase();
  if (/office|work|meeting|formal|interview/.test(text)) return text.includes("formal") || text.includes("interview") ? "Formal" : "Office";
  if (/date|dinner|anniversary|party/.test(text)) return "Date";
  if (/sport|gym|active|run|walk/.test(text)) return "Sport Wear";
  if (/ethnic|festive|kurta|saree|wedding|celebration|function/.test(text)) return "Ethnic";
  if (/travel|airport|trip|resort|vacay|holiday/.test(text)) return text.includes("resort") || text.includes("vacay") ? "Resort" : "Travel";
  return "";
}

function applyRecommendedLane(gender, options = {}) {
  const nextGender = normalizedGender(gender);
  const nextStyle = options.style || uploadStyleForGender(nextGender, options.meta || {});
  const shouldSelectProduct = options.selectProduct !== false;
  state.selectedGender = nextGender;
  state.detectedGender = nextGender;
  state.selectedLookbookStyleId = nextStyle.id;
  syncLookbookStyleInternals(nextStyle);
  if (shouldSelectProduct) {
    const nextProduct = suggestedProductsForStyle(nextStyle)[0] || defaultProductForGender(nextGender);
    state.selectedId = nextProduct.id;
  } else {
    state.selectedId = previewProductId;
  }
  state.renderedId = previewProductId;
  state.renderStatus = state.uploadConfirmed && shouldSelectProduct ? "selected" : "ready";
  state.activeCollection = nextStyle.tags[0] || (nextGender === "female" ? "Women Topwear" : "Men Topwear");
}

async function analyzeUploadedImage(meta = {}) {
  if (!state.uploadedPhoto) return;
  const analysisToken = Date.now();
  state.latestAnalysisToken = analysisToken;
  state.autoSuggestStatus = "reading";
  state.autoSuggestNote = "Reading the image for the best catalogue lane, occasion and outfit direction.";
  render();

  try {
    const imagePayload = state.uploadedPhoto.startsWith("data:image/")
      ? { imageDataUrl: state.uploadedPhoto }
      : { imagePath: state.uploadSourcePath || state.uploadedPhoto };
    const { response, data } = await fetchApiJson("/api/analyze-upload-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...imagePayload,
        title: state.uploadedPhotoTitle,
        meta: state.uploadedPhotoMeta,
        requestedGenderLane: state.selectedGender,
      }),
    });
    if (!response.ok) throw new Error(data.error || "Style analysis failed");
    if (state.latestAnalysisToken !== analysisToken) return;
    const nextGender = normalizedGender(data.recommendedGenderLane || data.genderLane || state.selectedGender);
    const preferredCategory = data.preferredCategory || inferCategoryFromText(`${data.occasion || ""} ${(data.tags || []).join(" ")}`);
    const nextStyle = genderStyles(nextGender).find((style) => style.category === preferredCategory) || uploadStyleForGender(nextGender, meta);
    const shouldApplyAnalysis = !state.liveMomentLocked && state.selectedId === previewProductId && state.renderStatus !== "rendering" && state.renderStatus !== "rendered";
    if (shouldApplyAnalysis) {
      applyRecommendedLane(nextGender, { style: nextStyle, meta, selectProduct: false });
    }
    state.autoSuggestStatus = "ready";
    state.autoSuggestNote = state.liveMomentLocked
      ? `${state.selectedLiveMoment} moment kept. ${data.note || "The image read is complete, and the catalogue is ready."}`
      : data.note || `${genderLabel(nextGender)} catalogue lane unlocked from the image read. Choose a live moment or PDP to build next.`;
    render();
  } catch (error) {
    if (state.latestAnalysisToken !== analysisToken) return;
    state.autoSuggestStatus = "error";
    state.autoSuggestNote = `${genderLabel(state.selectedGender)} catalogue lane is available from upload guardrails, but real AI image analysis did not complete: ${error.message}`;
    render();
  }
}

function confirmUploadedImage(image, meta = {}) {
  const detectedLane = uploadGenderLane(meta);
  state.uploadedPhoto = image;
  state.uploadSourcePath = meta.sourcePath || (String(image).startsWith("data:image/") ? "" : image);
  state.uploadedPhotoTitle = meta.title || "Uploaded Image";
  state.uploadedPhotoMeta = meta.meta || "Device Gallery";
  state.guardrailStatus = meta.guardrailStatus || "ready";
  state.detectedGender = detectedLane;
  state.liveMomentLocked = false;
  applyRecommendedLane(detectedLane, { meta, selectProduct: false });
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnImagePath = "";
  state.tryOnMode = "";
  state.tryOnMessage = "";
  state.tryOnError = "";
  clearVideoState();
  state.uploadConfirmed = true;
  state.renderStatus = "ready";
  state.galleryOpen = false;
  state.activeCollection = selectedLookbookStyle().tags[0] || "Men Topwear";
  state.searchQuery = "";
  state.autoSuggestStatus = "ready";
  state.autoSuggestNote = `${genderLabel(detectedLane)} catalogue lane unlocked. Choose a suggested PDP below, or open the top PDP match.`;
  render();
  flash("Senior Stylist suggestions ready");
  resetScroll();
  analyzeUploadedImage(meta);
}

function selectGalleryImage(id) {
  const galleryImage = galleryImages.find((item) => item.id === id) || galleryImages[0];
  confirmUploadedImage(galleryImage.image, {
    title: galleryImage.title,
    meta: galleryImage.meta,
    sourcePath: galleryImage.image,
    guardrailStatus: galleryImage.guardrailStatus,
    gender: galleryImage.gender,
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
  const nextGender = normalizedGender(next.gender);
  if (state.selectedGender !== nextGender) {
    state.selectedGender = nextGender;
    const nextStyle = genderStyles(nextGender).find((style) => (style.productIds || []).includes(next.id)) || defaultStyleForGender(nextGender);
    state.selectedLookbookStyleId = nextStyle.id;
    syncLookbookStyleInternals(nextStyle);
  }
  state.selectedId = id;
  state.selectedSize = "";
  clearTryOnOutput();
  state.route = "pdp";
  state.renderStatus = state.renderedId === id ? "rendered" : "selected";
  render();
  resetScroll();
}

function startProductDraping() {
  if (state.renderStatus === "rendering") {
    flash("Lookbook creation is running");
    return;
  }
  if (!state.uploadConfirmed) {
    if (state.route !== "tryon") state.previousRoute = state.route;
    state.route = "tryon";
    state.renderStatus = "ready";
    state.galleryOpen = true;
    render();
    resetScroll();
    return;
  }
  if (state.selectedId === previewProductId) {
    state.route = "discover";
    state.renderStatus = "ready";
    render();
    resetScroll();
    flash("Select a suggested PDP first");
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
  return renderOnModel();
}

async function renderOnModel() {
  if (state.renderStatus === "rendering") {
    flash("Lookbook creation is running");
    return;
  }
  if (!state.uploadConfirmed) {
    openGallery();
    return;
  }
  const product = selectedProduct();
  if (state.selectedId === previewProductId || product.id === previewProductId) {
    state.route = "discover";
    state.renderStatus = "ready";
    render();
    resetScroll();
    flash("Select a suggested PDP first");
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
  state.tryOnImagePath = "";
  state.tryOnMode = "";
  state.tryOnError = "";
  state.tryOnMessage = `Senior Stylist is styling ${product.brand} for ${style.label}`;
  clearVideoState();
  render();
  resetScroll();
  try {
    const personPayload = state.uploadedPhoto && state.uploadedPhoto.startsWith("data:image/")
      ? { personImageDataUrl: state.uploadedPhoto }
      : { personImagePath: state.uploadSourcePath || state.uploadedPhoto };
    const { response, data, base } = await fetchApiJson("/api/generate-tryon-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...personPayload,
        productImagePath: product.image,
        lookbookStyle: style,
        gender: state.selectedGender,
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
    if (!response.ok) {
      throw new Error(data.error || "Lookbook image generation failed");
    }
    const generatedImage = data.imageDataUrl || data.imageUrl || "";
    const displayImage = apiAssetUrl(generatedImage, base);
    if (data.mode !== "vertex-try-on" || data.status !== "done" || !displayImage) {
      throw new Error("Vertex VTO did not return a displayable generated image");
    }
    if (state.tryOnRequestToken !== requestToken) return;
    state.renderedId = state.selectedId;
    state.tryOnImageUrl = displayImage;
    state.tryOnImageUri = data.imageUri || "";
    state.tryOnImagePath = data.imagePath || (String(data.imageUrl || "").startsWith("/") ? data.imageUrl : "");
    state.tryOnMode = "vertex-try-on";
    state.tryOnMessage = "Real Vertex VTO Lookbook image created and saved";
    state.renderStatus = "rendered";
    saveCurrentLookToLookbook({ silent: true });
    render();
    flash("AI Lookbook ready");
  } catch (error) {
    if (state.tryOnRequestToken !== requestToken) return;
    state.renderedId = previewProductId;
    state.tryOnImageUrl = "";
    state.tryOnImageUri = "";
    state.tryOnImagePath = "";
    state.tryOnMode = "";
    state.tryOnError = error.message;
    state.tryOnMessage = realBackendRequiredMessage("Real AI Lookbook image generation");
    state.renderStatus = "selected";
    render();
    flash("Real AI generation failed");
  }
}

function saveCurrentLookToLookbook(options = {}) {
  if (state.renderStatus !== "rendered") {
    flash("Create a Lookbook first");
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
    imagePath: state.tryOnImagePath,
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
    flash("Create a Lookbook first");
    return;
  }
  saveCurrentLookToLookbook({ silent: true });
  const product = renderedProduct();
  const style = selectedLookbookStyle();
  const text = `I saved ${product.brand} ${product.name} into my ${style.label} AI Lookbook with TRENDS Companion.`;
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
    flash("Create a Lookbook first");
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
  state.tryOnImagePath = look.imagePath || "";
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
  flash("Create this PDP as a Lookbook first");
}

function tryAnotherLook() {
  const nextProduct = state.uploadConfirmed
    ? suggestedProductsForStyle()[0] || defaultProductForGender(state.selectedGender)
    : defaultProductForGender(state.selectedGender);
  state.selectedId = nextProduct.id;
  state.renderedId = previewProductId;
  state.activeCollection = selectedLookbookStyle().tags[0] || "Men Topwear";
  state.searchQuery = "";
  state.renderStatus = "ready";
  state.tryOnImageUrl = "";
  state.tryOnImageUri = "";
  state.tryOnImagePath = "";
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
  surpriseMeForTheDay({ random: true });
}

function reverseLookbookPrompt(product, environment = selectedEnvironment(), cameraMove = selectedCameraMove(), style = selectedLookbookStyle()) {
  const avatarAnchor = state.uploadedPhoto && state.uploadedPhoto.startsWith("data:image/")
    ? "Use the uploaded customer image as the avatar identity anchor and adapt the selected PDP outfit onto that person."
    : "Use the generated catalogue lookbook image as the first-frame avatar identity anchor.";
  return [
    "Single continuous shot, 8 seconds, vertical 9:16, premium mobile-first fashion lookbook video.",
    "Higgsfield-style director prompt: state the shot structure first, then camera movement, subject motion, environment, lighting and final reward frame.",
    avatarAnchor,
    `PDP source: ${product.brand} ${product.name}, ${product.fabric}, ${product.fit}, colour ${product.color}, ${product.price}, ${product.off}.`,
    `Curated lookbook edit: ${style.label}, category ${style.category}, occasion ${style.occasion}. Senior Stylist reason: ${style.reason}`,
    `Occasion avatar: ${environment.label} for ${environment.occasion}. Environment: ${environment.scene}.`,
    `Camera director: ${cameraMove.label}. ${cameraMove.motion}. Framing: ${cameraMove.framing}. Beat: ${cameraMove.beat}.`,
    `Motion grammar: ${environment.motion}. Use a controlled creator-camera move: gentle orbit or push-in, clean stabilization, no jitter, no cuts, no warped background.`,
    "Reference-video feel: clean Pro Earth full-body studio reveal plus Vacay Resortwear vertical retail energy; polished, warm, aspirational and not gimmicky.",
    `Styling intent: ${product.drapeNote}`,
    `Journey: start with curiosity, reveal one tasteful surprise beat around the outfit, then end with gratification: ${environment.gratification}.`,
    `Keep a complete shopper-safe ${state.selectedGender} full-body catalogue frame, consistent avatar identity, unchanged garment category, premium store catalogue lighting, and no distorted product details or text artifacts.`,
    "Do not imply guaranteed fit; show style, colour, silhouette, and occasion confidence only.",
  ].join(" ");
}

function videoPrompt(product, environment = selectedEnvironment(), cameraMove = selectedCameraMove(), style = selectedLookbookStyle()) {
  return reverseLookbookPrompt(product, environment, cameraMove, style);
}

function waitForLookbookVideo(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function applyVertexVideoResult(data, base = configuredApiBase()) {
  if (data.mode !== "vertex") {
    throw new Error("Veo did not return a real Vertex response");
  }
  const displayUrl = apiAssetUrl(data.videoUrl || (String(data.videoUri || "").startsWith("/") ? data.videoUri : ""), base);
  if (data.status === "done" && !displayUrl) {
    throw new Error("Veo returned no playable video URL for this prototype");
  }
  state.videoMode = "vertex";
  state.videoOperationName = data.operationName || state.videoOperationName || "";
  state.videoUri = data.videoUri || "";
  state.videoUrl = displayUrl;
  state.videoStatus = data.status === "done" ? "ready" : "running";
  state.videoMessage = data.message || (state.videoStatus === "ready" ? "Vertex generated the lookbook video." : "Vertex video generation is still running.");
}

async function pollLookbookVideo(operationName, requestToken) {
  if (!operationName) return;
  for (let attempt = 0; attempt < 24; attempt += 1) {
    await waitForLookbookVideo(15000);
    if (state.videoRequestToken !== requestToken || state.videoStatus !== "running") return;
    try {
      const { response, data, base } = await fetchApiJson("/api/vertex-video-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ operationName }),
      }, { preferredBase: state.activeApiBase });
      if (!response.ok) throw new Error(data.error || "Video status check failed");
      applyVertexVideoResult(data, base);
      render();
      if (state.videoStatus === "ready") {
        flash("Veo video ready");
        return;
      }
    } catch (error) {
      state.videoStatus = "error";
      state.videoMode = "";
      state.videoMessage = `${realBackendRequiredMessage("Real Veo Lookbook video generation")} ${error.message}`;
      render();
      flash("Veo video failed");
      return;
    }
  }
  if (state.videoRequestToken !== requestToken) return;
  state.videoStatus = "error";
  state.videoMode = "";
  state.videoMessage = "Veo generation is still not finished after the prototype wait window. Try Generate Lookbook Video again to check a fresh operation.";
  render();
}

async function generateLookbookVideo() {
  if (state.renderStatus !== "rendered") {
    flash("Create a Lookbook first");
    return;
  }
  const product = renderedProduct();
  const environment = selectedEnvironment();
  const cameraMove = selectedCameraMove();
  const style = selectedLookbookStyle();
  const renderedImage = currentRenderedImage(product);
  const payload = {
    productId: product.id,
    prompt: videoPrompt(product, environment, cameraMove, style),
    referenceStyle: `${style.label} lookbook inspired by the supplied Pro Earth Men and Vacay Resortwear video references: vertical full-body product clarity, controlled ${cameraMove.label} motion, warm premium light, and a final saved-look reward frame.`,
    environment,
    cameraMove,
    lookbookStyle: style,
    gender: state.selectedGender,
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
  } else if (state.tryOnImageUri && state.tryOnImageUri.startsWith("gs://")) {
    payload.imageUri = state.tryOnImageUri;
  } else if (state.tryOnImagePath) {
    payload.imagePath = state.tryOnImagePath;
  } else if (renderedImage && !renderedImage.startsWith("gs://")) {
    payload.imagePath = renderedImage;
  }
  const requestToken = Date.now();
  state.videoRequestToken = requestToken;
  state.videoStatus = "generating";
  if (state.videoObjectUrl && window.URL && window.URL.revokeObjectURL) {
    window.URL.revokeObjectURL(state.videoObjectUrl);
  }
  state.videoUri = "";
  state.videoUrl = "";
  state.videoObjectUrl = "";
  state.videoMode = "";
  state.videoOperationName = "";
  state.videoMessage = `Creating ${style.label} lookbook video`;
  render();

  try {
    const { response, data, base } = await fetchApiJson("/api/generate-lookbook-video", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!response.ok) {
      throw new Error(data.error || "Video generation failed");
    }
    if (state.videoRequestToken !== requestToken) return;
    applyVertexVideoResult(data, base);
    render();
    if (state.videoStatus === "ready") {
      flash("Veo video ready");
      return;
    }
    flash("Veo video started");
    pollLookbookVideo(state.videoOperationName, requestToken);
  } catch (error) {
    if (state.videoRequestToken !== requestToken) return;
    state.videoStatus = "error";
    state.videoMode = "";
    state.videoUri = "";
    state.videoUrl = "";
    state.videoObjectUrl = "";
    state.videoOperationName = "";
    state.videoMessage = `${realBackendRequiredMessage("Real Veo Lookbook video generation")} ${error.message}`;
    render();
    flash("Veo video failed");
  }
}

function openGeneratedVideo() {
  if (!state.videoUrl) {
    flash("Generate the Lookbook video first");
    return;
  }
  window.open(state.videoUrl, "_blank", "noopener,noreferrer");
  flash("Opening Lookbook video");
}

function playGeneratedVideo() {
  const video = document.querySelector("[data-lookbook-video]");
  if (!video) {
    flash("Generate the Lookbook video first");
    return;
  }
  if (video.paused) {
    video.play().then(() => {
      flash("Playing Lookbook video");
    }).catch(() => {
      openGeneratedVideo();
    });
    return;
  }
  video.pause();
  flash("Video paused");
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
    tryon: ["AI Lookbook", "Senior Stylist"],
    pdp: ["Product Details", "Catalogue PDP"],
    lookbook: ["Lookbook", `${state.lookbookItems.length} saved looks`],
    tv: ["Store TV Preview", "30 sec cast"],
    scan: ["Scan Items", `${state.scanCount}/3 scanned`],
    orders: ["Order History", "TRENDS"],
    account: ["Profile", "AI Stylist account"],
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
            <span>AI Lookbook</span>
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
  const previewStyles = genderStyles().slice(0, 5);
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
            <p>I can read your uploaded image, recommend the right catalogue lane, and build a personal lookbook for office, dates, casual plans, sport wear, ethnic moments and more.</p>
          </div>
        </div>
        ${genderSwitch()}
        <div class="lookbook-counts">
          <span><b>${curatedStyleCounts.male}</b> male style ideas</span>
          <span><b>${curatedStyleCounts.female}</b> female style ideas</span>
          <span><b>${curatedStyleCounts.maleSurprises + curatedStyleCounts.femaleSurprises}</b> day surprises</span>
        </div>
        <div class="journey-steps">
          <span>Upload</span>
          <span>Auto Suggest</span>
          <span>Lookbook</span>
        </div>
        <div class="home-style-preview rail">
          ${previewStyles.map((item) => `
            <button class="home-style-chip ${item.id === style.id ? "active" : ""}" data-style="${item.id}" style="--style-accent:${item.accent}">
              <span>${item.category}</span>
              <strong>${item.label}</strong>
            </button>
          `).join("")}
        </div>
        <button class="wide-dark" data-route="tryon" data-preserve-style="true">Start AI Lookbook</button>
        <button class="wide-outline" data-action="surprise-look">Surprise Me For The Day</button>
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

function primaryProductForStyle(style) {
  const pool = products.filter((product) => product.gender === normalizedGender(style.gender) && product.id !== previewProductId);
  return (style.productIds || [])
    .map((id) => pool.find((product) => product.id === id))
    .find(Boolean) || pool[0] || products[0];
}

function createLookbookFromStyle(id) {
  const style = curatedLookbookStyles.find((item) => item.id === id);
  if (!style) return;
  state.selectedGender = normalizedGender(style.gender);
  state.detectedGender = state.detectedGender || state.selectedGender;
  state.selectedLookbookStyleId = style.id;
  syncLookbookStyleInternals(style);
  state.liveMomentLocked = true;
  const product = primaryProductForStyle(style);
  state.selectedId = product.id;
  state.renderedId = previewProductId;
  state.selectedSize = "";
  state.activeCollection = style.tags[0] || (state.selectedGender === "female" ? "Women Topwear" : "Men Topwear");
  state.searchQuery = "";
  state.dailySurpriseId = style.dailySurprise ? style.id : "";
  state.autoSuggestStatus = state.uploadConfirmed ? "ready" : "idle";
  state.autoSuggestNote = state.uploadConfirmed
    ? `${style.label} selected with ${product.brand} ${product.name} as the PDP anchor.`
    : `${style.label} selected. Upload an image so I can build this Lookbook around the shopper.`;
  clearTryOnOutput();
  if (!state.uploadConfirmed) {
    state.route = "tryon";
    state.renderStatus = "ready";
    state.galleryOpen = true;
    render();
    resetScroll();
    flash("Upload an image first");
    return;
  }
  state.route = "pdp";
  state.renderStatus = "selected";
  render();
  resetScroll();
  flash(`${style.label} ready`);
}

function lookbookStyleCard(style, index) {
  const product = primaryProductForStyle(style);
  return `
    <article class="style-library-card" style="--style-accent:${style.accent}">
      <button class="style-library-image" data-create-style="${style.id}" aria-label="Create ${style.label} Lookbook">
        <img src="${product.tryonImage || product.image}" alt="${style.label} ${product.brand} look" />
        <span>${style.dailySurprise ? "Surprise" : `Look ${String(index + 1).padStart(2, "0")}`}</span>
      </button>
      <div class="style-library-copy">
        <em>${style.gender === "female" ? "Female" : "Male"} · ${style.category}</em>
        <strong>${style.label}</strong>
        <p>${style.occasion}</p>
        <b>${style.confidence} stylist match</b>
      </div>
      <button class="style-library-action" data-create-style="${style.id}">Create Lookbook</button>
    </article>
  `;
}

function lookbookLibrarySection() {
  const lanes = [
    ["male", "Male Styles"],
    ["female", "Female Styles"],
  ];
  return `
    <section class="lookbook-library">
      <div class="library-heading">
        <span>Curated Lookbook Library</span>
        <strong>${curatedStyleCounts.male + curatedStyleCounts.female} occasion ideas</strong>
        <p>Office, dates, casual plans, sport wear, ethnic moments, travel, resort, celebrations and store hero looks, ready to create from the uploaded image.</p>
      </div>
      <div class="library-actions">
        <button class="wide-dark" data-action="auto-suggest">Auto Suggest From Upload</button>
        <button class="wide-outline" data-action="daily-surprise">Surprise Me For The Day</button>
      </div>
      ${lanes.map(([gender, label]) => {
        const styles = genderStyles(gender);
        const surpriseCount = styles.filter((style) => style.dailySurprise).length;
        return `
          <div class="library-lane">
            <div class="library-lane-heading">
              <span>${label}</span>
              <b>${styles.length} styles · ${surpriseCount} surprises</b>
            </div>
            <div class="style-library-rail rail">
              ${styles.map((style, index) => lookbookStyleCard(style, index)).join("")}
            </div>
          </div>
        `;
      }).join("")}
    </section>
  `;
}

function analystNudge(context, product = selectedProduct()) {
  const style = selectedLookbookStyle();
  const copy = {
    discover: `I am matching ${genderLabel().toLowerCase()} catalogue PDPs to your uploaded image, selected live moment and ${style.label} brief. Pick a product and I will turn it into a saved Lookbook result.`,
    upload: `Start with a real image. I will check upload guardrails, read the live mood, then curate Office, Date, Casual, Sport Wear, Ethnic and celebration outlooks before showing products.`,
    lookbook: `Saved looks become your digital closet. Reopen any look, generate a reference-style clip, share it, cast it, or add it to bag.`,
  }[context] || `I am matching ${product.brand} with your ${style.label} edit so the result feels personal, useful and store-ready.`;
  return `
    <section class="analyst-nudge">
      <span>AI Senior Stylist</span>
      <p>${copy}</p>
    </section>
  `;
}

function lookbookProgress(active = "upload") {
  const steps = [
    ["upload", "Upload"],
    ["read", "Style Read"],
    ["pdp", "PDP"],
    ["lookbook", "Lookbook"],
    ["share", "Share/Bag"],
  ];
  const activeIndex = Math.max(0, steps.findIndex(([id]) => id === active));
  return `
    <section class="lookbook-progress" aria-label="AI Lookbook journey">
      ${steps.map(([id, label], index) => `
        <span class="${index < activeIndex ? "done" : ""} ${id === active ? "active" : ""}">
          <i>${index + 1}</i>
          <b>${label}</b>
        </span>
      `).join("")}
    </section>
  `;
}

function loadingOrbit(title, detail = "", meta = "") {
  return `
    <div class="loading-orbit" role="status" aria-live="polite">
      <i aria-hidden="true"></i>
      <div>
        <strong>${title}</strong>
        ${detail ? `<span>${detail}</span>` : ""}
        ${meta ? `<em>${meta}</em>` : ""}
      </div>
    </div>
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
        <span><b>Lane</b> ${genderLabel()} catalogue · ${genderStyles().length} edits</span>
        <span><b>Style</b> ${style.category} · ${style.occasion}</span>
        <span><b>Source</b> ${prePdpSuggestion ? "Suggested catalogue" : `${product.source || "Store Catalogue"} PDP`}</span>
      </div>
    </section>
  `;
}

function guardrailPanel(compact = false) {
  const statusCopy = state.uploadConfirmed
    ? state.guardrailStatus === "partial"
      ? "Accepted with a note: this lifestyle image can style the look, but a clean full-body front pose gives better accuracy."
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

function genderSwitch() {
  const detectedCopy = state.uploadConfirmed
    ? `Auto read: ${genderLabel(state.detectedGender || state.selectedGender)} catalogue lane`
    : "Auto read unlocks after image upload";
  return `
    <div class="gender-switch-wrap">
      <div class="gender-switch" role="group" aria-label="Catalogue lane">
        <button class="${state.selectedGender === "male" ? "active" : ""}" data-gender="male">Male</button>
        <button class="${state.selectedGender === "female" ? "active" : ""}" data-gender="female">Female</button>
      </div>
      <span>${detectedCopy}</span>
    </div>
  `;
}

function autoSuggestPanel() {
  const style = selectedLookbookStyle();
  const dailyCount = dailySurpriseStylesForGender(state.selectedGender).length;
  const isReading = state.autoSuggestStatus === "reading";
  const moment = liveMomentByCategory();
  const status = state.autoSuggestStatus === "reading"
    ? "Reading image"
    : state.autoSuggestStatus === "error"
      ? "AI check needed"
      : "Ready";
  return `
    <section class="auto-suggest-panel">
      <div class="auto-suggest-head">
        <div>
          <span>Auto Suggest</span>
          <h2>${genderLabel(state.selectedGender)} · ${moment.label}</h2>
        </div>
        <strong class="${isReading ? "busy-label" : ""}">${isReading ? `<i class="mini-spinner" aria-hidden="true"></i>` : ""}${status}</strong>
      </div>
      <p>${state.autoSuggestNote || `${style.label} is selected. Choose a suggested catalogue PDP, or let me open the strongest PDP match for you.`}</p>
      ${isReading ? loadingOrbit("Reading your image", "Checking catalogue lane, occasion and outfit direction.", "Usually 5 to 15 seconds") : ""}
      ${genderSwitch()}
      <div class="auto-suggest-metrics">
        <span><b>${genderStyles().length}</b> curated looks</span>
        <span><b>${dailyCount}</b> daily surprises</span>
        <span><b>${suggestedProductsForStyle(style).length}</b> PDP anchors</span>
      </div>
      <div class="auto-suggest-actions">
        <button class="wide-dark" data-action="auto-suggest">Open Top PDP Match</button>
        <button class="wide-outline" data-route="discover">Browse Suggestions</button>
      </div>
    </section>
  `;
}

function liveMomentSelector() {
  const activeMoment = liveMomentByCategory();
  return `
    <div class="live-moment-selector">
      <div class="live-moment-selector-head">
        <span>Choose Live Moment</span>
        <strong>${activeMoment.label} Lookbook Direction</strong>
        <p>${activeMoment.prompt} This choice controls the outlook cards, PDP ranking, avatar environment and camera brief.</p>
      </div>
      <div class="moment-chip-rail rail">
        ${liveMomentCategories.map((moment) => `
          <button class="${moment.category === activeMoment.category ? "active" : ""}" data-moment="${escapeHTML(moment.category)}">
            <strong>${moment.label}</strong>
            <span>${moment.prompt}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function liveMomentOutlookCard(style, index) {
  const product = primaryProductForStyle(style);
  const environment = environmentAvatars.find((item) => item.id === style.environmentId) || selectedEnvironment();
  const active = style.id === state.selectedLookbookStyleId;
  return `
    <article class="live-outlook-card ${active ? "active" : ""}" style="--style-accent:${style.accent}">
      <button class="live-outlook-image" data-create-style="${style.id}" aria-label="Use ${style.label} outlook">
        <img src="${product.tryonImage || product.image}" alt="${style.label} ${product.brand} outfit outlook" />
        <span>Outlook ${String(index + 1).padStart(2, "0")}</span>
      </button>
      <div class="live-outlook-copy">
        <em>${style.category} · ${style.occasion}</em>
        <strong>${style.label}</strong>
        <p>${style.reason}</p>
        <div class="outlook-tags">
          <span>${product.brand}</span>
          <span>${product.price}</span>
          <span>${environment.label}</span>
          <span>${style.confidence}</span>
        </div>
        <button data-create-style="${style.id}">Use This Outlook</button>
      </div>
    </article>
  `;
}

function liveMomentOutlookSection() {
  const moment = liveMomentByCategory();
  const outlooks = liveMomentOutlooks(moment.category, state.selectedGender, 6);
  return `
    <section class="live-moment-board">
      ${liveMomentSelector()}
      <div class="live-outlook-heading">
        <span>Live Moment Outlooks</span>
        <strong>${moment.label} · ${outlooks.length} curated outlooks</strong>
        <p>Tap an outlook to open the matching PDP. The product, environment, camera direction and Senior Stylist reason all travel into the final Lookbook render.</p>
      </div>
      <div class="live-outlook-rail rail">
        ${outlooks.map((style, index) => liveMomentOutlookCard(style, index)).join("")}
      </div>
    </section>
  `;
}

function lookbookStudio(product, mode = "") {
  const style = selectedLookbookStyle();
  const styles = genderStyles();
  const headingAction = state.route === "tryon"
    ? { action: "auto-suggest", label: "Use Top PDP" }
    : { action: "daily-surprise", label: "Surprise" };
  return `
    <section class="lookbook-studio ${mode}">
      <div class="lookbook-studio-heading">
        <div>
          <span>Curated Lookbook · ${styles.length} ${genderLabel()} styles</span>
          <h2>${style.label}</h2>
        </div>
        <button data-action="${headingAction.action}">${headingAction.label}</button>
      </div>
      <p>${style.story}</p>
      <div class="style-story">
        <span>Stylist Read</span>
        <strong>${style.cta}</strong>
        <p>${style.reason}</p>
      </div>
      <div class="lookbook-style-rail rail">
        ${styles.map((item) => `
          <button class="lookbook-style-card ${item.id === style.id ? "active" : ""}" data-style="${item.id}" style="--style-accent:${item.accent}">
            <span>${item.category}</span>
            <strong>${item.label}</strong>
            <em>${item.occasion}</em>
          </button>
        `).join("")}
      </div>
      ${guardrailPanel(true)}
    </section>
  `;
}

function pdpScreen() {
  const product = selectedProduct();
  const style = selectedLookbookStyle();
  const saved = state.lookbookItems.some((item) => item.productId === product.id && item.lookbookStyleId === style.id);
  return `
    <main class="page proto-screen" data-screen="pdp">
      ${lookbookProgress("pdp")}
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
          <span><b>Fit Read</b>Regular fit, Lookbook-ready on uploaded image</span>
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
        <button class="wide-dark" data-action="start-draping">Create Lookbook</button>
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
        <strong>${product.brand} ${style.label} saved to Lookbook</strong>
        <span>${state.tryOnMessage || "Preview shows style, colour and silhouette on the uploaded image."}${state.tryOnError ? ` Recreate remains available if you want a fresh AI attempt.` : ""}</span>
      </div>
      ${videoActive ? videoStatusPanel(product) : ""}
      <button class="wide-dark" data-action="add-to-bag">Add To Bag</button>
      <div class="action-grid">
        <button class="${state.videoStatus === "generating" || state.videoStatus === "running" ? "button-busy" : ""}" data-action="generate-video">${state.videoStatus === "generating" || state.videoStatus === "running" ? `<i class="mini-spinner" aria-hidden="true"></i>Creating Video` : "Generate Lookbook Video"}</button>
        <button data-action="render">Recreate Look</button>
        <button data-action="share-look">Share</button>
        <button data-action="cast-tv">Cast TV</button>
        <button data-action="open-lookbook">Lookbook</button>
        <button data-action="try-another">Try Another</button>
      </div>
    </section>
  `;
}

function generationErrorPanel() {
  if (!state.tryOnError || state.renderStatus === "rendering" || state.renderStatus === "rendered") return "";
  return `
    <section class="generation-error">
      <span>Real AI Required</span>
      <strong>Lookbook generation did not complete</strong>
      <p>${state.tryOnMessage || realBackendRequiredMessage("Real AI Lookbook image generation")}</p>
      <em>${state.tryOnError}</em>
      <div class="generation-error-actions">
        <button class="wide-dark" data-action="render">Try Again</button>
        <button class="wide-outline" data-route="pdp">Back To PDP</button>
      </div>
    </section>
  `;
}

function videoStatusPanel(product) {
  const isBusy = state.videoStatus === "generating" || state.videoStatus === "running";
  const isError = state.videoStatus === "error";
  const isReady = state.videoStatus === "ready" && Boolean(state.videoUrl);
  const statusLabel = isBusy ? "Generating" : state.videoStatus === "ready" ? "Video Ready" : isError ? "Video Error" : "Waiting";
  const style = selectedLookbookStyle();
  return `
    <div class="video-panel ${isReady ? "ready" : ""} ${isBusy ? "busy" : ""} ${isError ? "error" : ""}">
      <div class="video-thumb">
        ${state.videoUrl ? `
          <video data-lookbook-video playsinline muted loop controls preload="auto" poster="${currentRenderedImage(product)}">
            <source src="${state.videoUrl}" type="video/mp4" />
          </video>
        ` : `
          <img src="${currentRenderedImage(product)}" alt="${product.brand} ${product.name} video preview" />
        `}
        ${isBusy ? `<div class="video-loader">${loadingOrbit("Creating Lookbook Video", "Veo is turning this draped image into a short vertical clip.", "This can take 1 to 3 minutes")}</div>` : ""}
        <span>${isBusy ? "Creating" : "Lookbook Clip"}</span>
      </div>
      <div class="video-copy">
        <strong>${statusLabel}</strong>
        <p>${state.videoMessage || `Short ${style.label} lookbook video for this styled outfit.`}</p>
        ${state.videoUrl ? `
          <button data-action="play-video">Play Video</button>
          <button data-action="open-video">Open Video</button>
          <em>8 second vertical Lookbook clip</em>
        ` : ""}
      </div>
    </div>
  `;
}

function discoverScreen() {
  const chips = state.selectedGender === "female"
    ? ["All Products", "Women Topwear", "Ethnic", "Celebration", "Office", "Casual", "Travel"]
    : ["All Products", "Men Topwear", "Bottomwear", "Winter Collection", "Smart Casual", "Sport Wear", "Office"];
  const style = selectedLookbookStyle();
  const moment = liveMomentByCategory();
  const list = state.uploadConfirmed ? suggestedProductsForStyle(style) : filteredProducts();
  const styles = genderStyles();
  return `
    <main class="page proto-screen" data-screen="discover">
      <div class="proto-header">
        <h1>${state.uploadConfirmed ? `Suggested Products For ${moment.label}` : "Discover"}</h1>
        <p>${state.uploadConfirmed ? `${style.label}: ${style.reason}` : `${escapeHTML(state.activeCollection)} from the in-store catalogue. Open a PDP, then create a Lookbook from the uploaded image.`}</p>
      </div>
      ${genderSwitch()}
      ${state.activeOffer ? `<div class="state-banner">${state.activeOffer}</div>` : ""}
      ${analystNudge("discover")}
      ${state.uploadConfirmed ? liveMomentSelector() : ""}
      ${state.uploadConfirmed ? `
        <div class="lookbook-style-rail discover-style-rail rail">
          ${styles.map((item) => `
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
    ? `${displayProduct.brand} ${displayProduct.name} styled on uploaded model`
    : `${state.uploadedPhotoTitle || "Uploaded user image"} preview`;
  const mirrorClass = state.renderStatus === "rendering" ? "rendering" : state.renderStatus === "rendered" ? "rendered" : state.renderStatus === "preview" ? "preview" : "";
  return `
    <main class="page proto-screen" data-screen="tryon">
      ${lookbookProgress(showingRenderedLook ? "lookbook" : state.uploadConfirmed ? "read" : "upload")}
      <div class="tryon-stage">
        <div class="tryon-panel">
          ${state.uploadedPhoto ? `
            <div class="mirror ${mirrorClass}">
              <img class="tryon-result-photo" src="${previewImage}" alt="${previewAlt}" />
              ${state.renderStatus === "rendering" ? `
                <div class="render-overlay">
                  ${loadingOrbit("Senior Stylist is creating this Lookbook", "Draping the selected PDP outfit on your uploaded image.", `${style.label} · ${product.brand}`)}
                </div>
              ` : ""}
            </div>
          ` : `
            <div class="upload-zone">
              <div>
                <img src="${assets.apparel}" alt="" />
                <strong>Upload Image</strong>
                <span>Full body image for AI Lookbook</span>
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
          <span>${state.autoSuggestStatus === "reading" ? "Style Read Running" : "Style Read Complete · Lookbook Unlocked"}</span>
          <strong>${state.uploadedPhotoTitle || "Uploaded Image"}</strong>
          <p>${state.guardrailStatus === "partial" ? "Lifestyle image accepted. A clean full-body front pose will improve AI styling accuracy." : `Image accepted. I am curating ${state.selectedLiveMoment} outlooks from the store catalogue for this avatar.`}</p>
          ${state.autoSuggestStatus === "reading" ? loadingOrbit("AI Senior Stylist is reading", "Building your suggested product lane from the uploaded image.", "Catalogue suggestions unlock after this read") : ""}
        </section>
        ${autoSuggestPanel()}
        ${liveMomentOutlookSection()}
        ${stylistPanel(guidedProduct, true)}
      ` : `${analystNudge("upload")}${guardrailPanel()}`}
      ${state.uploadConfirmed ? lookbookStudio(guidedProduct, "compact") : ""}
      ${generationErrorPanel()}
      ${resultActionPanel(displayProduct)}
      ${state.uploadConfirmed ? `
        <div class="proto-header ready-products">
          <h1>Suggested Products Based On Upload</h1>
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
              <span>${item.title}<em>${genderLabel(item.gender)} lane</em></span>
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
  const latest = latestLookbookItem();
  const style = selectedLookbookStyle();
  const uploadCopy = state.uploadConfirmed
    ? `${state.uploadedPhotoTitle || "Uploaded avatar"} · ${genderLabel()} catalogue lane`
    : "Upload pending · image read will unlock suggestions";
  return `
    <main class="page proto-screen" data-screen="account">
      <div class="proto-header">
        <h1>Profile</h1>
        <p>Your Companion account, stylist read, saved looks and store benefits in one place.</p>
      </div>
      <section class="profile-hero">
        <div class="profile-avatar">A</div>
        <div class="profile-copy">
          <span>Welcome back</span>
          <strong>Ashutosh</strong>
          <p>TRENDS, Phoenix Mall Of Asia · Bangalore</p>
        </div>
        <button data-action="redeem">Redeem</button>
      </section>
      <section class="profile-score-grid">
        <div>
          <span>Points</span>
          <strong>2,940</strong>
        </div>
        <div>
          <span>Saved Looks</span>
          <strong>${state.lookbookItems.length}</strong>
        </div>
        <div>
          <span>Bag</span>
          <strong>${state.bagItems.length}</strong>
        </div>
      </section>
      <section class="profile-style-card">
        <div class="profile-section-heading">
          <span>AI Senior Stylist</span>
          <strong>${style.confidence}</strong>
        </div>
        <h2>${style.label}</h2>
        <p>${style.reason}</p>
        <div class="profile-tags">
          <span>${style.category}</span>
          <span>${style.occasion}</span>
          <span>${uploadCopy}</span>
        </div>
        <button class="wide-dark" data-route="tryon" data-preserve-style="true">Continue Lookbook</button>
        <button class="wide-outline" data-action="daily-surprise">Surprise Me For The Day</button>
      </section>
      <section class="profile-lookbook-strip">
        <div class="profile-section-heading">
          <span>AI Lookbook</span>
          <strong>${latest ? "Latest saved" : "Not started"}</strong>
        </div>
        ${latest ? `
          <article class="profile-lookbook-preview">
            <button class="profile-lookbook-image" data-view-look="${latest.id}" aria-label="Open ${latest.name}">
              <img src="${latest.image}" alt="${latest.brand} ${latest.name}" />
            </button>
            <div>
              <strong>${latest.brand}</strong>
              <p>${latest.name}</p>
              <span>${latest.lookbookStyleLabel || latest.environmentLabel || "Curated Lookbook"} · ${latest.price}</span>
              <button class="wide-outline" data-action="open-lookbook">Open Lookbook</button>
            </div>
          </article>
        ` : `
          <div class="profile-empty-lookbook">
            <img src="${assets.lookbookSheet}" alt="" />
            <div>
              <strong>No saved looks yet</strong>
              <p>Upload an image and create a catalogue PDP Lookbook.</p>
              <button class="wide-outline" data-route="tryon">Upload Image</button>
            </div>
          </div>
        `}
      </section>
      <section class="profile-action-list">
        <button data-route="orders">
          <span>Order History</span>
          <strong>Track and reorder</strong>
        </button>
        <button data-route="bag">
          <span>Bag</span>
          <strong>${state.bagItems.length} ${state.bagItems.length === 1 ? "look" : "looks"} added</strong>
        </button>
        <button data-route="discover">
          <span>Catalogue</span>
          <strong>Browse products</strong>
        </button>
      </section>
    </main>
  `;
}

function bagScreen() {
  return `
    <main class="page proto-screen" data-screen="bag">
      <div class="proto-header">
        <h1>Bag</h1>
        <p>${state.bagItems.length} catalogue ${state.bagItems.length === 1 ? "look" : "looks"} added.</p>
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
          <p>Create a catalogue product Lookbook, then add it here.</p>
          <button class="wide-dark" data-route="tryon">Start AI Lookbook</button>
        </div>
      `}
    </main>
  `;
}

function lookbookScreen() {
  const latest = latestLookbookItem();
  const guideProduct = latest ? products.find((product) => product.id === latest.productId) || selectedProduct() : selectedProduct();
  return `
    <main class="page proto-screen" data-screen="lookbook">
      <div class="proto-header">
        <h1>Lookbook</h1>
        <p>${curatedStyleCounts.male + curatedStyleCounts.female} curated style ideas and ${curatedStyleCounts.maleSurprises + curatedStyleCounts.femaleSurprises} daily surprises from the TRENDS store catalogue.</p>
      </div>
      ${lookbookProgress(latest ? "share" : "lookbook")}
      ${analystNudge("lookbook", guideProduct)}
      ${lookbookLibrarySection()}
      ${lookbookStudio(guideProduct, "compact")}
      ${latest ? `
        <section class="lookbook-hero">
          <div class="lookbook-hero-image">
            <img src="${latest.image}" alt="${latest.brand} ${latest.name} saved look" />
          </div>
          <div class="lookbook-hero-copy">
            <span>Latest Lookbook</span>
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
          <p>Upload a full body image, open a catalogue PDP, then create the result directly in this Lookbook.</p>
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
            <video data-lookbook-video playsinline muted loop controls preload="auto" poster="${cast.image}">
              <source src="${state.videoUrl}" type="video/mp4" />
            </video>
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
        <p>Find in-store catalogue products, brands, offers, and Lookbook-ready looks.</p>
      </div>
      <div class="search-panel">
        <input data-search-input value="${escapeHTML(state.searchQuery)}" placeholder="Search ${genderLabel().toLowerCase()} products" />
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
  const isCreatingLookbook = state.renderStatus === "rendering";
  const isCreatingVideo = state.videoStatus === "generating" || state.videoStatus === "running";
  const tryonLabel = isCreatingLookbook
    ? "Creating Lookbook"
    : isCreatingVideo
      ? "Creating Video"
      : !state.uploadConfirmed
    ? "Upload Image"
    : state.renderStatus === "rendered"
      ? "Add To Bag"
      : hasCatalogueSelection
        ? "Create Lookbook"
        : "View Suggested Products";
  const tryonAction = isCreatingLookbook || isCreatingVideo
    ? "busy"
    : !state.uploadConfirmed
    ? "open-gallery"
    : state.renderStatus === "rendered"
      ? "add-to-bag"
      : hasCatalogueSelection
        ? "render"
        : "discover";
  const cta = {
    home: ["Scan Item", "scan", assets.bottomBarcode],
    discover: ["Upload Image For Lookbook", "tryon", assets.apparel],
    pdp: ["Create Lookbook", "start-draping", assets.apparel],
    tryon: [tryonLabel, tryonAction, assets.apparel],
    lookbook: [state.lookbookItems.length ? "Open Latest Look" : "Browse Catalogue", state.lookbookItems.length ? "open-latest-look" : "discover", assets.hanger],
    tv: ["Back To Lookbook", "lookbook", assets.hanger],
    scan: [state.scanCount >= 3 ? "Discover Products" : "Scan Next Item", state.scanCount >= 3 ? "discover" : "scan-next", assets.bottomBarcode],
    orders: ["Track Latest Order", "track-order", assets.bottomBarcode],
    account: [state.lookbookItems.length ? "Open Saved Lookbook" : "Start AI Lookbook", state.lookbookItems.length ? "open-lookbook" : "tryon", assets.navAccount],
    bag: [state.bagItems.length ? "Checkout" : "Discover Products", state.bagItems.length ? "checkout" : "discover", assets.bag],
    search: ["Apply Search", "search-submit", assets.search],
  }[state.route] || ["Scan Item", "scan", assets.bottomBarcode];

  const active = state.route === "discover" || state.route === "search" || state.route === "pdp"
    ? "discover"
    : state.route === "tryon" || state.route === "lookbook" || state.route === "tv"
      ? "tryon"
      : state.route === "account" || state.route === "orders"
        ? "account"
        : "home";
  return `
    <footer class="bottom-group" data-node-id="5516:46365">
      <div class="bottom-cta" data-node-id="5516:46366">
        <button class="primary-button ${cta[1] === "busy" ? "button-busy" : ""}" data-cta="${cta[1]}">
          ${cta[1] === "busy" ? `<i class="mini-spinner" aria-hidden="true"></i>` : `<img src="${cta[2]}" alt="" />`}
          <span>${cta[0]}</span>
        </button>
      </div>
      <nav class="bottom-nav" aria-label="Companion App Bottom Sheet" data-node-id="5516:46368">
        <button class="nav-item ${active === "home" ? "active" : ""}" data-route="home">
          <img src="${assets.navHome}" alt="" />
          <span class="nav-item-label-long">Switch<br />Stores</span>
        </button>
        <button class="nav-item ${active === "discover" ? "active" : ""}" data-route="discover">
          <img src="${assets.navCategory}" alt="" />
          <span>Category</span>
        </button>
        <button class="nav-item ${active === "tryon" ? "active" : ""}" data-route="tryon" aria-label="AI Lookbook">
          <img src="${assets.navWardrobe}" alt="" />
          <span>Lookbook</span>
        </button>
        <button class="nav-item ${active === "account" ? "active" : ""}" data-route="account">
          <img src="${assets.navAccount}" alt="" />
          <span>Account</span>
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

function syncQaState() {
  window.__COMPANION_QA_STATE__ = {
    route: state.route,
    uploadConfirmed: state.uploadConfirmed,
    selectedId: state.selectedId,
    renderedId: state.renderedId,
    renderStatus: state.renderStatus,
    selectedLiveMoment: state.selectedLiveMoment,
    liveMomentLocked: state.liveMomentLocked,
    activeApiBase: state.activeApiBase,
    tryOnMode: state.tryOnMode,
    tryOnImagePath: state.tryOnImagePath,
    tryOnImageUrl: state.tryOnImageUrl,
    tryOnError: state.tryOnError,
    videoStatus: state.videoStatus,
    videoMode: state.videoMode,
    videoUrl: state.videoUrl,
    videoUri: state.videoUri,
    videoMessage: state.videoMessage,
  };
}

function render() {
  syncQaState();
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
      if (action === "auto-suggest") {
        autoSuggestLook();
        return;
      }
      if (action === "daily-surprise") {
        surpriseMeForTheDay();
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
        startProductDraping();
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
      if (action === "open-video") {
        openGeneratedVideo();
        return;
      }
      if (action === "play-video") {
        playGeneratedVideo();
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

  document.querySelectorAll("[data-create-style]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      createLookbookFromStyle(el.dataset.createStyle);
    });
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

  document.querySelectorAll("[data-moment]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      selectLiveMoment(el.dataset.moment);
    });
  });

  document.querySelectorAll("[data-gender]").forEach((el) => {
    el.addEventListener("click", (event) => {
      event.stopPropagation();
      setCatalogueLane(el.dataset.gender);
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
          gender: inferGenderLaneFromText(file.name),
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
      if (action === "busy") {
        flash(state.videoStatus === "generating" || state.videoStatus === "running" ? "Lookbook video is creating" : "Lookbook creation is running");
        return;
      }
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
      if (action === "open-video") {
        openGeneratedVideo();
        return;
      }
      if (action === "play-video") {
        playGeneratedVideo();
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
