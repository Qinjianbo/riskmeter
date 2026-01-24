# RiskMeter

**RiskMeter** is an educational platform that helps investors understand risk, market sentiment, and behavioral cycles —  
**without predicting prices or recommending securities**.

The project combines **conceptual explanations** with **interactive tools** to support more rational investment decisions.

🌐 Live site: https://riskmeter.app

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

---

## Automation Scripts

These helpers orchestrate task generation, execution, and publishing via Codex CLI.

- `scripts/codex-run.sh` — Wrapper for running Codex non‑TUI with the bundled Node.
  - Example: `scripts/codex-run.sh exec "Summarize repo status"`
- `scripts/auto-iterate.sh --codex` — Generate `TASKS.md` using Codex.
- `scripts/auto-exec.sh` — Implement unchecked tasks from `TASKS.md` (also updates task status).
  - Optional: `--dry-run`, `--allow-dirty`, `--full-auto`
- `scripts/auto-commit.sh` — Codex stages, commits, and pushes to `origin/main`.
  - Optional: `-m "feat: your message"`
- `scripts/auto-run.sh` — End‑to‑end: generate tasks → execute → commit/push.
  - Optional: `--dry-run`, `--skip-commit`, `--full-auto`

Note: `--full-auto` uses Codex bypass mode; use with caution.

### Auto-Execution Modes

You can run task execution in two ways:

1) **Two-step (manual control)**
   ```bash
   scripts/auto-iterate.sh --codex
   scripts/auto-exec.sh
   ```

2) **One-shot (orchestrated)**
   ```bash
   scripts/auto-run.sh
   ```
   Add `--dry-run` or `--full-auto` if needed.

---

## Contact / Feedback

If you have feedback, suggestions, or ideas:
- Open an issue
- Or simply use the tools and share them with others

---

© RiskMeter — Measure Risk. Stay Rational.
