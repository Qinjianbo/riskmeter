# RiskMeter

**RiskMeter** is an educational platform that helps investors understand risk, market sentiment, and behavioral cycles —  
**without predicting prices or recommending securities**.

The project combines **conceptual explanations** with **interactive tools** to support more rational investment decisions.

🌐 Live site: https://riskmeter.app

中文说明请见：[README.zh.md](README.zh.md)

---

## Why RiskMeter?

Most investment content focuses on:
- What to buy
- When to enter
- How much upside there is

RiskMeter focuses on a different question:

> **How much risk am I actually taking — and how does that change with market sentiment?**

Instead of forecasts or stock tips, RiskMeter provides:
- Visual frameworks
- Behavioral perspectives
- Simple, practical tools

---

## Core Principles

- **Risk before return**  
  Avoiding large mistakes matters more than chasing upside.

- **Behavior over prediction**  
  Discipline, positioning, and psychology dominate long-term outcomes.

- **Tools over opinions**  
  We provide frameworks and tools, not market calls.

---

## Current Features

### 1. Market Pendulum
An interactive visualization inspired by behavioral investing.

- Understand cycles of excessive optimism and pessimism
- Reason about *risk asymmetry*, not price direction
- Educational use only

**English:**  
https://riskmeter.app/en/pendulum/

**中文：**  
https://riskmeter.app/zh/pendulum/

---

## Language Support

RiskMeter is fully bilingual:

- English: `/en/`
- 中文：`/zh/`

Language is automatically detected, and users can switch manually at any time.

---

## Disclaimer

RiskMeter is provided **for educational and research purposes only**.

It does **not** constitute:
- Investment advice
- Financial advice
- Trading advice
- A recommendation of any security or strategy

Users are solely responsible for their own investment decisions.

---

## Project Status

- Early-stage, actively evolving
- Focused on content quality and tool usefulness
- Monetization is **not** enabled yet

See [`PLAN.md`](./PLAN.md) for upcoming milestones.

## Release Process & Governance

Owner: Content/SEO (EN & ZH). Frequency: before every release (at least monthly).

- [ ] Terminology: glossary terms match tool labels; EN/ZH wording aligned.
- [ ] Numbers: rounding, currency format, thresholds (≥99% handling), and example math verified.
- [ ] Links & SEO: CTA targets, hreflang/canonical pairs, sitemap.xml updated for new/renamed pages.
- [ ] QA: desktop/mobile layouts (inputs, sliders, tooltips), localStorage persistence with `rm_*` keys, copy/clear/feedback flows.

---

## Automation Scripts

These helpers are provided via the `tools/codex-scripts` submodule.

- Initialize submodules after clone:
  - `git submodule update --init --recursive`
- Update the submodule when needed:
  - `git submodule update --remote tools/codex-scripts`
  - `git add tools/codex-scripts .gitmodules && git commit -m "chore: bump codex-scripts submodule"`
- Configure defaults in `config.yaml` (ignored in git). Use `tools/codex-scripts/config.example.yaml` as a template.
- `tools/codex-scripts/codex-run.sh` — Wrapper for running Codex non‑TUI with the bundled Node.
  - Example: `tools/codex-scripts/codex-run.sh exec "Summarize repo status"`
- `tools/codex-scripts/auto-iterate.sh --codex` — Generate `TASKS.md` using Codex.
- `tools/codex-scripts/auto-exec.sh` — Implement unchecked tasks from `TASKS.md` (also updates task status).
  - Optional: `--dry-run`, `--allow-dirty`, `--full-auto`
- `tools/codex-scripts/auto-commit.sh` — Codex stages, commits, and pushes to `origin/main`.
  - Optional: `-m "feat: your message"`
- `tools/codex-scripts/auto-run.sh` — End‑to‑end: generate tasks → execute → commit/push.
  - Optional: `--dry-run`, `--skip-commit`, `--full-auto`

Note: `--full-auto` uses Codex bypass mode; use with caution.

### Scheduled Execution (macOS)

Two common scheduling options:

1) **launchd (recommended)**
   ```bash
   cat <<'EOF' > ~/Library/LaunchAgents/com.riskmeter.autorun.plist
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
     <key>Label</key><string>com.riskmeter.autorun</string>
     <key>ProgramArguments</key>
     <array>
       <string>/bin/zsh</string>
       <string>-lc</string>
       <string>/Users/qinjianbo/Documents/self_work/RiskMeter/tools/codex-scripts/auto-run.sh --full-auto</string>
     </array>
     <key>StartInterval</key><integer>3600</integer>
     <key>RunAtLoad</key><true/>
     <key>WorkingDirectory</key><string>/Users/qinjianbo/Documents/self_work/RiskMeter</string>
     <key>StandardOutPath</key><string>/Users/qinjianbo/Documents/self_work/RiskMeter/auto-run.log</string>
     <key>StandardErrorPath</key><string>/Users/qinjianbo/Documents/self_work/RiskMeter/auto-run.err</string>
   </dict>
   </plist>
   EOF

   launchctl load -w ~/Library/LaunchAgents/com.riskmeter.autorun.plist
   ```

2) **cron (simple)**
   ```bash
   crontab -e
   # every hour
   0 * * * * /bin/zsh -lc "/Users/qinjianbo/Documents/self_work/RiskMeter/tools/codex-scripts/auto-run.sh --full-auto" >> /Users/qinjianbo/Documents/self_work/RiskMeter/auto-run.log 2>> /Users/qinjianbo/Documents/self_work/RiskMeter/auto-run.err
   ```

Tip: replace `--full-auto` with `--dry-run` if you want preview-only runs.

---

## Contact / Feedback

If you have feedback, suggestions, or ideas:
- Open an issue
- Or simply use the tools and share them with others

---

© RiskMeter — Measure Risk. Stay Rational.
