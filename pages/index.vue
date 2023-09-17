<template>
  <BlogPostList 
    :do-show-category="true" 
    :do-show-header="false" 
  />
</template>

<script setup lang="ts">
// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.setDefaultCategory()

// Page
content.listPosts()
</script>
