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
                <router-link to="/auth/login">Login Now</router-link>
            </template>
        </div>
    </div>
</template>

<script>
import AuthModel from '../../model/AuthModel';

export default {
    data() {
        return {
            AuthModel: new AuthModel(),
        };
    },
    created() {
        this.AuthModel.getInfo();
    },
};
</script>

<style lang="css" scoped>
</style>
