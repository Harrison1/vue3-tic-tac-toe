<template>
  <PageTitle text="Tic Tac Toe" />
  <GameBoard />
  <TotalPeople 
    :total="totalWatching"
    text="Watching"
  />
  <ErrorMessage />
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import config from '../config'
import GameBoard from './GameBoard.vue'
import PageTitle from '../components/PageTitle.vue'
import fetchRoomTotals from '../api/fetchRoomTotals'
import TotalPeople from '../components/TotalPeople.vue'
import ErrorMessage from '../containers/ErrorMessage.vue'

const store = useStore()
const totalWatching = ref(0)

const roomTotals = async () => {
  try {
    const totals = await fetchRoomTotals('uuid-uuid-uuid-uuid')
    totalWatching.value = totals.watchers ?? 0
  } catch(err) 
  {
    console.error(err)
  }
}

// listen for updates to dynamically update watchers in real time.
// socket.connect(config)
// socket.listen(() => {
//   roomTotals()
// })

</script>
