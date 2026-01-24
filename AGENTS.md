# Repository Guidelines

## Project Structure & Module Organization
- Static site with bilingual content.
- Language roots: `en/` and `zh/`, each page lives at `/<lang>/<slug>/index.html`.
- Language entry points: `index.html` (root), `about/index.html`, and other top-level redirects.
- Tools and content are implemented as plain HTML with inline CSS/JS.

## Build, Test, and Development Commands
- No build system or package manager.
- Local preview (simple static server):
  - `python3 -m http.server 8080`
  - Visit `http://localhost:8080/en/` or `/zh/`.
- You can also open `index.html` directly in a browser for quick checks.
- Automation helpers (Codex CLI):
  - `scripts/codex-run.sh exec "Summarize repo status"`
  - `scripts/auto-iterate.sh --codex` (generate `TASKS.md`)
  - `scripts/auto-exec.sh` (implement tasks; updates `TASKS.md`)
  - `scripts/auto-commit.sh` (commit + push via Codex)
  - `scripts/auto-run.sh` (end‑to‑end orchestration)

## Coding Style & Naming Conventions
- Indentation: 2 spaces for HTML/CSS/JS.
- Keep scripts inline at the bottom of each HTML file.
- Use kebab-case slugs (`drawdown-risk`, `market-pendulum-theory`).
- Keep localStorage keys prefixed with `rm_` (e.g., `rm_drawdown_state`).
- Preserve visual consistency: shared colors, spacing, and card styles.

## Testing Guidelines
- No automated tests in this repo.
- Manual checks to perform after changes:
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
