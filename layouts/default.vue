<template>
  <header></header>
  
  <slot />

  <footer></footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
