import { GameData } from '../../types/interfaces'
import gameDefaults from '../../constants/gameDefaults'

export default {
  state: () => ({
    ...gameDefaults
  }),
  getters: {},
  mutations: {
    SET_DEFAULTS(state: GameData) {
      state = {
        ...gameDefaults
      }
    },
    UPDATE_GAME_DATA(state: GameData, payload: GameData) {
      state = {
        ...payload
      }
    },
  },
  actions: {
    saveDefaults({ commit }) {
      commit('SET_DEFAULTS')
    },
    updateGameData({ commit }, data: GameData) {
      commit('UPDATE_GAME_DATA', data)
    }
  }
}
