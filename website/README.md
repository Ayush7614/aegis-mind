# AegisMind website

The site + blog for the [AegisMind](../README.md) security vault.
React + Vite + TypeScript + Tailwind CSS v4, deployed to GitHub Pages.

**Live:** https://ayush7614.github.io/aegis-mind/

## Run locally

```bash
cd website
npm install        # first time only
npm run dev        # start the dev server
```

Then open the URL it prints — **http://localhost:5173/aegis-mind/**.

> The base path is `/aegis-mind/` (matches GitHub Pages), so the trailing
> path matters: `localhost:5173/aegis-mind/`, not `localhost:5173/`.

## Other commands

```bash
npm run build      # type-check + production build into website/dist
npm run preview    # serve the production build locally
```

## Project layout

```
website/src/
├── components/    # Navbar, Footer, Hero, CodeBlock, Callout, TerminalDemo, ...
├── pages/         # Home, Blog, BlogPost, NotFound
├── posts/         # long-form blog content (e.g. openTaintGuide.tsx)
├── data/posts.ts  # post metadata / index
└── index.css      # cyber/red-team theme + animations
public/demos/      # recorded terminal GIFs/PNGs (see ../demo/)
```

## Blog terminal demos

The animated terminal GIFs in posts are generated with VHS from
[`../demo/`](../demo/README.md):

```bash
# from the repo root
brew install vhs ttyd ffmpeg   # one-time
./demo/render.sh               # writes to website/public/demos/
```

## Deploy

Pushing changes under `website/` to `main` triggers
`.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
