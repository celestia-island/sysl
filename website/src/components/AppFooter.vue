<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <span class="brand-text footer__name">SySL</span>
        <span class="footer__tagline">Synthetic Source License v1.0</span>
      </div>

      <div class="footer__links">
        <a href="https://github.com/celestia-island/sysl">GitHub</a>
        <RouterLink to="/license">License Text</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <a href="https://github.com/celestia-island/sysl/issues">Issues</a>
      </div>

      <div class="footer__meta">
        <span>&copy; {{ year }} langyo · Celestia Island</span>
        <span class="footer__contact">
          <a href="mailto:sysl.contact@celestia.world">sysl.contact@celestia.world</a>
        </span>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
export default { components: { RouterLink } };
</script>

<style scoped lang="scss">
.footer {
  border-top: 1px solid var(--border-color);
  padding: var(--sp-12) 0;
  margin-top: var(--sp-24);
}

.footer__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--sp-6);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--sp-4);
  text-align: center;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
}

.footer__name {
  font-size: var(--text-xl);
  font-weight: 700;
}

.footer__tagline {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.footer__links {
  display: flex;
  gap: var(--sp-6);

  a {
    font-size: var(--text-sm);
    color: var(--text-secondary);

    &:hover {
      color: var(--brand-violet);
      opacity: 1;
    }
  }
}

.footer__meta {
  display: flex;
  flex-direction: column;
  gap: var(--sp-1);
  font-size: var(--text-xs);
  color: var(--text-tertiary);

  a {
    color: var(--text-tertiary);
  }
}
</style>
