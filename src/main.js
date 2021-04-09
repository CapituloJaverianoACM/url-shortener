import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import App from './learn-more.vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
new Vue({
  render: h => h(App),
}).$mount('#learn-more')
