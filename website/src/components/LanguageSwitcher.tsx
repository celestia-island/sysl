// Language switcher (converted from LanguageSwitcher.vue → TSX + LanguageSwitcher.scss).
import { onMounted, onUnmounted, ref } from "vue";
import { defineComponent } from "vue";
import { useLangStore, useUI } from "@/composables/useLangStore";
import "./LanguageSwitcher.scss";

interface Lang {
  code: string;
  label: string;
}

export default defineComponent({
  name: "LanguageSwitcher",
  props: {
    languages: { type: Array as () => Lang[], required: true },
    modelValue: { type: String, required: true },
  },
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
  },
  setup(props, { emit }) {
    const langStore = useLangStore();
    const { t } = useUI();

    const showDropdown = ref(false);
    const switcherRef = ref<HTMLElement | null>(null);
    const triggerRef = ref<HTMLButtonElement | null>(null);

    function select(code: string) {
      emit("update:modelValue", code);
      langStore.setLang(code);
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

    const activeLabel = () =>
      props.languages.find((l) => l.code === props.modelValue)?.label ?? "";

    return () => (
      <div ref={switcherRef} class="lang-switcher">
        <button
          ref={triggerRef}
          class="lang-switcher__trigger"
          onClick={() => (showDropdown.value = !showDropdown.value)}
          aria-expanded={showDropdown.value}
          aria-haspopup="listbox"
          aria-label={t('selectLang')}
        >
          <span>{activeLabel()}</span>
          <svg class="lang-switcher__arrow" width="10" height="10" viewBox="0 0 12 12" aria-hidden="true">
            <path d="M2 4l4 4 4-4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        {showDropdown.value ? (
          <ul class="lang-switcher__dropdown" role="listbox">
            {props.languages.map((lang) => (
              <li
                key={lang.code}
                role="option"
                aria-selected={lang.code === props.modelValue}
              >
                <button
                  class={`lang-switcher__option${lang.code === props.modelValue ? " lang-switcher__option--active" : ""}`}
                  onClick={() => select(lang.code)}
                >
                  {lang.label}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    )
  },
})
