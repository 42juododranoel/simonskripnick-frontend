<template>
  <div class="row">
    <div class="col">
      <BlogPostList :do-show-category="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blog",
})

// Meta
const content = useContent()
content.$reset()

// Header
content.listCategories()
content.setDefaultCategory()

// Page
content.listPosts()
</script>
