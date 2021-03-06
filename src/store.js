import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var user = null
if(localStorage.getItem('user')!='undefined'){
  user = JSON.parse(localStorage.getItem('user'))
}
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : user || 'failure'
  },
  mutations: {
    auth_request(state){
        state.status = 'loading'
      },
      auth_success(state, token, user){
        state.status = 'success'
        state.token = token
        state.user = user
      },
      auth_error(state){
        state.status = 'error'
      },
      logout(state){
        state.status = ''
        state.token = ''
        state.user = {}
      },
  },
  actions: {
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'https://evening-temple-48538.herokuapp.com/login', data: user, method: 'POST' })
          .then(resp => {
            //if properly authenticated, store the user object and token in localstorage and set axios to have an authenicated header
            if(resp.data.authenticated){
              const token = resp.data.token
              const user = JSON.stringify(resp.data.user)
              localStorage.setItem('token', token)
              localStorage.setItem('user', user)
              axios.defaults.headers.common['Authorization'] = token
              commit('auth_success', token, user)
              resolve(resp)
            }
            else{
              reject(resp.data.message)
            }
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    register({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'https://evening-temple-48538.herokuapp.com/register', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.token
            const user = JSON.stringify(resp.data.user)
            localStorage.setItem('token', token)
            localStorage.setItem('user', user)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          })
        })
      },
      logout({commit}){
        return new Promise((resolve, reject) => {
          commit('logout')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          delete axios.defaults.headers.common['Authorization']
          resolve()
        })
      }
  },
  getters : {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    user: state => {
      return state.user
    }
  }
})