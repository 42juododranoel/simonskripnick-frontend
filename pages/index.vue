<template>
  <div class="row">
    <div class="col">
      <BlogPostList 
        :do-show-category="true" 
        :do-show-header="false" 
      />
    </div>
  </div>
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

// Post Head
definePageMeta({
  layout: "blog",
})
</script>
