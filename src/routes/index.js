import { createWebHistory, createRouter } from "vue-router";
import blogRoutes from "./blog.routes";
import promotionRoutes from "./promotion.routes";
import sportsBookRoutes from "./sportsbook.routes";
import casinoRoutes from "./casino.routes";

const routes = [
	{ path: "/", component: () => import("../pages/Home.vue") },
	{
		path: "/affiliate/overview",
		component: () => import("../pages/AffiliateOverview.vue"),
	},
	// {
	// 	path: "/affiliate/retention",
	// 	component: () => import("../pages/AffiliateRetention.vue"),
	// },
	// {
	// 	path: "/polcies/:slug",
	// 	component: () => import("../pages/PolicySingle.vue"),
	// },
	// { path: "/signup", component: () => import("../pages/Signup.vue") },
].concat(blogRoutes, casinoRoutes, sportsBookRoutes);

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
