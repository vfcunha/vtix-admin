import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/settings/settings.vue'
import Grid from '../views/grid/Grid.vue'
import Charts from '../views/charts/Charts.vue'
import Forms from '../views/forms/Forms'
import Tables from '../views/tables/Tables'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/charts',
    name: 'charts',
    component: Charts
  },
  {
    path: '/forms',
    name: 'forms',
    component: Forms
  },
  {
    path: '/tables',
    name: 'tables',
    component: Tables
  },
  {
    path: '/grid',
    name: 'grid',
    component: Grid
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
