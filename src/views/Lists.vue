<template>
    <div classs="lists">
        <h3>This is the task list page</h3>
        <Tasklists v-bind:lists="lists" />
    </div>
</template>

<script>
import Tasklists from '@/components/Tasklists'
export default {
    name: 'Lists',
    components: {
        Tasklists
    },
    data(){
        return {
            lists: [
                {
                    id:1,
                    name: 'List 1'
                },
                {
                    id:2,
                    name: 'List 2'
                },
                {
                    id:3,
                    name: 'List 3'
                }
            ]
        }
    }
}
</script>
