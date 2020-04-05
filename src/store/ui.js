

export const ui = {
  state: {
    layout: {
      dark: true,
      drawers: ['Default (no property)', 'Permanent', 'Temporary'],
      sideBar: {
        dense: false,
        model: null,
        type: 'default (no property)',
        clipped: false,
        floating: false,
        miniVariant: false,
        expandOnHover: false,
        items: [
          {
            icon: 'dashboard',
            title: 'Dashboard',
            link: '/'
          },
          {
            icon: 'settings',
            title: 'Settings',
            link: '/settings'
          }
        ]
      },
      footerBar: {
        inset: false
      }
    }
  },
  getters: {
    layout (state) {
      return state.layout
    }
  },
  mutations: {
    switchDark(state, payload) {
      state.layout.dark = payload
    }
  },
  actions: {
    switchDark({commit}, payload) {
      commit('switchDark', payload);
    }
  }
}