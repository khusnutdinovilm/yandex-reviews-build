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
    name: RouteName.Dashboard,
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/dashboard").then((m) => m.DashboardPage),
  },
  {
    path: "/settings",
    name: RouteName.Settings,
    meta: {
      requiresAuth: true,
    },
    component: () => import("@/pages/settings").then((m) => m.SettingsPage),
  },
];
