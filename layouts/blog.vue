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

.layout_blog {
  margin-left: 20px;
  margin-right: 20px;
}

@media (min-width: $width-md) {
  .layout_blog {
    margin-left: 14vw;
    margin-right: 14vw;
  }
}


</style>