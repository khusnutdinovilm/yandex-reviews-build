<template>
  <form class="connect-organization-form" @submit.prevent="onConnectOrganization">
    <p-input-text
      v-model="url"
      placeholder="Ссылка на организацию в Яндекс.Картах"
      class="connect-organization-form__input"
    />

    <p-button type="submit" label="Подключить" :loading="loading" />
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

import PInputText from "primevue/inputtext";
import PButton from "primevue/button";

import { useOrganization } from "@/entities/organization";

defineOptions({
  name: "connect-organization-form",
});

const emit = defineEmits<{
  success: [];
}>();

const loading = ref(false);
const url = ref("");

const { connectOrganization } = useOrganization();

const onConnectOrganization = async () => {
  loading.value = true;

  try {
    await connectOrganization(url.value);
    emit("success");
  } finally {
    loading.value = false;
  }
};
</script>

<style lang="scss">
.connect-organization-form {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  gap: $spacing-4;

  &__input {
    flex: 1;
  }
}
</style>
