export default [
	{
		path: "/promotions/category/:slug",
		component: () => import("../pages/PromotionList.vue"),
	},
	{
		path: "/promotions/:slug",
		component: () => import("../pages/PromotionSingle.vue"),
	},
]