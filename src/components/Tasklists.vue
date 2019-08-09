<template>
    <div class="row">
        <div v-bind:key="list.uid" v-for="list in lists" :id="list.uid" class="col-md-4 tasklist">
            <!-- <Tasklist v-bind:Item="list" /> -->
            <h3 class="title">
                <router-link :to="'list/'+list.uid" v-bind:list_name=list.list_name>
                    {{list.name}}
                </router-link>
            </h3>
            <div class="list">
                <flash-message></flash-message>
                <Tasklist v-bind:list-id=list.uid class="tasklist" />
            </div>
        </div>
        
    </div>
</template>

<script>
import Tasklists from '@/components/Tasklists'
import Tasklist from '@/components/Tasklist'
// import AddTodo from '@/components/AddTodo'
import axios from 'axios'
export default {
    name: 'Tasklists',
    components: {
        Tasklists,
        Tasklist,
        // AddTodo
    },
    props: [
        "lists",
        // 'tasks'
    ],
    // methods: {
    //     addTodo(newTodo){
    //         //get current uid of list
    //         let list_id = this.$route.params.uid
    //         //ES6 destructuring
    //         //similar to tuple unpacking in python
    //         const {title, completed} = newTodo;
    //         //NOTE: unfortunately, jsonplaceholder does not provide us with persistent storage so our data won't persist
    //         axios.post(
    //             'https://evening-temple-48538.herokuapp.com/api/addtask',
    //             {
    //             title: title,
    //             completed: completed,
    //             list_id: list_id
    //             }
    //         )
    //         .then(
    //             res => {
    //                 this.tasks = [...this.tasks, res.data]
    //             }
    //         )
    //         .catch(
    //             err => console.log(err)
    //         )
    //         //the spread operator (...) is used to make a seperate object for each item in the todo list
    //         //we're also adding our newTodo object
    //         //NOTE: only needed for local testing (no api)
    //         //this.todos = [...this.todos, newTodo]
            

    //     },
    //     markComplete(task, event){ 
    //         // TODO get state of checked
    //         let completed = event.target.checked
    //         axios.put('https://evening-temple-48538.herokuapp.com/api/updatetaskcomplete',
    //         {
    //             task_id: task.uid,
    //             //using not operator to negate value
    //             completed: completed
    //         })
    //         .then(
                
    //         )
    //         .catch(
    //             err => console.log(err)
    //         )
    //     }
    // }
}
</script>

<style scoped>
.tasklist {
    border:1px solid black;
    height:50em;
    padding:0;
}
.title {
    text-decoration: none;
    color: black;
    border-bottom:1px solid black;
}
.title a {
    color:black;
}
</style>

