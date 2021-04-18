import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    age: ''
  },
  mutations: {
    setAge (state, time) {
      state.age = time
      store.commit('saveAge')
    },
    resetAge (state) {
      state.age = ''
      store.commit('saveAge')
    },
    saveAge (state) {
      window.localStorage.setItem('age', state.age)
    },
    fetchAge (state) {
      state.age = window.localStorage.getItem('age') || ''
    }
  },
  actions: {
  },
  modules: {
  }
})
export default store
