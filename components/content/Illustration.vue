<template>
  <figure>
    <img :src="$urlForImage(props.asset).auto('format').url()" />
    <figcaption v-typograph-content>{{ props.description }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps({
  asset: Object,
  description: String,
})
</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

figure {
  margin-bottom: 36px;
}

@media (min-width: $width-lg) {
  figure {
    margin-bottom: 54px;
  }
}
</style>
