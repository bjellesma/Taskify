<template>
  <div>
    <flash-message></flash-message>
    <Login />
    <p>Don't have an account? <router-link to="/register">Register</router-link></p>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login'
export default {
  name: 'Login.Component',
  components: {
      Login
  }
}
</script>
