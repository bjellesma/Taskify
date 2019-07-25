<template>
    <div>
        <!-- can also use @submit as shorthand for v-on:submit -->
        <!-- prevent will prevent the page from automatically reloading -->
        <!-- In order to pass the actual event raised, we use $event -->
        <form @submit.prevent="addTodo($event);">
            <input type="text" name="title" placeholder="Add Task" v-model="title">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
//uuid is an npm package for generating unique keys on the fly
// import uuid from 'uuid'
export default {
    name: "AddTodo",
    //NOTE: remember that data has to return an object
    data(){
        return {
            title: ''
        }
        
    },
    methods: {
        addTodo(event){
            event.preventDefault();
            const newTodo = {
                //since our API call assigns a uuid automatically, we can skip the id prop for the object
                //id: uuid.v4(),
                title: this.title,
                completed: false
            }
            //send up to parent
            this.$emit('add-todo', newTodo)


            //clear title
            this.title = '';
        }
    }
}
</script>

<style scoped>
  form {
    display: flex;
  }
  input[type="text"] {
    flex: 10;
    padding: 5px;
  }
  input[type="submit"] {
    flex: 2;
  }
</style>
