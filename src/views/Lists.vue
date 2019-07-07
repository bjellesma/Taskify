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
                    list_display_name: 'Critical',
                    list_name: 'critical'
                },
                {
                    id:2,
                    list_display_name: 'High Priority',
                    list_name: 'high'
                },
                {
                    id:3,
                    list_display_name: 'Medium Priority',
                    list_name: 'medium'
                }
            ]
        }
    }
}
</script>
