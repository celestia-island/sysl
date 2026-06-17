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
const copied = ref(false);

function selectLang(code: string) {
  activeCode.value = code;
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
</script>

<template>
  <div class="license-page">
    <div class="license-meta no-print">
      <span class="license-meta__version">Version 1.0</span>
      <div class="license-meta__actions">
        <button
          class="meta-btn"
          @click="copyText"
          :aria-label="copied ? 'Copied' : 'Copy license text'"
          :title="copied ? 'Copied!' : 'Copy license text'"
        >
          <svg v-if="copied" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <svg v-else width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          <span class="meta-btn__label">{{ copied ? "Copied" : "Copy" }}</span>
        </button>

        <button
          class="meta-btn"
          @click="printText"
          aria-label="Print license text"
          title="Print license text"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 9 6 2 18 2 18 9"/>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
            <rect x="6" y="14" width="12" height="8"/>
          </svg>
          <span class="meta-btn__label">Print</span>
        </button>

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
            <svg class="lang-switcher__arrow" width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <ul v-if="showDropdown" class="lang-switcher__dropdown" role="listbox">
            <li
              v-for="lang in languages"
              :key="lang.code"
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
    </div>

    <p v-if="activeLang.code !== 'en'" class="license-notice no-print" role="note">
      Informational translation. The English version is legally binding.
    </p>

    <div class="license-center print-area">
      <div
        class="license-text"
        :class="{ 'license-text--rtl': activeLang.rtl }"
        :dir="activeLang.rtl ? 'rtl' : 'ltr'"
        :lang="activeLang.code"
      >
        <template v-for="(block, bi) in renderBlocks" :key="bi">
          <div v-if="block.kind === 'blank'" class="lb-blank" aria-hidden="true">&nbsp;</div>
          <div v-else-if="block.kind === 'rule'" class="lb-rule" aria-hidden="true">{{ block.lines[0].text }}</div>
          <div v-else-if="block.kind === 'center'" class="lb-center" aria-hidden="false">
            <div v-for="(cl, ci) in block.lines" :key="ci">{{ cl.text }}</div>
          </div>
          <p v-else class="lb-para">{{ block.text }}</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.license-page {
  padding: 0 var(--sp-6) var(--sp-16);
}

// --- Meta bar ---
.license-meta {
  max-width: var(--content-max);
  margin: 0 auto var(--sp-4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-3);
  padding: var(--sp-3) 0;
  border-bottom: 1px solid var(--border-color);
}

.license-meta__version {
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  white-space: nowrap;
}

.license-meta__actions {
  display: flex;
  align-items: center;
  gap: var(--sp-2);
}

// --- Meta buttons (copy / print) ---
.meta-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--sp-1);
  padding: var(--sp-1) var(--sp-2);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius);
  font-size: var(--text-sm);
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-family: inherit;
  transition: color var(--t-fast), border-color var(--t-fast);

  &:hover {
    color: var(--text-primary);
    border-color: var(--text-tertiary);
  }
  &:focus-visible {
    outline: 2px solid var(--link-color);
    outline-offset: 2px;
  }
}

.meta-btn__label {
  @media (max-width: 640px) {
    display: none;
  }
}

.license-notice {
  max-width: var(--content-max);
  margin: 0 auto var(--sp-6);
  font-size: var(--text-sm);
  color: var(--text-tertiary);
  font-style: italic;
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

// --- License text ---
.license-center {
  display: flex;
  justify-content: center;
}

.license-text {
  max-width: var(--content-max);
  width: 100%;
  font-size: var(--text-sm);
  line-height: 1.9;
  color: var(--text-primary);
}

// --- Paragraph blocks ---
.lb-para {
  margin: 0 0 var(--sp-4);
  text-indent: 2em;

  &:last-child { margin-bottom: 0; }
}

// Blank line spacing (structural, collapsed to 0 – paragraphs own their margins)
.lb-blank {
  height: 0;
}

// Section rule (separator line)
.lb-rule {
  color: transparent;
  border-bottom: 1px solid var(--border-strong);
  height: 0;
  overflow: hidden;
  margin: var(--sp-5) 0;
  user-select: all;
}

// Centered title block
.lb-center {
  text-align: center;
  margin: var(--sp-6) 0 var(--sp-2);
  font-size: var(--text-base);
  font-weight: 600;
}

.license-text--rtl {
  .lb-para {
    text-align: right;
    direction: rtl;
  }
  .lb-center {
    text-align: center;
    direction: rtl;
  }
}

// --- Responsive ---
@media (max-width: 768px) {
  .license-text {
    font-size: 0.8rem;
    line-height: 1.7;
  }
}

@media (max-width: 640px) {
  .license-meta {
    flex-wrap: wrap;
    gap: var(--sp-2);
  }

  .license-meta__actions {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
}

// --- Print: only show license text ---
@media print {
  .license-page {
    padding: 0;
  }

  .license-center {
    display: block;
  }

  .license-text {
    font-family: serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #000;
  }

  .lb-rule {
    color: transparent;
    border-bottom: 1px solid #000;
  }
}
</style>
