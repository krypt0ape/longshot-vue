export default [
  {
    path: "/sports/home",
    component: () => import("../layouts/SportsHomeLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/SportsLobby.vue"),
      },
      {
        path: ":tab",
        component: () => import("../pages/SportsHomeTab.vue"),
      },
    ],
  },
];
