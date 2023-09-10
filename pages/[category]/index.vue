<template>
  <div class="row">
    <div class="col">
      <BlogPostList 
        :do-show-category="false" 
        :do-show-header="true" 
      />
    </div>
  </div>
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
content.listCategoryPosts(route.params.category)
content.listCategoryTags(route.params.category)

// Post Head
definePageMeta({
  layout: "blog",
})
</script>
