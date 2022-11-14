import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    main,
    user
  }
})
