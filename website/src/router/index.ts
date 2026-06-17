import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: { title: "SySL — Synthetic Source License" },
    },
    {
      path: "/license",
      redirect: "/",
    },
    {
      path: "/faq",
      name: "faq",
      component: () => import("@/views/FaqView.vue"),
      meta: { title: "FAQ — SySL" },
    },
    {
      path: "/compare",
      name: "compare",
      component: () => import("@/views/CompareView.vue"),
      meta: { title: "Comparison — SySL" },
    },
  ],
  scrollBehavior(_to, _from, saved) {
    return saved || { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = (to.meta.title as string) || "SySL";
});

export default router;
