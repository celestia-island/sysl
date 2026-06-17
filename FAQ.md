# Frequently Asked Questions

## About SySL

### Why does AI-generated code need a special license?

Traditional open source licenses (MIT, GPL, Apache-2.0) are built on copyright law. They assume a human author holds copyright in the code. But courts in the US (Thaler v. Perlmutter, 2025-2026) and EU have ruled that purely AI-generated works cannot be copyrighted—there is no human author, so there is no copyright.

If AI-generated code has no copyright, a traditional license that rests on copyright may have no legal force. SySL solves this by operating as both a copyright license (if copyright exists) and an independent contract (if it doesn't).

### Is SySL "open source"?

SySL satisfies the Free Software Definition (freedom to run, study, modify, and share) and most of the Open Source Definition, with one exception: SySL requires disclosure of AI generation. This disclosure requirement is a condition on use, which some interpretations of the OSD may consider a restriction.

SySL defines a **new category**—"Synthetic Source"—that is adjacent to and compatible with Open Source, but addresses a scenario traditional open source was never designed for.

### Is SySL a copyleft license?

Yes, but a new kind. Traditional copyleft (GPL) requires that derivative works be distributed under the same license. SySL's "synthetic copyleft" only requires that derivatives **preserve the AI disclosure chain**—not that they be distributed under SySL.

So you can take SySL-licensed code, modify it, and distribute the result under MIT or Apache-2.0, **as long as you keep the AI disclosure intact**. This is deliberate: SySL aims to spread the norm of transparency without creating license incompatibility.

## Using SySL

### Can I use SySL-licensed code in a proprietary product?

Yes, provided you satisfy the disclosure requirements (Section 2) and the reciprocal disclosure requirements (Section 8). This means:

- Keep the AI disclosure notice in your documentation.
- If distributing source code, maintain AI generation disclosures at the file level.
- If distributing only binaries, include the AI disclosure notice and a copy of (or link to) the AI_DISCLOSURE file.

You are **not** required to distribute your source code. SySL's copyleft is limited to preserving the AI disclosure chain.

### Can I combine SySL code with Apache-2.0 code?

Yes. SySL is explicitly compatible with Apache-2.0. The combined work may be distributed under Apache-2.0, provided SySL's disclosure requirements are independently satisfied.

### Can I combine SySL code with GPL code?

Compatibility with GPL has not been formally analyzed. Both licenses have copyleft-like obligations (source disclosure for GPL, AI disclosure for SySL). If you need to combine SySL code with GPL code, consult legal counsel or open an issue for a compatibility analysis.

### Do I need to disclose AI usage if I only use the software internally?

No. The disclosure requirements in Section 2 apply when you **distribute** the software (provide a copy to a third party). Internal use within a single organization, including SaaS deployment where you provide a service rather than a copy of the software, does not constitute distribution under SySL.

### What counts as "AI-Generated"?

Any code, documentation, configuration, or other material produced by an AI model or system, including large language models (LLMs), code generation models, and similar machine learning systems. This includes code that was partially generated and then edited by a human—the file-level disclosure should note the approximate AI-generation proportion.

## Legal Questions

### Is SySL legally enforceable?

SySL is designed to be enforceable under two independent legal theories:

1. **Copyright law**: if the AI-generated code is found to be copyrightable, SySL operates as a traditional copyright license.
2. **Contract law**: if the code is not copyrightable, SySL operates as a binding contract. By using the software, you agree to the terms.

The dual-basis approach is modeled on the Functional Source License (FSL, part of Sentry's Fair Source initiative), which has been adopted by multiple companies and has not been successfully challenged.

### What happens if copyright law changes?

If a court or legislature rules that AI-generated code is copyrightable, SySL's copyright grant (Section 3) immediately takes effect, providing a clear licensing path. No amendment to the license is needed.

### Who is the "Author" under SySL?

The Author is the human or humans who directed the AI generation process: architecture design, prompt engineering, constraint specification, quality assurance, and integration. This reflects the reality that AI-generated code is not authored by the AI itself, but by the humans who guide and curate its output.

### Why is governing law set to Japan?

Japan was chosen as a neutral governing law for several reasons: Japan has a well-developed body of contract law, a legal system that respects party autonomy in commercial agreements, and is jurisdictionally neutral with respect to the major regions (US, EU, China) where SySL is likely to be used. Additionally, Japan's copyright law has addressed AI-generated works in ways that make the contract-basis approach particularly clear and enforceable.

Users in other jurisdictions retain their local consumer protection rights.

### What if I disagree with the AI disclosure requirement?

The disclosure requirement is the core of SySL. If you cannot or will not disclose AI generation, you should not use SySL-licensed software. Alternative licenses that do not require AI disclosure include MIT, Apache-2.0, and BSD.

## Practical Questions

### How do I create an AI_DISCLOSURE file?

Create a file named `AI_DISCLOSURE` or `AI_DISCLOSURE.md` in your repository root. A minimal example:

```
AI MODELS USED:
- Claude Opus 4.6 (Anthropic)
- GLM-4 (Zhipu AI)

TOKENS CONSUMED:
- Approximately 100 billion tokens total

AI GENERATION PROPORTION:
- ~100% of source code is AI-generated
- Architecture design and quality assurance: human
```

### Can I modify the SySL text for my project?

You may modify the license text for your own use, but you must not call the modified version "the Synthetic Source License" or "SySL" without permission. If you create a derivative license, give it a distinct name.

The Author may publish official revised versions of SySL. See Section 15 of the license.

## Adoption

### Who is using SySL?

See [ADOPTERS.md](./ADOPTERS.md) for the current list. The first adopters are the [](https://github.com/celestia-island/) ecosystem projects.

### How do I add my project to the adopters list?

Submit a pull request to [ADOPTERS.md](./ADOPTERS.md) with your project name, a short description, and the date of adoption.
