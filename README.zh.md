# RiskMeter（中文说明）

English version: [README.md](README.md)

**RiskMeter** 是一个投资风险教育平台，提供概念解释与简易工具，不做预测、不荐股。

## 核心内容
- 双语站点：`/en/` 与 `/zh/`
- 重点工具：市场钟摆、回撤承受度测试、回撤相关概念页
- 免责声明：仅用于教育与研究，不构成任何投资建议

## 自动化脚本（子模块）
自动化脚本位于 `tools/codex-scripts`（submodule）。

- 初始化子模块：
  - `git submodule update --init --recursive`
- 更新子模块：
  - `git submodule update --remote tools/codex-scripts`
  - `git add tools/codex-scripts .gitmodules && git commit -m "chore: bump codex-scripts submodule"`
- 配置文件：在仓库根目录创建 `config.yaml`，模板见 `tools/codex-scripts/config.example.yaml`

---

© RiskMeter — 衡量风险，保持理性。
