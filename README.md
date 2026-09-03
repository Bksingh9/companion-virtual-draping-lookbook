# Companion AI Lookbook

Premium TRENDS Companion prototype for a Senior Stylist-led AI Lookbook journey.

## Flow

1. Warm Senior Stylist welcome.
2. Upload a real shopper image from a mobile-style gallery.
3. Apply upload guardrails for adult-only, PNG/JPEG, full-body/front-pose guidance and no fit guarantee.
4. Auto-read the image into a recommended catalogue lane, with manual Male/Female override.
5. Unlock 25 male and 25 female curated lookbook styles for office, dates, casual, sport wear, ethnic, resort, formal, travel, celebration and store spotlight.
6. Offer 10 male and 10 female "Surprise Me For The Day" paths.
7. Open catalogue/PDP suggestions.
8. Create the Lookbook result with Vertex `virtual-try-on-001`.
9. Use the generated Lookbook image as the first frame for lookbook video generation.
10. Save, share, cast, add to bag, or reopen the saved Lookbook from the Profile hub.

## Run Locally

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/service-account.json"
npm start
```

Then open:

```text
http://127.0.0.1:4173/
```

The app now treats AI generation as a real backend contract. Upload analysis must come from Vertex Gemini, Lookbook image creation must come from Vertex `virtual-try-on-001`, and video must come from Veo. If a real AI call fails, the UI shows an error/retry state and does not mark the Lookbook or video as ready.

The GitHub Pages link is a shareable frontend only. It cannot safely contain the Google service-account key. To use real AI from the Pages URL, keep the local Node server running and open the page with an API base:

```text
https://bksingh9.github.io/companion-virtual-draping-lookbook/?apiBase=http%3A%2F%2F127.0.0.1%3A4173
```

Run the product-flow QA:

```bash
npm run qa:flow
```

Run the browser click-through QA:

```bash
npm run qa:browser
QA_URL="https://bksingh9.github.io/companion-virtual-draping-lookbook/?apiBase=http%3A%2F%2F127.0.0.1%3A4173" npm run qa:browser
```

## Vertex Setup

Keep credentials outside git. Either set:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/service-account.json"
# Optional disable switches. By default all three are enabled.
# export VERTEX_ENABLE_TRYON=false
# export VERTEX_ENABLE_VIDEO=false
# export VERTEX_ENABLE_ANALYSIS=false
```

Optional:

```bash
export VERTEX_OUTPUT_GCS_URI="gs://your-bucket/path"
export VERTEX_TRYON_OUTPUT_GCS_URI="gs://your-bucket/path"
export VERTEX_ANALYSIS_MODEL_ID="gemini-2.5-flash"
```

Generated VTO images are written under `generated-images/`, and generated MP4 files are written under `generated-videos/` when Vertex returns inline bytes. Both folders are ignored by git except for `.gitkeep`.
