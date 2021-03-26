<template>
  
  <div class="m-auto w-full lg:w-1/2 max-w-screen-lg rounded-3xl bg-gray-50 shadow-md">

      <!-- top 3 -->
      <div class="flex">

        <GameBoardGrid bottomBorder rightBorder>
          <TicTacToeButton
            :claimed="gameData.position1Claimed" 
            :gridPosition="1"
            :x="1"
            :y="1"
          />
        </GameBoardGrid>

        <GameBoardGrid bottomBorder rightBorder>
          <TicTacToeButton
            :claimed="gameData.position2Claimed" 
            :gridPosition="2"
            :x="1"
            :y="2"
          />
        </GameBoardGrid>

        <GameBoardGrid bottomBorder>
          <TicTacToeButton 
            :claimed="gameData.position2Claimed" 
            :gridPosition="3"
            :x="1"
            :y="3"
          />
        </GameBoardGrid>
        
      </div>

      <!-- middle 3 -->
      <div class="flex">

        <GameBoardGrid bottomBorder rightBorder>
          <TicTacToeButton
            :claimed="gameData.position4Claimed" 
            :gridPosition="4"
            :x="2"
            :y="1"
          />
        </GameBoardGrid>

        <GameBoardGrid bottomBorder rightBorder>
          <TicTacToeButton
            :claimed="gameData.position5Claimed" 
            :gridPosition="5"
            :x="2"
            :y="2"
          />
        </GameBoardGrid>

        <GameBoardGrid bottomBorder>
          <TicTacToeButton
            :claimed="gameData.position6Claimed" 
            :gridPosition="6"
            :x="2"
            :y="3"
          />
        </GameBoardGrid>
        
      </div>

      <!-- bottom 3 -->
      <div class="flex">

        <GameBoardGrid rightBorder>
          <TicTacToeButton
            :claimed="gameData.position7Claimed" 
            :gridPosition="7"
            :x="3"
            :y="1"
          />
        </GameBoardGrid>

        <GameBoardGrid rightBorder>
          <TicTacToeButton
            :claimed="gameData.position8Claimed" 
            :gridPosition="8"
            :x="3"
            :y="2"
          />
        </GameBoardGrid>

        <GameBoardGrid>
          <TicTacToeButton
            :claimed="gameData.position9Claimed" 
            :gridPosition="9"
            :x="3"
            :y="3"
          />
        </GameBoardGrid>
        
      </div>

    </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue'
import config from '../config'
import { useStore } from 'vuex'
// import { GameData } from '../types/interfaces' github issue: https://github.com/vuejs/vue-jest/issues/189
import TicTacToeButton from './TicTacToeButton.vue'
import gameDefaults from '../constants/gameDefaults'
import GameBoardGrid from '../components/GameBoardGrid.vue'

const store = useStore()
const gameData = ref(gameDefaults)

// listen to game data updates here
// socket.connect(config)
// socket.listen((data: GameData) => {
//   gameData.value = data
//   store.dispatch('updateGameData', data)
// })

</script>
