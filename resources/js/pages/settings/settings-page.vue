<template>
  <page-template
    page-title="Настройки"
    class="settings-page"
    page-content-class="settings-page-content"
  >
    <template #default>
      <connect-organization-form @success="onSuccess" style="height: 75px" />
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { PageTemplate } from "@/shared/ui/page-template";
import { ConnectOrganizationForm } from "@/features/connect-organization";
import { useRouter } from "vue-router";
import { RouteName } from "@/shared/config";

defineOptions({
  name: "settings-page",
});

const router = useRouter();

const onSuccess = () => {
  router.push({ name: RouteName.Dashboard });
};
</script>

<style lang="scss">
.settings-page-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
