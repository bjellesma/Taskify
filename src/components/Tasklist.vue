<template>
    <div>
        <div v-bind:key="task.uid" v-for="task in tasks" :id="task.uid">
            <!-- <Tasklist v-bind:Item="list" /> -->
            <div v-bind:task_name=task.name>
                {{task.name}}
            </div>
        </div>
    </div>
</template>

<script>
import Tasklist from '@/components/Tasklist'
export default {
    name: 'Tasklist',
    components: {
        Tasklist
    },
    props: ['tasks'],
     methods: {
    
    }
}
</script>
