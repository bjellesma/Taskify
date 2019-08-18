<template>
  <div class="card">
    <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
  </div>
</template>

<script>
import {destroy_messages} from '../functions/globals.js'
export default {
    name: 'Login',
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
        //function to get login
        login: function () {
            let email = this.email 
            let password = this.password
            this.$store.dispatch(
                'login', 
                { email, password }
            )
            .then(
              () => this.$router.push('/')
            )
            .catch(
              err => {
                destroy_messages()
                this.flash(err, 'error')
              }
            )
      }
    }
}
</script>

<style>

</style>