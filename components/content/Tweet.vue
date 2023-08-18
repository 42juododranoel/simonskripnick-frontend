<template>
  <div class="embed embed_tweet">
    <Tweet :tweet-id="props.tweet_id" :dnt="true">
      <template v-slot:loading>
        <span>Loading {{ props.title }} tweet…</span>
      </template>

      <template v-slot:error>
        <span>Failed to load {{ props.title }}’s tweet.</span>
      </template>
    </Tweet>
  </div>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet"

const props = defineProps({
  tweet_id: String,
  title: String,
})
</script>
