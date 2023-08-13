<template>
  <div class="layout layout_book">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import '~/assets/scss/abstracts/_variables.scss';

body {
  font-family: $font-family-serif;
}

</style>