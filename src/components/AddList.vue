<template>
  <form @submit.prevent="addList($event);">
        <div class="form-group">
            <input type="text" name="name" placeholder="Add List" v-model="name">
        </div>
        <input type="submit" value="Create" class="btn btn-primary">
    </form>
</template>

<script>
export default {
    name: 'AddList',
    //name must be added as an intial attribute for us to be able to reference it
    data(){
        return {
            name: ''
        }
    },
    methods: {
        addList(event){
            event.preventDefault();
            //we can reference this.name because we are using a v-model above
            const newList = {
                name: this.name
            }
            //send up to parent
            this.$emit('add-list', newList)


            //clear name
            this.name = '';
        }
    }
}
</script>

<style>

</style>