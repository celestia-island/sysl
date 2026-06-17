<script setup lang="ts">
import { ref, computed } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { renderMarkdown } from "@/composables/useMarkdown";

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

const active = ref("en");
const activeLang = computed(() => langs.find((l) => l.code === active.value)!);
const html = computed(() => renderMarkdown(activeLang.value.md));
</script>

<template>
  <div class="page-topbar">
    <LanguageSwitcher :languages="langs" v-model="active" />
  </div>
  <div
    class="page-wrapper prose"
    role="article"
    :dir="activeLang.rtl ? 'rtl' : 'ltr'"
    :lang="activeLang.code"
    v-html="html"
  ></div>
</template>

<style scoped>
.page-topbar {
  max-width: var(--content-max);
  margin: 0 auto;
  padding: var(--sp-3) var(--sp-6);
  display: flex;
  justify-content: flex-end;
}
</style>
