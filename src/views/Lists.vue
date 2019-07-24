<template>
    <div classs="lists">
        <h3>This is the task list page</h3>
        <flash-message></flash-message>
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
        var app = this
        let names = []
        const axios = require('axios');
        axios.get('http://localhost:3001/api/getlists')
        .then(function (response) {
            response.data.forEach(element => {
                names.push({
                    uid: element["uid"],
                    id: 12,
                    name: element["name"]
                })
            });
        })
        .catch(function (error) {
            app.flash('Oops, It looks like we could not connect to the server', 'error');
            return 
        })
        return {
            lists: names
        }
    }
}
</script>
