<script setup lang="ts">
import { useTheme } from "@/composables/useTheme";

const { theme, toggle } = useTheme();
</script>

<template>
  <button
    class="theme-toggle"
    @click="toggle"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="theme === 'dark' ? 'Light theme' : 'Dark theme'"
  >
    {{ theme === "dark" ? "☀" : "☾" }}
  </button>
</template>

<style scoped lang="scss">
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  font-size: var(--text-sm);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: color var(--t-fast);

  &:hover {
    color: var(--text-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }
}
</style>
