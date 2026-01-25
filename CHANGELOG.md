# Changelog

## 2026-01-25
- Added bilingual Rebalancing Planner methodology notes with risk-aligned band guidance.
- Added a share-result action and a local-only persistence note to Rebalancing Planner outputs.
- Linked the Risk Glossary from drawdown test/risk/capacity pages in EN/ZH.
- Aligned tool-page hreflang x-default targets to the English counterparts.

## 2026-01-24
- Added local persistence for drawdown test inputs and pendulum settings.
- Added drawdown scenario saving, comparison, and per-scenario summary copy.
- Added shareable summary text, notes, and tooltips explaining drawdown/recovery math.
- Added bilingual Risk Glossary page stubs with aligned core term definitions and tool CTAs.
- Added bilingual Rebalancing Planner tool with drift bands, trade guidance, and local state.

Notes / Decisions:
- Chose localStorage only (no accounts) to keep early retention lightweight.
- Limited scenarios to 3 for clarity and faster comparison.
- Used hover/click tooltips to explain drawdown math without cluttering the UI.
