import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { actorFilter } from './filter'

Vue.config.productionTip = false

Vue.filter('actorFilter', actorFilter)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
