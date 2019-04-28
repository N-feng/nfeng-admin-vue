<template>
    <div class="nf-main">
        <header-box :showMenu="false" :isCollapse="isCollapse"></header-box>
        <sidebar-box :isCollapse="isCollapse"></sidebar-box>
        <div class="nf-main-wrapper" :class="{ 'is-collapse': isCollapse }">
            <!-- <div class="content-header">
                <nf-breadcrumb>
                <nf-breadcrumb-item :to="{ path: '/Admin' }">Admin</nf-breadcrumb-item>
                <nf-breadcrumb-item>{{ parentMenu ? parentMenu.title : '' }}</nf-breadcrumb-item>
                <nf-breadcrumb-item>{{ subMenu ? subMenu.title : '' }}</nf-breadcrumb-item>
                </nf-breadcrumb>
            </div> -->
            <div class="nf-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import headerBox from '../../../components/public/header-box.vue';
import sidebarBox from '../../../components/admin/sidebar-box.vue';
import { addClass, removeClass } from '../../../nfeng-pc-vue/nfeng-utils/utils/dom';
import { maxWidth } from '../../../utils';

export default {
    components: {
        headerBox,
        sidebarBox,
    },
    data() {
        return {
            isCollapse: false,
            parentMenu: '',
            subMenu: '',
        };
    },
    methods: {
        maxWidth(bool) {
            this.isCollapse = bool;
        },
    },
    // ...前面的省略
    // 通过两个钩子函数来添加移除class改变颜色
    mounted() {
        // document.getElementsByTagName("body")[0].className = "nf-main__page";
        addClass(document.body, 'skin-blue');
        maxWidth(800, this.maxWidth);
    },
    beforeDestroy() {
        // document.body.removeAttribute("class", "nf-main__page");
        removeClass(document.body, 'skin-blue');
    },
};
</script>

<style lang="css" scoped>
</style>
