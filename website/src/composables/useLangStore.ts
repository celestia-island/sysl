import { reactive } from "vue";

const LANG_KEY = "sysl-lang";

// ── Browser language detection ──────────────────────────────────────

const supported = ["en", "zhs", "zht", "ja", "ko", "fr", "es", "ru", "de", "pt", "ar"];

function detectBrowserLang(): string | null {
  if (typeof navigator === "undefined") return null;
  const raw = (navigator.languages?.[0] || navigator.language || "").toLowerCase();
  // Exact match
  if (supported.includes(raw)) return raw;
  // zh-Hans / zh-CN / zh-SG -> zhs
  if (raw.startsWith("zh")) {
    if (raw.includes("hans") || raw.includes("cn") || raw.includes("sg")) return "zhs";
    if (raw.includes("hant") || raw.includes("tw") || raw.includes("hk") || raw.includes("mo")) return "zht";
    return "zhs"; // default simplified
  }
  // Language-only prefix match (ja-JP -> ja, ko-KR -> ko, etc.)
  const prefix = raw.split("-")[0];
  if (supported.includes(prefix)) return prefix;
  return null;
}

function initialLang(): string {
  // 1. Restore from localStorage
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem(LANG_KEY);
    if (stored && supported.includes(stored)) return stored;
  }
  // 2. Detect browser language
  const browser = detectBrowserLang();
  if (browser) return browser;
  // 3. Fallback to English
  return "en";
}

const state = reactive({
  code: initialLang(),
});

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

// ── UI string translations ──────────────────────────────────────────

export interface UIStrings {
  skipToContent: string;
  copy: string;
  copied: string;
  print: string;
  selectLang: string;
  translationNotice: string;
  license: string;
  faq: string;
  compare: string;
}

const ui: Record<string, UIStrings> = {
  en: {
    skipToContent: "Skip to content",
    copy: "Copy",
    copied: "Copied",
    print: "Print",
    selectLang: "Select language",
    translationNotice: "Informational translation. The English version is legally binding.",
    license: "License",
    faq: "FAQ",
    compare: "Compare",
  },
  zhs: {
    skipToContent: "跳至内容",
    copy: "复制",
    copied: "已复制",
    print: "打印",
    selectLang: "选择语言",
    translationNotice: "本翻译仅供参考。英文版本具有法律效力。",
    license: "协议",
    faq: "常见问题",
    compare: "对比",
  },
  zht: {
    skipToContent: "跳至內容",
    copy: "複製",
    copied: "已複製",
    print: "列印",
    selectLang: "選擇語言",
    translationNotice: "本翻譯僅供參考。英文版本具有法律效力。",
    license: "協議",
    faq: "常見問題",
    compare: "對比",
  },
  ja: {
    skipToContent: "コンテンツへスキップ",
    copy: "コピー",
    copied: "コピー済み",
    print: "印刷",
    selectLang: "言語を選択",
    translationNotice: "本翻訳は参考情報です。法的拘束力を持つのは英語版です。",
    license: "ライセンス",
    faq: "よくある質問",
    compare: "比較",
  },
  ko: {
    skipToContent: "콘텐츠로 건너뛰기",
    copy: "복사",
    copied: "복사됨",
    print: "인쇄",
    selectLang: "언어 선택",
    translationNotice: "본 번역은 정보 제공용입니다. 법적 구속력이 있는 것은 영어 버전입니다.",
    license: "라이선스",
    faq: "FAQ",
    compare: "비교",
  },
  fr: {
    skipToContent: "Aller au contenu",
    copy: "Copier",
    copied: "Copié",
    print: "Imprimer",
    selectLang: "Choisir la langue",
    translationNotice: "Traduction informative. La version anglaise fait foi juridiquement.",
    license: "Licence",
    faq: "FAQ",
    compare: "Comparer",
  },
  es: {
    skipToContent: "Saltar al contenido",
    copy: "Copiar",
    copied: "Copiado",
    print: "Imprimir",
    selectLang: "Seleccionar idioma",
    translationNotice: "Traducción informativa. La versión en inglés es jurídicamente vinculante.",
    license: "Licencia",
    faq: "FAQ",
    compare: "Comparar",
  },
  ru: {
    skipToContent: "Перейти к содержимому",
    copy: "Копировать",
    copied: "Скопировано",
    print: "Печать",
    selectLang: "Выбрать язык",
    translationNotice: "Информационный перевод. Английская версия имеет юридическую силу.",
    license: "Лицензия",
    faq: "FAQ",
    compare: "Сравнение",
  },
  de: {
    skipToContent: "Zum Inhalt springen",
    copy: "Kopieren",
    copied: "Kopiert",
    print: "Drucken",
    selectLang: "Sprache wählen",
    translationNotice: "Informative Übersetzung. Die englische Fassung ist rechtlich bindend.",
    license: "Lizenz",
    faq: "FAQ",
    compare: "Vergleich",
  },
  pt: {
    skipToContent: "Pular para o conteúdo",
    copy: "Copiar",
    copied: "Copiado",
    print: "Imprimir",
    selectLang: "Selecionar idioma",
    translationNotice: "Tradução informativa. A versão em inglês é juridicamente vinculativa.",
    license: "Licença",
    faq: "FAQ",
    compare: "Comparar",
  },
  ar: {
    skipToContent: "تخطَّ إلى المحتوى",
    copy: "نسخ",
    copied: "تم النسخ",
    print: "طباعة",
    selectLang: "اختر اللغة",
    translationNotice: "ترجمة إعلامية. النسخة الإنجليزية هي الملزمة قانونًا.",
    license: "الترخيص",
    faq: "الأسئلة",
    compare: "مقارنة",
  },
};

export function useUI() {
  const { state } = useLangStore();
  const t = (key: keyof UIStrings): string =>
    ui[state.code]?.[key] ?? ui["en"][key];
  return { t };
}
