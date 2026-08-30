// Scroll-to-top button (converted from ScrollToTop.vue → TSX + ScrollToTop.scss).
import { onMounted, onUnmounted, ref, Transition } from "vue";
import { defineComponent } from "vue";
import "./ScrollToTop.scss";

export default defineComponent({
  name: "ScrollToTop",
  setup() {
    const visible = ref(false);

    function onScroll() {
      visible.value = window.scrollY > 400;
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
    onUnmounted(() => window.removeEventListener("scroll", onScroll));

    return () => (
      <Transition name="scrolltop">
        {visible.value ? (
          <button
            class="scrolltop"
            onClick={scrollToTop}
            aria-label="Return to top"
            title="Return to top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        ) : null}
      </Transition>
    )
  },
})
