import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import App from './App.vue'
import router from './router'

require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.config.productionTip = false
Vue.use(VueFlashMessage)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
