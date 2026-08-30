// FAQ view (converted from FaqView.vue → TSX + FaqView.scss).
import { computed, ref } from "vue";
import { defineComponent } from "vue";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { renderMarkdown } from "@/composables/useMarkdown";
import { useLangStore } from "@/composables/useLangStore";

import en from "../../../FAQ.md?raw";
import zhs from "../../../i18n/zhs/FAQ.md?raw";
import zht from "../../../i18n/zht/FAQ.md?raw";
import ja from "../../../i18n/ja/FAQ.md?raw";
import ko from "../../../i18n/ko/FAQ.md?raw";
import fr from "../../../i18n/fr/FAQ.md?raw";
import es from "../../../i18n/es/FAQ.md?raw";
import ru from "../../../i18n/ru/FAQ.md?raw";
import de from "../../../i18n/de/FAQ.md?raw";
import pt from "../../../i18n/pt/FAQ.md?raw";
import ar from "../../../i18n/ar/FAQ.md?raw";
import "./FaqView.scss";

interface FaqLang {
  code: string;
  label: string;
  md: string;
  rtl?: boolean;
}

const langs: FaqLang[] = [
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
  name: "FaqView",
  setup() {
    const active = ref(useLangStore().state.code);
    const activeLang = computed(() => langs.find((l) => l.code === active.value)!);
    const html = computed(() => renderMarkdown(activeLang.value.md));

    return () => (
      <>
        <div class="page-topbar">
          <LanguageSwitcher languages={langs} modelValue={active.value} onUpdate:modelValue={(v: string) => (active.value = v)} />
        </div>
        <div
          class="page-wrapper prose"
          role="article"
          dir={activeLang.value.rtl ? "rtl" : "ltr"}
          lang={activeLang.value.code}
          innerHTML={html.value}
        ></div>
      </>
    )
  },
})
