<template>
  <div>
    <flash-message></flash-message>
    <Login />
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
