<template>
  <figure class="illustration" :class="{ illustration__spoiler: props.isSpoiler, illustration__hidden: doHideImage }">
    <img class="illustration--image" :src="$urlForImage(props.asset).auto('format').url()" @click="switchSpoiler()" />
    <figcaption v-typograph-content>{{ props.description }}</figcaption>
  </figure>
</template>

<script setup lang="ts">
import { ref } from "vue"

const props = defineProps({
  asset: Object,
  description: String,
  isSpoiler: Boolean,
})

const doHideImage = ref(props.isSpoiler)

function switchSpoiler() {
  if (props.isSpoiler) {
    doHideImage.value = !doHideImage.value
  }
}

</script>

<style lang="scss" scoped>
@import '~/assets/scss/abstracts/_variables.scss';

.illustration {
  margin-bottom: 36px;

  .illustration--image {
    border: 1px solid #bebebe;
  }
}

.illustration__spoiler {
  .illustration--image:hover {
    cursor: pointer;
  }

  .illustration--image:hover {
    transition: 0.3s;
  }
}

.illustration__hidden {
  .illustration--image {
    filter: blur(20px) grayscale(100%) brightness(50%);
  }
}

@media (min-width: $width-lg) {
  figure {
    margin-bottom: 54px;
  }
}
</style>
