export const auth = {
  state: {
    user: null,
    error: null,
    authLoading: false
  },
  getters: {
    user (state) {
      return state.user
    },
    error (state) {
      return state.error
    },
    isAuthenticated (state) {
      if ( state.user == null && localStorage.userId )
        state.user = {id:localStorage.userId}
      return state.user !== null && state.user !== undefined
    },
    authLoading (state) {
      return state.authLoading
    }
  },
  mutations: {
    setUser (state, payload) {
      console.log(payload)
      if (payload == null)
        localStorage.clear()
      else
        localStorage.userId = payload.id
      state.user = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    setAuthLoading (state, payload) {
      state.authLoading = payload
    },
  },
  actions: {
    signout ({commit}) {
      commit('setUser', null)
    },
    signup ({commit}, payload) {
      commit('setAuthLoading', true)
      commit('clearError')

      setTimeout(() => {
        const newUser = {
          id: payload.uid
        }
        commit('setUser', newUser)
  
        commit('setAuthLoading', false)
      }, 300)

      commit('setError', 'error')
    },
    signin ({commit}, payload) {
      commit('setAuthLoading', true)
      commit('clearError')

      const newUser = {
        id: payload.uid
      }
      commit('setUser', newUser)
      commit('setAuthLoading', false)
      commit('setError', 'error')
    },
    clearError ({commit}) {
      commit('clearError')
    }
  }
}
