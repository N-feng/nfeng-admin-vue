<template>
<aside class="nf-sidebar nf-home__sidebar">
    <nf-menu class="nf-menu" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <!-- 一级栏目 -->
        <nf-submenu v-for="(item,key) in RouterModel[0].children" :key="key" :index="key + ''">
            <template slot="title">{{ item.title }}</template>
            <!-- 二级栏目 -->
            <nf-menu-item v-for="(el,index) in item.children" :key="index">{{ el.title }}</nf-menu-item>
        </nf-submenu>
    </nf-menu>
</aside>
</template>

<script>
import RouterModel from '../../../router/RouterModel.js'
export default {
    name: "nf-sidebar",
    props: {
        auth: {
            type: Object
        }
    },
    computed: {
        RouterModel() {
            return RouterModel
        }
    },
    methods: {}
}
</script>

<style scoped>
.nf-menu {
    height: 100%;
}
</style>
