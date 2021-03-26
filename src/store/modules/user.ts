import { User } from '../../types/interfaces'

export default {
  state: () => ({
    name: '',
    uuid: ''
  }),
  getters: {},
  mutations: {
    SET_NAME(state: User, payload: string) {
      state.name = payload
    },
    SET_UUID(state: User, payload: string) {
      state.uuid = payload
    }
  },
  actions: {
    saveName({ commit }, data: string) {
      commit('SET_NAME', data)
    },
    saveUUID({ commit }, data: string) {
      commit('SET_UUID', data)
    }
  }
}
