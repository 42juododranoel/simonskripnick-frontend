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
if ("tags" in route.query) {
  content.listCategoryTagPosts(route.params.category, route.query.tags)
} else {
  content.listCategoryPosts(route.params.category)
}
content.listCategoryTags(route.params.category)
</script>
