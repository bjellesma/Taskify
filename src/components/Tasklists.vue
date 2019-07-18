<template>
    <div>
        <div v-bind:key="list.uid" v-for="list in lists" :id="list.uid">
            <Tasklist v-bind:Item="list" />
        </div>
        
    </div>
</template>

<script>
import Tasklist from '@/components/Tasklist'
export default {
    name: 'Tasklists',
    components: {
        Tasklist
    },
    props: [
        "lists"
    ]
}
</script>
