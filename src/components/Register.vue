<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Username</label>
      <div>
          <input id="username" type="text" v-model="username" required autofocus>
      </div>

      <label for="email" >E-Mail Address</label>
      <div>
          <input id="email" type="email" v-model="email" required>
      </div>

      <label for="password">Password</label>
      <div>
          <input id="password" type="password" v-model="password" required>
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
          <input id="password-confirm" type="password" v-model="password_confirmation" required>
      </div>

      <div>
          <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        username : "",
        email : "",
        password : "",
        password_confirmation : ""
      }
    },
    methods: {
      // method to register users, successfully registered users are redirected to the home page
      register: function () {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
        this.$store.dispatch('register', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>