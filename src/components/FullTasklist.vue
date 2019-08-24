<template>
  <div>
    <h1>All Tasks for {{list.data.name}}</h1>
    <div v-for="task in tasks">{{task.title}}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FullTasklist',
  data(){
        var limit = 50
        let route_name = this.$route.name
        if(route_name == 'lists'){
            limit=5
        }
        //get current uid of list
        let uid = this.listId ? this.listId : this.$route.params.uid
        var app = this
        var list = {}
        let tasks = []
        const axios = require('axios');
        var req = axios.get(`https://evening-temple-48538.herokuapp.com/api/getlist?id=${uid}`)
          .then(function (response) {
              //me must add a property to the object rather than redefine it so that the promise will complete successfully
              list['data'] = response.data
              console.log(`list in promise: ${list}`)
          })
          .catch(function (error) {
              app.flash('Oops, It looks like we could not connect to the server', 'error');
              return 
          })
        var req2 = axios.get(`https://evening-temple-48538.herokuapp.com/api/gettasks?id=${uid}&limit=${limit}`)
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
        console.log(`list: ${JSON.stringify(list)}`)
        return {
            list: list,
            tasks: tasks
        }
    }
}
</script>

<style>

</style>