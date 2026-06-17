import { ref, watch } from "vue";

type Theme = "light" | "dark";

const STORAGE_KEY = "sysl-theme";
const theme = ref<Theme>(
  (localStorage.getItem(STORAGE_KEY) as Theme) ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
);

function applyTheme(t: Theme) {
  document.documentElement.setAttribute("data-theme", t);
}

applyTheme(theme.value);

watch(theme, (t) => {
  localStorage.setItem(STORAGE_KEY, t);
  applyTheme(t);
});

export function useTheme() {
  function toggle() {
    theme.value = theme.value === "dark" ? "light" : "dark";
  }

  return { theme, toggle };
}
