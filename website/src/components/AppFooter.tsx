// Site footer (converted from AppFooter.vue → TSX + AppFooter.scss).
import { defineComponent } from "vue";
import "./AppFooter.scss";

const year = new Date().getFullYear();

export default defineComponent({
  name: "AppFooter",
  setup() {
    return () => (
      <footer class="footer" role="contentinfo">
        <div class="footer__inner">
          <span>&copy; {year} langyo · Celestia Island</span>
          <span>
            <a href="mailto:sysl.contact@celestia.world">sysl.contact@celestia.world</a>
          </span>
        </div>
      </footer>
    )
  },
})
