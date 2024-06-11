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
    path: "/sports/:sportSlug/:categorySlug/:tournamentSlug/:event",
    component: () => import("../pages/SportsEvent.vue"),
  },
  {
    path: "/sports/:sportSlug",
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
