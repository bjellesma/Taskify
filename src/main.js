import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(VueFlashMessage)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
