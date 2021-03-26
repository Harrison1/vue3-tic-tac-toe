<template>
  <div class="flex items-center justify-center border-black w-1/3 h-40 p-3" :class="{ 'border-b-2': bottomBorder, 'border-r-2': rightBorder }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  rightBorder: {
    type: Boolean,
    default: false
  },
  bottomBorder: {
    type: Boolean,
    default: false
  }
})
</script>
