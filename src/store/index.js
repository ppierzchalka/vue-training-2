import Vue from 'vue'
import Vuex from 'vuex'
import { getPathItems } from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    history: []
  },
  mutations: {
    setRoute (state, pageNo) {
      state.history = [...state.history, pageNo]
    }
  },
  getters: {
    pathItems: state => getPathItems(state.history)
  }
})
