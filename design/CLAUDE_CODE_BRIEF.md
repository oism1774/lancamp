# LANCamp - "Coming soon" page

Brief for Claude Code. Build a one-page static site from the attached design.

## Goal
A single "coming soon" landing page for LANCamp, hosted on GitHub Pages at
`https://oism1774.github.io/lancamp/`.

## Stack
- Astro, static output only, no UI framework.
- Fonts self-hosted through `@fontsource/silkscreen` (weight 700) and `@fontsource/vt323`. No Google Fonts requests.
- `astro.config.mjs`: `site: 'https://oism1774.github.io'`, `base: '/lancamp'`. Every asset and link path must work under `/lancamp/`.

## Files you get
- `design-reference-desktop.html` and `design-reference-mobile.html` - the approved designs (desktop 1440x900, mobile 390x844). They are exports from a design tool, so ignore their `<x-dc>`, `<helmet>`, `support.js` and `data-dc-script` wrapper. Recreate the visible result: layout, colors, sizes and animations.
- `campfire-mark.svg`, `campfire-mark-animated.svg`, `favicon.svg`, `heart-fire.svg` - pixel-art assets. Put them in `public/`. `heart-fire.svg` is not used on this page; keep it for later.
- `tokens.json` - colors and fonts.

## Page content (keep exactly this, nothing more)
Text: tagline "a campfire for your crew" (VT323), wordmark "LANCamp" ("LAN" in ember `#ff8a3d`, "Camp" in bone `#f2e9dc`, Silkscreen 700, hard pixel text-shadow `6px 6px 0 #1a1238`), a small status line "SERVERS - VOICE - CHAT" with a green pixel dot, and a wooden sign with two planks: "COMING SOON" (blinking block cursor) and "pull up a log". No footer, no links, no analytics, no cookies.

Background (both layouts): night sky in hard color bands (no smooth gradient), pixel stars (some twinkling plus-shaped ones), three pixel shooting stars, pixel hills and pines, dark ground, a campfire with four people sitting on logs, and a banded orange light pool.

Desktop (wider than 860px), see `design-reference-desktop.html`:
- The scene is anchored to the bottom, with the fire centered at 68% of the width.
- The text sits in a left column, bottom-aligned, about 440px above the bottom edge, with a left padding of `clamp(24px, 9vw, 160px)`.
- The wooden sign stands on the ground, on posts, to the left of the fire (about 640px left of the fire's center).

Mobile (860px and narrower), see `design-reference-mobile.html`:
- Everything is centered. The bottom ~110px of the screen stays empty ground: thumbs and browser controls live there, so nothing important goes in that area.
- Top (about 96px from the top): tagline, wordmark (~58px) and the status line.
- Middle: the campfire scene, about 0.7x the desktop size, centered, with the fire at roughly the vertical middle of the screen. Stars and shooting stars stay in the sky above it; below the scene the ground continues in `#0c0a18` to the bottom.
- Under the fire: the wooden sign standing on short posts on the ground, centered.
- Use `100svh`/`100dvh` (not plain `100vh`) so mobile browser bars don't push the layout.

## Rules
- Everything stays pixel-crisp: `shape-rendering: crispEdges` on SVGs, `image-rendering: pixelated` where images scale, and animations use `steps()`, never smooth easing.
- Keep the pixel scene in its own component (e.g. `src/components/CampScene.astro`) and generate the rects from small arrays rather than pasting thousands of `<rect>` lines by hand.
- Respect `prefers-reduced-motion`: no flicker, twinkle, shooting stars or cursor blink.
- Responsive: it must look right from 360px to 2560px wide, with one breakpoint at 860px between the two layouts. The scene crops on the sides on narrow screens, and the text and sign never overlap the fire or the people.
- Accessibility: one `<h1>`, a real `<title>` and meta description, and decorative SVGs get `aria-hidden="true"`. Text contrast at least 4.5:1.
- Add `og:title`, `og:description` and the favicon.

## Do NOT
- Do not create anything under `.github/` (no workflows). I'm writing the GitHub Actions deploy pipeline myself.
- Do not push, create the repo or touch GitHub settings.

## Done when
- `npm run build` passes and `npm run preview` shows the page at `/lancamp/`.
- Short README: how to run locally and how to build.
