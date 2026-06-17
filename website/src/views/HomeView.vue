<script setup lang="ts">
import { RouterLink } from "vue-router";

const features = [
  {
    icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
    title: "AI Disclosure",
    desc: "Every copy and derivative must disclose that the code is AI-generated — models used, token counts, and generation proportions.",
  },
  {
    icon: "M3 6h18M3 12h18M3 18h18",
    title: "Dual Legal Basis",
    desc: "Functions as both a copyright license (if copyright exists) and a binding contract (if it doesn't). Works regardless of legal uncertainty.",
  },
  {
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "Patent Grant",
    desc: "Apache-2.0-equivalent patent protection that operates independently of copyright status.",
  },
  {
    icon: "M9 12l2 2 4-4M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z",
    title: "Apache-2.0 Compatible",
    desc: "SySL code can be freely combined with Apache-2.0 code. Disclosure travels with the code, never blocks adoption.",
  },
  {
    icon: "M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10",
    title: "Layered Licensing",
    desc: "Coexists with BUSL-1.1 for commercial protection via dual-licensing. You choose the terms that fit.",
  },
  {
    icon: "M3 5h12M9 3v2m1.278 4.5A11.25 11.25 0 0 1 3.75 19.5M3 5l4.5 4.5M21 19h-8m-2 0a2 2 0 1 0 4 0m-4 0a2 2 0 1 0-4 0",
    title: "Multi-language",
    desc: "Available in 11 languages. English is legally binding; all translations are informational references.",
  },
];

const adopters = [
  { name: "", desc: "Multi-agent AI orchestration platform", href: "https://github.com/celestia-island/" },
  { name: "shittim-chest", desc: "AI platform web shell", href: "https://github.com/celestia-island/shittim-chest" },
  { name: "evernight", desc: "Cross-platform remote control library", href: "https://github.com/celestia-island/evernight" },
];
</script>

<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero">
      <div class="hero__inner">
        <span class="tag hero__tag">v1.0 · 11 Languages</span>
        <h1 class="hero__title">
          The first license for
          <span class="brand-text">AI-generated code</span>
        </h1>
        <p class="hero__subtitle">
          Traditional open source licenses assume a human author holds copyright.
          SySL is built for code that isn't written by a human at all —
          it works as both a copyright license and a binding contract,
          and it requires transparency about AI generation.
        </p>
        <div class="hero__actions">
          <RouterLink to="/license" class="btn btn--primary">
            Read the License
          </RouterLink>
          <RouterLink to="/faq" class="btn btn--ghost">
            Frequently Asked Questions
          </RouterLink>
        </div>
      </div>
      <div class="hero__glow"></div>
    </section>

    <!-- The Problem -->
    <section class="section">
      <div class="page-wrapper">
        <h2 class="section-title">Why does this matter?</h2>
        <p class="section-subtitle">
          AI-generated software is here. The legal framework needs to catch up.
        </p>

        <div class="problem-grid">
          <div class="card problem-card">
            <div class="problem-card__num">01</div>
            <h3>The Copyright Vacuum</h3>
            <p>
              Courts in the US, EU, and elsewhere have ruled that purely AI-generated
              works <strong>cannot be copyrighted</strong>. Traditional licenses that
              rest on copyright may have no legal force.
            </p>
          </div>
          <div class="card problem-card">
            <div class="problem-card__num">02</div>
            <h3>Uncertain Consequences</h3>
            <p>
              If AI code has no copyright, anyone can use, copy, or modify it with
              <strong>uncertain legal consequences</strong>. Contributors and users
              operate in a legal gray zone.
            </p>
          </div>
          <div class="card problem-card">
            <div class="problem-card__num">03</div>
            <h3>Missing Transparency</h3>
            <p>
              Users deserve to know whether code was written by a human or generated
              by a statistical model. No existing license requires
              <strong>disclosure of AI generation</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="section section--alt">
      <div class="page-wrapper">
        <h2 class="section-title">Key Features</h2>
        <p class="section-subtitle">
          A new category — "Synthetic Source" — adjacent to and compatible with Open Source.
        </p>

        <div class="feature-grid">
          <div v-for="f in features" :key="f.title" class="card feature-card">
            <div class="feature-card__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                <path :d="f.icon" />
              </svg>
            </div>
            <h3>{{ f.title }}</h3>
            <p>{{ f.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start -->
    <section class="section">
      <div class="page-wrapper">
        <h2 class="section-title">Quick Start</h2>
        <p class="section-subtitle">Three steps to license your AI-generated project.</p>

        <div class="quickstart">
          <div class="quickstart__step">
            <span class="quickstart__num">1</span>
            <div>
              <h4>Copy the license</h4>
              <p>Place <code>LICENSE.txt</code> in your repository root.</p>
            </div>
          </div>
          <div class="quickstart__step">
            <span class="quickstart__num">2</span>
            <div>
              <h4>Create AI_DISCLOSURE</h4>
              <p>Document which models were used, approximate tokens, and AI-generation proportion.</p>
            </div>
          </div>
          <div class="quickstart__step">
            <span class="quickstart__num">3</span>
            <div>
              <h4>Add a badge</h4>
              <p>
                Link to SySL in your README so users know what they're getting.
              </p>
            </div>
          </div>
        </div>

        <div class="quickstart__actions">
          <RouterLink to="/license" class="btn btn--ghost">View full license text →</RouterLink>
        </div>
      </div>
    </section>

    <!-- Adopters -->
    <section class="section section--alt">
      <div class="page-wrapper">
        <h2 class="section-title">Adopters</h2>
        <p class="section-subtitle">Projects already using SySL.</p>

        <div class="adopter-grid">
          <a
            v-for="a in adopters"
            :key="a.name"
            :href="a.href"
            class="card adopter-card"
            target="_blank"
            rel="noopener"
          >
            <h4>{{ a.name }}</h4>
            <p>{{ a.desc }}</p>
          </a>
        </div>

        <RouterLink to="/adopt" class="btn btn--ghost" style="margin-top: var(--sp-6)">
          See all adopters →
        </RouterLink>
      </div>
    </section>

    <!-- Philosophy -->
    <section class="section">
      <div class="page-wrapper">
        <div class="philosophy">
          <blockquote class="philosophy__quote">
            Transparency is not a restriction on freedom —
            it is a <span class="brand-text">prerequisite for trust</span>.
          </blockquote>
          <p class="philosophy__text">
            SySL does not restrict what you can do with AI-generated code.
            It only requires that you tell people what it is.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
// === Hero ===
.hero {
  position: relative;
  padding: var(--sp-24) var(--sp-6) var(--sp-16);
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: var(--sp-16) var(--sp-6) var(--sp-12);
  }
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
  margin: 0 auto;
}

.hero__tag {
  margin-bottom: var(--sp-6);
}

.hero__title {
  font-size: var(--text-4xl);
  font-weight: 800;
  letter-spacing: var(--tracking-tight);
  line-height: 1.1;
  margin-bottom: var(--sp-6);

  @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
}

.hero__subtitle {
  font-size: var(--text-lg);
  line-height: var(--leading-relaxed);
  color: var(--text-secondary);
  margin-bottom: var(--sp-8);
  max-width: 620px;
  margin-left: auto;
  margin-right: auto;
}

.hero__actions {
  display: flex;
  gap: var(--sp-3);
  justify-content: center;
  flex-wrap: wrap;
}

.hero__glow {
  position: absolute;
  top: -40%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 600px;
  background: radial-gradient(
    ellipse at center,
    rgba(108, 60, 224, 0.12) 0%,
    rgba(74, 144, 217, 0.06) 40%,
    transparent 70%
  );
  pointer-events: none;
  z-index: 0;
}

// === Section alternating background ===
.section--alt {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
}

// === Problem cards ===
.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--sp-6);
}

.problem-card {
  position: relative;

  &__num {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--brand-violet);
    opacity: 0.6;
    margin-bottom: var(--sp-3);
  }

  h3 {
    font-size: var(--text-lg);
    font-weight: 600;
    margin-bottom: var(--sp-2);
  }

  p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
  }
}

// === Feature cards ===
.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--sp-6);
}

.feature-card {
  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    border-radius: var(--radius);
    background: var(--brand-gradient-soft);
    color: var(--brand-violet);
    margin-bottom: var(--sp-4);
  }

  h3 {
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: var(--sp-2);
  }

  p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
  }
}

// === Quick Start ===
.quickstart {
  max-width: 640px;

  &__step {
    display: flex;
    gap: var(--sp-4);
    align-items: flex-start;
    padding: var(--sp-4) 0;
    border-bottom: 1px solid var(--border-color);

    &:last-child {
      border-bottom: none;
    }
  }

  &__num {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: var(--radius-full);
    background: var(--brand-gradient);
    color: #fff;
    font-size: var(--text-sm);
    font-weight: 600;
  }

  h4 {
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: var(--sp-1);
  }

  p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }

  code {
    font-family: var(--font-mono);
    font-size: 0.85em;
    background: var(--code-bg);
    border: 1px solid var(--code-border);
    border-radius: var(--radius-sm);
    padding: 0.1em 0.35em;
  }

  &__actions {
    margin-top: var(--sp-8);
    text-align: center;
  }
}

// === Adopters ===
.adopter-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--sp-4);
}

.adopter-card {
  text-align: center;

  h4 {
    font-size: var(--text-base);
    font-weight: 600;
    margin-bottom: var(--sp-1);
    color: var(--brand-violet);
  }

  p {
    font-size: var(--text-sm);
    color: var(--text-secondary);
  }
}

// === Philosophy ===
.philosophy {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;

  &__quote {
    font-size: var(--text-2xl);
    font-weight: 600;
    line-height: var(--leading-tight);
    letter-spacing: var(--tracking-tight);
    color: var(--text-primary);
    margin-bottom: var(--sp-6);
    border: none;
    padding: 0;
    font-style: normal;
  }

  &__text {
    font-size: var(--text-lg);
    color: var(--text-secondary);
    line-height: var(--leading-relaxed);
  }
}
</style>
