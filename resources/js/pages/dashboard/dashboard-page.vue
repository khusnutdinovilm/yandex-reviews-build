<template>
  <page-template
    page-title="Дашборд"
    :is-content-loading="isOrganizationLoading"
    :is-content-empty="isOrganizationEmpty"
    class="dashboard-page"
  >
    <template #content-empty>
      Нет загруженной организации. Перейдите на
      <router-link :to="{ name: RouteName.Settings }">страницу настроек</router-link>, чтобы
      добавить организацию
    </template>
    <template #default>
      <organization-card v-if="organization" :organization="organization" />

      <reviews-table
        ref="tableRef"
        :reviews="reviews"
        :total-records="totalRecords"
        :first="first"
        :rows="PER_PAGE"
        :loading="isReviewsLoading"
        @page="onReviewsPageChange"
      />
    </template>
  </page-template>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

import { PER_PAGE, RouteName } from "@/shared/config";

import { OrganizationCard, useOrganization } from "@/entities/organization";
import { PageTemplate } from "@/shared/ui/page-template";
import { ReviewsTable, useReviews } from "@/entities/review";

defineOptions({
  name: "dashboard-page",
});

const {
  organization,
  isLoading: isOrganizationLoading,
  isEmpty: isOrganizationEmpty,
  loadOrganization,
} = useOrganization();

const {
  reviews,
  initialPage,
  tableRef,
  totalRecords,
  first,
  isLoading: isReviewsLoading,
  loadReviews,
  onReviewsPageChange,
} = useReviews();

onMounted(async () => {
  await loadOrganization();
  await loadReviews(initialPage);
});
</script>
