# RiskMeter（中文说明）

English version: [README.md](README.md)

**RiskMeter** 是一个投资风险教育平台，提供概念解释与简易工具，不做预测、不荐股。

## 核心内容
- 双语站点：`/en/` 与 `/zh/`
- 重点工具：市场钟摆、回撤承受度测试、回撤相关概念页
- 免责声明：仅用于教育与研究，不构成任何投资建议

## 发布流程与治理

责任人：内容 / SEO（中英双语）；频率：每次发布前（至少每月）。

- [ ] 术语：按风险术语表校对工具标签与译文。
- [ ] 数值：四舍五入、货币格式、阈值（≥99% 处理）、示例计算一致。
- [ ] 链接与 SEO：CTA 目标、hreflang/canonical 配对，新/改名页面写入 sitemap.xml。
- [ ] 运行 `python scripts/seo-governance.py`，输出 rm_*、canonical/hreflang 与 sitemap 覆盖的巡检报告。
- [ ] 质检：桌面/移动端（输入、滑杆、tooltip），localStorage 持久化使用 `rm_*` 键，复制/清空/反馈流程可用。

## 自动化脚本（子模块）
自动化脚本位于 `tools/codex-scripts`（submodule）。

- 初始化子模块：
  - `git submodule update --init --recursive`
- 更新子模块：
  - `git submodule update --remote tools/codex-scripts`
  - `git add tools/codex-scripts .gitmodules && git commit -m "chore: bump codex-scripts submodule"`
- 配置文件：在仓库根目录创建 `config.yaml`，模板见 `tools/codex-scripts/config.example.yaml`

此外，预发布治理还可以运行 `python scripts/seo-governance.py`，该脚本会输出 rm_*、canonical/hreflang 与 sitemap 覆盖情况，配合上面的发布核查清单使用。

---

© RiskMeter — 衡量风险，保持理性。
