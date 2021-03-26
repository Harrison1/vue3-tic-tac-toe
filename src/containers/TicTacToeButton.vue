<template>
  <button 
    v-if="!claimed && (player1UUID === uuid || player2UUID === uuid) && playersTurn === uuid" 
    @click="pressSquare(gridPosition, uuid, x, y)" 
    class="w-full h-full rounded-3xl hover:bg-gray-200">
  </button>
  <XO v-else-if="claimed" :claimed="claimed" />
</template>

<script lang="ts" setup>
import { computed, defineProps, handleError } from 'vue'
import { useStore } from 'vuex'
import XO from '../components/XO.vue'
import playerAction from '../api/playerAction'
import handleAPIResponse from '../api/handleAPIResponse'
import handleErrorMessages from '../api/handleErrorMessages'

const store = useStore() 
const uuid = computed(() => store.state.user.uuid)
const player1UUID = computed(() => store.state.game.player1UUID)
const player2UUID = computed(() => store.state.game.player2UUID)
const playersTurn = computed(() => store.state.game.playersTurn)

const pressSquare = async (gridPosition: number, uuid: string, x: number, y: number) => {
  store.dispatch('resetError')
  const data = await playerAction(gridPosition, uuid, x, y)

  if (handleAPIResponse(data.statusCode)) {
    store.dispatch('save')
  } else {
    store.dispatch('saveError', {
      statusCode: data.statusCode,
      mesasge: handleErrorMessages(data.statusCode)
    })
  }

}

const props = defineProps({
  claimed: {
    type: Number,
    default: 0
  },
  gridPosition: {
    type: Number,
    default: 0
  },
  x: {
    type: Number,
    default: 0
  },
  y: {
    type: Number,
    default: 0
  }
})
</script>
