<template>
  <div class="embed embed_tweet">
    <Tweet :tweet-id="props.tweet_id" />
  </div>
</template>

<script setup lang="ts">
import Tweet from "vue-tweet";

const props = defineProps({
  tweet_id: String,
})
</script>
