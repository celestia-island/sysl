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

### Can SySL be used together with BUSL?

Yes. SySL is designed for layered licensing. A licensor may offer software under both SySL and BUSL-1.1 simultaneously (dual-licensing). The two licenses serve different purposes:

- **BUSL-1.1**: protects commercial use during a development period, then converts to the specified Change License.
- **SySL**: establishes the transparency norm that AI generation must be disclosed.

Users may choose which license to follow. See Section 11.3 of the license for the formal layered licensing provision.

**Important**: when using BUSL alongside SySL for AI-generated software, the BUSL Change License should be set to SySL (not Apache-2.0 or MIT). If BUSL converts to a license without disclosure obligations (like Apache-2.0), recipients of the post-change-date code can strip the AI disclosure — defeating SySL's purpose. Setting the Change License to SySL ensures the transparency norm survives the BUSL non-compete period.

### Do I need to disclose AI usage if I only use the software internally?

No. The disclosure requirements in Section 2 apply when you **distribute** the software (provide a copy to a third party). Internal use within a single organization, including SaaS deployment where you provide a service rather than a copy of the software, does not constitute distribution under SySL.

### What counts as "AI-Generated"?

Any code, documentation, configuration, or other material produced by an AI model or system, including large language models (LLMs), code generation models, and similar machine learning systems. This includes code that was partially generated and then edited by a human—the file-level disclosure should note the approximate AI-generation proportion.

### Does SySL allow AI training on the licensed code?

**Yes.** Section 9.1 explicitly permits using SySL-licensed code as training data for AI and machine learning systems. SySL operates as a knowledge exchange: the AI community may learn from SySL-licensed code on the same terms as human developers. No separate authorization is needed.

This is a deliberate design choice. AI-generated software exists because AI learned from human-written code. Blocking AI from learning from AI-generated code would create a one-way ratchet that defeats the purpose of an open ecosystem.

### What happens if SySL-licensed code is found to infringe someone's patent or copyright?

The infringing portions **automatically forfeit all SySL protections** (Section 9.2). This means:

- The infringing code is treated as if it had never been licensed under SySL.
- The original IP holder's rights are fully intact — SySL does not shield infringing content.
- Only the specific infringing portions lose protection; the rest of the Software retains full SySL coverage (Section 9.3).

This is a critical principle: **SySL does not launder infringing content**. AI models are trained on vast datasets that may include copyrighted or patented material. If an AI reproduces protected expression or patented methods from its training data, the fact that the output is "AI-generated" or "transformative" provides no safe harbor under SySL (Section 9.4).

### Does being "AI-generated" excuse infringement?

**No.** Section 9.5 is explicit: the AI-generated nature of a contribution does not excuse infringement, nor does it shift liability to the AI system, its provider, or the Author. Contributors must conduct due diligence to ensure their contributions don't infringe others' intellectual property — particularly when implementing architectural patterns that may be patented.

If you are building on an innovative architecture that you know is patented by someone else, you cannot shield yourself by having an AI generate the implementation. The origin of infringing material — whether human or AI — is irrelevant to the forfeiture analysis.

## Legal Questions

### Is SySL legally enforceable?

SySL is designed to be enforceable under two independent legal theories:

1. **Copyright law**: if the AI-generated code is found to be copyrightable, SySL operates as a traditional copyright license.
2. **Contract law**: if the code is not copyrightable, SySL operates as a binding contract. By using the software, you agree to the terms.

The dual-basis approach is modeled on the Functional Source License (FSL, part of Sentry's Fair Source initiative), which has been adopted by multiple companies and has not been successfully challenged.

However, enforceability varies by clause:

- **Disclosure requirements (§2, §8)**: enforceable as contract terms regardless of IP status.
- **Copyright grant (§3)**: only effective if the code is actually copyrightable.
- **Patent grant (§4)**: only effective if the Author actually holds patents — see below.

### Should I file patents before using SySL?

**Yes, strongly.** This is the single most important practical recommendation for SySL adopters.

The patent grant in Section 4 only has legal force if you hold issued patents covering the Software. If you have no patents, Section 4 is an empty grant — it promises rights that do not exist. Without patents, the patent provisions of SySL operate as a gentleman's agreement: a normative statement of intent with limited legal teeth.

To obtain full patent protection under SySL:

1. **File first**: submit patent applications on novel, non-obvious aspects of your AI-directed software before publishing or distributing it under SySL.
2. **License under SySL**: once patents are issued (or even pending, in some jurisdictions), the SySL patent grant becomes a legally enforceable license.
3. **The combination** of issued patents + SySL creates real enforcement power: users who violate the license risk patent infringement claims, not just breach of contract.

Without this step, SySL still functions as a contract (§5) and a transparency norm (§2), but you forfeit the strongest enforcement mechanism available.

### Can AI-generated code receive patent protection?

It depends on the jurisdiction and the level of human involvement. Key considerations:

- **Inventorship requirement**: most patent systems (US, EU, China, Japan) require that at least one inventor be a natural human person. The DABUS cases (2019–2024) confirmed that an AI system cannot be named as an inventor in these jurisdictions.
- **Sufficient human contribution**: if a human designed the architecture, made key technical decisions, and directed the AI to implement specific solutions, the human *may* qualify as an inventor. If the AI autonomously generated the code with minimal human direction, inventorship may fail entirely.
- **Novelty and non-obviousness**: AI-generated code must still meet standard patentability criteria independently.

Consult qualified patent counsel before relying on patent protection for AI-generated software. The answer may differ across jurisdictions and depends heavily on the specifics of how the human directed the AI.

### Can AI-generated code receive copyright protection?

In many jurisdictions, purely AI-generated works cannot be copyrighted because there is no human author. Courts in the US (*Thaler v. Perlmutter*, 2025–2026) and the EU have consistently ruled this way.

However, there are nuances:

- **Human-authored aspects**: if a human made sufficient creative contributions — selecting, arranging, editing, and refining the AI output — the human-authored elements may be copyrightable even if the raw AI output is not.
- **Compilation copyright**: a collection of AI-generated code may have a thin "sweat of the brow" or compilation copyright if the selection and arrangement involved human creativity.
- **Jurisdiction variation**: the threshold for "sufficient human contribution" varies significantly. The UK is relatively permissive (computer-generated works have a statutory provision); the US is restrictive.

If your AI-generated code has insufficient human creative participation, assume it is in the public domain. SySL's contract provisions (§5) are designed precisely for this scenario — they provide legal structure even when copyright does not apply.

### What happens if copyright law changes?

If a court or legislature rules that AI-generated code is copyrightable, SySL's copyright grant (Section 3) immediately takes effect, providing a clear licensing path. No amendment to the license is needed.

### Who is the "Author" under SySL?

The Author is determined in three tiers, depending on who directed the AI generation:

1. **Direct direction**: the human who directly wrote prompts, designed the architecture, and guided the AI.
2. **Indirect direction**: if an AI system (not a human) directly directed the generation, the human who designed, configured, or deployed that AI system.
3. **No human involvement**: if no human was involved at any level, the entity that first published the software.

This multi-tier approach acknowledges that AI systems (like 's own agent fleet) may autonomously direct code generation in the future. The definition ensures there is always a legal anchor for the contract.

### Why is governing law set to Japan?

Japan was chosen as a neutral governing law for several reasons: Japan has a well-developed body of contract law, a legal system that respects party autonomy in commercial agreements, and is jurisdictionally neutral with respect to the major regions (US, EU, China) where SySL is likely to be used. Additionally, Japan's copyright law has addressed AI-generated works in ways that make the contract-basis approach particularly clear and enforceable.

The Japan Commercial Arbitration Association (JCAA) conducts proceedings in English upon request; parties do not need Japanese language ability. Users in other jurisdictions retain their local consumer protection rights.

### How can disclosure claims be verified if source code is not distributed?

They cannot be independently verified. SySL's disclosure obligations rely on the honesty of the party making the disclosure. The license deliberately does not require source code distribution (see Section 8.3), and therefore does not include a mechanism to audit claims about AI-generation proportions. This is a design choice: SySL prioritizes the transparency norm over source-sharing, trusting that the social and contractual obligation to disclose will be honored. If you require verifiable AI-disclosure guarantees, a source-sharing license (such as GPL) used in combination with SySL may better suit your needs.

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

The Author may publish official revised versions of SySL. See Section 16 of the license.

## Adoption

### Who is using SySL?

See [ADOPTERS.md](./ADOPTERS.md) for the current list. The first adopters are the [](https://github.com/celestia-island/) ecosystem projects.

### How do I add my project to the adopters list?

Submit a pull request to [ADOPTERS.md](./ADOPTERS.md) with your project name, a short description, and the date of adoption.
