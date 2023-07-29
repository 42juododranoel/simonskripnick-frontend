<template>
  <SanityContent :blocks="props.blocks" :serializers="serializers" />
</template>

<script setup lang="ts">
import { resolveComponent } from 'vue'

const props = defineProps({
  blocks: Array,
})

const serializers = {
  types: {
    // image: Illustration,
    code: resolveComponent('Codus'),
  },
  styles: {
    h2: resolveComponent('Heading2'),
    h3: resolveComponent('Heading3'),
    normal: resolveComponent('Paragraph'),
  },
  marks: {
    'lead-in': resolveComponent('LeadIn'),
  },
}

</script>
