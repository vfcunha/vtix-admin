import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Settings from '../views/settings/settings.vue'
import Grid from '../views/grid/Grid.vue'
import Charts from '../views/charts/chartjs/Charts.vue'
import GoogleCharts from '@/views/charts/google/Charts.vue'
import Forms from '../views/forms/Forms'
import Tables from '../views/tables/Tables'
import Signin from '../views/auth/Signin'



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
    path: '/charts/chartjs',
    name: 'charts',
    component: Charts
  },
  {
    path: '/charts/google',
    name: 'google-charts',
    component: GoogleCharts
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
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
