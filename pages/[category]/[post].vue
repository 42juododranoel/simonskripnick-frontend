<template>
  <BlogPost />
</template>

<script setup lang="ts">
const route = useRoute()

// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.getCategory(route.params.category)

// Page
content.getPost(route.params.post)

// Post Head
definePageMeta({
  layout: "blog",
})
</script>
