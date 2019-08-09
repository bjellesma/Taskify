<template>
    <div class="row">
        <div v-bind:key="list.uid" v-for="list in lists" :id="list.uid" class="col-md-4 tasklist">
            <!-- <Tasklist v-bind:Item="list" /> -->
            <h3 class="title">
                <router-link :to="'list/'+list.uid" v-bind:list_name=list.list_name>
                    {{list.name}}
                </router-link>
            </h3>
        </div>
        
    </div>
</template>

<script>
import Tasklists from '@/components/Tasklists'
export default {
    name: 'Tasklists',
    components: {
        Tasklists
    },
    props: [
        "lists"
    ]
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

