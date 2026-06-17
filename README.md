# Synthetic Source License (SySL)

**A novel software license designed for AI-generated code — operating as a binding contract independent of copyright.**

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
| **Patent Grant** | Equivalent to Apache-2.0 patent protection — **only effective if the Author holds issued patents; file before relying on this** |
| **AI Training Permission** | Code may be freely used as AI training data — knowledge exchange, not a one-way ratchet |
| **Infringement Forfeiture** | Code that infringes others' valid IP **automatically loses all SySL protection** — no IP laundering |
| **Apache-2.0 Compatible** | SySL code can be combined with Apache-2.0 code |
| **Layered Licensing** | Coexists with BUSL-1.1 for commercial protection (dual-license) |
| **Synthetic Copyleft** | Derivatives must preserve AI disclosure (transparency obligation, not source-sharing) |
| **AI-Specific Disclaimer** | Explicitly disclaims AI-unique failure modes |
| **Multi-language** | Available in 11 languages (English legally binding) |

## Quick Start

To use SySL for your project:

1. **File patents first** (strongly recommended): if your AI-directed software contains novel, non-obvious inventions, file patent applications *before* publishing. The patent grant in §4 only has legal force if you hold issued patents. Without patents, §4 is a gentleman's agreement — still useful as a norm, but not legally enforceable. See [§4.3–4.5](./LICENSE.txt) for details.
2. Copy `LICENSE.txt` into your repository root.
3. Create an `AI_DISCLOSURE` (or `AI_DISCLOSURE.md`) file describing:
   - Which AI models were used
   - Approximate tokens consumed
   - The proportion of AI-generated vs. human-written code
4. Add a badge to your README:

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
| Patent grant | No | Yes | Yes | **Yes** (conditional on Author holding patents; see §4.3–4.5) |
| Copyleft | No | No | Yes (strong) | **Yes** (disclosure only) |
| AI disclosure required | No | No | No | **Yes** |
| Attribution required | Yes | Yes | Yes | **Yes** (AI attribution) |

See [COMPARISON.md](./COMPARISON.md) for a detailed analysis.

## Languages

SySL is available in the following languages. The English version is legally binding; translations are informational.

| Language | README | LICENSE | FAQ |
|----------|--------|---------|-----|
| English (binding) | [README.md](./README.md) | [LICENSE.txt](./LICENSE.txt) | [FAQ.md](./FAQ.md) |
| 简体中文 | [i18n/zhs/README.md](./i18n/zhs/README.md) | [i18n/zhs/LICENSE.txt](./i18n/zhs/LICENSE.txt) | [i18n/zhs/FAQ.md](./i18n/zhs/FAQ.md) |
| 繁體中文 | [i18n/zht/README.md](./i18n/zht/README.md) | [i18n/zht/LICENSE.txt](./i18n/zht/LICENSE.txt) | [i18n/zht/FAQ.md](./i18n/zht/FAQ.md) |
| 日本語 | [i18n/ja/README.md](./i18n/ja/README.md) | [i18n/ja/LICENSE.txt](./i18n/ja/LICENSE.txt) | [i18n/ja/FAQ.md](./i18n/ja/FAQ.md) |
| 한국어 | [i18n/ko/README.md](./i18n/ko/README.md) | [i18n/ko/LICENSE.txt](./i18n/ko/LICENSE.txt) | [i18n/ko/FAQ.md](./i18n/ko/FAQ.md) |
| Français | [i18n/fr/README.md](./i18n/fr/README.md) | [i18n/fr/LICENSE.txt](./i18n/fr/LICENSE.txt) | [i18n/fr/FAQ.md](./i18n/fr/FAQ.md) |
| Español | [i18n/es/README.md](./i18n/es/README.md) | [i18n/es/LICENSE.txt](./i18n/es/LICENSE.txt) | [i18n/es/FAQ.md](./i18n/es/FAQ.md) |
| Русский | [i18n/ru/README.md](./i18n/ru/README.md) | [i18n/ru/LICENSE.txt](./i18n/ru/LICENSE.txt) | [i18n/ru/FAQ.md](./i18n/ru/FAQ.md) |
| Deutsch | [i18n/de/README.md](./i18n/de/README.md) | [i18n/de/LICENSE.txt](./i18n/de/LICENSE.txt) | [i18n/de/FAQ.md](./i18n/de/FAQ.md) |
| Português | [i18n/pt/README.md](./i18n/pt/README.md) | [i18n/pt/LICENSE.txt](./i18n/pt/LICENSE.txt) | [i18n/pt/FAQ.md](./i18n/pt/FAQ.md) |
| العربية | [i18n/ar/README.md](./i18n/ar/README.md) | [i18n/ar/LICENSE.txt](./i18n/ar/LICENSE.txt) | [i18n/ar/FAQ.md](./i18n/ar/FAQ.md) |

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

- Author: langyo <sysl.contact@celestia.world>
- Organization: [Celestia Island](https://github.com/celestia-island)
- Repository: <https://github.com/celestia-island/sysl>
