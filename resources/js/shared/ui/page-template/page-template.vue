<template>
  <div class="page-template container">
    <div v-if="$slots['actions'] || !!pageTitle" class="page-template__header">
      <h1 v-if="!!pageTitle" class="page-template__title">
        {{ pageTitle }}
      </h1>

      <div v-if="$slots['actions']" class="page-template__actions">
        <slot name="actions" />
      </div>
    </div>

    <div v-if="$slots['default']" class="page-template__content" :class="pageContentClasses">
      <slot v-if="isContentLoading" name="content-loading">
        <progress-spinner />
      </slot>
      <slot v-else-if="isContentEmpty" name="content-empty" />
      <slot v-else />
    </div>

    <div v-if="$slots['footer']" class="page-template__footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import ProgressSpinner from "primevue/progressspinner";

import type { IPageTemplateProps } from "./types";

defineOptions({
  name: "page-template",
});

const props = defineProps<IPageTemplateProps>();

const pageContentClasses = computed(() => [
  props.pageContentClass,
  {
    "page-template__content--loading": props.isContentLoading,
    "page-template__content--empty": props.isContentEmpty && !props.isContentLoading,
  },
]);
</script>

<style lang="scss">
.page-template {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: $spacing-6;

  &__header {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    gap: $spacing-4;
  }

  &__title {
    font-size: $size-4;
    font-weight: 600;
    line-height: 120%;
  }

  &__content {
    flex: 1;

    &--loading,
    &--empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
