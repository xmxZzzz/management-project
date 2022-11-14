export default {
  state: {
    token: '',
    user: null
  },
  getters: {
    user: (state) => {
      const userInfoString = sessionStorage.getItem('user')
      if (userInfoString) {
        state.user = JSON.parse(userInfoString)
      }
      return state.user
    }
  },
  mutations: {
    getToken (state) {
      state.token = state.token || sessionStorage.getItem('token')
    },
    setToken (state, value) {
      state.token = value
      sessionStorage.setItem('token', value)
    },
    clearToken (state) {
      state.token = ''
      sessionStorage.removeItem('token')
    },
    setUser (state, user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      state.user = user
    },
    clearUser (state) {
      state.user = ''
      sessionStorage.removeItem('user')
    }
  }
}
