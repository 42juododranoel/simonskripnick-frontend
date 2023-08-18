<template>
  <div class="h1-wrapper">
    <h1 v-typograph-content>
      <slot />
    </h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.h1-wrapper {
  display: flex;
  font-size: 54px;
  line-height: 63px;
  margin-bottom: 45px;

  h1 {
    margin-top: -23px;
    margin-bottom: -12px;
  }
}
</style>
