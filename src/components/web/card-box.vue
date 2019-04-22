<template lang="html">
    <div class="card-box">
        <div class="header">
            <img src="https://cdn.nfeng.net.cn/upload/me.jpg" alt="">
        </div>
        <div class="content">
            <h2>Nfeng</h2>
            <h4>Web Devlopoer - Web Designer</h4>
            <span>A web developer is a programmer who specializes In, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.</span>
            <social-box></social-box>
        </div>
        <div class="footer">
            <p>Welcome, stranger</p>
        </div>
    </div>
</template>

<script>
import socialBox from './social-box.vue';

export default {
    components: {
        socialBox,
    },
};
</script>

<style lang="css" scoped>
</style>
