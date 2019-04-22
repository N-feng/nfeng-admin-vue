<template>
    <div class="landing-page">
        <div class="menu" v-if="false">
            <span class="s1"></span>
            <span class="s2"></span>
            <span class="s3"></span>
        </div>
        <div class="page-content">
            <template v-if="AuthModel">
                <h1>Welcome, {{AuthModel.username}}</h1>
            </template>
            <template v-else>
                <h1>Welcome, stranger</h1>
                <a @click="showLogin">Login Now</a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    props: ['AuthModel'],
    methods: {
        showLogin() {
            this.$router.push('/Login');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
