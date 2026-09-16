import { RouteName } from "@/shared/config";
import { type RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/auth",
    name: RouteName.Auth,
    component: () => import("@/pages/auth").then((m) => m.AuthPage),
  },
  {
    path: "/",
    name: RouteName.Home,
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/home").then((m) => m.HomePage),
  },
];
