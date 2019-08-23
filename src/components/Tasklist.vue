<template>
    <div>
        <AddTodo v-on:add-todo="addTodo" />
        <div v-bind:key="task.uid" v-for="task in tasks" :id="task.uid">
            <!-- <Tasklist v-bind:Item="list" /> -->
            <div v-bind:task_id=task.id class="form-group">
                <input class="form-check-input" type="checkbox" v-on:change="markComplete(task, $event)" :checked="task.completed">
                <label>{{task.title}}</label> 
            </div>
            
        </div>
        
    </div>
</template>

<script>
import Tasklist from '@/components/Tasklist'
import AddTodo from '@/components/AddTodo'
import axios from 'axios'
export default {
    name: 'Tasklist',
    components: {
        Tasklist,
        AddTodo
    },
    props: ['listId'],
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      user: function(){
          return this.$store.getters.user
      }
    },
    methods: {
        addTodo(newTodo){
            //get current uid of list from either being bound or taking from the url
            let list_id = this.listId ? this.listId : this.$route.params.uid
            //ES6 destructuring
            //similar to tuple unpacking in python
            const {title, completed} = newTodo;
            //NOTE: unfortunately, jsonplaceholder does not provide us with persistent storage so our data won't persist
            axios.post(
                'https://evening-temple-48538.herokuapp.com/api/addtask',
                {
                title: title,
                completed: completed,
                list_id: list_id
                }
            )
            .then(
                res => {
                    this.tasks = [...this.tasks, res.data]
                }
            )
            .catch(
                err => console.log(err)
            )
            //the spread operator (...) is used to make a seperate object for each item in the todo list
            //we're also adding our newTodo object
            //NOTE: only needed for local testing (no api)
            //this.todos = [...this.todos, newTodo]
            

        },
        markComplete(task, event){ 
            // TODO get state of checked
            let completed = event.target.checked
            axios.put('https://evening-temple-48538.herokuapp.com/api/updatetaskcomplete',
            {
                task_id: task.uid,
                //using not operator to negate value
                completed: completed
            })
            .then(
                
            )
            .catch(
                err => console.log(err)
            )
        }
    },
    data(){
        var limit = 50
        let route_name = this.$route.name
        if(route_name == 'lists'){
            limit=5
        }
        //get current uid of list
        let uid = this.listId ? this.listId : this.$route.params.uid
        var app = this
        let tasks = []
        const axios = require('axios');
        axios.get(`http://localhost:3001/api/gettasks?id=${uid}&limit=${limit}`)
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

<style scoped>
* {
  box-sizing: border-box;
  margin:0;
  padding:0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height:1.4;
}
  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }
  .btn:hover {
    background: #666;
  }
</style>

