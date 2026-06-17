<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import ScrollToTop from "@/components/ScrollToTop.vue";
</script>

<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
  <AppHeader />
  <main id="main-content">
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <AppFooter />
  <ScrollToTop />
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - var(--header-height));
}

.skip-link {
  position: absolute;
  top: -100px;
  left: 0;
  z-index: 200;
  padding: var(--sp-2) var(--sp-4);
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: var(--text-sm);
  text-decoration: none;
  border: 1px solid var(--border-strong);
  border-radius: 0 0 var(--radius) 0;

  &:focus-visible {
    top: 0;
    outline: 2px solid var(--link-color);
  }
}
</style>
