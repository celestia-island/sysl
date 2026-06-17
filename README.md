# Synthetic Source License (SySL)

**The first software license designed for code that is 100% AI-generated.**

[![License](https://img.shields.io/badge/license-SySL%201.0-blue)](./LICENSE.txt)

---

## What is SySL?

SySL is a new category of software license. It addresses a problem no traditional license handles: **what happens when the code isn't written by a human?**

Traditional open source licenses (MIT, GPL, Apache-2.0) are built on copyright law. They assume a human author holds copyright and grants permissions from that position. But courts in the United States, European Union, and elsewhere have ruled that purely AI-generated works **cannot be copyrighted**---there is no human author, so there is no copyright.

This creates a legal vacuum. If AI-generated code has no copyright, then:

- Traditional licenses that rest on copyright may have **no legal force**.
- Anyone can use, copy, or modify the code with **uncertain legal consequences**.
- Contributors and users operate in a **legal gray zone**.

SySL fills this vacuum. It operates as both a copyright license (if copyright exists) and a binding contract (if copyright does not exist). It establishes three new norms:

1. **Transparency**: every copy must disclose that the code is AI-generated.
2. **Legal Certainty**: the license works regardless of copyright status.
3. **Risk Acknowledgment**: AI-generated code has unique failure modes.

## Why does this matter?

In 2026, AI models routinely generate entire codebases. The [](https://github.com/celestia-island/) project---a multi-agent AI orchestration platform---is a 100% AI-generated codebase comprising over 850,000 lines of Rust, 56 crates, and 2,200+ tests. It took one person 4.3 months using 100 billion tokens of AI generation.

This is not a hypothetical. AI-generated software is here. The legal framework needs to catch up.

SySL is the first step: a license that is honest about what the code is, who made it, and what the rules are.

## Key Features

| Feature | Description |
|---------|-------------|
| **AI Disclosure** | Every copy and derivative must disclose AI generation and models used |
| **Dual Legal Basis** | Functions as both copyright license and independent contract |
| **Patent Grant** | Equivalent to Apache-2.0 patent protection |
| **Apache-2.0 Compatible** | SySL code can be combined with Apache-2.0 code |
| **Synthetic Copyleft** | Derivatives must preserve AI disclosure (transparency obligation, not source-sharing) |
| **AI-Specific Disclaimer** | Explicitly disclaims AI-unique failure modes |
| **Multi-language** | Available in 11 languages (English legally binding) |

## Quick Start

To use SySL for your project:

1. Copy `LICENSE.txt` into your repository root.
2. Create an `AI_DISCLOSURE` (or `AI_DISCLOSURE.md`) file describing:
   - Which AI models were used
   - Approximate tokens consumed
   - The proportion of AI-generated vs. human-written code
3. Add a badge to your README:

```markdown
[![License: SySL 1.0](https://img.shields.io/badge/license-SySL%201.0-blue)](https://github.com/celestia-island/sysl)
```

Or use the short form in your license declaration:

```
Licensed under the Synthetic Source License, Version 1.0.
See https://github.com/celestia-island/sysl for the full license text.
```

## Comparison with Traditional Licenses

| Concern | MIT | Apache 2.0 | GPLv3 | SySL 1.0 |
|---------|-----|------------|-------|----------|
| Needs copyright to function | Yes | Yes | Yes | **No** (contract fallback) |
| Handles AI-generated code | No | No | No | **Yes** (core design) |
| Patent grant | No | Yes | Yes | **Yes** |
| Copyleft | No | No | Yes (strong) | **Yes** (disclosure only) |
| AI disclosure required | No | No | No | **Yes** |
| Attribution required | Yes | Yes | Yes | **Yes** (AI attribution) |

See [COMPARISON.md](./COMPARISON.md) for a detailed analysis.

## Languages

SySL is available in the following languages. The English version is legally binding; translations are informational.

| Language | README | LICENSE | FAQ |
|----------|--------|---------|-----|
| English (binding) | [README.md](./README.md) | [LICENSE.txt](./LICENSE.txt) | [FAQ.md](./FAQ.md) |
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

## Adopters

Projects that have adopted SySL:

| Project | Description | Since |
|---------|-------------|-------|
| [](https://github.com/celestia-island/) | Multi-agent AI orchestration platform | 2026-06 |
| [shittim-chest](https://github.com/celestia-island/shittim-chest) | AI platform web shell | 2026-06 |
| [evernight](https://github.com/celestia-island/evernight) | Cross-platform remote control library | 2026-06 |

*To add your project, submit a PR to [ADOPTERS.md](./ADOPTERS.md).*

## Philosophy

SySL is built on the belief that **transparency is not a restriction on freedom---it is a prerequisite for trust**.

When a human writes code, the code carries implicit warranties: the author understood what they were doing, tested edge cases, and took responsibility. AI-generated code carries none of these. It is statistical output, not reasoned creation. Users deserve to know which they are dealing with.

SySL does not restrict what you can do with AI-generated code. It only requires that you tell people what it is.

## License of SySL Itself

The Synthetic Source License text is copyrighted by langyo. You may freely reproduce and distribute the license text for the purpose of licensing your software. You may not modify the license text and call it "SySL" without the Author's permission, but you may create derivative licenses under your own name.

## Contributing

Bug reports, corrections, and suggestions for future versions of SySL are welcome. Please open an issue or pull request at <https://github.com/celestia-island/sysl>.

## Contact

- Author: langyo <langyo.china@gmail.com>
- Organization: [Celestia Island](https://github.com/celestia-island)
- Repository: <https://github.com/celestia-island/sysl>
