<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

function onScroll() {
  visible.value = window.scrollY > 400;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onUnmounted(() => window.removeEventListener("scroll", onScroll));
</script>

<template>
  <Transition name="scrolltop">
    <button
      v-if="visible"
      class="scrolltop"
      @click="scrollToTop"
      aria-label="Return to top"
      title="Return to top"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </button>
  </Transition>
</template>

<style scoped lang="scss">
.scrolltop {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 90;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--border-strong);
  border-radius: 50%;
  background: var(--bg-secondary);
  color: var(--text-secondary);
  cursor: pointer;
  transition: color var(--t-fast), border-color var(--t-fast);

  &:hover {
    color: var(--text-primary);
    border-color: var(--text-tertiary);
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }
}

.scrolltop-enter-active,
.scrolltop-leave-active {
  transition: opacity var(--t-normal), transform var(--t-normal);
}

.scrolltop-enter-from,
.scrolltop-leave-to {
  opacity: 0;
  transform: translateY(8px);
}
</style>
