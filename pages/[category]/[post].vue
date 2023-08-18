<template>
  <BlogPost />
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: "blog",
})

// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.getCategory(route.params.category)

// Page
content.getPost(route.params.post)
</script>
