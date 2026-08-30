import { createApp } from "vue";
import App from "./App";
import router from "./router";
import { applyViewportPolicy } from "./mobileViewport";
import "./styles/global.scss";

// Mobile UX contract (hikari #325 sibling): normalize the viewport meta
// before first paint so phones never refuse pinch zoom. The tap-highlight
// reset ships via styles/global.scss.
applyViewportPolicy({ allowZoomOut: true });

createApp(App).use(router).mount("#app");
