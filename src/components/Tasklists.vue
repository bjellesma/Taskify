<template>
    <div>
        <div v-bind:key="list.uid" v-for="list in lists" :id="list.uid">
            <!-- <Tasklist v-bind:Item="list" /> -->
            <router-link :to="'list/'+list.uid" v-bind:list_name=list.list_name>
                {{list.name}}
            </router-link>
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
