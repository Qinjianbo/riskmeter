# RiskMeter（中文说明）

English version: [README.md](README.md)

**RiskMeter** 是一个投资风险教育平台，提供概念解释与简易工具，不做预测、不荐股。

## 核心内容
- 双语站点：`/en/` 与 `/zh/`
- 重点工具：市场钟摆、回撤承受度测试、回撤恢复情景、回撤容量计算器、再平衡计划器
- 免责声明：仅用于教育与研究，不构成任何投资建议

## 开发与部署

RiskMeter 现在使用 Astro + Tailwind CSS 构建。

- 安装依赖：`npm install`
- 本地开发：`npm run dev`
- 生产构建：`npm run build`
- 预览构建结果：`npm run preview`
- 构建后巡检：`python3 scripts/seo-governance.py --root dist`

Cloudflare Pages 配置：

- Build command: `npm run build`
- Build output directory: `dist`

## 发布流程与治理

责任人：内容 / SEO（中英双语）；频率：每次发布前（至少每月）。

- [ ] 术语：按风险术语表校对工具标签与译文。
- [ ] 数值：四舍五入、货币格式、阈值（≥99% 处理）、示例计算一致。
- [ ] 链接与 SEO：CTA 目标、hreflang/canonical 配对，新/改名页面写入 sitemap.xml。
- [ ] 运行 `npm run build`，再运行 `python3 scripts/seo-governance.py --root dist`，输出 rm_*、canonical/hreflang 与 sitemap 覆盖的巡检报告。
- [ ] 数据持久化：确认回撤测试 / 回撤恢复 / 再平衡规划 EN/ZH 页面使用相同的 `rm_*` localStorage 键（并统一以 `rm_` 前缀）。
- [ ] 质检：桌面/移动端（输入、滑杆、tooltip），localStorage 持久化使用 `rm_*` 键，复制/清空/反馈流程可用。

## 发布治理脚本

`scripts/seo-governance.py` 会输出 `rm_*`、canonical/hreflang 与 sitemap 覆盖情况，配合上面的发布核查清单使用。

```bash
npm run build
python3 scripts/seo-governance.py --root dist
```

旧的私有自动化 submodule 已不再是 Cloudflare Pages 部署所需内容。

---

© RiskMeter — 衡量风险，保持理性。
