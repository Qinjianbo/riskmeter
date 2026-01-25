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

---

## 中文说明

**RiskMeter** 是一个投资风险教育平台，提供概念解释与简易工具，不做预测、不荐股。

### 核心内容
- 双语站点：`/en/` 与 `/zh/`
- 重点工具：市场钟摆、回撤承受度测试、回撤相关概念页
- 免责声明：仅用于教育与研究，不构成任何投资建议

### 自动化脚本（子模块）
自动化脚本位于 `tools/codex-scripts`（submodule）。

- 初始化子模块：
  - `git submodule update --init --recursive`
- 更新子模块：
  - `git submodule update --remote tools/codex-scripts`
  - `git add tools/codex-scripts .gitmodules && git commit -m "chore: bump codex-scripts submodule"`
- 配置文件：在仓库根目录创建 `config.yaml`，模板见 `tools/codex-scripts/config.example.yaml`
