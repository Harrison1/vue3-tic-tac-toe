import { GameData } from '../types/interfaces'

const gameDefaults: GameData = {
  playersTurn: 0,
  position1Claimed: 0,
  position2Claimed: 0,
  position3Claimed: 0,
  position4Claimed: 0,
  position5Claimed: 0,
  position6Claimed: 0,
  position7Claimed: 0,
  position8Claimed: 0,
  position9Claimed: 0,
  playerPositions: {
    player1: [],
    player2: []
  }
}

export default gameDefaults
