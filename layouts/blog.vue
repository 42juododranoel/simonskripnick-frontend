<template>
  <div class="blog">
    <BlogLayoutHeader :category="content.category" :categories="content.categories" />
    <slot />
    <BlogLayoutFooter :category="content.category" />
  </div>
</template>

<script setup lang="ts">
const content = useContent()
</script>

<style lang="scss"></style>
