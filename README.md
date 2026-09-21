# Raven Flock

Quiet tools, with care. Studio site for [dust2ash7](https://github.com/dust2ash7).

**Live:** https://dust2ash7.github.io/raven-flock/

## Brand

- **Studio:** Raven Flock  
- **Feel:** quiet tools / “Consider the ravens” (Luke 12:24 — care & providence, calm not preachy)  
- **Palette:** parchment cream `#F5F0E6`, raven charcoal `#1C1917`, dawn amber `#D4A574`, muted sky `#7BA3A8`  
- **Featured product:** [Stillpoint](https://dust2ash7.itch.io/stillpoint) (meditation) — also on [GitHub Pages](https://dust2ash7.github.io/Meditation-App/)

Other games are intentionally not featured on this studio page.

## Site

Static single page at repo root:

| File | Role |
|------|------|
| `index.html` | Structure & content |
| `style.css` | Layout & brand colors |
| `script.js` | Intro storyboard gallery (auto-fade + click-through; reduced-motion safe) |
| `logo.svg` / `favicon.svg` | Compact hand-drawn flock mark + wordmark |

Intro frames (branch → eye → reflection → logo) ship as stylized SVG storyboard art under `assets/*.svg`. Optional compressed JPEG photo frames can be assembled from base64 text chunks in `assets/chunks/` via `frames-loader.js` when complete; the gallery falls back to the SVGs. (GitHub MCP cannot push raw binary images.)

## GitHub Pages

Workflow: `.github/workflows/pages.yml` deploys from the repository root on push to `main` using official `actions/configure-pages` (with `enablement: true`), `upload-pages-artifact`, and `deploy-pages`.

If the site does not appear after the first successful workflow run, the founder may need a one-time enable in **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Local preview

Open `index.html` in a browser, or:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
