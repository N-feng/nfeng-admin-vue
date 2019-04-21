<template>
    <div class="landing-page">
        <div class="menu" v-if="false">
            <span class="s1"></span>
            <span class="s2"></span>
            <span class="s3"></span>
        </div>
        <div class="page-content">
            <h1>Welcome, stranger</h1>
            <a @click="loginClick">Login Now</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        loginClick() {
            this.$emit('loginClick');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
