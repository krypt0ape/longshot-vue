import { createWebHistory, createRouter } from "vue-router";
import blogRoutes from "./blog.routes";
import promotionRoutes from "./promotion.routes";
import sportsBookRoutes from "./sportsbook.routes";
import casinoRoutes from "./casino.routes";
import affiliateRoutes from "./affiliate.routes";

const routes = [
	{ path: "/", component: () => import("../pages/Home.vue") },
	// {
	// 	path: "/polcies/:slug",
	// 	component: () => import("../pages/PolicySingle.vue"),
	// },
    { path: "/complete-signup", component: () => import("../pages/CompleteSignup.vue") },
].concat(blogRoutes, casinoRoutes, sportsBookRoutes, affiliateRoutes);

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
