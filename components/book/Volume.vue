<template>
  <div class="volume" :class="{ volume_centered: isCentered }">
    <div class="volume-header-left" />
    <div class="volume-body-left" />
    <div class="volume-footer-left" />

    <div class="volume-header-content" />

    <div class="volume-body-content">
      <h1 v-typograph-content class="volume-title">{{ title }}</h1>
      <Picture v-if="image" :asset="image.asset" />
    </div>

    <div class="volume-footer-content" />

    <div class="volume-header-right" />
    <div class="volume-body-right" />
    <div class="volume-footer-right" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  image: Object,
})
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.volume {
  display: grid;
  grid-template-columns: $spread-outer-padding-sm 1fr $spread-outer-padding-sm;
  grid-template-rows: $spread-header-size-sm 1fr $spread-footer-size-sm;
  grid-template-areas:
    "header-left header-content header-right"
    "body-left body-content body-right"
    "footer-left footer-content footer-right";

  &-header-left,
  &-body-left,
  &-footer-left {
    background-image: linear-gradient(to left, var(--paper-color), var(--gradient-target));
  }
  &-header-left {
    grid-area: header-left;
  }
  &-body-left {
    grid-area: body-left;
  }
  &-footer-left {
    grid-area: footer-left;
  }

  &-header-content,
  &-body-content,
  &-footer-content {
    background-color: var(--paper-color);
  }
  &-header-content {
    grid-area: header-content;
  }
  &-body-content {
    grid-area: body-content;
    text-align: center;
    overflow: hidden;
  }
  &-footer-content {
    grid-area: footer-content;
  }

  &-header-right,
  &-body-right,
  &-footer-right {
    background-image: linear-gradient(to right, var(--paper-color), var(--gradient-target));
  }
  &-header-right {
    grid-area: header-right;
  }
  &-body-right {
    grid-area: body-right;
  }
  &-footer-right {
    grid-area: footer-right;
  }

  &-title {
    line-height: 1.3;
    padding-bottom: 30px;
    font-size: 54px;
    letter-spacing: 9px;
    text-transform: uppercase;
  }
}

@media (min-width: $width-md) {
  .volume {
    grid-template-rows: $spread-header-size-md 1fr $spread-footer-size-md;
    grid-template-columns: 30% 1fr 30%;

    &-title {
      font-size: 90px;
      text-transform: uppercase;
      letter-spacing: 18px;
      padding-bottom: 50px;
    }
  }
}
</style>
