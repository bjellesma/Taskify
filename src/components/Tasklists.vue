<template>
    <div>
        <b-row class="row-inside">
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
                <!-- TODO: Unless this was all of the tasks -->
                <router-link :to="'list/'+list.uid" v-bind:list_name=list.list_name>
                        <b-button variant="success">See All Tasks</b-button>
                </router-link>
                
            </div>
            <AddList v-on:add-list="addList" class="col-md-4" />
        </b-row>
    </div>
</template>

<script>
import Tasklists from '@/components/Tasklists'
import Tasklist from '@/components/Tasklist'
import AddList from '@/components/AddList'
// import AddTodo from '@/components/AddTodo'
import axios from 'axios'
export default {
    name: 'Tasklists',
    components: {
        Tasklists,
        Tasklist,
        AddList
    },
    
    props: [
        "lists",
        // 'tasks'
    ],
    methods: {
        addList(newList){
            //TODO: get user id
            const user_id=this.$store.getters.user.id
            console.log(`id: ${user_id}`)
            //ES6 destructuring
            //similar to tuple unpacking in python
            const {name} = newList;
            //NOTE: unfortunately, jsonplaceholder does not provide us with persistent storage so our data won't persist
            axios.post(
                'https://evening-temple-48538.herokuapp.com/api/addlist',
                {
                name: name,
                user_id: user_id
                }
            )
            .then(
                res => {
                    this.lists = [...this.lists, res.data]
                }
            )
            .catch(
                err => console.log(err)
            )
        }
    }
}
</script>

<style scoped>
.row-inside {
    margin: 0;
}
.tasklist {
    border:1px solid black;
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

