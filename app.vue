<template>
  <div class="blog">
    <NuxtLayout>
      <BlogLayoutHeader 
        :category="content.category" 
        :categories="content.categories" 
      />
      <NuxtPage/>
      <BlogLayoutFooter 
        :category="content.category" 
      />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const content = useContent()

useHead({
  titleTemplate: (title) => {
    return title ? `${title}. Simon Skripnick` : 'Simon Skripnick';
  }
})
</script>
