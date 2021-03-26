<template>
  <h1 class="font-bold text-4xl text-center">
    {{ text }}
  </h1>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  text: {
    type: String,
    default: 'Title'
  }
})
</script>
