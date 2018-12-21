<template>
    <div class="nf-main">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <nfHeader :auth="auth" :isCollapse="isCollapse" @collapseClick="isCollapse = !isCollapse"></nfHeader>
        <nfSidebar :auth="auth" :isCollapse="isCollapse"></nfSidebar>
        <div class="nf-main-wrapper" :class="{ 'is-collapse': isCollapse }">
            <div class="content-header">
                <nf-breadcrumb>
                    <nf-breadcrumb-item :to="{ path: '/' }">首页</nf-breadcrumb-item>
                    <nf-breadcrumb-item>{{ parentMenu ? parentMenu.title : '' }}</nf-breadcrumb-item>
                    <nf-breadcrumb-item>{{ subMenu ? subMenu.title : '' }}</nf-breadcrumb-item>
                </nf-breadcrumb>
            </div>
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
import { addClass, removeClass } from '../../nfeng-pc-vue/nfeng-utils/utils/dom.js'
import router from '../../router/routes.js'

export default {
    components: {
        // HelloWorld,
        nfHeader,
        nfSidebar
    },
    data() {
        return {
            auth: new AuthModel(),
            isCollapse: false,
            parentMenu: '',
            subMenu: ''
        }
    },
    watch: {
        // 如果路由有变化，会再次执行该方法
        "$router": "getMenuTitle"
    },
    computed: {
        router() {
            return router
        }
    },
    methods: {
        getMenuTitle() {
            let path = this.$router.currentRoute.path;
            router.forEach(element => {
                element.children.forEach(el => {
                    if (el.path === path) {
                        this.parentMenu = element;
                        this.subMenu = el;
                    }
                });
            });
        }
    },
    //...前面的省略
    //通过两个钩子函数来添加移除class改变颜色
    mounted: function() {
        addClass(document.body, 'skin-blue');
        // document.getElementsByTagName("body")[0].className = "nf-main__page";
    },
    beforeDestroy: function() {
        removeClass(document.body, 'skin-blue');
        // document.body.removeAttribute("class", "nf-main__page");
    },
    created() {
        // this.auth.getUserInfo();
        this.getMenuTitle();
    }
}
</script>
