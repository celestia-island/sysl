<script setup lang="ts">
import { ref, computed } from "vue";

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
  { code: "en", label: "English", binding: true, text: enText },
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

function selectLang(code: string) {
  activeCode.value = code;
  showDropdown.value = false;
}
</script>

<template>
  <div class="license-page">
    <div class="license-page__header">
      <div class="page-wrapper">
        <h1 class="section-title">License Text</h1>
        <p class="section-subtitle">Synthetic Source License, Version 1.0</p>

        <div class="lang-switcher">
          <button class="lang-switcher__trigger" @click="showDropdown = !showDropdown">
            <span>{{ activeLang.label }}</span>
            <span v-if="activeLang.binding" class="lang-switcher__binding">binding</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          <Transition name="fade">
            <div v-if="showDropdown" class="lang-switcher__dropdown">
              <button
                v-for="lang in languages"
                :key="lang.code"
                class="lang-switcher__option"
                :class="{ 'lang-switcher__option--active': lang.code === activeCode }"
                @click="selectLang(lang.code)"
              >
                <span>{{ lang.label }}</span>
                <span v-if="lang.binding" class="lang-switcher__binding">binding</span>
              </button>
            </div>
          </Transition>
        </div>

        <p v-if="!activeLang.binding" class="lang-switcher__notice">
          This is an informational translation. The English version is legally binding.
        </p>
      </div>
    </div>

    <div class="page-wrapper">
      <div
        class="license-text"
        :class="{ 'license-text--rtl': activeLang.rtl }"
        :dir="activeLang.rtl ? 'rtl' : 'ltr'"
      >
        <pre>{{ activeLang.text }}</pre>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.license-page {
  padding-bottom: var(--sp-16);
}

.license-page__header {
  padding: var(--sp-16) 0 var(--sp-8);
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-color);
}

// --- Language switcher ---
.lang-switcher {
  position: relative;
  display: inline-block;
  margin-top: var(--sp-4);
}

.lang-switcher__trigger {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
  padding: var(--sp-2) var(--sp-4);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  font-size: var(--text-sm);
  color: var(--text-primary);
  background: var(--bg-tertiary);
  transition: all var(--t-fast);

  &:hover {
    border-color: var(--brand-violet);
  }
}

.lang-switcher__binding {
  font-size: var(--text-xs);
  padding: 1px var(--sp-2);
  border-radius: var(--radius-full);
  background: var(--accent-subtle);
  color: var(--brand-violet);
  font-weight: 500;
}

.lang-switcher__dropdown {
  position: absolute;
  top: calc(100% + var(--sp-1));
  left: 0;
  min-width: 200px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  box-shadow: var(--shadow-lg);
  padding: var(--sp-1);
  z-index: 50;
}

.lang-switcher__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-2);
  width: 100%;
  padding: var(--sp-2) var(--sp-3);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all var(--t-fast);

  &:hover {
    background: var(--bg-tertiary);
    color: var(--text-primary);
  }

  &--active {
    color: var(--brand-violet);
    font-weight: 600;
  }
}

.lang-switcher__notice {
  margin-top: var(--sp-4);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-style: italic;
}

// --- License text ---
.license-text {
  margin-top: var(--sp-8);
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: var(--sp-8) var(--sp-6);
  overflow: hidden;

  pre {
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    line-height: 1.8;
    color: var(--text-secondary);
    white-space: pre-wrap;
    word-wrap: break-word;
    tab-size: 4;
  }

  &--rtl pre {
    text-align: right;
    direction: rtl;
  }
}

@media (max-width: 768px) {
  .license-text {
    padding: var(--sp-4) var(--sp-3);

    pre {
      font-size: 0.7rem;
    }
  }
}
</style>
