import { type RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home-page",
    component: () => import("@/pages/home").then((m) => m.HomePage),
  },
];
