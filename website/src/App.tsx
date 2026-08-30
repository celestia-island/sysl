// Root app shell (converted from App.vue → TSX + App.scss).
import { defineComponent, Transition } from "vue";
import { RouterView } from "vue-router";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import ScrollToTop from "@/components/ScrollToTop";
import { useUI } from "@/composables/useLangStore";
import "./App.scss";

export default defineComponent({
  name: "SyslApp",
  setup() {
    const { t } = useUI();

    return () => (
      <>
        <a href="#main-content" class="skip-link no-print">{t("skipToContent")}</a>
        <AppHeader class="no-print" />
        <main id="main-content">
          <RouterView v-slots={{
            default: ({ Component }: { Component: unknown }) => (
              <Transition name="fade" mode="out-in">
                <component is={Component} />
              </Transition>
            ),
          }} />
        </main>
        <AppFooter class="no-print" />
        <ScrollToTop class="no-print" />
      </>
    )
  },
})
