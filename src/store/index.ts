import { createStore } from 'vuex'
import error from '../store/modules/error'
import game from '../store/modules/game'
import user from '../store/modules/user'

const store = createStore({
  modules: {
    error,
    game,
    user
  }
})

export default store
