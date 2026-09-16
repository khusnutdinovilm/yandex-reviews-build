<template>
  <form class="auth-form" @submit.prevent="onSubmit">
    <p-float-label>
      <p-input-text id="email" v-model="form.email" type="email" autocomplete="username" />

      <label for="email">Email</label>
    </p-float-label>

    <p-float-label>
      <p-password
        input-id="password"
        v-model="form.password"
        :feedback="false"
        toggleMask
        autocomplete="current-password"
      />

      <label for="password">Пароль</label>
    </p-float-label>

    <p-button label="Войти" type="submit" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import PButton from "primevue/button";
import PFloatLabel from "primevue/floatlabel";
import PInputText from "primevue/inputtext";
import PPassword from "primevue/password";

import type { IUserForm } from "../model/types";
import { useAuthStore } from "../model/store";

defineOptions({
  name: "auth-form",
});

const emit = defineEmits<{
  (e: "success"): void;
}>();

const authStore = useAuthStore();

const loading = ref(false);
const form = ref<IUserForm>({
  email: "",
  password: "",
});

const onSubmit = async () => {
  if (!form.value.email || !form.value.password) return;
  if (loading.value) return;

  loading.value = true;
  try {
    await authStore.login(form.value);
    emit("success");
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss">
.auth-form {
  display: flex;
  flex-direction: column;
  gap: 28px;

  & .p-password,
  & .p-inputtext {
    width: 100%;
  }
}
</style>
