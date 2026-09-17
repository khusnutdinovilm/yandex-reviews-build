<template>
  <header class="site-header">
    <div class="container">
      <div class="site-header__wrapper">
        <router-link to="/" class="site-header__logo">
          <img :src="'/logo.png'" alt="Logo" />
        </router-link>

        <site-nav />
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import SiteNav from "./site-nav.vue";

defineOptions({
  name: "site-header",
});
</script>

<style lang="scss">
.site-header {
  border-bottom: 1px solid var(--p-blue-800);

  &__wrapper {
    padding-top: $spacing-5;
    padding-bottom: $spacing-5;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    width: 45px;
    height: 45px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
</style>
