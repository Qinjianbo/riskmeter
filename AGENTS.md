# Repository Guidelines

## Project Structure & Module Organization
- Astro static site with bilingual content.
- Source pages live under `src/pages`; shared layouts/components live in `src/layouts` and `src/components`.
- Page metadata, route inventory, bilingual pairs, and most structured content live in `src/data/site.ts`.
- Public static assets live in `public/`; generated output goes to `dist/`.

## Build, Test, and Development Commands
- Install dependencies: `npm install`.
- Local dev server: `npm run dev`.
- Production build: `npm run build`.
- Preview production build: `npm run preview`.
- Release governance after build: `python3 scripts/seo-governance.py --root dist`.
- Cloudflare Pages:
  - Build command: `npm run build`
  - Output directory: `dist`

## Coding Style & Naming Conventions
- Indentation: 2 spaces for Astro/CSS/JS/TS.
- Prefer shared Astro components and data-driven page definitions over one-off HTML pages.
- Use kebab-case slugs (`drawdown-risk`, `market-pendulum-theory`).
- Keep localStorage keys prefixed with `rm_` (e.g., `rm_drawdown_state`).
- Preserve visual consistency through Tailwind utilities and `src/styles/global.css`.

## Testing Guidelines
- Required checks after changes:
  - `npm run build`
  - `python3 scripts/seo-governance.py --root dist`
- Manual checks to perform after UI changes:
  - Desktop + mobile layout (cards, tooltips, inputs).
  - Language switchers and `hreflang` links.
  - Tool interactions (sliders, persistence, copy/clear buttons).
  - LocalStorage behavior across refreshes.

## Commit & Pull Request Guidelines
- Commit history shows short imperative messages, sometimes prefixed with `feat:`.
  - Examples: `feat: 优化文案&&兼容手机`, `Add drawdown capacity tool and FAQ updates`.
- Keep commits small and scoped; bilingual commit messages are acceptable.
- PRs should include:
  - A concise summary of changes.
  - Links to relevant issues (if any).
  - Screenshots or recordings for UI/UX changes.
  - A list of pages/paths touched (e.g., `en/drawdown-test/`).

## Localization & Content Consistency
- Keep EN/ZH content aligned in structure, thresholds, and CTAs.
- Update both language versions when changing tool logic or wording.
- Ensure cross-links are mirrored and correct in both languages.
