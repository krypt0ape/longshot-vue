export default [
	{
		path: "/blog/category",
		component: () => import("../layouts/BlogListLayout.vue"),
		children:[
			{
				path: ":category",
				component: () => import("../pages/BlogListCategory.vue"),
			},
		]
	},

	{
		path: "/blog/:slug",
		component: () => import("../pages/BlogSingle.vue"),
	},
]