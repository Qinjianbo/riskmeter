# Tasks (Auto-generated)
## 2026-01-24
- [x] Create `/en/rebalancing-planner/` and `/zh/rebalancing-planner/` page skeletons with shared layout, nav, and `hreflang`
- [x] Implement input form (portfolio value, target/current allocation, band, drift trigger, cadence, contributions toggle) with basic validation
- [x] Add drift and status logic per thresholds; render result cards (status, largest drift, suggested trades, risk note, next review)
- [x] Persist planner state in localStorage (`rm_rebalance_state`) and restore on load
- [x] Add copy/clear actions and ensure EN/ZH labels mirror exactly
