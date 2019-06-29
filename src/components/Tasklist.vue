<template>
    <div class="Tasklist">
        <h3>{{Item.name}}</h3>
    </div>
</template>

<script>
export default {
    name: 'Tasklist',
    props: ['Item']
}
</script>
