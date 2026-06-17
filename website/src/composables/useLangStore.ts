import { reactive } from "vue";

const LANG_KEY = "sysl-lang";

const state = reactive({
  code: "en" as string,
});

// Restore persisted language
if (typeof localStorage !== "undefined") {
  const stored = localStorage.getItem(LANG_KEY);
  if (stored) state.code = stored;
}

export function useLangStore() {
  function setLang(code: string) {
    state.code = code;
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch {
      /* localStorage unavailable */
    }
  }

  return { state, setLang };
}

// ── Header nav label translations ───────────────────────────────────

const navLabels: Record<string, { license: string; faq: string; compare: string }> = {
  en: { license: "License", faq: "FAQ", compare: "Compare" },
  zhs: { license: "协议", faq: "常见问题", compare: "对比" },
  zht: { license: "協議", faq: "常見問題", compare: "對比" },
  ja: { license: "ライセンス", faq: "よくある質問", compare: "比較" },
  ko: { license: "라이선스", faq: "FAQ", compare: "비교" },
  fr: { license: "Licence", faq: "FAQ", compare: "Comparer" },
  es: { license: "Licencia", faq: "FAQ", compare: "Comparar" },
  ru: { license: "Лицензия", faq: "FAQ", compare: "Сравнение" },
  de: { license: "Lizenz", faq: "FAQ", compare: "Vergleich" },
  pt: { license: "Licença", faq: "FAQ", compare: "Comparar" },
  ar: { license: "الترخيص", faq: "الأسئلة", compare: "مقارنة" },
};

export function useNavLabels() {
  const { state } = useLangStore();

  return {
    license: () => navLabels[state.code]?.license ?? "License",
    faq: () => navLabels[state.code]?.faq ?? "FAQ",
    compare: () => navLabels[state.code]?.compare ?? "Compare",
  };
}
