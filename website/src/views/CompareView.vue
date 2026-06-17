<script setup lang="ts">
import { ref, computed } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { renderMarkdown } from "@/composables/useMarkdown";
import { useLangStore } from "@/composables/useLangStore";

import en from "../../../COMPARISON.md?raw";
import zhs from "../../../i18n/zhs/COMPARISON.md?raw";
import zht from "../../../i18n/zht/COMPARISON.md?raw";
import ja from "../../../i18n/ja/COMPARISON.md?raw";
import ko from "../../../i18n/ko/COMPARISON.md?raw";
import fr from "../../../i18n/fr/COMPARISON.md?raw";
import es from "../../../i18n/es/COMPARISON.md?raw";
import ru from "../../../i18n/ru/COMPARISON.md?raw";
import de from "../../../i18n/de/COMPARISON.md?raw";
import pt from "../../../i18n/pt/COMPARISON.md?raw";
import ar from "../../../i18n/ar/COMPARISON.md?raw";

const langs = [
  { code: "en", label: "English", md: en },
  { code: "zhs", label: "简体中文", md: zhs },
  { code: "zht", label: "繁體中文", md: zht },
  { code: "ja", label: "日本語", md: ja },
  { code: "ko", label: "한국어", md: ko },
  { code: "fr", label: "Français", md: fr },
  { code: "es", label: "Español", md: es },
  { code: "ru", label: "Русский", md: ru },
  { code: "de", label: "Deutsch", md: de },
  { code: "pt", label: "Português", md: pt },
  { code: "ar", label: "العربية", md: ar, rtl: true },
];

const active = ref(useLangStore().state.code);
const activeLang = computed(() => langs.find((l) => l.code === active.value)!);

// Render markdown and auto-wrap each <table> in a scroll container
const html = computed(() =>
  renderMarkdown(activeLang.value.md)
    .replace(/<table/g, '<div class="table-scroll"><table')
    .replace(/<\/table>/g, "</table></div>")
);
</script>

<template>
  <div class="compare-topbar no-print">
    <LanguageSwitcher :languages="langs" v-model="active" />
  </div>
  <div class="compare-center">
    <div
      class="prose compare-prose"
      role="article"
      :dir="activeLang.rtl ? 'rtl' : 'ltr'"
      :lang="activeLang.code"
      v-html="html"
    ></div>
  </div>
</template>

<style scoped>
.compare-topbar {
  max-width: 1080px;
  margin: 0 auto;
  padding: var(--sp-3) var(--sp-6);
  display: flex;
  justify-content: flex-end;
}

.compare-center {
  display: flex;
  justify-content: center;
  padding: 0 var(--sp-6) var(--sp-16);
}

.compare-prose {
  flex: 0 1 auto;
  max-width: 1080px;
  min-width: 0;
}
</style>

<style scoped lang="scss">
// --- Table scroll wrapper: sticky header row + sticky first column ---
:deep(.table-scroll) {
  overflow: auto;
  max-height: 75vh;
  margin-bottom: var(--sp-6);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
}

:deep(.table-scroll table) {
  display: table;
  width: max-content;
  max-width: none;
  border-collapse: separate;
  border-spacing: 0;
  font-size: var(--text-sm);
  margin: 0;
}

:deep(.table-scroll th) {
  position: sticky;
  top: 0;
  z-index: 2;
  font-weight: 700;
  padding: var(--sp-2) var(--sp-3);
  background: var(--bg-secondary);
  border-bottom: 1px solid var(--border-strong);
  white-space: nowrap;
}

:deep(.table-scroll td) {
  padding: var(--sp-2) var(--sp-3);
  border-bottom: 1px solid var(--border-color);
  color: var(--text-secondary);
}

// Sticky first column (row labels)
:deep(.table-scroll td:first-child) {
  position: sticky;
  left: 0;
  z-index: 1;
  background: var(--bg-secondary);
  white-space: nowrap;
  font-weight: 600;
  color: var(--text-primary);
}

// Corner cell (first header + first column)
:deep(.table-scroll th:first-child) {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 3;
  background: var(--bg-secondary);
}

// Hover highlight
:deep(.table-scroll tbody tr:hover td) {
  background: var(--table-stripe);
}

:deep(.table-scroll tbody tr:hover td:first-child) {
  background: var(--bg-tertiary);
}
</style>
