import { XY } from '../types/interfaces'

// this will not be performed on the client unless playing against AI. This will be server side. The client will listen for game over events.

/* example tic tac toe grid

1,1 | 1,2 | 1,3
2,1 | 2,2 | 2,3
3,1 | 3,2 | 3,3

*/

/**
 * Returns number indicating winner, draw, or nothing
 *
 * @param {Array} player1 array of XY cordinates
 * @param {Array} player2 array of XY cordinates
 * @return {number} number indicating result. Nothing Happens = 0. Player 1 Wins = 1. Player 2 Wins = 2. Draw = 3.
 */
const checkWinner = (player1: Array<XY>, player2: Array<XY>): number => {
  if (!player1?.length || !player2?.length) return 0
  if (player1.length < 3 && player2.length < 3) return 0
  
  // player 1 row wins check
  const rows_1 = [
    player1.filter((i: XY) => i.x === 1).length,
    player1.filter((i: XY) => i.x === 2).length,
    player1.filter((i: XY) => i.x === 3).length
  ]

  if (rows_1.indexOf(3) !== -1) {
    return 1
  }

  // player 2 row wins check
  const rows_2 = [
    player2.filter((i: XY) => i.x === 1).length,
    player2.filter((i: XY) => i.x === 2).length,
    player2.filter((i: XY) => i.x === 3).length
  ]

  if (rows_2.indexOf(3) !== -1) {
    return 2
  }

  // player 1 column wins check
  const cols_1 = [
    player1.filter((i: XY) => i.y === 1).length,
    player1.filter((i: XY) => i.y === 2).length,
    player1.filter((i: XY) => i.y === 3).length
  ]

  if (cols_1.indexOf(3) !== -1) {
    return 1
  }

  // player 2 column wins check
  const cols_2 = [
    player2.filter((i: XY) => i.y === 1).length,
    player2.filter((i: XY) => i.y === 2).length,
    player2.filter((i: XY) => i.y === 3).length
  ]

  if (cols_2.indexOf(3) !== -1) {
    return 2
  }

  // player 1 diagonal cross check win 1
  const diag1_1 = player1.some((i: XY) => i.x === 1 && i.y === 1)
  const diag2_1 = player1.some((i: XY) => i.x === 2 && i.y === 2)
  const diag3_1 = player1.some((i: XY) => i.x === 3 && i.y === 3)
  const diag4_1 = player1.some((i: XY) => i.x === 1 && i.y === 3)
  const diag5_1 = player1.some((i: XY) => i.x === 3 && i.y === 1)

  if (diag2_1 && ( (diag1_1 && diag3_1) || (diag4_1 && diag5_1) )) {
    return 1
  }

  // player 2 diagonal cross check win 1
  const diag1_2 = player2.some((i: XY) => i.x === 1 && i.y === 1)
  const diag2_2 = player2.some((i: XY) => i.x === 2 && i.y === 2)
  const diag3_2 = player2.some((i: XY) => i.x === 3 && i.y === 3)
  const diag4_2 = player2.some((i: XY) => i.x === 1 && i.y === 3)
  const diag5_2 = player2.some((i: XY) => i.x === 3 && i.y === 1)

  if (diag2_2 && ( (diag1_2 && diag3_2) || (diag4_2 && diag5_2) )) {
    return 2
  }

  // draw
  if(player1.length + player2.length === 9) {
    return 3 
  }

  // continue game
  return 0
}

export default checkWinner
