<template>
    <aside class="nf-main-sidebar" :class="{ 'is-collapse': isCollapse }">
        <nf-menu class="nf-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            default-active="/user/list" :router="true" :collapse="isCollapse">
            <!-- 一级栏目 -->
            <nf-submenu v-for="(item,key) in routes" :key="key" :index="key + ''">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>{{ item.title }}</span>
                </template>
                <nf-menu-item-group>
                    <!-- 二级栏目 -->
                    <nf-menu-item v-for="(el,index) in item.children" :key="index" :index="el.path">{{ el.title }}</nf-menu-item>
                </nf-menu-item-group>
            </nf-submenu>
        </nf-menu>
    </aside>
</template>

<script>
import routes from '../../../router/routes.js'
export default {
    name: "nf-sidebar",
    props: {
        auth: Object,
        isCollapse: Boolean
    },
    computed: {
        routes() {
            return routes
        }
    },
    methods: {}
}
</script>

<style scoped>
.nf-menu:not(.nf-menu--collapse) {
    width: 230px;
}
.nf-menu {
    height: 100%;
}
</style>
