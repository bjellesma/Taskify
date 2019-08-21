import Vue from 'vue'
import Router from 'vue-router'
import store from './store.js'
import Home from './views/Home.vue'
import Lists from './views/Lists.vue'
import List from './views/List.vue'
import Login from './views/Login.vue'
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'

Vue.use(Router)



let router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/lists',
      name: 'lists',
      component: Lists,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/list/:uid',
      name: 'list',
      component: List,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { 
        requiresAuth: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { 
        requiresAuth: true
      }
    }
  ]
})

//if the router has meta data require auth
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login') 
  } else {
    next() 
  }
})

export default router