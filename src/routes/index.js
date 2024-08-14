import { createWebHistory, createRouter } from "vue-router";
import blogRoutes from "./blog.routes";
import promotionRoutes from "./promotion.routes";
import sportsBookRoutes from "./sportsbook.routes";
import casinoRoutes from "./casino.routes";
import affiliateRoutes from "./affiliate.routes";
import policyRoutes from "./policy.routes";

const routes = [
	{ path: "/", component: () => import("../pages/Home.vue") },
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
	routes,
});

export default router;
