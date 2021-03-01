<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'JobList' }">List Jobs</router-link> |
        <router-link :to="{ name: 'About' }">About</router-link>
    </div>

    <!-- Navigasi dengan programmatically dengan router -->
    <button @click="redirectPage" class="button-nav">Redirect</button>
    <button @click="gobackPage" class="button-nav">Go Back</button>
    <button @click="forwardPage" class="button-nav">Go Forward</button>

    <router-view />
</template>

<script>
export default {
    name: 'AppComponent',
    methods: {
        redirectPage() {
            this.$router.push({ name: 'Homepage' });
        },
        gobackPage() {
            this.$router.go(-1);
        },
        forwardPage() {
            this.$router.go(1);
        },
    },
};
</script>

<style lang="scss">
#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
        padding: 10px;
        border-radius: 4px;

        &.router-link-exact-active {
            color: #fff;
            background: crimson;
        }
    }
}

.button-nav {
    margin: 0 10px;
    padding: 10px;
    border: none;
    border-radius: 4px;
}
</style>
