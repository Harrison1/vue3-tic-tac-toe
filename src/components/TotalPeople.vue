
<template>
  <p class="text-center">
    <span class="font-bold text-red-700">{{ total }}</span> <span v-if="total !== 1">People</span><span v-if="total === 1">Person</span> <span v-if="text">{{ text }}</span>
  </p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  total: {
    type: Number,
    default: 0
  },
  text: {
    type: String,
    default: ''
  }
})
</script>
