<template>
  <p v-if="showError" class="text-center text-red-500 font-bold">{{ message }}</p>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: ''
  },
  showError: {
    type: Boolean,
    default: false
  },
})
</script>
