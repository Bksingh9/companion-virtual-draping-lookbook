# Companion Virtual Draping Lookbook

Premium TRENDS Companion prototype for a Senior Stylist-led virtual draping journey.

## Flow

1. Warm Senior Stylist welcome.
2. Upload a real shopper image from a mobile-style gallery.
3. Apply upload guardrails for adult-only, PNG/JPEG, full-body/front-pose guidance and no fit guarantee.
4. Unlock curated lookbook styles for office, dates, casual, sport wear, ethnic, resort, formal, travel, celebration and store spotlight.
5. Open catalogue/PDP suggestions.
6. Generate a virtual draping image with Vertex `virtual-try-on-001`.
7. Use the generated draped image as the first frame for lookbook video generation.
8. Save, share, cast, or add the look to bag.

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
```

Optional:

```bash
export VERTEX_OUTPUT_GCS_URI="gs://your-bucket/path"
export VERTEX_TRYON_OUTPUT_GCS_URI="gs://your-bucket/path"
```

If Vertex fails or is unavailable, the UI falls back to mapped catalogue renders so the prototype journey does not break.
