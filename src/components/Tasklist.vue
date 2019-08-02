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
    props: ['tasks'],
     methods: {
    
    },
    methods: {
        addTodo(newTodo){
            //get current uid of list
            let list_id = this.$route.params.uid
            //ES6 destructuring
            //similar to tuple unpacking in python
            const {title, completed} = newTodo;
            //NOTE: unfortunately, jsonplaceholder does not provide us with persistent storage so our data won't persist
            axios.post(
                'http://localhost:3001/api/addtask',
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
            axios.put('http://localhost:3001/api/updatetaskcomplete',
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
    }
}
</script>

<style>
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

