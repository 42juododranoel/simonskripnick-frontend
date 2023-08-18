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

@media (min-width: $width-lg) {
  .h3-wrapper {
    margin-bottom: 27px;
    font-size: $font-size-lg;

    h3 {
      margin-top: -17px;
      margin-bottom: -10px;
    }
  }
}
</style>
