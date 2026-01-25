# Plan

High-level roadmap for RiskMeter. Focus on outcomes, not task lists.

## 2026-01-25

- Define the next tool-and-content roadmap with clear value rationale and how each addition advances the learning journey.
- Strengthen trust and clarity through transparent methodologies, citations, and evergreen disclaimers across tools (EN/ZH).
- Improve discovery and SEO foundations with structured metadata, sitemaps, and consistent cross-links between glossary and tools.
- Establish a sustainable long-term model that preserves neutrality (principles, possible monetization paths, and guardrails).
- Maintain strict bilingual parity via a content governance cadence that keeps EN/ZH synchronized as the site grows.

### Next tool-and-content roadmap (value + learning journey)

| Step | Tool or content | Value rationale | Learning journey mapping |
| --- | --- | --- | --- |
| 1 | Drawdown Recovery Scenarios (tool) | Sets realistic recovery expectations and reduces panic selling by showing how drawdowns compound. | After Drawdown Test: translate tolerance into recovery awareness. |
| 2 | Risk Budget Allocator (tool) | Converts drawdown limits into position size caps across sleeves. | After Drawdown Capacity: move from single position to portfolio sizing. |
| 3 | Cycle Context Brief (content) | Explains what to watch in sentiment cycles without forecasting prices. | Between Pendulum and Rebalancing: add context before rules. |
| 4 | Rebalancing Playbook (content) | Provides repeatable checklists for execution discipline. | After Rebalancing Planner: convert plan into habits. |
| 5 | Decision Journal (tool) | Encourages pre-commitment and post-mortems to reduce behavioral drift. | After Playbook: reinforce behavior and learning loops. |

### Structured metadata + sitemap plan

Structured metadata (per page type):
- Tools: JSON-LD `WebApplication` with `name`, `description`, `url`, `inLanguage`, `applicationCategory`, `featureList`, `educationalUse`, `isPartOf`, `dateModified`.
- Guides/articles: JSON-LD `Article` with `headline`, `description`, `url`, `inLanguage`, `about`, `keywords`, `dateModified`.
- Glossary terms: JSON-LD `DefinedTerm` with `name`, `description`, `inLanguage`, `inDefinedTermSet`, `sameAs` (if applicable).

Sitemap plan:
- Add `sitemap.xml` at root with all canonical EN/ZH URLs and `lastmod`.
- If the list grows, split into `sitemap-tools.xml`, `sitemap-content.xml`, `sitemap-glossary.xml` with a `sitemap-index.xml`.
- Update `robots.txt` to reference the sitemap URL.

Glossary <-> tool cross-link rules:
- Every tool page links to 3-6 relevant glossary terms in a "Key terms" block.
- Every glossary term links back to at least 2 tools and 1 guide where the term is used.
- EN/ZH links must mirror each other (same count, same intent, parallel placement).

### Neutral sustainability model (no-prediction positioning)

Principles:
- Keep core tools free and educational; avoid paywalled forecasts or trade calls.
- No broker/issuer affiliate links or performance marketing.
- No claims about expected returns or market direction.

Possible revenue options (neutral):
- Optional supporter tier (tips, donations, or patron membership).
- Paid workshops or risk-education sessions for institutions.
- Downloadable playbooks/templates that do not include signals.
- Lightweight sponsorships with strict editorial separation.

Guardrails:
- Revenue cannot depend on trades, signals, or prediction accuracy.
- Sponsors have no control over tool logic or content.
- Keep disclaimers visible and consistent on every tool page.

### Bilingual content governance checklist

- [ ] Update EN and ZH pages in the same change set.
- [ ] Match headings, section order, and CTA destinations.
- [ ] Keep thresholds, formulas, and examples identical across languages.
- [ ] Mirror glossary links and "learning journey" CTAs.
- [ ] Verify `hreflang` and language switcher links.
- [ ] Re-check tool logic, labels, and localStorage keys for parity.
- [ ] Run manual layout checks on desktop and mobile for both languages.

## Vision

RiskMeter should be a trusted reference for investment risk, drawdowns, and behavioral cycles, supported by simple, intuitive tools.

## Guardrails

- Not a trading platform, signal service, or prediction engine.
- Evergreen utility and clarity come before growth and complexity.
