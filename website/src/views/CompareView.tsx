// Comparison view (converted from CompareView.vue → TSX + CompareView.scss).
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher";
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
import "./CompareView.scss";

interface CompareLang {
  code: string;
  label: string;
  md: string;
  rtl?: boolean;
}

const langs: CompareLang[] = [
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

export default defineComponent({
  name: "CompareView",
  setup() {
    const active = ref(useLangStore().state.code);
    const activeLang = computed(() => langs.find((l) => l.code === active.value)!);

    // Render markdown and auto-wrap each <table> in a scroll container
    const html = computed(() =>
      renderMarkdown(activeLang.value.md)
        .replace(/<table/g, '<div class="table-scroll"><table')
        .replace(/<\/table>/g, "</table></div>")
    );

    return () => (
      <>
        <div class="compare-topbar no-print">
          <LanguageSwitcher languages={langs} modelValue={active.value} onUpdate:modelValue={(v: string) => (active.value = v)} />
        </div>
        <div class="compare-center">
          <div
            class="prose compare-prose"
            role="article"
            dir={activeLang.value.rtl ? "rtl" : "ltr"}
            lang={activeLang.value.code}
            innerHTML={html.value}
          ></div>
        </div>
      </>
    )
  },
})
