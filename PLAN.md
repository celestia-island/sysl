# sysl — 项目状态与计划 (PLAN)

> 刷新于 2026-07-14。法务基础设施项目。

## 1. 项目概述

- **名称**：`sysl`（Synthetic Source License）
- **简介**：SySL 1.0 许可证文本仓库 + 官网（sysl.celestia.world）—— 一种为 AI 生成代码设计的软件许可证，作为独立于版权法的合同。
- **远程仓库**：https://github.com/celestia-island/sysl.git
- **技术栈**：mdbook / lagrange 静态站点
- **类别**：legal / docs

## 2. 当前状态

- **当前分支**：`dev`
- **工作区**：干净
- **最近提交时间**：2026-07-12
- **最近提交**：`🔧 Pin script recipes to the resolved Git Bash to survive WSL shadowing.`
- **本地领先 `origin/dev`**：0

## 3. 未提交改动

无

## 4. 近期进展

- `🔧 Pin script recipes to the resolved Git Bash to survive WSL shadowing.`
- `🔧 Switch the justfile to Git Bash and fetch devtools recipes on demand.`
- `🐛 Replace shebang recipes with [script(...)] to fix the Windows cygpath error.`
- `📝 Add FUNDING.yml for GitHub Sponsors.`
- `🔧 Add dependabot.yml for automated dependency updates.`

## 5. 后续计划

1. **许可证本体维护**：随法律审查与社区反馈迭代 SySL 1.x 条款。
2. **下游适配跟踪**：celestia-island 多数项目用 SySL 1.0 / BUSL-1.1 双许可；本仓不强制版本号，仅作为真值表。
3. **徽章自动更新**：crates.io 端 `license-file = "LICENSE"` 已统一（参见 noa/PLAN.md 同一议题），本仓无动作。

## 6. 跨仓依赖

- 多数 sibling 仓用 `license-file = "LICENSE"` 引用本仓文本。
- 本仓与 `docs.celestia.world` 共享 lagrange 静态站点管线。

---

## 既有详细计划（存档）

法律文本与 FAQ 在 [LICENSE.txt](./LICENSE.txt) 与 `docs/`。
