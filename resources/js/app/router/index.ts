import { createRouter, createWebHistory } from "vue-router";

import { routes } from "./routes";
import { useAuthStore } from "@/features/auth";
import { RouteName } from "@/shared/config";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to) => {
  const auth = useAuthStore();

  if (!auth.sessionChecked) {
    try {
      await auth.getUser();
    } catch (_) {}
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) return { name: RouteName.Auth };

  if (to.name === RouteName.Auth && auth.isAuthenticated) return { name: RouteName.Home };
});

export { router };
