<template>
    <div class="Tasklist">
        <h3>
            <router-link :to="'list/'+Item.uid" v-bind:list_name=Item.list_name>
                {{Item.name}}
            </router-link>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'Tasklist',
    props: ['Item'],
     methods: {
    
    }
}
</script>
