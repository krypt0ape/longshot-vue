export default [
	{
		path: "/promotions/category",
		component: () => import("../layouts/PromotionListLayout.vue"),
		children: [
			{
				path: "all",
				component: () => import("../pages/PromotionListAll.vue"),
			},
			// {
			// 	path: ":category",
			// 	component: () => import("../pages/PromotionListCategory.vue"),
			// },
		],
	},
	{
		path: "/promotions/:slug",
		component: () => import("../pages/PromotionSingle.vue"),
	},
];
