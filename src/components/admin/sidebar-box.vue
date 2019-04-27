<template>
    <aside class="nf-main-sidebar" :class="{ 'is-collapse': isCollapse }">
        <nf-menu 
            class="nf-menu" 
            background-color="#545c64" 
            text-color="#fff" 
            active-text-color="#ffd04b"
            default-active="userlist" 
            :router="true" 
            :collapse="isCollapse" 
            @select="select">
            <nf-menu-item v-for="(el,key) in MenuModel.list" :key="key" :index="el.path">
                <i :class="iconClass[key]"></i>
                <span slot="title">{{ el.title }}</span>
            </nf-menu-item>
        </nf-menu>
    </aside>
</template>

<script>
import { adminRouter } from '../../router';
import MenuModel from '../../model/MenuModel';

export default {
    props: {
        isCollapse: Boolean,
    },
    data() {
        return {
            adminRouter,
            iconClass: ['el-icon-location', 'el-icon-menu', 'el-icon-document', 'el-icon-setting'],
            MenuModel: new MenuModel(),
        };
    },
    methods: {
        select() {
            this.$emit('select');
        },
    },
    created() {
        this.MenuModel.getMenu();
    },
};
</script>

<style scoped>
.nf-menu:not(.nf-menu--collapse) {
    width: 230px;
}
.nf-menu {
    height: 100%;
}
</style>
