# Changelog

## 2026-01-24
- Added local persistence for drawdown test inputs and pendulum settings.
- Added drawdown scenario saving, comparison, and per-scenario summary copy.
- Added shareable summary text, notes, and tooltips explaining drawdown/recovery math.
- Added bilingual Risk Glossary page stubs with aligned core term definitions and tool CTAs.

Notes / Decisions:
- Chose localStorage only (no accounts) to keep early retention lightweight.
- Limited scenarios to 3 for clarity and faster comparison.
- Used hover/click tooltips to explain drawdown math without cluttering the UI.
