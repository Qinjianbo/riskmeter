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

- Drawdown Tolerance Test
- Drawdown Recovery Scenarios
- Drawdown Capacity Calculator
- Rebalancing Planner
- Market Pendulum
- Risk Glossary and bilingual risk education guides

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

## Development

RiskMeter is now built with Astro and Tailwind CSS.

- Install dependencies: `npm install`
- Run locally: `npm run dev`
- Build: `npm run build`
- Preview the built site: `npm run preview`
- Release governance after build: `python3 scripts/seo-governance.py --root dist`

Cloudflare Pages:

- Build command: `npm run build`
- Build output directory: `dist`

## Release Process & Governance

Owner: Content/SEO (EN & ZH). Frequency: before every release (at least monthly).

- [ ] Terminology: glossary terms match tool labels; EN/ZH wording aligned.
- [ ] Numbers: rounding, currency format, thresholds (≥99% handling), and example math verified.
- [ ] Links & SEO: CTA targets, hreflang/canonical pairs, sitemap.xml updated for new/renamed pages.
- [ ] Run `npm run build`, then `python3 scripts/seo-governance.py --root dist` to flag rm_* / canonical / hreflang / sitemap coverage issues before every release.
- [ ] Storage parity: confirm Drawdown Test / Drawdown Recovery / Rebalancing Planner EN and ZH builds share the same `rm_*` localStorage key names (with the `rm_` prefix).
- [ ] QA: desktop/mobile layouts (inputs, sliders, tooltips), localStorage persistence with `rm_*` keys, copy/clear/feedback flows.

---

## Release Governance Script

`scripts/seo-governance.py` emits a JSON report on `rm_*` keys, canonical/hreflang metadata, and sitemap coverage.

Run it against the generated site:

```bash
npm run build
python3 scripts/seo-governance.py --root dist
```

The old private automation submodule is no longer required for Cloudflare Pages deployment.

---

## Contact / Feedback

If you have feedback, suggestions, or ideas:
- Open an issue
- Or simply use the tools and share them with others

---

© RiskMeter — Measure Risk. Stay Rational.
