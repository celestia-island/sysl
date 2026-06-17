<script setup lang="ts">
import { RouterLink } from "vue-router";
import ThemeToggle from "@/components/ThemeToggle.vue";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/license", label: "License" },
  { to: "/faq", label: "FAQ" },
  { to: "/compare", label: "Compare" },
  { to: "/adopt", label: "Adopters" },
];
</script>

<template>
  <header class="header">
    <div class="header__inner">
      <RouterLink to="/" class="header__logo">
        <span class="header__logo-mark">SySL</span>
      </RouterLink>

      <nav class="header__nav">
        <RouterLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="header__link"
          active-class="header__link--active"
        >
          {{ link.label }}
        </RouterLink>
      </nav>

      <div class="header__actions">
        <a
          href="https://github.com/celestia-island/sysl"
          class="header__link header__link--icon"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background: var(--glass-bg);
  backdrop-filter: blur(16px) saturate(1.2);
  border-bottom: 1px solid var(--glass-border);
}

.header__inner {
  max-width: var(--content-max);
  height: 100%;
  margin: 0 auto;
  padding: 0 var(--sp-6);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  font-weight: 700;
  font-size: var(--text-lg);
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);

  &:hover {
    opacity: 1;
  }
}

.header__logo-mark {
  background: var(--brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--sp-1);
}

.header__link {
  padding: var(--sp-2) var(--sp-3);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: color var(--t-fast), background var(--t-fast);

  &:hover {
    color: var(--text-primary);
    background: var(--bg-tertiary);
    opacity: 1;
  }

  &--active {
    color: var(--brand-violet);
  }

  &--icon {
    display: flex;
    align-items: center;
    color: var(--text-secondary);

    &:hover {
      color: var(--text-primary);
    }
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

@media (max-width: 640px) {
  .header__nav {
    display: none;
  }
}
</style>
