import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : JSON.parse(localStorage.getItem('user')) || 'failure'
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
            if(resp.data.authenticated){
              console.log(`login: ${resp.data.user}`)
              
              const token = resp.data.token
              const user = JSON.stringify(resp.data.user)
              console.log(`user: ${user.id}`)
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
          axios({url: 'http://localhost:3001/register', data: user, method: 'POST' })
          .then(resp => {
            
            console.log(`login 2 ${JSON.stringify(user)}`)
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
      console.log("has " + JSON.stringify(localStorage.getItem("user")))
      return state.user
    }
  }
})