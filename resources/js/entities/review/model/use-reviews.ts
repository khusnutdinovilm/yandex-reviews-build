import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { type DataTablePageEvent } from "primevue/datatable";

import type { IReview } from "./types";
import { reviewService } from "../api/review-service";
import { PER_PAGE } from "@/shared/config";

export const useReviews = () => {
  const route = useRoute();
  const router = useRouter();

  const initialPage = Number(route.query.page) || 1;

  const reviews = ref<IReview[]>([]);
  const totalRecords = ref(0);
  const first = ref(0);

  const isLoading = ref(false);

  const loadReviews = async (page = 1) => {
    isLoading.value = true;

    try {
      const { data: responseData } = await reviewService.getReviews(page);
      const { data, meta } = responseData;

      reviews.value = data;
      totalRecords.value = meta.total;
      first.value = (page - 1) * PER_PAGE;
    } finally {
      isLoading.value = false;
    }
  };

  const tableRef = ref();
  const scrollTop = () => {
    tableRef.value?.$el?.querySelector(".p-datatable-table-container")?.scrollTo({ top: 0 });
  };

  watch(
    () => route.query.page,
    (p) => loadReviews(Number(p) || 1)
  );

  const onReviewsPageChange = (e: DataTablePageEvent) => {
    const page = e.page + 1;
    router.replace({ query: { ...route.query, page } });
    scrollTop();
  };

  return {
    reviews,
    totalRecords,
    first,
    isLoading,
    tableRef,
    initialPage,
    loadReviews,
    onReviewsPageChange,
  };
};
