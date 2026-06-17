<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

import enText from "../../../LICENSE.txt?raw";
import zhsText from "../../../i18n/zhs/LICENSE.txt?raw";
import zhtText from "../../../i18n/zht/LICENSE.txt?raw";
import jaText from "../../../i18n/ja/LICENSE.txt?raw";
import koText from "../../../i18n/ko/LICENSE.txt?raw";
import frText from "../../../i18n/fr/LICENSE.txt?raw";
import esText from "../../../i18n/es/LICENSE.txt?raw";
import ruText from "../../../i18n/ru/LICENSE.txt?raw";
import deText from "../../../i18n/de/LICENSE.txt?raw";
import ptText from "../../../i18n/pt/LICENSE.txt?raw";
import arText from "../../../i18n/ar/LICENSE.txt?raw";

const languages = [
  { code: "en", label: "English", text: enText },
  { code: "zhs", label: "简体中文", text: zhsText },
  { code: "zht", label: "繁體中文", text: zhtText },
  { code: "ja", label: "日本語", text: jaText },
  { code: "ko", label: "한국어", text: koText },
  { code: "fr", label: "Français", text: frText },
  { code: "es", label: "Español", text: esText },
  { code: "ru", label: "Русский", text: ruText },
  { code: "de", label: "Deutsch", text: deText },
  { code: "pt", label: "Português", text: ptText },
  { code: "ar", label: "العربية", text: arText, rtl: true },
];

const activeCode = ref("en");
const activeLang = computed(() => languages.find((l) => l.code === activeCode.value)!);
const showDropdown = ref(false);
const switcherRef = ref<HTMLElement | null>(null);
const triggerRef = ref<HTMLButtonElement | null>(null);

function selectLang(code: string) {
  activeCode.value = code;
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

const lines = computed(() => activeLang.value.text.split("\n"));
function isRule(line: string): boolean {
  const t = line.trim();
  return t.length >= 10 && /^[-=─━]+$/.test(t);
}
</script>

<template>
  <div class="license-page">
    <div class="license-meta">
      <span class="license-meta__version">Version 1.0</span>
      <div ref="switcherRef" class="lang-switcher">
        <button
          ref="triggerRef"
          class="lang-switcher__trigger"
          @click="showDropdown = !showDropdown"
          :aria-expanded="showDropdown"
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <span>{{ activeLang.label }}</span>
          <span class="lang-switcher__arrow" aria-hidden="true">{{ showDropdown ? "▲" : "▼" }}</span>
        </button>
        <ul
          v-if="showDropdown"
          class="lang-switcher__dropdown"
          role="listbox"
          :aria-activedescendant="'lang-' + activeCode"
        >
          <li
            v-for="lang in languages"
            :key="lang.code"
            :id="'lang-' + lang.code"
            role="option"
            :aria-selected="lang.code === activeCode"
          >
            <button
              class="lang-switcher__option"
              :class="{ 'lang-switcher__option--active': lang.code === activeCode }"
              @click="selectLang(lang.code)"
            >
              {{ lang.label }}
            </button>
          </li>
        </ul>
      </div>
    </div>

    <p v-if="activeLang.code !== 'en'" class="license-notice" role="note">
      Informational translation. The English version is legally binding.
    </p>

    <div
      class="license-text"
      :class="{ 'license-text--rtl': activeLang.rtl }"
      :dir="activeLang.rtl ? 'rtl' : 'ltr'"
      :lang="activeLang.code"
    >
      <div
        v-for="(line, i) in lines"
        :key="i"
        class="license-line"
        :class="{ 'license-line--rule': isRule(line) }"
      >{{ line.length === 0 ? "\u00A0" : line }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.license-page {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: 0 var(--sp-6) var(--sp-16);
}

// --- Meta bar ---
.license-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-3) 0;
  margin-bottom: var(--sp-4);
  border-bottom: 1px solid var(--border-color);
}

.license-meta__version {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
}

.license-notice {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-style: italic;
  margin-bottom: var(--sp-6);
}

// --- Language switcher ---
.lang-switcher {
  position: relative;
}

.lang-switcher__trigger {
  display: flex;
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

  &:hover {
    border-color: var(--text-tertiary);
  }

  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }
}

.lang-switcher__arrow {
  font-size: 0.6em;
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

  li {
    list-style: none;
  }
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

  &:hover,
  &:focus-visible {
    background: var(--bg-tertiary);
    color: var(--text-primary);
    outline: none;
  }

  &--active {
    color: var(--text-primary);
    font-weight: 600;
  }
}

// --- License text ---
.license-text {
  font-size: var(--text-sm);
  line-height: 1.9;
  color: var(--text-primary);

  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.7;
  }
}

.license-line {
  white-space: pre-wrap;
  word-wrap: break-word;
  min-height: 1em;

  &--rule {
    color: transparent;
    border-bottom: 1px solid var(--border-strong);
    height: 0;
    overflow: hidden;
    margin: var(--sp-4) 0;
    user-select: all;
  }
}

.license-text--rtl .license-line {
  text-align: right;
  direction: rtl;
}
</style>
