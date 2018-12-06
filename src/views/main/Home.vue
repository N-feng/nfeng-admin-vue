<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <nfHeader :auth="auth"></nfHeader>
        <nfSidebar :auth="auth"></nfSidebar>
        <div class="nf-home__wrapper">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import nfHeader from './components/nf-header'
    import nfSidebar from './components/nf-sidebar'
    import AuthModel from '../../model/AuthModel'

    export default {
        name: 'home',
        components: {
            // HelloWorld,
            nfHeader,
            nfSidebar
        },
        data () {
            return {
                auth: new AuthModel()
            }
        },
        //...前面的省略
        //通过两个钩子函数来添加移除class改变颜色
        mounted: function() {
            document.getElementsByTagName("body")[0].className="nf-home__page";
        },
        beforeDestroy: function() {
            document.body.removeAttribute("class","nf-home__page");
        },
        created () {
            // this.auth.getUserInfo();
        }
    }
</script>
