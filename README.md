# Tulas International School: homepage redesign

An animated, responsive homepage for [TIS Dehradun](https://tis.edu.in/). All copy comes from the live site.

**Stack:** React 18 (Vite) · Tailwind CSS 3 · Framer Motion 11

## Features

| Feature | Where |
| --- | --- |
| Scroll-triggered staggered reveals | `src/components/Reveal.jsx` (used by About, Campus, Sports) |
| Scroll progress bar | `src/components/ScrollProgress.jsx` |
| Animated dark/light theme switch (persisted, no flash on load) | `src/components/ThemeToggle.jsx` + inline script in `index.html` |
| Custom cursor that reacts to links, buttons and `[data-cursor]` elements | `src/components/CustomCursor.jsx` |
| Parallax Himalayan ridgeline hero | `src/components/Hero.jsx` |

All motion respects `prefers-reduced-motion`. The custom cursor is disabled on touch devices.

## Run locally

Requires Node 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # serve the production build
```

## Deploy

**Vercel:** push to GitHub, *Add New → Project*, import the repo, click *Deploy*. Vite is detected automatically.

**Netlify:** import the repo. Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** set `base: "/<repo-name>/"` in `vite.config.js`, run `npm run build`, and publish the `dist/` folder.

## Structure

```
index.html            fonts, meta tags, theme bootstrap script
src/main.jsx          entry point
src/App.jsx           page composition
src/index.css         colour tokens, Tailwind layers, marquee, reduced-motion rules
src/components/       one component per section or interaction
src/data/content.js   all copy and lists, kept out of the JSX
```

## Design decisions

- **Colour tokens** are CSS variables (RGB channels) mapped into Tailwind, so the theme switch only flips `data-theme` on `<html>`; no component re-renders.
- **No image assets.** The hero is SVG, so the page stays light. To add campus photography, put files in `public/` and reference them with `<img>`.

## Notes

- The enquiry form is a front-end demo. Connect `onSubmit` in `src/components/Enquire.jsx` to the school's admissions API. The live site's OTP verification is not reproduced.
