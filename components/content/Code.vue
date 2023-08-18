<template>
  <div class="embed embed_code" :class="emotionClass">
    <pre>
      <code :class="syntax">{{ content }}</code>
    </pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
  syntax: String,
  emotion: String,
})

const emotionClass = `embed_code_emotion_${props.emotion}`
</script>

<style lang="scss" scoped>
@import "~/assets/scss/abstracts/_variables.scss";

.embed {
  margin-bottom: 36px;
  margin-top: 27px;
}

.embed_code {
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: #bebebe;

  pre {
    font-family: $font-family-mono;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 18px;
  }

  code {
    white-space: pre;
    background-color: unset;
  }
}

.embed_code_emotion_positive {
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: #228b22;
}

.embed_code_emotion_negative {
  border-left-width: 3px;
  border-left-style: solid;
  border-left-color: #dc143c;
}
</style>
