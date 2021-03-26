<template>
  <div v-if="claimed === 1" class="text-6xl text-blue-500">X</div>
  <div v-else-if="claimed === 2" class="text-6xl text-red-500">O</div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  claimed: {
    type: Number,
    default: 0
  },
})
</script>
