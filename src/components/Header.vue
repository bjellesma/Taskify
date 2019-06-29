<template>
    <div id="header">
        <h1>This is the header</h1>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/lists">Task Lists</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

