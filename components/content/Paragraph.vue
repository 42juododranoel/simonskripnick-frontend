<template>
  <div class="p-wrapper">
    <p v-typograph-content>
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.p-wrapper {
  display: flex;
  margin-bottom: 18px;
  font-size: $font-size-sm;
  line-height: $line-height-sm;

  p {
    margin-top: -12px;
    margin-bottom: -7px;
  }
}
</style>
