export interface XY {
  x: number
  y: number
}

export interface ResponseStartGame {
  statusCode: number
  message: string
  startGame?: boolean
}

export interface ResponsePlayerAction {
  statusCode: number
  message: string
}

export interface ResponseRoomTotals {
  statusCode: number
  message: string
  roomTotal: number
  watchers: number
  players: number
}

export interface User {
  name: string
  uuid: string
}

export interface PlayerPositions {
  player1: Array<XY>
  player2: Array<XY>
}

export interface GameData {
  playersTurn: number
  position1Claimed: number
  position2Claimed: number
  position3Claimed: number
  position4Claimed: number
  position5Claimed: number
  position6Claimed: number
  position7Claimed: number
  position8Claimed: number
  position9Claimed: number
  playerPositions: PlayerPositions
}

export interface Error {
  showError: boolean
  statusCode: number
  message: string
}

export interface ErrorMessage {
  400: string
  401: string
  404: string
  406: string
  default: string
}

export enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG
}

export interface ResponsePlayerJoin {
  statusCode: number
  message: string
  player?: number
}
