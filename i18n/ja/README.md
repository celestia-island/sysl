# 合成ソースライセンス (SySL)

**コードが100% AI生成であるソフトウェアのために設計された、初のオープンソースライセンス。**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## SySL とは？

SySL は、ソフトウェアライセンスの新しいカテゴリです。従来のライセンスが扱わない問題に対処します：**コードが人間によって書かれていない場合、何が起きるのか？**

従来のオープンソースライセンス（MIT、GPL、Apache-2.0）は著作権法の上に構築されています。それらは、人間の著作者が著作権を保有し、その立場から許諾を与えることを前提としています。しかし、米国、欧州連合、およびその他の地域の裁判所は、純粋にAIによって生成された著作物は**著作権で保護され得ない**と判断しています——人間の著作者が存在しないため、著作権も存在しないのです。

これは法的な空白を生み出します。AI生成コードに著作権がない場合、以下のことが起こります：

- 著作権に依拠する従来のライセンスは、**法的効力を持たない**可能性があります。
- 誰でも、**不確実な法的帰結**のもとで、コードを使用、複製、改変できます。
- 貢献者と利用者は**法的なグレーゾーン**で活動することになります。

SySL はこの空白を埋めます。SySL は、著作権ライセンスとしても（著作権が存在する場合）、拘束力のある契約としても（著作権が存在しない場合）機能します。SySL は三つの新しい規範を確立します：

1. **透明性 (Transparency)**：全ての複製は、コードがAI生成であることを開示しなければなりません。
2. **法的確実性 (Legal Certainty)**：ライセンスは著作権の地位に関わらず機能します。
3. **リスク認識 (Risk Acknowledgment)**：AI生成コードには特有の故障モードがあります。

## なぜこれが重要なのか？

2026年、AIモデルはコードベース全体を日常的に生成しています。[](https://github.com/celestia-island/) プロジェクト——マルチエージェントAIオーケストレーションプラットフォーム——は、850,000行以上のRust、56クレート、2,200以上のテストからなる、100% AI生成のコードベースです。これは1人の人間が1,000億トークンのAI生成を用いて4.3ヶ月で完成させました。

これは仮定の話ではありません。AI生成ソフトウェアはすでにここにあります。法的枠組みが追いつく必要があります。

SySL は最初の一歩です：コードが何であり、誰がそれを作り、ルールが何であるかについて正直なライセンスです。

## 主な特徴

| 特徴 | 説明 |
|---------|-------------|
| **AI生成の開示** | 全ての複製と派生物は、AI生成と使用モデルを開示しなければなりません |
| **二重の法的根拠** | 著作権ライセンスとしても独立した契約としても機能します |
| **特許許諾** | Apache-2.0 と同等の特許保護 |
| **Apache-2.0 互換** | SySL コードは Apache-2.0 コードと組み合わせ可能です |
| **階層的ライセンス供与** | 商業的保護のために BUSL-1.1 と共存可能（デュアルライセンス） |
| **合成的コピーレフト** | 派生物はAI開示を保持しなければなりません（ソースコードではなく、開示のみ） |
| **AI特有の保証否認** | AI特有の故障モードを明示的に否認します |
| **多言語対応** | 11言語で利用可能（英語が法的拘束力を持つ正文） |

## クイックスタート

あなたのプロジェクトで SySL を使用するには：

1. `LICENSE.txt` をリポジトリのルートにコピーします。
2. 以下を記載した `AI_DISCLOSURE`（または `AI_DISCLOSURE.md`）ファイルを作成します：
   - どのAIモデルが使用されたか
   - おおよその消費トークン数
   - AI生成と人間が書いたコードの割合
3. READMEにバッジを追加します：

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

または、ライセンス宣言で短縮形を使用します：

```
Licensed under the Synthetic Source License, Version 1.0.
See https://github.com/celestia-island/sysl for the full license text.
```

## 従来のライセンスとの比較

| 懸念事項 | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| 機能に著作権が必要か | はい | はい | はい | **いいえ**（契約による代替） |
| AI生成コードに対応 | いいえ | いいえ | いいえ | **はい**（中核的設計） |
| 特許許諾 | いいえ | はい | はい | **はい** |
| コピーレフト | いいえ | いいえ | はい（強力） | **はい**（開示のみ） |
| AI開示が必要 | いいえ | いいえ | いいえ | **はい** |
| 帰属表示が必要 | はい | はい | はい | **はい**（AI帰属表示） |

詳細な分析については [COMPARISON.md](./COMPARISON.md) を参照してください。

## 言語

SySL は以下の言語で利用可能です。英語版が法的拘束力を持ち、翻訳は参考情報です。

| 言語 | README | LICENSE | FAQ |
|----------|--------|---------|-----|
| English (正文) | [README.md](./README.md) | [LICENSE.txt](./LICENSE.txt) | [FAQ.md](./FAQ.md) |
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

## 採用プロジェクト

SySL を採用したプロジェクト：

| プロジェクト | 説明 | 採用時期 |
|---------|-------------|-------|
| [](https://github.com/celestia-island/) | マルチエージェントAIオーケストレーションプラットフォーム | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | AIプラットフォームWebシェル | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | クロスプラットフォームリモートコントロールライブラリ | 2026-06 |

*プロジェクトを追加するには、[ADOPTERS.md](./ADOPTERS.md) にPRを提出してください。*

## 理念

SySL は、**透明性は自由に対する制限ではなく、信頼の前提条件である**という信念に基づいています。

人間がコードを書くとき、そのコードには暗黙の保証が伴います：著作者は自分が何をしているかを理解し、エッジケースをテストし、責任を引き受けました。AI生成コードにはこれらのいずれも伴いません。それは統計的な出力であり、推論に基づく創造ではありません。利用者はどちらを扱っているのかを知る権利があります。

SySL は、AI生成コードで何ができるかを制限しません。それが何であるかを人々に伝えることのみを要求します。

## SySL 自体のライセンス

合成ソースライセンスの本文は langyo によって著作権が保持されています。あなたは、ソフトウェアのライセンス付与を目的として、ライセンス本文を自由に複製および配布することができます。著作者の許可なくライセンス本文を改変して「SySL」と呼ぶことはできませんが、あなた自身の名前で派生ライセンスを作成することはできます。

## 貢献

SySL の将来のバージョンに対するバグ報告、修正、提案を歓迎します。<https://github.com/celestia-island/sysl> でIssueまたはプルリクエストを作成してください。

SySL のバージョン更新プロセスについては、[GOVERNANCE.md](./GOVERNANCE.md) に文書化されています。

## 連絡先

- 著作者: langyo <sysl.contact@celestia.world>
- 組織: [Celestia Island](https://github.com/celestia-island)
- リポジトリ: <https://github.com/celestia-island/sysl>
