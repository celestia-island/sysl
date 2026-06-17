<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Lang {
  code: string;
  label: string;
}

const props = defineProps<{
  languages: Lang[];
  modelValue: string;
}>();

const emit = defineEmits<{
  "update:modelValue": [value: string];
}>();

const showDropdown = ref(false);
const switcherRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);

function select(code: string) {
  emit("update:modelValue", code);
  showDropdown.value = false;
  triggerRef.value?.focus();
}

function onDocClick(e: MouseEvent) {
  if (switcherRef.value && !switcherRef.value.contains(e.target as Node)) {
    showDropdown.value = false;
  }
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape" && showDropdown.value) {
    showDropdown.value = false;
    triggerRef.value?.focus();
  }
}

onMounted(() => {
  document.addEventListener("click", onDocClick);
  document.addEventListener("keydown", onKeydown);
});
onUnmounted(() => {
  document.removeEventListener("click", onDocClick);
  document.removeEventListener("keydown", onKeydown);
});

const activeLabel = () =>
  props.languages.find((l) => l.code === props.modelValue)?.label ?? "";
</script>

<template>
  <div ref="switcherRef" class="lang-switcher">
    <button
      ref="triggerRef"
      class="lang-switcher__trigger"
      @click="showDropdown = !showDropdown"
      :aria-expanded="showDropdown"
      aria-haspopup="listbox"
      aria-label="Select language"
    >
      <span>{{ activeLabel() }}</span>
      <svg class="lang-switcher__arrow" width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
        <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <ul v-if="showDropdown" class="lang-switcher__dropdown" role="listbox">
      <li
        v-for="lang in languages"
        :key="lang.code"
        role="option"
        :aria-selected="lang.code === modelValue"
      >
        <button
          class="lang-switcher__option"
          :class="{ 'lang-switcher__option--active': lang.code === modelValue }"
          @click="select(lang.code)"
        >
          {{ lang.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.lang-switcher {
  position: relative;
}

.lang-switcher__trigger {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-1) var(--sp-3);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background: var(--bg-secondary);
  font-family: inherit;
  transition: border-color var(--t-fast);

  &:hover { border-color: var(--text-tertiary); }
  &:focus-visible { outline: 2px solid var(--link-color); outline-offset: 2px; }
}

.lang-switcher__arrow {
  color: var(--text-tertiary);
}

.lang-switcher__dropdown {
  position: absolute;
  top: calc(100% + var(--sp-1));
  right: 0;
  min-width: 160px;
  list-style: none;
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: var(--sp-1);
  margin: 0;
  z-index: 50;

  li { list-style: none; }
}

.lang-switcher__option {
  display: block;
  width: 100%;
  padding: var(--sp-2) var(--sp-3);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  text-align: left;
  transition: background var(--t-fast), color var(--t-fast);

  &:hover, &:focus-visible {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    outline: none;
  }
  &--active { color: var(--text-primary); font-weight: 600; }
}
</style>
