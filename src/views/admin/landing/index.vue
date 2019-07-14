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
                <router-link to="/login">Login Now</router-link>
            </template>
        </div>
    </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters.username
    },
  },
}
</script>

<style>
    .ant-layout {
        background: url(https://cdn.nfeng.net.cn/upload/winnower.jpeg) no-repeat 50% 50%;
        background-size: cover;
    }
</style>
