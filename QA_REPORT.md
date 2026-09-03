# QA Report

Date: 2026-09-03 23:27 IST

## Scope

Release sanity for the Companion AI Lookbook prototype:

- Public GitHub Pages frontend flow.
- Local Node server API flow.
- Upload guardrails, gallery selection, suggested catalogue products, PDP, Create Lookbook, saved Lookbook, profile, bag, sharing, casting and video-preview controls.

## Results

- Syntax check: passed with `npm run check`.
- Whitespace/diff check: passed with `git diff --check`.
- Frontend state-machine smoke: passed with `npm run qa:flow`.
- Curated style inventory: passed with 25 male styles, 25 female styles, 10 male day surprises and 10 female day surprises.
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
- Try Another: passed. The drape state resets for a fresh journey.
- Local Vertex status: passed. Credentials are present server-side, analysis is enabled, try-on is enabled.
- Local Vertex Lookbook image creation: passed. `/api/generate-tryon-image` returned `mode: "vertex-try-on"`, `status: "done"` and a generated image payload.
- Local video endpoint: wired. It returns mock-ready until `VERTEX_ENABLE_VIDEO=true` and `VERTEX_OUTPUT_GCS_URI` are configured.

## Fixes Made During QA

- Fixed the Vertex `virtual-try-on-001` request body to match the supported REST payload shape: person image, product image and `sampleCount`.
- Removed unsupported request fields that caused Vertex to reject the draping call.
- Improved image-analysis fallback handling so empty Gemini JSON does not look like a successful AI result.

## Known Release Boundary

GitHub Pages is static and cannot safely run the Google service-account key. For a fully live public AI URL, deploy the Node server or another backend with private environment variables and a configured GCS output bucket for Veo video generation.
