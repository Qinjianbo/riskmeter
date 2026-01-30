# Plan
RiskMeter 的高层路线图，聚焦结果而非任务清单（细项以 `TASKS.md` 为准）。

## 2026-01-30
### Objectives
- 稳定移动端核心工具交互（滑杆/输入/tooltip/锚点跳转），把“可用”提升为“顺手且不误触”，并确保 EN/ZH 同步一致。
- 将发布前巡检流程“可执行化”：把 `rm_*` 本地存储键与 `hreflang/canonical/sitemap` 规则沉淀为脚本与清单，减少人工遗漏与回归。
- 维持并增强双语信息一致性：术语、阈值、示例数学、CTA、互链路径在 EN/ZH 之间可追溯、可复核、可迭代。
- 提升技术 SEO 的可控性：新页面/改动页面能快速纳入 canonical/hreflang/sitemap 的一致性校验，避免收录与互指断裂。
- 巩固站点治理与维护节奏：把“每次发布必做”与“每月/每季度例行”明确到责任与产出物（日志、问题清单、修复记录）。

### Current Status
- 工作区存在未提交改动：`ITERATION_LOG.md`、`TASKS.md`、`config.example.yaml` 均已修改，表明迭代与自动化配置正在推进但尚未收尾；另外加了脚本、sitemap 和 .auto-run.ignore 的更新。
- 双语静态站点与核心内容骨架已稳定（/en、/zh），知识内容与工具互链已形成“术语表 → 工具 → 支持”的学习旅程雏形。
- 移动端交互问题（滑杆/输入命中区、tooltip 点击/关闭/遮挡）已在 drawdown 测试/恢复和再平衡规划页完成调整，focus outline 和 overflow 也同步兼容 EN/ZH。
- `rm_*` + `hreflang/canonical` 巡检已落地为 `scripts/seo-governance.py`，可在发布前输出问题列表，并且 README/README.zh 已把脚本写入治理步骤。
- 近期执行的全站 canonical/hreflang/sitemap 巡检（含源码脚本）已确认没有缺口，sitemap.xml 也新增 https://riskmeter.app/ 入口，结果和建议写入 ITERATION_LOG.md。

### Milestones & Dates
- 2026-02（上旬）：完成移动端交互基线修复与回归（回撤测试/回撤恢复/再平衡优先），并在 EN/ZH 双语页面同步上线。
- 2026-02（中旬）：落地可运行的巡检脚本（`rm_*`、`hreflang/canonical`、sitemap 覆盖度），输出可读的缺口清单与建议修复项，纳入发布前流程。
- 2026-02（下旬）：完成一次全站 `canonical/hreflang/sitemap` 巡检（聚焦近期新增/改动页面），并关闭高优先级缺口（互指、canonical、重定向入口）。
- 2026-03：固化发布治理为“每次发布必跑脚本 + 必做手工抽检 + 记录到日志”的标准节奏，并明确责任人与复核要求。
- 2026-04：将隐私/免责声明与本地存储声明模板覆盖到所有工具与关键 FAQ/Support 页面，双语一致并通过移动端视图检查。

### Risks & Mitigations
- 移动端修复引入新回归（布局/点击层级/滚动）：先限定三页核心工具做“最小变更”，每次改动后做 iOS Safari + Android Chrome 快速回归清单。
- 双语同步滞后导致体验割裂：把 EN/ZH 作为同一变更单元，发布前强制走“术语/阈值/CTA/互链/hreflang”对照检查。
- SEO 元数据遗漏导致收录或互指下降：将 canonical/hreflang/sitemap 规则脚本化，新增/改动页面必须通过检查才允许发布。
- 自动化脚本产出噪声过大影响使用：先定义“高优先级规则集”（致命/警告/建议），输出可定位的页面路径与建议修复动作，再逐步扩展规则。
- 工作区积累未收尾改动影响发布质量：设定“发布前必须清洁工作区”的门槛（锁文件处理、配置样例更新、迭代日志补齐）。

### Next 1-2 Weeks
- Continue to run the mobile QA checklist whenever new UI tweaks land so the drawdown/rebalancing touch controls stay stable and the tooltip/focus experience keeps running smoothly.
- Treat `scripts/seo-governance.py` as the default pre-release gate for rm_*/canonical/hreflang/sitemap coverage and capture its JSON output in release notes or iteration logs.
- Keep tracking EN/ZH content parity (CTAs, terminology, thresholds) and surface any anomalies in the iteration log so documentation and QA stay synchronized.
- Keep the governance checklist and release documentation current by baking script outputs and mobile observations into the next release retrospectives.

### Out of Scope / Not Now
- 账号体系、云端存储、跨设备同步与个性化推荐（保持本地优先与隐私边界）。
- 价格预测、交易信号、收益承诺或任何形式的投资建议输出。
- 大型前端框架化/构建系统引入（短期维持纯静态与内联脚本的可维护边界）。
- 复杂图表框架与重度可视化重构（优先保证内容与交互的清晰、可靠与一致）。

## 2026-01-28
### Objectives
- 上线双语回撤恢复知识中心，提供示例、边界情境、工具解读与可分享片段，形成常青链接资产。
- 固化“术语表 → 工具 → 支持”学习旅程为站点导航与 CTA 流程，确保 EN/ZH 入口对齐、跳转低摩擦。
- 把发布治理流程产品化：术语/数值/链接/QA 的检查清单、责任人、节奏标准化，避免回归。
- 强化技术 SEO 与入口资产：canonical/hreflang/sitemap/redirect 一致，新增页面可快速收录且双语互指。
- 巩固隐私与免责声明基线：统一工具内本地存储声明、数据范围说明与风险提示，降低误解。

### Current Status
- 双语静态站点结构稳定（/en、/zh）；核心工具与内容同步更新。
- 回撤恢复示例与边界情境已嵌入 EN/ZH 页面，术语与数值对齐，并补充本地存储/风险提示。
- “术语表 → 工具 → 支持” 导航上线到主页与核心工具页，Glossary/Support 互链保持一致。
- 完成一次 hreflang/canonical/sitemap 巡检，补齐 pendulum 根页的 canonical/hreflang。
- 发布治理清单已写入 README/README.zh，包含责任人、频率与可勾选项。
- Support 与 Drawdown FAQ 现已加入可复制的本地存储/风险提示与工具互链；回撤恢复/测试/再平衡分享片段已提供 EN/ZH 版本。
- 移动端回归问题（滑杆/输入/tooltip、跳至工具锚点）已整理责任页面与修复列表；rm_* + hreflang/canonical 巡检脚本思路与伪代码已成稿（待实现）。

### Milestones & Dates
- 2026-02：发布回撤恢复知识中心 EN/ZH 版本，内嵌工具解读与场景示例。
- 2026-02：完成学习旅程信息架构与 CTA 路径上线（主页、工具页、支持页互链）。
- 2026-03：将发布治理清单产品化并正式采用，形成每次发布的例行流程。
- 2026-03：完成全站 hreflang/canonical/sitemap 审核与自动化检查脚本雏形。
- 2026-04：隐私与免责声明统一模板落地到所有工具与 FAQ，双语一致。

### Risks & Mitigations
- 双语内容偏差或滞后：发布前对照术语表双向审校，设立每次发布的 EN/ZH 对齐检查。
- SEO 配置遗漏导致收录下降：上线前后跑 canonical/hreflang/sitemap 巡检清单，新增页纳入手工验证。
- 工具内声明不一致引发误解：统一本地存储/风险提示文案模板，嵌入所有工具并做移动端视图检查。
- 发布节奏缺乏责任人导致回归：为治理清单分配责任角色，发布时强制走检查步骤。
- 交互改动未覆盖移动端：建立关键工具的移动端快速回归（滑块/输入/tooltip）清单。

### Next 1-2 Weeks
- 落地移动端修复（滑杆/输入命中区、跳至工具锚点、tooltip 点击区），并复测 EN/ZH 页面。
- 将 rm_* + hreflang/canonical 巡检脚本从伪代码落地为可运行脚本；纳入发布前检查。
- 继续固化导航与 SEO 巡检，监测新增页面的 canonical/hreflang 一致性。
- 观察反馈信号，评估是否增加自定义恢复周期或“跳至工具”锚点以降低折叠风险。

### Out of Scope / Not Now
- 引入账号体系、云端存储或个性化推荐。
- 价格预测、交易信号或收益承诺相关功能。
- 复杂数据可视化重构（如新增图表框架），当前专注内容与 IA。

## Vision
RiskMeter 希望成为有关投资风险、回撤与行为周期的可信参考，并通过简单直观的工具支撑学习与决策。

## Guardrails
- 不提供交易信号、预测或投资建议。
- 永久优先保持清晰、常青的实用性，而非功能堆叠或增长幻觉。

## Governance Checklist / 治理清单
### English
- 术语：以风险词汇表为唯一基准，上线前同步校对工具标签与翻译。
- 节奏：每次发布前或每月复核核心文案与词汇表；每季度检查 hreflang/sitemap。
- 审核人：至少 1 名英文 + 1 名中文审校，确认链接、数值与语气一致。
- 自动化：发布前优先跑巡检脚本（`rm_*`、canonical/hreflang、sitemap 覆盖），把问题清单附在发布记录中。

### 中文
- 术语：以风险术语表为唯一依据，上线前同步校对工具标题与翻译。
- 节奏：每月或每次发布复核核心文案与术语；每季度做一次 hreflang/sitemap 检查。
- 审核人：至少 1 名英文 + 1 名中文审校，确认链接、数值与语气一致。
- 自动化：发布前优先跑巡检脚本（`rm_*`、canonical/hreflang、sitemap 覆盖），把问题清单附在发布记录中。
