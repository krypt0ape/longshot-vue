export default [
	{
		path: "/affiliate",
		component: () => import("../layouts/AffiliateLayout.vue"),
		children: [
			{
				path: "overview",
				component: () => import("../pages/AffiliateOverview.vue"),
			}
		]
	}
]