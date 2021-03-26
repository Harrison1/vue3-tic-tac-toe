<template>
  <RedText 
    :showError="showError"
    :message="message"
  />
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import RedText from '../components/RedText.vue'

const store = useStore()
const message = computed(() => store.state.error.message)
const showError = computed(() => store.state.error.showError)

</script>
