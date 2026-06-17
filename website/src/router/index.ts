import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
      meta: { title: "SySL — Synthetic Source License" },
    },
    {
      path: "/license",
      name: "license",
      component: () => import("@/views/LicenseView.vue"),
      meta: { title: "License Text — SySL" },
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
    {
      path: "/adopt",
      name: "adopt",
      component: () => import("@/views/AdoptView.vue"),
      meta: { title: "Adopters — SySL" },
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
