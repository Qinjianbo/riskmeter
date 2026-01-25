# Plan

High-level roadmap for RiskMeter. Focus on outcomes, not task lists.

## 2026-01-26

- Land a stable Drawdown Recovery Scenarios v1 that feels accurate, understandable, and trust-building across edge cases.
- Maintain discoverability and correctness across EN/ZH entry points with ongoing technical SEO hygiene as new pages ship.
- Turn the tool suite into a guided learning path with a clear next-step narrative and glossary integration in both languages.
- Operationalize bilingual governance so terminology, links, and tone stay aligned each release with minimal overhead.
- Validate a sustainable support/education model that fits the site's educational mission and sets expectations clearly.

## Vision

RiskMeter should be a trusted reference for investment risk, drawdowns, and behavioral cycles, supported by simple, intuitive tools.

## Guardrails

- Not a trading platform, signal service, or prediction engine.
- Evergreen utility and clarity come before growth and complexity.

## Governance Checklist / 治理清单

### English
- Terminology: treat the Risk Glossary as the source of truth; sync tool labels and translations before release.
- Cadence: review core copy + glossary monthly or per release; run a quarterly hreflang/sitemap check.
- Reviewer: require one EN reviewer and one ZH reviewer to confirm links, numbers, and tone alignment.

### 中文
- 术语：以风险术语表为唯一依据，上线前同步校对工具标题与翻译。
- 节奏：每月或每次发布复核核心文案与术语；每季度做一次 hreflang/sitemap 检查。
- 审核人：至少 1 名英文 + 1 名中文审校，确认链接、数值与语气一致。

## Working Drafts (2026-01-26)

### Drawdown Recovery Scenarios v1 — Edge-case expectations (EN)
- Drawdown 0% (forced via storage/manual input), portfolio $100,000: loss $0, after $100,000; recovery gain +0.0%; annualized +0.0% and monthly +0.0% across all horizons.
- Drawdown 5% (min slider), portfolio left blank/0: loss and after values show "—"; recovery gain about +5.3%; annualized about +5.3% / +1.7% / +1.0% (1/3/5y); monthly about +0.4% / +0.1% / +0.1%.
- Drawdown 50%, portfolio $100,000: loss -$50,000, after $50,000; recovery gain +100.0%; annualized about +100.0% / +26.0% / +14.9%; monthly about +5.9% / +1.9% / +1.2%.
- Drawdown 80% (max slider), portfolio $100,000: loss -$80,000, after $20,000; recovery gain +400.0%; annualized about +400.0% / +71.0% / +38.0%; monthly about +14.4% / +4.6% / +2.7%.
- Drawdown 99% (forced): recovery gain and annualized/monthly fields show "—" (guardrail); loss/after still compute if a portfolio size is provided.

### 回撤恢复场景 v1 — 边缘场景与预期输出（中文）
- 回撤 0%（通过存储/手动输入触发），组合 100,000 美元：损失 $0，回撤后 $100,000；恢复所需 +0.0%；1/3/5 年年化与月度均为 +0.0%。
- 回撤 5%（滑杆最小值），组合留空/为 0：损失与回撤后金额显示“—”；恢复所需约 +5.3%；年化约 +5.3% / +1.7% / +1.0%；月度约 +0.4% / +0.1% / +0.1%。
- 回撤 50%，组合 100,000 美元：损失 -$50,000，回撤后 $50,000；恢复所需 +100.0%；年化约 +100.0% / +26.0% / +14.9%；月度约 +5.9% / +1.9% / +1.2%。
- 回撤 80%（滑杆最大值），组合 100,000 美元：损失 -$80,000，回撤后 $20,000；恢复所需 +400.0%；年化约 +400.0% / +71.0% / +38.0%；月度约 +14.4% / +4.6% / +2.7%。
- 回撤 99%（强制输入）：恢复所需与年化/月度输出显示“—”（极端保护）；若填写组合金额，损失与回撤后仍会计算。

### Entry-point SEO hygiene review (EN)
- Checked entry points: `/`, `/about/`, `/en/`, `/zh/`, `/en/about/`, `/zh/about/`.
- Findings: `/en/` + `/zh/` include canonical + hreflang pairs and are in `sitemap.xml`; root and `/about/` selectors are `noindex` and intentionally excluded from the sitemap.
- Fixes: none required.

### 入口页技术 SEO 复核（中文）
- 已检查入口页：`/`、`/about/`、`/en/`、`/zh/`、`/en/about/`、`/zh/about/`。
- 结论：`/en/` 与 `/zh/` 具备 canonical + hreflang 且已收录在 `sitemap.xml`；根目录与 `/about/` 为语言选择页，设置 `noindex` 并未加入站点地图符合预期。
- 需要修复：无。

### Guided learning path outline (EN)
- Drawdown Tolerance Test → Next: compare recovery horizons in Drawdown Recovery Scenarios. Glossary: drawdown, maximum drawdown.
- Drawdown Recovery Scenarios → Next: translate recovery pressure into capacity limits. Glossary: recovery time, compounding.
- Drawdown Capacity Calculator → Next: align risk budget and set rebalancing bands. Glossary: risk budget, capacity.
- Drawdown Risk Explained → Next: anchor definitions in the Risk Glossary and revisit your drawdown band. Glossary: tail risk, volatility.
- Rebalancing Planner → Next: connect drift bands to drawdown limits and recovery timelines. Glossary: drift, rebalancing band, contribution rebalancing.
- Market Pendulum Tool → Next: read the Market Pendulum Guide and map sentiment to risk signals. Glossary: sentiment, mean reversion, behavioral gap.
- Market Pendulum Guide → Next: apply cycle awareness to rebalancing decisions. Glossary: cycle, risk signal.

### 学习路径提纲（中文）
- 回撤承受度测试 → 下一步：用回撤恢复场景对比恢复速度。术语：回撤、最大回撤。
- 回撤恢复场景 → 下一步：把恢复压力转化为容量上限。术语：恢复时间、复利。
- 回撤容量计算器 → 下一步：确定风险预算并设定再平衡区间。术语：风险预算、容量。
- 回撤风险解释 → 下一步：回到风险术语表统一定义并校准回撤分档。术语：尾部风险、波动率。
- 再平衡计划器 → 下一步：把偏离区间对齐回撤上限与恢复节奏。术语：偏离、再平衡区间、贡献再平衡。
- 市场钟摆工具 → 下一步：阅读钟摆原理并映射情绪→风险信号。术语：情绪、均值回归、行为偏差。
- 市场钟摆原理 → 下一步：将周期感知落到再平衡决策。术语：周期、风险信号。

### Release governance workflow (EN)
- Step 1: terminology sync — confirm tool labels and glossary terms match (EN/ZH).
- Step 2: link + number alignment — verify cross-links, thresholds, and example numbers match across languages.
- Step 3: SEO hygiene — quick canonical/hreflang + sitemap check for new/edited pages.
- Step 4: reviewers — 1 EN + 1 ZH reviewer sign off on tone, numbers, and CTAs.

### 发布治理流程（中文）
- 第 1 步：术语同步 — 核对工具标题与术语表一致（中/英）。
- 第 2 步：链接与数值校对 — 链接、阈值、示例数字保持一致。
- 第 3 步：SEO 快速复核 — 检查 canonical/hreflang 与 sitemap 是否覆盖新增页面。
- 第 4 步：审核签字 — 至少 1 名英文 + 1 名中文确认语气、数值与 CTA。

### Support & education model page outline (EN)
- Purpose: clarify the educational mission and what RiskMeter does not provide.
- What you can do here: learn risk concepts, test drawdown tolerance, set rebalancing discipline.
- What we do not do: no forecasts, signals, or personalized advice.
- How to use the tools: suggested sequence + local-only data note.
- FAQ: drawdown math, recovery timelines, glossary usage.
- Feedback channel: lightweight form/email + expectation on response time.

### 支持/教育页面提纲（中文）
- 目的：强调教育使命与非建议性质。
- 你能做什么：学习风险概念、评估回撤承受度、建立再平衡纪律。
- 我们不提供什么：不做预测、信号或个性化建议。
- 如何使用工具：推荐顺序 + 本地数据说明。
- 常见问题：回撤计算、恢复周期、术语表使用方式。
- 反馈入口：简洁联系方式 + 回复预期说明。
