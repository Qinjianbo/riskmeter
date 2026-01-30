# Tasks (Auto-generated)

## 2026-01-30

- [x] 真机回归（iOS Safari）：抽检 `/en/drawdown-test/`、`/en/drawdown-recovery/`、`/en/rebalancing-planner/` 的滑杆/输入/tooltip/锚点跳转与误触情况，并同步检查对应 `/zh/` 页面
- [x] 真机回归（Android Chrome）：同上 3 个工具页 EN/ZH，重点关注触控命中区、滚动时 tooltip 与焦点表现
- [x] 将真机回归结论写入 `ITERATION_LOG.md`（包含设备/系统/浏览器版本、发现问题与复现步骤、是否阻断发布）
- [x] 若发现问题：为每个问题建立“页面路径 + 预期/实际 + 最小修复点”清单（优先滑杆/输入命中区与 tooltip 层级）
- [x] 收尾核对：确认工作区仅保留预期变更（当前 `ITERATION_LOG.md`），并补齐今日发布前手工抽检清单备注
