<template>
    <div class="list">
        <flash-message></flash-message>
        <Tasklist v-bind:tasks="tasks" />
    </div>
</template>

<script>
// @ is an alias to /src
import Tasklist from '@/components/Tasklist'

export default {
  name: 'list',
  components: {
      Tasklist
  },
  data(){
    //get current uid of list
    let uid = this.$route.params.uid
    var app = this
    let tasks = []
    const axios = require('axios');
    axios.get(`https://evening-temple-48538.herokuapp.com/api/gettasks?id=${uid}`)
    .then(function (response) {
        response.data.forEach(element => {
            tasks.push({
                uid: element["uid"],
                id: 12,
                title: element["title"],
                completed: element["completed"]
            })
        });
    })
    .catch(function (error) {
        app.flash('Oops, It looks like we could not connect to the server', 'error');
        return 
    })
    return {
        tasks: tasks
    }
  }
}
</script>
