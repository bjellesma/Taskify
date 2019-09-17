<template>
    <div classs="lists">
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
    computed : {
      isLoggedIn : function(){ return this.$store.getters.isLoggedIn},
      user: function(){
          return this.$store.getters.user
      }
    },
    data(){
        var app = this
        let names = []
        const axios = require('axios');
        axios.get('https://evening-temple-48538.herokuapp.com/api/getlists?limit=12', {'headers': {'user_id': this.$store.getters.user.id}})
        .then(function (response) {
            response.data.forEach(element => {
                names.push({
                    uid: element["uid"],
                    id: 12,
                    name: element["name"],
                    user_id: element["user_id"]
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
