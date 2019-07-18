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
            // handle error
            alert(`error: ${error}`);
        })
        return {
            lists: names
        }
    }
}
</script>
