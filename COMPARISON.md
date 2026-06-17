# License Comparison: SySL vs. Traditional Licenses

## At a Glance

| | SySL 1.0 | MIT | Apache 2.0 | GPLv3 | BUSL 1.1 |
|---|:---:|:---:|:---:|:---:|:---:|
| **Year created** | 2026 | 1988 | 2004 | 2007 | 2016 |
| **Type** | Synthetic Source | Permissive | Permissive + Patent | Strong Copyleft | Delayed Open Source |
| **Copyright required** | No (contract fallback) | Yes | Yes | Yes | Yes |
| **AI-aware** | Yes (core design) | No | No | No | No |
| **Patent grant** | Yes (Apache-scope) | No | Yes | Yes | No |
| **Copyleft** | Disclosure only | No | No | Yes (strong) | No |
| **Commercial use** | Yes (with disclosure) | Yes | Yes | Yes (with source) | Non-compete period |
| **Distribution terms** | Keep AI disclosure | Keep copyright notice | Keep copyright + patent notice | Distribute under GPL | Compatible with FSL |
| **Liability waiver** | Standard + AI-specific | Standard | Standard | Standard | Standard |
| **OSI-approved** | No (new category) | Yes | Yes | Yes | No |
| **FSF-free** | Yes (four freedoms) | Yes | Yes | Yes | No |
| **Change date** | None (perpetual) | N/A | N/A | N/A | Converts to designated license |

## Detailed Analysis

### SySL vs. MIT

**When to choose MIT**: Your code is human-written, you want maximum simplicity and permissiveness, and you don't need patent protection or AI-specific terms.

**When to choose SySL**: Your code is substantially AI-generated, you want users to know this, and you want the license to work even if copyright doesn't apply.

**Key difference**: MIT is purely a copyright license. If copyright doesn't cover your AI-generated code, MIT provides no legal framework. SySL works as both copyright license and contract.

### SySL vs. Apache 2.0

**When to choose Apache 2.0**: Your code is human-written, you want a permissive license with patent protection, and you operate in an enterprise environment.

**When to choose SySL**: Same as MIT comparisons, plus: SySL is designed to be compatible with Apache 2.0. You can combine SySL-licensed code with Apache-2.0-licensed code and distribute under Apache 2.0, provided AI disclosures are maintained.

**Key difference**: Apache 2.0 has a patent grant. SySL has an equivalent patent grant. The critical difference is that Apache 2.0 assumes copyright and provides no contract fallback. SySL's patent grant operates independently of copyright.

### SySL vs. GPLv3

**When to choose GPLv3**: You want strong copyleft—anyone who modifies and redistributes your code must also distribute their modifications under GPL.

**When to choose SySL**: You want transparency but not source-sharing coercion. SySL's "synthetic copyleft" only requires that AI disclosure be maintained, not that the entire project be open-sourced.

**Key difference**: GPL's copyleft is about keeping code open. SySL's copyleft is about keeping the AI disclosure chain intact. You can take SySL code, add proprietary modifications, and distribute under a proprietary license—as long as the AI disclosure remains.

### SySL vs. BUSL 1.1

**When to choose BUSL 1.1**: You want to protect a commercial product from being cloned by competitors, with the code eventually converting to open source.

**When to choose SySL**: You want maximum adoption with a transparency norm. There is no non-compete period and no automatic conversion.

**Key difference**: BUSL is a defensive license (protect the business). SySL is a transparency license (establish a social norm). They serve different purposes and can coexist— uses both: BUSL for commercial protection during development, SySL for the perpetual licensing framework.

## Compatibility Matrix

Can you combine code under license A with code under license B?

| License A ↓ / License B → | MIT | Apache 2.0 | GPLv3 | SySL 1.0 | BUSL 1.1 |
|:---|:---:|:---:|:---:|:---:|:---:|
| **MIT** | ✓ | ✓ | ✓ | ✓ | ✓ |
| **Apache 2.0** | ✓ | ✓ | ✓ (v3 only) | ✓ | Conditional |
| **GPLv3** | ✓ | ✓ (v3 only) | ✓ | Under review | ✗ |
| **SySL 1.0** | ✓ | ✓ | Under review | ✓ | Conditional |
| **BUSL 1.1** | ✓ | Conditional | ✗ | Conditional | ✗ |

*✓ = known compatible. ✗ = known incompatible. "Under review" = not yet analyzed. "Conditional" = depends on specific terms.*

## Which License Should I Use?

```
Is your code substantially AI-generated?
  ├── Yes → Are you comfortable with users not knowing?
  │         ├── Yes → MIT or Apache 2.0
  │         └── No  → SySL
  └── No  → Do you need patent protection?
             ├── Yes → Apache 2.0
             └── No  → MIT
```

For AI-generated code specifically:

```
Do you want derivatives to keep AI disclosure?
  ├── Yes → SySL
  └── No  → MIT or Apache 2.0 (acknowledging legal uncertainty)
```
