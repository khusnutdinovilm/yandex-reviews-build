<template>
  <nav class="site-nav">
    <router-link
      v-for="item in menuItems"
      :key="item.to.name"
      :to="item.to"
      class="site-nav__link"
      exact-active-class="site-nav__link--active"
    >
      {{ item.label }}
    </router-link>

    <p-button icon="pi pi-sign-out" severity="secondary" @click="onLogout" />
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import PButton from "primevue/button";

import { RouteName } from "@/shared/config";
import { useAuthStore } from "@/features/auth";
import { menuItems } from "./config";

defineOptions({
  name: "site-nav",
});

const router = useRouter();
const authStore = useAuthStore();

const onLogout = async () => {
  await authStore.logout();
  router.push({ name: RouteName.Auth });
};
</script>

<style lang="scss">
.site-nav {
  --label-color: var(--p-primary-50);
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  gap: $spacing-4;

  &__link {
    font-size: $size-2;
    font-weight: 600;
    line-height: 120%;
    color: var(--label-color);

    transition: color 0.2s ease;

    &:hover {
      --label-color: var(--p-blue-500);
    }

    &--active {
      --label-color: var(--p-blue-300);
    }
  }
}
</style>
