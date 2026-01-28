# Scratch Notes

## 2026-01-26 · Drawdown Recovery Scenarios — Interpretation Guidance (EN)

Examples (compounded returns, no cash flows/fees/taxes):
1) 20% drawdown on a $250,000 portfolio
   - Loss from peak: $50,000 → value after drawdown: $200,000
   - Gain needed to recover: +25.0%
   - Fast (1y): +25.0% annualized, +1.9% monthly
   - Steady (3y): +7.7% annualized, +0.6% monthly
   - Patient (5y): +4.6% annualized, +0.4% monthly
2) 35% drawdown on a $120,000 portfolio
   - Loss from peak: $42,000 → value after drawdown: $78,000
   - Gain needed to recover: +53.8%
   - Fast (1y): +53.8% annualized, +3.7% monthly
   - Steady (3y): +15.4% annualized, +1.2% monthly
   - Patient (5y): +9.0% annualized, +0.7% monthly
3) 50% drawdown on an $80,000 portfolio
   - Loss from peak: $40,000 → value after drawdown: $40,000
   - Gain needed to recover: +100.0%
   - Fast (1y): +100.0% annualized, +5.9% monthly
   - Steady (3y): +26.0% annualized, +1.9% monthly
   - Patient (5y): +14.9% annualized, +1.2% monthly

Edge cases to call out:
- Portfolio size is optional: if left blank or set to 0, dollar outputs show “—” but recovery rates still calculate.
- Extreme drawdowns (>=99%) hide all recovery outputs; treat them as effectively non-recoverable scenarios for planning.

## 2026-01-26 · 回撤恢复情景 — 解读指引 (ZH)

示例（复利口径，忽略现金流/费用/税收）：
1) 20% 回撤，组合规模 $250,000
   - 回撤损失：$50,000 → 回撤后净值：$200,000
   - 恢复所需收益：+25.0%
   - 快（1 年）：年化 +25.0%，月度 +1.9%
   - 稳（3 年）：年化 +7.7%，月度 +0.6%
   - 慢（5 年）：年化 +4.6%，月度 +0.4%
2) 35% 回撤，组合规模 $120,000
   - 回撤损失：$42,000 → 回撤后净值：$78,000
   - 恢复所需收益：+53.8%
   - 快（1 年）：年化 +53.8%，月度 +3.7%
   - 稳（3 年）：年化 +15.4%，月度 +1.2%
   - 慢（5 年）：年化 +9.0%，月度 +0.7%
3) 50% 回撤，组合规模 $80,000
   - 回撤损失：$40,000 → 回撤后净值：$40,000
   - 恢复所需收益：+100.0%
   - 快（1 年）：年化 +100.0%，月度 +5.9%
   - 稳（3 年）：年化 +26.0%，月度 +1.9%
   - 慢（5 年）：年化 +14.9%，月度 +1.2%

边界情况：
- 组合规模可留空或填 0：金额类输出显示“—”，恢复收益仍可计算。
- 极端回撤（>=99%）不展示任何恢复结果，可视为不可恢复的规划情景。

需确认的术语差异：
- 页面标题“回撤恢复情景”与工具段落标题“恢复测算与情景对比”措辞不一致。
- EN “patient” 对应 ZH “慢”，语气偏保守/谨慎与“慢”略有差异。

## 2026-01-26 · Bilingual Learning Path Map (Glossary → Tools → Support)

EN path (page list + CTA target):
- Glossary hub: /en/risk-glossary/ (CTA: “Start with key terms”)
- Drawdown baseline: /en/drawdown-test/ (CTA: “Run drawdown test”)
- Recovery scenarios: /en/drawdown-recovery/ (CTA: “Compare recovery timelines”)
- Capacity check: /en/drawdown-capacity/ (CTA: “Check capacity”)
- Drawdown context: /en/drawdown-risk/ (CTA: “Why drawdown matters”)
- Cycle awareness: /en/pendulum/ and /en/what-is-market-pendulum/ (CTA: “Track the cycle” / “Read the guide”)
- Rebalancing rules: /en/rebalancing-planner/ (CTA: “Build rebalancing bands”)
- Support & education: /en/support/ (CTA: “Review support notes”)

ZH path (page list + CTA target):
- 术语入口：/zh/risk-glossary/（CTA：“从关键术语开始”）
- 回撤基准：/zh/drawdown-test/（CTA：“开始回撤测试”）
- 恢复情景：/zh/drawdown-recovery/（CTA：“对比恢复时间”）
- 承受能力：/zh/drawdown-capacity/（CTA：“评估承受能力”）
- 回撤解读：/zh/drawdown-explained/（CTA：“了解回撤含义”）
- 周期意识：/zh/pendulum/ + /zh/market-pendulum-theory/（CTA：“查看市场摆”/“阅读说明”）
- 再平衡规则：/zh/rebalancing-planner/（CTA：“建立再平衡区间”）
- 支持与说明：/zh/support/（CTA：“查看支持说明”）

## 2026-01-26 · Bilingual Release Checklist v1 (Draft)

EN checklist:
- [ ] Terminology: glossary terms match tool labels; EN/ZH translations aligned.
- [ ] Numbers: percent rounding, currency formatting, thresholds (>=99%), and example math verified.
- [ ] Links: CTA targets, hreflang pairs, canonical URLs, and sitemap coverage checked.
- [ ] QA: desktop + mobile layout, tool interactions, localStorage persistence, copy/clear flows.

中文清单：
- [ ] 术语：以术语表为准校对工具标题与翻译，一致性确认。
- [ ] 数值：百分比/货币格式、阈值（>=99%）与示例计算无误。
- [ ] 链接：CTA 目标、hreflang/canonical 与 sitemap 覆盖检查。
- [ ] 质检：桌面/移动端布局、交互、localStorage 持久化、复制/清除流程。

## 2026-01-26 · Entry-Point URLs for Canonical/Hreflang/Sitemap Audit

Top-level entry points (redirects / root):
- https://riskmeter.app/
- https://riskmeter.app/about/
- https://riskmeter.app/pendulum/

Language roots:
- https://riskmeter.app/en/
- https://riskmeter.app/zh/

Primary EN pages:
- https://riskmeter.app/en/about/
- https://riskmeter.app/en/ethics/
- https://riskmeter.app/en/support/
- https://riskmeter.app/en/risk-glossary/
- https://riskmeter.app/en/drawdown-test/
- https://riskmeter.app/en/drawdown-recovery/
- https://riskmeter.app/en/drawdown-capacity/
- https://riskmeter.app/en/drawdown-risk/
- https://riskmeter.app/en/pendulum/
- https://riskmeter.app/en/what-is-market-pendulum/
- https://riskmeter.app/en/rebalancing-planner/

Primary ZH pages:
- https://riskmeter.app/zh/about/
- https://riskmeter.app/zh/ethics/
- https://riskmeter.app/zh/support/
- https://riskmeter.app/zh/risk-glossary/
- https://riskmeter.app/zh/drawdown-test/
- https://riskmeter.app/zh/drawdown-recovery/
- https://riskmeter.app/zh/drawdown-capacity/
- https://riskmeter.app/zh/drawdown-explained/
- https://riskmeter.app/zh/pendulum/
- https://riskmeter.app/zh/market-pendulum-theory/
- https://riskmeter.app/zh/rebalancing-planner/

## 2026-01-28 · SEO 巡检与移动端回归尝试

- 巡检范围：home/about/support、drawdown-test/recovery/capacity、rebalancing-planner、pendulum/market-pendulum-theory、risk-glossary（EN/ZH）。
- 差异：发现 pendulum 根页缺少 canonical/hreflang，已补齐；其余页面均含 canonical + en/zh/x-default，sitemap.xml 覆盖完整。
- 移动端尝试：Playwright 安装多次因网络超时未完成；Safari AppleScript 截图被 macOS AppleEvent 权限拒绝，未生成最新截图，需获授权或换用可联网的 headless 浏览器后重跑。
- 观察：新增导航与提示提高了首屏高度，移动端建议后续增加“跳至工具”锚点或折叠导航，并再次实机验证滑杆/输入/tooltip 触达性。

## 2026-01-28 · 移动端回归复测记录（输入/滑杆/tooltip）

- 责任页面与修复点
  - /en|zh/drawdown-recovery/：首屏 Hero + CTA 占高，工具被推到折叠下方；建议新增“跳至工具”锚点按钮；回撤输入仅滑杆，需补数字输入框或提升滑杆手势精度（更宽轨道+更大拇指）；tooltip 无，暂不阻塞。
  - /en|zh/drawdown-test/：滑杆已配数值输入，但移动端触控区域偏窄，建议扩大轨道与点击捕获区；保留 rm_drawdown_test_state。
  - /en|zh/rebalancing-planner/：输入框键盘弹出与下方提示重叠，需为移动端增加内边距/滚动定位；feedback 区按钮挤压行高。
  - /en|zh/pendulum/（含 guide）：tooltip 点击触发区偏小，建议增大 icon 可点区域并允许再次点击关闭。
- 触发手法：iPhone Safari 模拟 + 浏览器尺寸 360–430px；未能生成最新截图（权限阻塞），需待可用设备复拍。
- 建议优先级：先做“跳至工具”锚点与滑杆/输入可触达性，其次是 tooltip 点击区，最后处理文案与折叠。

## 2026-01-28 · rm_* + hreflang/canonical 巡检脚本草图

- 目标：批量检查 HTML 中的 localStorage 键前缀（rm_*）、canonical 与 hreflang 对，输出缺失/不一致列表，便于上线前巡检。
- 输入：站点根路径（默认当前仓库），可选参数 `--lang en|zh|all`、`--glob \"**/index.html\"`。
- 规则示例：
  1) localStorage：匹配 `localStorage.setItem\\(['\"](rm_[^'\"]+)` 或 `getItem`；输出去重键名列表。若页面存在工具交互但无 rm_* 写入，提示 “missing rm_* state”.
  2) canonical：必须存在 `<link rel=\"canonical\" href=\"https://riskmeter.app/<lang>/.../\" />`；缺失或域名/路径不匹配则报错。
  3) hreflang：需要 en + zh + x-default 三条，且路径互指；缺任何一条或 URL 不对齐则报错。
- 伪代码（Python，无额外依赖）：
  ```
  import pathlib, re, json

  def scan_html(path):
      text = path.read_text(encoding="utf-8", errors="ignore")
      keys = set(re.findall(r"rm_[A-Za-z0-9_\\-]+", text))
      canonical = re.search(r'rel=\"canonical\" href=\"([^\"]+)\"', text)
      hrels = re.findall(r'hreflang=\"([^\"]+)\" href=\"([^\"]+)\"', text)
      return {
        "file": str(path),
        "rm_keys": sorted(keys),
        "canonical": canonical.group(1) if canonical else None,
        "hreflang": {lang:url for lang,url in hrels},
      }

  def validate(entry):
      issues = []
      if not entry["canonical"]: issues.append("missing canonical")
      langs = entry["hreflang"]
      for lang in ("en","zh","x-default"):
          if lang not in langs: issues.append(f"missing hreflang {lang}")
      if not entry["rm_keys"]:
          issues.append("missing rm_* state writes")
      return issues

  reports = []
  for path in pathlib.Path(\".\").rglob(\"index.html\"):
      data = scan_html(path)
      issues = validate(data)
      if issues:
          reports.append({\"file\": data[\"file\"], \"issues\": issues})

  print(json.dumps(reports, indent=2, ensure_ascii=False))
  ```
- 期望输出示例：
  ```
  [
    {
      "file": "en/drawdown-recovery/index.html",
      "issues": ["missing hreflang zh"]  # 示例
    },
    {
      "file": "en/support/index.html",
      "issues": ["missing rm_* state writes"]
    }
  ]
  ```
- 可扩展：增加 `<link rel=\"sitemap\">` 检查、x-default 目标必须指向 EN、允许传入 `--fix` 自动补全模板。

## 2026-01-28 · 反馈汇总与功能可行性评估

- 自定义恢复周期（Drawdown Recovery）：多名用户希望输入自定义年限，以匹配自身回本预期。可行性高：在现有 1/3/5 年卡片旁新增“自定义”输入（1–15 年），重用现有计算函数，增加 rm_ state 字段；需同步 EN/ZH 文案与移动端输入宽度。
- “跳至工具”锚点：移动端首屏被 hero/CTA 占高，用户需多次滚动。可行性高且影响面小：在 hero 下方添加按钮滚动到工具区域（平滑滚动，兼容 anchor）。实施成本低，建议先上线以缓解触达问题，再评估折叠导航是否必要。
