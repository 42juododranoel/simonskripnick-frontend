<template>
  <BlogPost 
    :title="content.post.title" 
    :description="content.post.description" 
    :content="content.post.content"
  ></BlogPost>
</template>

<script setup lang="ts">
const route = useRoute()

definePageMeta({
  layout: "blog",
})

const content = useContent()
content.getCategory(route.params.category)
content.getPost(route.params.post)
</script>
