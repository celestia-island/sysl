# 合成源码协议 (SySL)

**专为 AI 生成代码设计的新型软件许可证——以独立于版权的约束性合同形式运作。**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## 什么是 SySL？

SySL 是一类全新的软件许可证。它解决了一个传统许可证无法处理的问题：**当代码不是人类编写时，该怎么办？**

传统开源许可证（MIT、GPL、Apache-2.0）建立在著作权法之上。它们假设人类作者拥有著作权，并据此授予许可。但美国、欧盟及其他地区的法院已裁定，纯 AI 生成的作品**不能享有著作权**——因为没有人类作者，所以不存在著作权。

这造成了一个法律真空。如果 AI 生成代码没有著作权，那么：

- 依赖于著作权的传统许可证可能**没有法律效力**。
- 任何人都可以使用、复制或修改代码，但**法律后果不确定**。
- 贡献者和使用者处于**法律灰色地带**。

SySL 填补了这一真空。它同时作为著作权许可（若存在著作权）和具有约束力的合同（若不存在著作权）运行。它确立了三项新准则：

1. **透明度**：每个副本都必须披露该代码为 AI 生成。
2. **法律确定性**：无论著作权地位如何，许可证均可运行。
3. **风险确认**：AI 生成代码具有独特的失效模式。

## 这为什么重要？

在 2026 年，AI 模型已能常规性地生成整个代码库。现实中已存在由 AI 100% 生成源代码的项目——完整的应用、库和系统，由引导 AI 模型的个人构建，而非手工编写。

这不是假想场景。AI 生成的软件已经到来。法律框架需要跟上。

SySL 是第一步：一个对代码是什么、谁制作了它以及规则是什么坦诚相待的许可证。

## 核心特性

| 特性 | 描述 |
|---------|-------------|
| **AI 生成披露** | 每个副本和衍生作品必须披露 AI 生成情况与所使用的模型 |
| **双重法律基础** | 同时作为著作权许可和独立合同运行 |
| **专利授权** | 等同于 Apache-2.0 的专利保护 |
| **Apache-2.0 兼容** | SySL 代码可与 Apache-2.0 代码合并 |
| **分层许可** | 可与 BUSL-1.1 共存以实现商业保护（双重许可） |
| **合成式著佐权** | 衍生作品必须保留 AI 披露（非源代码，仅披露） |
| **AI 专项免责声明** | 明确声明 AI 特有的失效模式 |
| **多语言** | 提供 11 种语言版本（英文具有法律约束力） |

## 快速入门

为您的项目使用 SySL：

1. 将 `LICENSE.txt` 复制到您的仓库根目录。
2. 创建一个 `AI_DISCLOSURE`（或 `AI_DISCLOSURE.md`）文件，描述：
   - 使用了哪些 AI 模型
   - 大致消耗的 token 数量
   - AI 生成代码与人类编写代码的比例
3. 在您的 README 中添加徽章：

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

或在您的许可证声明中使用简短形式：

```
Licensed under the Synthetic Source License, Version 1.0.
See https://github.com/celestia-island/sysl for the full license text.
```

## 与传统许可证的对比

| 关注点 | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| 需要著作权才能运行 | 是 | 是 | 是 | **否**（合同兜底） |
| 处理 AI 生成代码 | 否 | 否 | 否 | **是**（核心设计） |
| 专利授权 | 否 | 是 | 是 | **是** |
| 著佐权 | 否 | 否 | 是（强） | **是**（仅披露） |
| 要求 AI 披露 | 否 | 否 | 否 | **是** |
| 要求署名 | 是 | 是 | 是 | **是**（AI 署名） |

详见 [COMPARISON.md](./COMPARISON.md) 的详细分析。

## 语言

SySL 提供以下语言版本。英文版本具有法律约束力；翻译仅供参考。

SySL is available in the following languages. The English version is legally binding; translations are provided for informational purposes only.

| Language | README | LICENSE | FAQ | COMPARISON |
|----------|--------|---------|-----|------------|
| English (binding) | [README.md](../../README.md) | [LICENSE.txt](../../LICENSE.txt) | [FAQ.md](../../FAQ.md) | [COMPARISON.md](../../COMPARISON.md) |
| 简体中文 | [README.md](../../i18n/zhs/README.md) | [LICENSE.txt](../../i18n/zhs/LICENSE.txt) | [FAQ.md](../../i18n/zhs/FAQ.md) | [COMPARISON.md](../../i18n/zhs/COMPARISON.md) |
| 繁體中文 | [README.md](../../i18n/zht/README.md) | [LICENSE.txt](../../i18n/zht/LICENSE.txt) | [FAQ.md](../../i18n/zht/FAQ.md) | [COMPARISON.md](../../i18n/zht/COMPARISON.md) |
| 日本語 | [README.md](../../i18n/ja/README.md) | [LICENSE.txt](../../i18n/ja/LICENSE.txt) | [FAQ.md](../../i18n/ja/FAQ.md) | [COMPARISON.md](../../i18n/ja/COMPARISON.md) |
| 한국어 | [README.md](../../i18n/ko/README.md) | [LICENSE.txt](../../i18n/ko/LICENSE.txt) | [FAQ.md](../../i18n/ko/FAQ.md) | [COMPARISON.md](../../i18n/ko/COMPARISON.md) |
| Français | [README.md](../../i18n/fr/README.md) | [LICENSE.txt](../../i18n/fr/LICENSE.txt) | [FAQ.md](../../i18n/fr/FAQ.md) | [COMPARISON.md](../../i18n/fr/COMPARISON.md) |
| Español | [README.md](../../i18n/es/README.md) | [LICENSE.txt](../../i18n/es/LICENSE.txt) | [FAQ.md](../../i18n/es/FAQ.md) | [COMPARISON.md](../../i18n/es/COMPARISON.md) |
| Русский | [README.md](../../i18n/ru/README.md) | [LICENSE.txt](../../i18n/ru/LICENSE.txt) | [FAQ.md](../../i18n/ru/FAQ.md) | [COMPARISON.md](../../i18n/ru/COMPARISON.md) |
| Deutsch | [README.md](../../i18n/de/README.md) | [LICENSE.txt](../../i18n/de/LICENSE.txt) | [FAQ.md](../../i18n/de/FAQ.md) | [COMPARISON.md](../../i18n/de/COMPARISON.md) |
| Português | [README.md](../../i18n/pt/README.md) | [LICENSE.txt](../../i18n/pt/LICENSE.txt) | [FAQ.md](../../i18n/pt/FAQ.md) | [COMPARISON.md](../../i18n/pt/COMPARISON.md) |
| العربية | [README.md](../../i18n/ar/README.md) | [LICENSE.txt](../../i18n/ar/LICENSE.txt) | [FAQ.md](../../i18n/ar/FAQ.md) | [COMPARISON.md](../../i18n/ar/COMPARISON.md) |

## 采用者

已采用 SySL 的项目：

| 项目 | 描述 | 自 |
|---------|-------------|-------|
|  | 多智能体 AI 编排平台 | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | AI 平台 Web Shell | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | 跨平台远程控制库 | 2026-06 |

*要将您的项目添加到列表，请向 [ADOPTERS.md](./ADOPTERS.md) 提交 PR。*

## 理念

SySL 建立在如下信念之上：**透明度并非对自由的限制——而是信任的前提**。

当人类编写代码时，代码承载着隐含的保证：作者理解自己在做什么、测试了边界情况并承担了责任。AI 生成的代码则不含这些。它是统计输出，而非理性创作。使用者有权知道面对的是哪一类。

SySL 不限制您能用 AI 生成代码做什么。它只要求您告诉人们它是什么。

## SySL 自身的许可证

合成源码协议文本的版权归 langyo 所有。您可以出于许可您的软件之目的自由复制和分发该许可证文本。您不得在未经作者许可的情况下修改许可证文本并将其称为"SySL"，但您可以创建属于您自己名下的衍生许可证。

## 参与贡献

欢迎提交 Bug 报告、指正以及针对 SySL 未来版本的建议。请在 <https://github.com/celestia-island/sysl> 发起 issue 或 pull request。

SySL 版本更新的流程记录在 [GOVERNANCE.md](./GOVERNANCE.md) 中。

## 联系方式

- 作者：langyo <sysl.contact@celestia.world>
- 组织：[Celestia Island](https://github.com/celestia-island)
- 仓库：<https://github.com/celestia-island/sysl>
