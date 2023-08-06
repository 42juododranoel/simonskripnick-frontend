<template>
  <SanityContent :blocks="props.blocks" :serializers="serializers" />
</template>

<script setup lang="ts">
const props = defineProps({
  blocks: Array,
})

const serializers = {
  styles: {
    h2: resolveComponent('ContentHeading2'),
    h3: resolveComponent('ContentHeading3'),
    normal: resolveComponent('ContentParagraph'),
  },
  marks: {
    'lead-in': resolveComponent('ContentLeadIn'),
  },
  types: {
    code: resolveComponent('ContentCode'),
  },
}
</script>
