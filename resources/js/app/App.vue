<template>
  <p-toast />
  <header v-if="authStore.isAuthenticated">header</header>

  <main>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import PToast from "primevue/toast";
import { useAuthStore } from "@/features/auth";

const authStore = useAuthStore();
</script>
