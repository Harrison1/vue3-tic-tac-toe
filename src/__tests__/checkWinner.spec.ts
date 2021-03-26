import { XY } from '../types/interfaces'
import checkWinner from '../utils/checkWinner'

describe('checkWinner', () => {
  
  it('should return 0', () => {
    const player1: Array<XY> = []
    const player2: Array<XY> = []
    expect(checkWinner(player1, player2)).toEqual(0)
  })

  it('should return 0 with empty arry and one value', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }]
    const player2: Array<XY> = []
    expect(checkWinner(player1, player2)).toEqual(0)
  })

  it('should return 0 with less than three values in array', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }]
    const player2: Array<XY> = [{ x: 2, y: 2 }]
    expect(checkWinner(player1, player2)).toEqual(0)
  })


  it('should return 0 with less than three values in array', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }]
    const player2: Array<XY> = [{ x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(0)
  })

  it('should return 0 with less than three values in array', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }]
    const player2: Array<XY> = [{ x: 2, y: 2 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(0)
  })

  it('should return 0 with less than three values in array', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 1, y: 2 }]
    const player2: Array<XY> = [{ x: 2, y: 1 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(0)
  })

  it('should return 1 when Player 1 Wins Row 1', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }]
    const player2: Array<XY> = [{ x: 2, y: 1 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 1 when Player 1 Wins Row 2', () => {
    const player1: Array<XY> = [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 1 when Player 1 Wins Row 3', () => {
    const player1: Array<XY> = [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }]
    const player2: Array<XY> = [{ x: 2, y: 1 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 2 when 2 Wins Row 1', () => {
    const player1: Array<XY> = [{ x: 2, y: 2 }, { x: 3, y: 2 }, { x: 2, y: 1 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 2 when Player 2 Wins Row 2', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 3, y: 3 }]
    const player2: Array<XY> = [{ x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 2 when Player 2 Wins Row 3', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 3 }]
    const player2: Array<XY> = [{ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 1 when Player 1 Wins Column 1', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
    const player2: Array<XY> = [{ x: 3, y: 3 }, { x: 3, y: 2 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 1 when Player 1 Wins Column 2', () => {
    const player1: Array<XY> = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }]
    const player2: Array<XY> = [{ x: 3, y: 3 }, { x: 2, y: 1 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 1 when Player 1 Wins Column 3', () => {
    const player1: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 3, y: 2 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 2 when Player 2 Wins Column 1', () => {
    const player1: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 2 when Player 2 Wins Column 2', () => {
    const player1: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 2 when Player 2 Wins Column 3', () => {
    const player1: Array<XY> = [{ x: 1, y: 2 }, { x: 2, y: 2 }]
    const player2: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 1 when Player 1 Wins Diagonal left to right', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 1 when Player 1 Wins Diagonal right to left', () => {
    const player1: Array<XY> = [{ x: 3, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(1)
  })

  it('should return 2 when Player 2 Wins Diagonal left to right', () => {
    const player1: Array<XY> = [{ x: 1, y: 3 }, { x: 2, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 2 when Player 2 Wins Diagonal 2 right to left', () => {
    const player1: Array<XY> = [{ x: 1, y: 2 }, { x: 2, y: 2 }]
    const player2: Array<XY> = [{ x: 3, y: 1 }, { x: 2, y: 2 }, { x: 1, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(2)
  })

  it('should return 3 when a draw happens', () => {
    const player1: Array<XY> = [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 3, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(3)
  })

  it('should return 3 when a draw happens', () => {
    const player1: Array<XY> = [{ x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }]
    const player2: Array<XY> = [{ x: 1, y: 2 }, { x: 1, y: 3 }, { x: 2, y: 1 }, { x: 3, y: 3 }]
    expect(checkWinner(player1, player2)).toEqual(3)
  })

})
