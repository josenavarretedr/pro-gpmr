import { createStore } from 'vuex'
import ModuleRegister from './modules/Register'

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

store.registerModule('registerStore', ModuleRegister);

export default store