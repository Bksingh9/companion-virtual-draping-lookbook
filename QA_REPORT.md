# QA Report

Date: 2026-09-04 02:15 IST

## Scope

Release sanity for the Companion AI Lookbook prototype:

- Local Node server API flow with real Vertex Gemini analysis, Vertex `virtual-try-on-001`, and Veo video generation.
- Upload guardrails, gallery selection, suggested catalogue products, PDP, Create Lookbook, saved Lookbook, profile, bag, sharing, casting and video controls.
- Curated Lookbook library across male and female lanes.

## Results

- Syntax check: passed with `npm run check`.
- Whitespace/diff check: passed with `git diff --check`.
- Frontend state-machine smoke: passed with `npm run qa:flow`.
- Browser click-through: passed with `npm run qa:browser`.
- Curated style inventory: passed with 25 male styles, 25 female styles, 10 male day surprises and 10 female day surprises.
- Curated Lookbook library: passed. Lookbook screen shows 50 occasion ideas, male and female lanes, and 100 Create Lookbook controls.
- Curated style routing: passed. All 50 curated style definitions route to a real catalogue PDP for their intended gender lane.
- Pre-upload state: passed. No model image is visible before upload.
- Gallery state: passed. Mobile-style gallery opens and includes the real model tile plus device upload.
- Upload state: passed. Upload unlocks suggested products and does not auto-trigger Surprise Me.
- PDP state: passed. Auto suggestion opens a real PDP, not the preview item, and shows the Lookbook progress rail.
- Bag state: passed. Bag badge starts at 0 and updates after Add To Bag.
- Profile state: passed. Account/Profile shows saved looks and bag count.
- Lookbook state: passed. Saved looks render, reopen and remove correctly.
- Naming QA: passed. The user-facing app uses AI Lookbook, Lookbook Studio, Create Lookbook, Saved Looks and Lookbook nav copy.
- Try Another: passed. The result state resets for a fresh journey.
- Dead-button QA: passed. Browser QA reported `deadButtons: 0`.
- Mobile layout QA: passed. Browser QA reported `scrollWidth: 390` for a `390` viewport and bottom nav visible.

## Real AI Evidence

- Local Vertex status: passed. Credentials are present server-side, analysis is enabled, try-on is enabled and video is enabled.
- Local Vertex image analysis: passed. `/api/analyze-upload-image` returned `mode: "vertex-analysis"`, male lane, Live Moment category and real recommendation notes for the uploaded stadium model image.
- Local Vertex Lookbook image creation: passed. `/api/generate-tryon-image` returned `mode: "vertex-try-on"`, `status: "done"` and `/generated-images/lookbook-image-1788468210760.png`.
- Local Veo video generation: passed. `/api/generate-lookbook-video` consumed the generated VTO image path and returned `mode: "vertex"`, `status: "done"` and `/generated-videos/lookbook-1788468108563.mp4`.
- Browser real-AI state: passed. The UI completed upload, style read, PDP, Create Lookbook, Vertex-generated image result, Veo-generated video at `/generated-videos/lookbook-1788468290801.mp4`, Lookbook library, female PDP route and Bag update.

## Fixes Made During QA

- Removed mock-ready server responses from Vertex try-on and Veo endpoints.
- Removed browser-recorded video as a success fallback from the app.
- Changed the UI so failed generation shows a real error/retry panel and does not save a fake Lookbook result.
- Enabled CORS/private-network headers so a GitHub Pages frontend can call the local backend with `apiBase`.
- Fixed Vertex Gemini image analysis to use the working REST payload shape and fail honestly if no usable JSON is returned.
- Changed Vertex VTO output handling to save generated images under `/generated-images/`, avoiding huge browser data URL round-trips before Veo.
- Hardened generated-image handoff so the backend accepts both relative local asset paths and absolute local asset URLs.
- Updated browser QA to require real Vertex try-on and real Veo video, not static preview modes.

## Known Release Boundary

GitHub Pages is static and cannot safely run the Google service-account key. For a fully live public AI URL, run the local Node server while using the Pages frontend with `?apiBase=http%3A%2F%2F127.0.0.1%3A4173`, or deploy the Node server behind a production backend with private environment variables.
