import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vue-ydui/dist/ydui.rem.css'
import { DateTime } from 'vue-ydui/dist/lib.rem/datetime'

Vue.config.productionTip = false
Vue.component(DateTime.name, DateTime)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
