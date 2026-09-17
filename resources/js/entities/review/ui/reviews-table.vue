<template>
  <p-data-table
    :value="reviews"
    lazy
    paginator
    :rows="rows"
    :first="first"
    :total-records="totalRecords"
    :loading="loading"
    scrollHeight="500px"
    @page="$emit('page', $event)"
  >
    <p-column field="author" header="Автор"></p-column>
    <p-column field="rating" header="Оценка">
      <template #body="{ data }">
        <p-rating :model-value="data.rating" readonly />
      </template>
    </p-column>
    <p-column field="text" header="Отзыв"></p-column>
    <p-column field="published_at" header="Дата">
      <template #body="{ data }">
        {{ formatDate(data.published_at) }}
      </template>
    </p-column>

    <template #empty> Отзывов пока нет </template>
  </p-data-table>
</template>

<script setup lang="ts">
import PDataTable, { type DataTablePageEvent } from "primevue/datatable";
import PColumn from "primevue/column";
import PRating from "primevue/rating";

import type { IReview } from "../model/types";
import { formatDate } from "@/shared/lib/format-date";

defineOptions({
  name: "reviews-table",
});

const {
  reviews = [],
  totalRecords = 0,
  rows = 50,
  first = 0,
  loading = false,
} = defineProps<{
  reviews?: IReview[];
  totalRecords?: number;
  rows?: number;
  first?: number;
  loading?: boolean;
}>();

defineEmits<{ page: [event: DataTablePageEvent] }>();
</script>
