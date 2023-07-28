<template>
  <div class="row">
    <div class="col">
      <BlogPostList :posts="content.posts" />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "blog",
})

const content = useContent()
content.setDefaultCategory()
content.listPosts()
</script>
