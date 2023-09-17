<template>
  <BlogPostList 
    :do-show-category="false" 
    :do-show-header="true" 
  />
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
content.listCategoryPosts(route.params.category)
content.listCategoryTags(route.params.category)
</script>
