<template>
  <div>
    <h4>Register</h4>
    <b-form @submit.prevent="register">
      <b-row>
        <b-col sm="3">
          <label for="username">Username</label>
        </b-col>
        <b-col sm="9">
            <b-form-input 
              id="username" 
              type="text" 
              v-model="username" 
              required
              placeholder="Superman"
            ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <label for="email" >E-Mail Address</label>
        </b-col>
        <b-col sm="9">
            <b-form-input 
              id="email" 
              type="email" 
              v-model="email" 
              required
              placeholder="Superman@fortresses"
            ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <label for="password">Password</label>
        </b-col>
        <b-col sm="9">
            <b-form-input 
              id="password" 
              type="password" 
              v-model="password" 
              required
              placeholder="Kryptonite1"
            ></b-form-input>
        </b-col>
      </b-row>

      <b-row>
        <b-col sm="3">
          <label for="password-confirm">Confirm Password</label>
        </b-col>
        <b-col sm="9">
            <b-form-input 
              id="password-confirm" 
              type="password" 
              v-model="password_confirmation" 
              required
            ></b-form-input>
        </b-col>
      </b-row>
      <b-button type="submit" variant="primary">Register</b-button>
    </b-form>
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
       .then(() => this.$router.push('/login'))
       .catch(err => console.log(err))
      }
    }
  }
</script>