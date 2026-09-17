<template>
  <page-template page-title="Dashboard Page">
    <p>
      Информация об организации (оценка, кол-во отзывов и т.п.) + список отзывов с пагинацией (50шт)
    </p>
  </page-template>
</template>

<script setup lang="ts">
import { PageTemplate } from "@/shared/ui/page-template";

defineOptions({
  name: "dashboard-page",
});
</script>
