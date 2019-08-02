<template>
    <div id="header">
        <h1>Taskify, remembering things that you can't since 2019</h1>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link class="nav-link" to="/lists">Task Lists</router-link>
                    </b-nav-item>
                    <b-nav-item class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>      
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

