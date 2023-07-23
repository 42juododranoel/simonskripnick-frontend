<template>
  <header>
    <h1>Typeflowrhyme Editor</h1>
    <p>Currently in development.</p>
  </header>
  
  <template v-if="route.path !== '/'">
    <router-link to="/">→ Back Home</router-link>
    <hr />
  </template>
  
  <slot />
  
  <hr />
  
  <footer>
    <a href="https://github.com/42juododranoel">by Simon Skripnik</a>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
