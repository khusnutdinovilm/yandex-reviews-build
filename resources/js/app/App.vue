<template>
  <p-toast />
  <site-header v-if="authStore.isAuthenticated" />

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import PToast from "primevue/toast";

import { useAuthStore } from "@/features/auth";
import { SiteHeader } from "@/widgets/site-header";

const authStore = useAuthStore();
</script>
