import { createStore } from 'vuex'
import { IRootSate } from './types'

import login from './login/login'

const store = createStore<IRootSate>({
  state() {
    return {
      name: 'admin',
      age: 18
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
