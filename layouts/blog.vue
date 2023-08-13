<template>
  <div class="layout layout_blog">
    <Header :category="content.category" :categories="content.categories" />
    <slot />
    <Footer :category="content.category" />
  </div>
</template>

<script setup lang="ts">
const content = useContent()
content.listCategories()
</script>

<style lang="scss">
@import '~/assets/scss/abstracts/_variables.scss';

body {
  font-family: $font-family-sans;
}
</style>