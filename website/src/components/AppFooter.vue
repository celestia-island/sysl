<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
  <footer class="footer" role="contentinfo">
    <div class="footer__inner">
      <span>&copy; {{ year }} langyo · Celestia Island</span>
      <span>
        <a href="mailto:sysl.contact@celestia.world">sysl.contact@celestia.world</a>
      </span>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  border-top: 1px solid var(--border-color);
  padding: var(--sp-6) 0;
}

.footer__inner {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--sp-6);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--sp-2);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.footer__inner a {
  color: var(--text-tertiary);

  &:hover {
    color: var(--text-secondary);
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }
}
</style>
