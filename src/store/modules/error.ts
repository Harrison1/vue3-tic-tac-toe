import { Error } from '../../types/interfaces'

export default {
  state: () => ({
    showError: false,
    statusCode: 0,
    message: ''
  }),
  getters: {},
  mutations: {
    SET_ERROR(state: Error, payload: Error) {
      state.showError = true,
      state.statusCode = payload.statusCode,
      state.message = payload.message
    },
    RESET_ERROR(state: Error) {
      state.showError = false,
      state.statusCode = 0,
      state.message = ''
    }
  },
  actions: {
    saveError({ commit }, data: { statusCode: number, message: string}) {
      commit('SET_ERROR', data)
    },
    resetError({ commit }) {
      commit('RESET_ERROR')
    }
  }
}
