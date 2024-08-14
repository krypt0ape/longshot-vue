export default [
	{
		path: "/policies",
		component: () => import("../layouts/PolicyLayout.vue"),
		children:[
			{
				path: ":slug",
				component: () => import("../pages/PolicySingle.vue"),
			},
		]
	}
]