<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import ThemeToggle from "@/components/ThemeToggle.vue";
import { useNavLabels } from "@/composables/useLangStore";

const labels = useNavLabels();

const navLinks = computed(() => [
  { to: "/", label: labels.license() },
  { to: "/faq", label: labels.faq() },
  { to: "/compare", label: labels.compare() },
]);
</script>

<template>
  <header class="header" role="banner">
    <div class="header__inner">
      <RouterLink to="/" class="header__logo" aria-label="SySL home">SySL</RouterLink>

      <nav class="header__nav" aria-label="Site navigation">
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
          class="header__link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="SySL on GitHub"
        >
          GitHub
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
  background: var(--bg-primary);
  border-bottom: 1px solid var(--border-color);
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
  font-size: var(--text-lg);
  font-weight: 700;
  letter-spacing: var(--tracking-tight);
  color: var(--text-primary);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
    border-radius: var(--radius-sm);
  }
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--sp-1);
}

.header__link {
  padding: var(--sp-1) var(--sp-3);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  text-decoration: none;
  border-radius: var(--radius-sm);
  transition: color var(--t-fast);

  &:hover {
    color: var(--text-primary);
    text-decoration: none;
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }

  &--active {
    color: var(--text-primary);
    font-weight: 600;
  }
}

.header__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

@media (max-width: 640px) {
  .header__nav {
    gap: 0;
  }
  .header__link {
    padding: var(--sp-1) var(--sp-2);
    font-size: var(--text-xs);
  }
}
</style>
