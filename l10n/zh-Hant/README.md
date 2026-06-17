# 合成源碼協議（SySL）

**首個專為 100% AI 生成程式碼之軟體設計的開源授權條款。**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## 什麼是 SySL？

SySL 是一種全新類別的軟體授權條款。它解決了一個傳統授權條款無法處理的問題：**當程式碼不是由人類編寫時，會發生什麼？**

傳統的開源授權條款（MIT、GPL、Apache-2.0）建立在著作權法的基礎上。它們假定有一位人類作者持有著作權，並從該立場授予許可。但是，美國、歐盟及其他地區的法院已裁定，純粹由 AI 生成的作品**無法取得著作權**——不存在人類作者，因此不存在著作權。

這造成了一個法律真空。若 AI 生成的程式碼沒有著作權，則：

- 依賴著作權的傳統授權條款可能**不具法律效力**。
- 任何人都可使用、複製或修改該程式碼，但**法律後果不明確**。
- 貢獻者與使用者在**法律灰色地帶**中運作。

SySL 填補了這一真空。它同時作為著作權授權（若著作權存在）及具有約束力的合約（若著作權不存在）而運作。它確立了三項新規範：

1. **透明度**：每份複本均須披露程式碼為 AI 生成。
2. **法律確定性**：無論著作權狀態如何，授權條款均有效。
3. **風險確認**：AI 生成的程式碼具有獨特的故障模式。

## 這為什麼重要？

在 2026 年，AI 模型已能常規地生成整個程式碼庫。[](https://github.com/celestia-island/) 專案——一個多代理 AI 協作平台——即為一個 100% AI 生成的程式碼庫，包含超過 850,000 行 Rust 程式碼、56 個 crate 及 2,200 多個測試。一個人花費 4.3 個月時間、使用 1,000 億個 AI 生成 token 完成。

這不是假設性命題。AI 生成的軟體已經到來。法律框架需要跟上。

SySL 是第一步：一項對程式碼的本質、誰製作了它以及規則是什麼誠實以告的授權條款。

## 核心特性

| 特性 | 說明 |
|---------|-------------|
| **AI 生成披露** | 每份複本及衍生作品均須披露 AI 生成情況及所使用之模型 |
| **雙重法律基礎** | 同時作為著作權授權及獨立合約運作 |
| **專利授權** | 等同於 Apache-2.0 的專利保護 |
| **Apache-2.0 相容** | SySL 程式碼可與 Apache-2.0 程式碼結合 |
| **合成式著佐權** | 衍生作品必須保留 AI 生成披露（僅披露，非原始碼） |
| **AI 特定免責聲明** | 明確聲明不對 AI 獨特的故障模式承擔責任 |
| **多語言** | 提供 11 種語言版本（英文版本具法律約束力） |

## 快速入門

為您的專案採用 SySL：

1. 將 `LICENSE.txt` 複製到您的儲存庫根目錄。
2. 建立一份 `AI_DISCLOSURE`（或 `AI_DISCLOSURE.md`）檔案，說明：
   - 使用了哪些 AI 模型
   - 大約消耗的 token 數量
   - AI 生成程式碼與人類編寫程式碼的比例
3. 在您的 README 中加入標章：

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

或在您的授權聲明中使用簡短形式：

```
依合成源碼協議第 1.0 版授權。
完整授權條款請參閱 https://github.com/celestia-island/sysl。
```

## 與傳統授權條款的比較

| 關注點 | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| 需著作權方能運作 | 是 | 是 | 是 | **否**（合約備援） |
| 處理 AI 生成程式碼 | 否 | 否 | 否 | **是**（核心設計） |
| 專利授權 | 否 | 是 | 是 | **是** |
| 著佐權 | 否 | 否 | 是（強） | **是**（僅披露） |
| 要求 AI 生成披露 | 否 | 否 | 否 | **是** |
| 要求署名 | 是 | 是 | 是 | **是**（AI 署名） |

詳見 [COMPARISON.md](./COMPARISON.md) 的詳細分析。

## 語言

SySL 提供以下語言版本。英文版本具法律約束力；譯本僅供參考。

| 語言 | README | LICENSE | FAQ |
|----------|--------|---------|-----|
| English（約束力） | [README.md](./README.md) | [LICENSE.txt](./LICENSE.txt) | [FAQ.md](./FAQ.md) |
| 简体中文 | [l10n/zh-Hans/README.md](./l10n/zh-Hans/README.md) | [l10n/zh-Hans/LICENSE.txt](./l10n/zh-Hans/LICENSE.txt) | [l10n/zh-Hans/FAQ.md](./l10n/zh-Hans/FAQ.md) |
| 繁體中文 | [l10n/zh-Hant/README.md](./l10n/zh-Hant/README.md) | [l10n/zh-Hant/LICENSE.txt](./l10n/zh-Hant/LICENSE.txt) | [l10n/zh-Hant/FAQ.md](./l10n/zh-Hant/FAQ.md) |
| 日本語 | [l10n/ja/README.md](./l10n/ja/README.md) | [l10n/ja/LICENSE.txt](./l10n/ja/LICENSE.txt) | [l10n/ja/FAQ.md](./l10n/ja/FAQ.md) |
| 한국어 | [l10n/ko/README.md](./l10n/ko/README.md) | [l10n/ko/LICENSE.txt](./l10n/ko/LICENSE.txt) | [l10n/ko/FAQ.md](./l10n/ko/FAQ.md) |
| Français | [l10n/fr/README.md](./l10n/fr/README.md) | [l10n/fr/LICENSE.txt](./l10n/fr/LICENSE.txt) | [l10n/fr/FAQ.md](./l10n/fr/FAQ.md) |
| Español | [l10n/es/README.md](./l10n/es/README.md) | [l10n/es/LICENSE.txt](./l10n/es/LICENSE.txt) | [l10n/es/FAQ.md](./l10n/es/FAQ.md) |
| Русский | [l10n/ru/README.md](./l10n/ru/README.md) | [l10n/ru/LICENSE.txt](./l10n/ru/LICENSE.txt) | [l10n/ru/FAQ.md](./l10n/ru/FAQ.md) |
| Deutsch | [l10n/de/README.md](./l10n/de/README.md) | [l10n/de/LICENSE.txt](./l10n/de/LICENSE.txt) | [l10n/de/FAQ.md](./l10n/de/FAQ.md) |
| Português | [l10n/pt/README.md](./l10n/pt/README.md) | [l10n/pt/LICENSE.txt](./l10n/pt/LICENSE.txt) | [l10n/pt/FAQ.md](./l10n/pt/FAQ.md) |
| العربية | [l10n/ar/README.md](./l10n/ar/README.md) | [l10n/ar/LICENSE.txt](./l10n/ar/LICENSE.txt) | [l10n/ar/FAQ.md](./l10n/ar/FAQ.md) |

## 採用者

已採用 SySL 的專案：

| 專案 | 說明 | 自 |
|---------|-------------|-------|
| [](https://github.com/celestia-island/) | 多代理 AI 協作平台 | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | AI 平台 Web 命令層 | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | 跨平台遠端控制函式庫 | 2026-06 |

*若要新增您的專案，請向 [ADOPTERS.md](./ADOPTERS.md) 提交 PR。*

## 理念

SySL 建立於此信念之上：**透明度並非對自由的限制——而是信任的前提**。

當人類編寫程式碼時，該程式碼隱含著保證：作者理解他們在做什麼、測試了邊界情況並承擔了責任。AI 生成的程式碼則不具備任何上述保證。它是統計輸出，而非推理創作。使用者有權知道他們面對的是哪一種。

SySL 不限制您對 AI 生成程式碼可以做什麼。它僅要求您告知人們它是什麼。

## SySL 本身的授權

合成源碼協議文本的著作權歸 langyo 所有。您可以自由複製及散布本協議文本，用於為您的軟體授權。未經作者許可，您不得修改本協議文本並稱之為「SySL」，但您可以以自己的名義創作衍生授權條款。

## 貢獻

歡迎報告錯誤、提供修正以及對 SySL 未來版本的建議。請在 <https://github.com/celestia-island/sysl> 提交 issue 或 pull request。

SySL 版本更新的流程詳見 [GOVERNANCE.md](./GOVERNANCE.md)。

## 聯絡方式

- 作者：langyo <langyo.china@gmail.com>
- 組織：[Celestia Island](https://github.com/celestia-island)
- 儲存庫：<https://github.com/celestia-island/sysl>
