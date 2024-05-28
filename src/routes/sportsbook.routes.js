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
  {
    path: "/sports/my-bets",
    component: () => import("../layouts/SportsMyBetsLayout.vue"),
  },
  {
    path: "/sports/:sport/:category/:tournament/:event",
    component: () => import("../pages/SportsEvent.vue"),
  },
  {
    path: "/sports/:sport",
    component: () => import("../layouts/SportLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("../pages/SportLiveUpcoming.vue"),
      },
      {
        path: "all",
        component: () => import("../pages/SportAll.vue"),
      },
      {
        path: "outrights",
        component: () => import("../pages/SportOutrights.vue"),
      },
    ],
  },
];
