<template>
  <div class="h2-wrapper">
    <h2 v-typograph-content>
      <slot />
    </h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.h2-wrapper {
  display: flex;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 27px;

  h2 {
    margin-top: -18px;
    margin-bottom: -9px;
  }
}
</style>
