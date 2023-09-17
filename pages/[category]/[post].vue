<template>
  <BlogPost />
</template>

<script setup lang="ts">
// Meta
const route = useRoute()
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.getCategory(route.params.category)

// Page
content.getPost(route.params.post)
</script>
