import { createWebHistory, createRouter } from "vue-router";
import blogRoutes from "./blog.routes";
import promotionRoutes from "./promotion.routes";
import sportsBookRoutes from "./sportsbook.routes";
import casinoRoutes from "./casino.routes";
import affiliateRoutes from "./affiliate.routes";
import policyRoutes from "./policy.routes";

const children = [
  { path: "", component: () => import("../pages/Home.vue") },
].concat(
  blogRoutes,
  casinoRoutes,
  sportsBookRoutes,
  affiliateRoutes,
  promotionRoutes,
  policyRoutes
);

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/:locale",
      children,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.params.locale) {
    console.log(`redirect to ${from.params.locale || "en"} locale`);
    next(`/${from.params.locale || "en"}${to.fullPath}`);
    if (to.fullPath.startsWith("/en/en/")) {
      throw new Error("Vue-Router: redirect loop error");
    }
  }
  next();
});

export default router;
