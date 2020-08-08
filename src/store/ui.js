

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
            icon: 'assignment',
            title: 'Forms',
            link: '/forms'
          },
          {
            icon: 'ballot',
            title: 'Tables',
            link: '/tables'
          },
          {
            icon: 'table_chart',
            title: 'Grid System',
            link: '/grid'
          },
          {
            icon: 'pie_chart',
            title: 'Charts',
            items: [
              { 
                title: 'ChartJs',
                link: '/charts/chartjs'
              },
              {
                title: 'Google Charts',
                link: '/charts/google'
              }
            ]
          },
          {
            icon: 'settings',
            title: 'Settings',
            link: '/settings'
          }
        ]
      },
      footerBar: {
        inset: false,
        author: 'Vítor Cunha'
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