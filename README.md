# Raven Flock

Quiet tools. A reminder you are not forgotten. Studio site for [dust2ash7](https://github.com/dust2ash7).

**Live:** https://dust2ash7.github.io/raven-flock/

## Brand

- **Studio:** Raven Flock  
- **Feel:** quiet tools / “Consider the ravens” (Luke 12:24 — providence, calm not preachy)  
- **Palette:** parchment cream `#F5F0E6`, raven charcoal `#1C1917`, dawn amber `#D4A574`, muted sky `#7BA3A8`  

## Featured & coming

| Product | Status | Links |
|---------|--------|-------|
| **Stillpoint** | Featured | [itch.io](https://dust2ash7.itch.io/stillpoint) · [web app](https://dust2ash7.github.io/Meditation-App/) — calm meditation companion |
| **Labor Pulse** | Tools | [GitHub](https://github.com/dust2ash7/Labor-Pulse) — quiet labor companion (not a medical device; logs stay on device) |
| **Life Formed** | Coming soon | [Play teaser](https://dune-palm-fire-heart.grok.me) — soft tend-garden game; *Tend the Garden. Bring order to the chaos.* |

## Site

Static single page at repo root:

| File | Role |
|------|------|
| `index.html` | Structure & content |
| `style.css` | Layout & brand colors |
| `script.js` | Intro storyboard gallery (auto-fade + click-through; reduced-motion safe) |
| `logo.svg` / `favicon.svg` | Compact hand-drawn flock mark + wordmark |

Intro frames (branch → eye → reflection → logo) ship as stylized SVG storyboard art under `assets/*.svg`. Optional compressed JPEG photo frames can be assembled from base64 text chunks in `assets/chunks/` via `frames-loader.js` when complete; the gallery falls back to the SVGs. (GitHub MCP cannot push raw binary images.)

Prior intro motion cuts live under `assets/archive/`. Live intro: `assets/raven-flock-intro.mp4` (cache-bust `?v=4`).

## GitHub Pages

Workflow: `.github/workflows/pages.yml` deploys from the repository root on push to `main` using official `actions/configure-pages` (with `enablement: true`), `upload-pages-artifact`, and `deploy-pages`.

A second workflow (`.github/workflows/static.yml`) also deploys static content to Pages. Source should stay **GitHub Actions** in repo Settings → Pages.

## Local preview

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
