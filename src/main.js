import Vue from 'vue'
import VueFlashMessage from 'vue-flash-message'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import PortalVue from 'portal-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//store is used to manage login states
import store from './store'
import Axios from 'axios'

require('vue-flash-message/dist/vue-flash-message.min.css');

Vue.prototype.$http = Axios;

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(VueFlashMessage)
Vue.use(BootstrapVue)
//login token
const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

function test(){
  alert('hello world')
}