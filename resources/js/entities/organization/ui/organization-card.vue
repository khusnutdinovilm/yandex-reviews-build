<template>
  <div class="organization-card">
    <div class="organization-card__header">
      <div class="organization-card__name">
        {{ organization.name }}
      </div>
    </div>

    <div class="organization-card__content">
      <div class="organization-card__rating">
        <span class="organization-card__rating-value">
          {{ organization.rating || 0 }}
        </span>

        <p-rating
          :model-value="organization.rating || 0"
          readonly
          allow-half
          class="organization-card__rating-stars"
        />

        <div class="organization-card__rating-count">
          ({{ organization.ratings_count }}
          {{ plural(organization.ratings_count ?? 0, ["оценка", "оценки", "оценок"]) }})
        </div>
      </div>

      <div class="organization-card__reviews-count">
        на основе {{ organization.reviews_count }}
        {{ plural(organization.reviews_count ?? 0, ["отзыва", "отзывов", "отзывов"]) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PRating from "primevue/rating";

import { plural } from "@/shared/lib/plural";

import type { IOrganization } from "../model/types";

defineOptions({
  name: "organization-card",
});

defineProps<{
  organization: IOrganization;
}>();
</script>

<style lang="scss">
.organization-card {
  display: flex;
  flex-direction: column;
  gap: $spacing-7;

  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-3;

    padding-top: $spacing-4;
    border-top: 1px solid var(--p-blue-500);
  }

  &__name {
    font-size: $size-4;
    font-weight: 600;
    line-height: 100%;
  }

  &__rating {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: $spacing-4;

    &-value,
    &-count {
      font-size: $size-1;
      font-weight: 700;
      line-height: 100%;
    }
  }

  &__content {
    padding-bottom: $spacing-4;
    border-bottom: 1px solid var(--p-blue-500);

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
