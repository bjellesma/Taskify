<template>
  <div class="home">
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">Taskify is an app to remember all of your tasks.</p>
      <hr class="my-4">
      <p>To get started, navigate to the button below and create a new task list.</p>
      <router-link to="/lists" class="btn btn-primary btn-lg">Task Lists</router-link> 
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
}
</script>
