// Site header (converted from AppHeader.vue → TSX + AppHeader.scss).
import { computed, defineComponent } from "vue";
import { RouterLink } from "vue-router";
import ThemeToggle from "@/components/ThemeToggle";
import { useUI } from "@/composables/useLangStore";
import "./AppHeader.scss";

export default defineComponent({
  name: "AppHeader",
  setup() {
    const { t } = useUI();

    const navLinks = computed(() => [
      { to: "/", label: t("license") },
      { to: "/faq", label: t("faq") },
      { to: "/compare", label: t("compare") },
    ]);

    return () => (
      <header class="header" role="banner">
        <div class="header__inner">
          <RouterLink to="/" class="header__logo" aria-label="SySL home">SySL</RouterLink>

          <nav class="header__nav" aria-label="Site navigation">
            {navLinks.value.map((link) => (
              <RouterLink
                key={link.to}
                to={link.to}
                class="header__link"
                active-class="header__link--active"
              >
                {link.label}
              </RouterLink>
            ))}
          </nav>

          <div class="header__actions">
            <a
              href="https://github.com/celestia-island/sysl"
              class="header__link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="SySL on GitHub"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>
    )
  },
})
