<template>
  <div class="row">
    <div class="col">
      <BlogPostList :do-show-category="false" />
    </div>
  </div>
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
content.listCategoryPosts(route.params.category)
content.listCategoryTags(route.params.category)
</script>
