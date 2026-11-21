# LANCamp - coming soon

A one-page "coming soon" site for LANCamp, built with [Astro](https://astro.build) as a fully static site.
It is meant to be served from GitHub Pages at <https://oism1774.github.io/lancamp/>, so every path lives under `/lancamp/`.

## Requirements

- Node.js 22.23.4 or newer (required by Astro 7)
- npm

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:4321/lancamp/>. The dev server reloads on save.

## Build

```bash
npm run build
```

The static site is written to `dist/`. Deploy the contents of that folder as the site root for `/lancamp/`.

To check the production build locally:

```bash
npm run preview
```

and open <http://localhost:4321/lancamp/>.

## Project layout

```
astro.config.mjs        site + base ('/lancamp'), static output
public/                 SVG assets copied as-is (favicon, campfire marks, heart-fire for later)
src/pages/index.astro   the page: head/meta, text, and the desktop/mobile layout CSS
src/components/
  CampScene.astro       pixel scene (hills, pines, ground, light pool, logs, crew, fire)
  Sky.astro             stars, twinkling stars and shooting stars
  Sign.astro            the wooden "COMING SOON / pull up a log" sign
src/data/scene.ts       small arrays the scene is generated from
src/data/stars.ts       star positions
src/lib/pixels.ts       turns character-map sprites into SVG paths
src/styles/global.css   colour and font tokens
design/                 brief, design references and tokens (not deployed)
```

Notes:

- Fonts are self-hosted through `@fontsource/silkscreen` (700) and `@fontsource/vt323`; the page makes no third-party requests.
- There is one layout breakpoint at 860px. On desktop the scene is anchored to the bottom with the fire at 68% of the width; at 860px and below everything is centred.
- All animation uses `steps()` and stops under `prefers-reduced-motion: reduce`.
- To change the scene, edit the arrays in `src/data/scene.ts`; coordinates are in a 2400 x 440 viewBox with the fire at x = 1200.
