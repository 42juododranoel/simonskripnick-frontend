<template>
  <div class="row">
    <div class="col">
      <BlogPostList :category="content.category" :posts="content.posts" :tags="content.tags" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: "blog",
})

const content = useContent()
content.getCategory(route.params.category)
content.listCategoryPosts(route.params.category)
content.listCategoryTags(route.params.category)
</script>
