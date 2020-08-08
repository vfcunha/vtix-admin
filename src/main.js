import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import WindowCard from '@/components/cards/WindowCard.vue';
import TabCard from '@/components/cards/TabCard.vue';
import VueGoogleCharts from 'vue-google-charts'
 

Vue.config.productionTip = false

Vue.use(VueGoogleCharts)

Vue.component('window-card', WindowCard);
Vue.component('tab-card', TabCard);

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
