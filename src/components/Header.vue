<template>
    <div id="header">
        <h1>Taskify, remembering things that you can't since 2019</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/lists">Task Lists</router-link> |
            <router-link to="/about">About</router-link>
            <router-link to="/list">List</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

