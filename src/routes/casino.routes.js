export default [
	{
		path: "/casino/home",
		component: () => import("../layouts/Casino.vue"),
		children:[
			{
				path: "",
				component: () => import("../pages/CasinoLobby.vue"),
			},
			{
				path: ":tab",
				component: () => import("../pages/CasinoHomeTab.vue"),
			},
		]

	},
	{
		path: "/casino/games/:game",
		component: () => import("../pages/CasinoGame.vue"),
	},
	{
		path: "/casino/providers",
		component: () => import("../pages/CasinoProviders.vue"),
	},
	{
		path: "/casino/group/:type",
		component: () => import("../pages/CasinoGroup.vue"),
	}
]