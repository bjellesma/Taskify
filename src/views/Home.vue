<template>
  <div class="home">
    <b-jumbotron header="Taskify.IO" lead="Remembering things that you can't since 2019">
      <h2>Next Steps</h2>
      <div v-if="isLoggedIn">
        <p>
          Head on over to the Task Lists!
        </p>
        <router-link to="/lists" class="btn btn-primary btn-lg">Task Lists</router-link> 
      </div>
      <div v-else>
        <p>
          Please Login!
        </p>
        <router-link to="/login" class="btn btn-primary btn-lg">Login</router-link> 
      </div>
      <hr class="my-4">
      <h2>What is this</h2>
      <p class="lead">We here at Taskify.IO know full well how important it is to remember tasks. That's why we've created this app to help you remember those tasks.</p>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  computed: {
    isLoggedIn : function(){ return this.$store.getters.isLoggedIn}
  }
}
</script>
