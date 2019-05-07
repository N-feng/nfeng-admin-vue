<template>
    <div class="landing-page">
        <div class="menu" v-if="false">
            <span class="s1"></span>
            <span class="s2"></span>
            <span class="s3"></span>
        </div>
        <div class="page-content">
            <template v-if="username">
                <h1>Welcome, {{username}}</h1>
            </template>
            <template v-else>
                <h1>Welcome, stranger</h1>
                <router-link to="/auth/login">Login Now</router-link>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
        };
    },
    created() {
        this.username = window.localStorage.getItem('username');
    },
};
</script>

<style lang="css" scoped>
</style>
