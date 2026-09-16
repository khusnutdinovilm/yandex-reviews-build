<template>
  <div class="auth-page">
    <div class="auth-page__form">
      <span class="auth-page__form-heading"> Авторизуйтесь в системе </span>

      <auth-form @success="onSuccessLogin" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import { AuthForm } from "@/features/auth";
import { RouteName } from "@/shared/config";

defineOptions({
  name: "auth-page",
});

const router = useRouter();
const onSuccessLogin = () => {
  router.push({ name: RouteName.Home });
};
</script>

<style lang="scss">
.auth-page {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__form {
    background-color: var(--p-surface-900);
    padding: 40px;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    gap: 32px;

    &-heading {
      align-self: center;

      font-size: 20px;
      font-weight: 700;
      line-height: 120%;
    }
  }
}
</style>
