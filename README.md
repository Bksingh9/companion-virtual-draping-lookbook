# Companion Virtual Draping Lookbook

Premium TRENDS Companion prototype for a Senior Stylist-led virtual draping journey.

## Flow

1. Warm Senior Stylist welcome.
2. Upload a real shopper image from a mobile-style gallery.
3. Apply upload guardrails for adult-only, PNG/JPEG, full-body/front-pose guidance and no fit guarantee.
4. Auto-read the image into a recommended catalogue lane, with manual Male/Female override.
5. Unlock 25 male and 25 female curated lookbook styles for office, dates, casual, sport wear, ethnic, resort, formal, travel, celebration and store spotlight.
6. Offer 10 male and 10 female "Surprise Me For The Day" paths.
7. Open catalogue/PDP suggestions.
8. Generate a virtual draping image with Vertex `virtual-try-on-001`.
9. Use the generated draped image as the first frame for lookbook video generation.
10. Save, share, cast, or add the look to bag.

## Run Locally

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4173/
```

## Vertex Setup

Keep credentials outside git. Either set:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/absolute/path/to/service-account.json"
export VERTEX_ENABLE_TRYON=true
export VERTEX_ENABLE_VIDEO=true
export VERTEX_ENABLE_ANALYSIS=true
```

Optional:

```bash
export VERTEX_OUTPUT_GCS_URI="gs://your-bucket/path"
export VERTEX_TRYON_OUTPUT_GCS_URI="gs://your-bucket/path"
export VERTEX_ANALYSIS_MODEL_ID="gemini-2.5-flash"
```

If Vertex image analysis, try-on, or video generation fails or is unavailable, the UI falls back to a graceful local recommendation or mapped catalogue render so the prototype journey does not break.
