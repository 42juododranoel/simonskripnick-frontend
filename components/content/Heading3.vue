<template>
  <div class="h3-wrapper">
    <h3 v-typograph-content>
      <slot />
    </h3>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.h3-wrapper {
  display: flex;
  margin-bottom: 17px;
  font-size: $font-size-sm;

  h3 {
    margin-top: -11px;
    margin-bottom: -7px;
  }
}
</style>
