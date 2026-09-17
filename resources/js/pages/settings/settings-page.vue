<template>
  <page-template page-title="Settings Page">
    <p>Страница с формой отправки url организации и с дальнейшим перенаправлением на /</p>
  </page-template>
</template>

<script setup lang="ts">
import { PageTemplate } from "@/shared/ui/page-template";

defineOptions({
  name: "settings-page",
});
</script>
