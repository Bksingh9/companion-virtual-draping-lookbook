# QA Report

Date: 2026-09-04 00:31 IST

## Scope

Release sanity for the Companion AI Lookbook prototype:

- Public GitHub Pages frontend flow.
- Local Node server API flow.
- Upload guardrails, gallery selection, suggested catalogue products, PDP, Create Lookbook, saved Lookbook, profile, bag, sharing, casting and video-preview controls.

## Results

- Syntax check: passed with `npm run check`.
- Whitespace/diff check: passed with `git diff --check`.
- Frontend state-machine smoke: passed with `npm run qa:flow`.
- Browser click-through: passed with `npm run qa:browser`.
- Real local AI browser click-through: passed with `QA_REAL_AI=1 QA_URL=http://127.0.0.1:4173/ npm run qa:browser`.
- Curated style inventory: passed with 25 male styles, 25 female styles, 10 male day surprises and 10 female day surprises.
- Curated Lookbook library: passed. Lookbook screen shows 50 occasion ideas, male and female lanes, and 100 Create Lookbook controls.
- Pre-upload state: passed. No model image is visible before upload.
- Gallery state: passed. Mobile-style gallery opens and includes the real model tile plus device upload.
- Upload state: passed. Upload unlocks suggested products and does not auto-trigger Surprise Me.
- PDP state: passed. Auto suggestion opens a real PDP, not the preview item, and shows the Lookbook progress rail.
- Lookbook creation state: passed. PDP creates the Lookbook result screen.
- Static shareable fallback: passed. GitHub Pages uses the mapped catalogue Lookbook result and saves it so the journey does not break.
- Bag state: passed. Bag badge starts at 0 and updates after Add To Bag.
- Profile state: passed. Account/Profile shows saved looks and bag count.
- Lookbook state: passed. Saved looks render, reopen and remove correctly.
- Naming QA: passed. The user-facing app now uses AI Lookbook, Lookbook Studio, Create Lookbook, Saved Looks and Lookbook nav copy.
- Try Another: passed. The result state resets for a fresh journey.
- Local Vertex status: passed. Credentials are present server-side, analysis is enabled, try-on is enabled.
- Local Vertex Lookbook image creation: passed. `/api/generate-tryon-image` returned `mode: "vertex-try-on"`, `status: "done"` and a generated image payload.
- Browser real-AI state: passed. The UI completed upload, style read, PDP, Create Lookbook, Vertex-generated image result, video preview, Lookbook library, female PDP route and Bag update.
- Local video endpoint: wired. It returns mock-ready until `VERTEX_ENABLE_VIDEO=true` and `VERTEX_OUTPUT_GCS_URI` are configured.

## Fixes Made During QA

- Fixed the Vertex `virtual-try-on-001` request body to match the supported REST payload shape: person image, product image and `sampleCount`.
- Removed unsupported request fields that caused Vertex to reject the Lookbook image call.
- Added a dependency-free Chrome DevTools QA runner for end-to-end mobile browser sanity.
- Improved image-analysis fallback handling so empty Gemini JSON does not look like a successful AI result.

## Known Release Boundary

GitHub Pages is static and cannot safely run the Google service-account key. For a fully live public AI URL, deploy the Node server or another backend with private environment variables and a configured GCS output bucket for Veo video generation.
