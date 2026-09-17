import { defineStore } from "pinia";
import { computed, ref } from "vue";

import type { IUser, IUserForm } from "./types";
import { authService } from "../api/auth-service";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<IUser | null>(null);

  const sessionChecked = ref(false);
  const isAuthenticated = computed(() => !!user.value);

  const login = async (userData: IUserForm) => {
    const { data } = await authService.login(userData);
    user.value = data;
  };

  const getUser = async () => {
    try {
      const { data } = await authService.getUser();
      user.value = data;
    } finally {
      sessionChecked.value = true;
    }
  };

  const logout = async () => {
    await authService.logout();
    user.value = null;
  };

  return {
    user,
    sessionChecked,
    isAuthenticated,
    login,
    getUser,
    logout,
  };
});
