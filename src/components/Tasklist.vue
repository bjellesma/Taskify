<template>
    <div class="Tasklist">
        <h3>
            <a v-bind:list_name=Item.list_name v-on:click="getList(Item.list_name)">
                {{Item.list_display_name}}
            </a>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'Tasklist',
    props: ['Item'],
     methods: {
      getList: function (list_name) {
          const axios = require('axios');
        axios.get('http://localhost:3001/api/getlisttasks?list=critical')
        .then(function (response) {
            const response_object = Object.entries(response.data)
            for(var [key,value] of response_object){
                alert(`key: ${key} Value: ${value["task_display"]}`)
            }
            // handle success
            Array.from(response).forEach(element => {
                alert(element)
            });
        })
        .catch(function (error) {
            // handle error
            alert(error);
        })
        .finally(function () {
            alert('done')
        });
      }
    }
}
</script>
