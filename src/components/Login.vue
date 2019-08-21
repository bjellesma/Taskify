<template>
  <div class="card">
    <b-form class="login" @submit.prevent="login">
      <b-row class="my-1">
        <b-col sm="3">
          <label for="email">Email:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="email"
            v-model="email"
            type="email"
            required
            placeholder="Enter email"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-row class="my-1">
        <b-col sm="3">
          <label for="password">Password:</label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="password"
            v-model="password"
            type="password"
            required
            placeholder="Top Secret Government Clearence"
          ></b-form-input>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
    <!-- <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form> -->
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
              //redirect user to home
              // we use windows.location here because it forces an entire redirect
               //this.$router.push('/') will only redirect without reloading the entire page
              () => window.location.href = "/"
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