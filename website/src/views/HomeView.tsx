// License home view (converted from HomeView.vue → TSX + HomeView.scss).
import { computed, onMounted, onUnmounted, ref } from "vue";
import { defineComponent } from "vue";
import { useLangStore, useUI } from "@/composables/useLangStore";

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
import "./HomeView.scss";

interface LangEntry {
  code: string;
  label: string;
  text: string;
  rtl?: boolean;
}

const languages: LangEntry[] = [
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

interface RenderLine {
  text: string;
  type: "normal" | "rule" | "center" | "blank";
}

interface RenderBlock {
  /** Lines belonging to this block */
  lines: RenderLine[];
  /** Block type: "rule", "center", "blank", or "para" (consecutive normal lines) */
  kind: "rule" | "center" | "blank" | "para";
  /** Text with \n between lines (for para blocks) */
  text?: string;
}

export default defineComponent({
  name: "HomeView",
  setup() {
    const langStore = useLangStore();
    const { t } = useUI();

    const activeCode = ref(langStore.state.code);
    const activeLang = computed(() => languages.find((l) => l.code === activeCode.value)!);
    const showDropdown = ref(false);
    const switcherRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLButtonElement | null>(null);
    const copied = ref(false);

    function selectLang(code: string) {
      activeCode.value = code;
      langStore.setLang(code);
      showDropdown.value = false;
      triggerRef.value?.focus();
    }

    async function copyText() {
      try {
        await navigator.clipboard.writeText(activeLang.value.text);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000);
      } catch {
        // Fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = activeLang.value.text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
        copied.value = true;
        setTimeout(() => (copied.value = false), 2000);
      }
    }

    function printText() {
      window.print();
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

    const renderBlocks = computed<RenderBlock[]>(() => {
      const raw = activeLang.value.text.split("\n");

      // Find first section-rule to treat everything before it as preamble (centered)
      const firstRuleIdx = raw.findIndex((l) => {
        const t = l.trim();
        return t.length >= 10 && /^[-=─━]+$/.test(t);
      });

      const lines = raw.map((line, idx): RenderLine => {
        if (line.length === 0) return { text: "", type: "blank" as const };
        const t = line.trim();
        if (t.length >= 10 && /^[-=─━]+$/.test(t)) return { text: t, type: "rule" as const };
        const lead = line.match(/^(\s*)/)?.[1].length ?? 0;
        if (lead >= 15) return { text: t, type: "center" as const };
        // Everything before the first rule (copyright/permission lines) is centered
        if (firstRuleIdx >= 0 && idx <= firstRuleIdx) return { text: t, type: "center" as const };
        return { text: line, type: "normal" as const };
      });

      const blocks: RenderBlock[] = [];
      let i = 0;
      while (i < lines.length) {
        const line = lines[i];

        if (line.type === "blank") {
          blocks.push({ lines: [line], kind: "blank" });
          i++;
          continue;
        }
        if (line.type === "rule") {
          blocks.push({ lines: [line], kind: "rule" });
          i++;
          continue;
        }
        if (line.type === "center") {
          // Collect consecutive centered lines
          const group: RenderLine[] = [];
          while (i < lines.length && lines[i].type === "center") {
            group.push(lines[i]);
            i++;
          }
          blocks.push({ lines: group, kind: "center" });
          continue;
        }
        // normal: collect consecutive normal lines into one paragraph
        const group: RenderLine[] = [];
        while (i < lines.length && lines[i].type === "normal") {
          group.push(lines[i]);
          i++;
        }
        blocks.push({
          lines: group,
          kind: "para",
          text: group.map((l) => l.text).join("\n"),
        });
      }

      return blocks;
    });

    return () => (
      <div class="license-page">
        <div class="license-meta no-print">
          <span class="license-meta__version">Version 1.0</span>
          <div class="license-meta__actions">
            <button
              class="meta-btn"
              onClick={copyText}
              aria-label={copied.value ? t('copied') : t('copy')}
              title={copied.value ? t('copied') : t('copy')}
            >
              {copied.value ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
                </svg>
              )}
              <span class="meta-btn__label">{copied.value ? t("copied") : t("copy")}</span>
            </button>

            <button
              class="meta-btn"
              onClick={printText}
              aria-label={t('print')}
              title={t('print')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <polyline points="6 9 6 2 18 2 18 9"/>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              <span class="meta-btn__label">{t("print")}</span>
            </button>

            <div ref={switcherRef} class="lang-switcher">
              <button
                ref={triggerRef}
                class="lang-switcher__trigger"
                onClick={() => (showDropdown.value = !showDropdown.value)}
                aria-expanded={showDropdown.value}
                aria-haspopup="listbox"
                aria-label={t('selectLang')}
              >
                <span>{activeLang.value.label}</span>
                <svg class="lang-switcher__arrow" width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              {showDropdown.value ? (
                <ul class="lang-switcher__dropdown" role="listbox">
                  {languages.map((lang) => (
                    <li
                      key={lang.code}
                      role="option"
                      aria-selected={lang.code === activeCode.value}
                    >
                      <button
                        class={`lang-switcher__option${lang.code === activeCode.value ? " lang-switcher__option--active" : ""}`}
                        onClick={() => selectLang(lang.code)}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </div>

        {activeLang.value.code !== "en" ? (
          <p class="license-notice no-print" role="note">
            {t("translationNotice")}
          </p>
        ) : null}

        <div class="license-center print-area">
          <div
            class={`license-text${activeLang.value.rtl ? " license-text--rtl" : ""}`}
            dir={activeLang.value.rtl ? "rtl" : "ltr"}
            lang={activeLang.value.code}
          >
            {renderBlocks.value.map((block, bi) => (
              <div key={bi}>
                {block.kind === "blank" ? (
                  <div class="lb-blank" aria-hidden="true">&nbsp;</div>
                ) : block.kind === "rule" ? (
                  <div class="lb-rule" aria-hidden="true">{block.lines[0].text}</div>
                ) : block.kind === "center" ? (
                  <div class="lb-center" aria-hidden="false">
                    {block.lines.map((cl, ci) => <div key={ci}>{cl.text}</div>)}
                  </div>
                ) : (
                  <p class="lb-para">{block.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
})
