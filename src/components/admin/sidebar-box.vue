<template>
    <aside class="nf-main-sidebar" :class="{ 'is-collapse': isCollapse }">
        <nf-menu 
            class="nf-menu" 
            background-color="#545c64" 
            text-color="#fff" 
            active-text-color="#ffd04b"
            :default-active="defaultActive" 
            :router="true" 
            :collapse="isCollapse" 
            @select="select">
            <nf-menu-item v-for="(el,key) in menuList" :key="key" :index="el.path">
                <i :class="iconClass[key]"></i>
                <span slot="title">{{ el.title }}</span>
            </nf-menu-item>
        </nf-menu>
    </aside>
</template>

<script>
export default {
    props: {
        isCollapse: Boolean,
        menuList: Array,
    },
    data() {
        return {
            iconClass: ['el-icon-location', 'el-icon-menu', 'el-icon-document', 'el-icon-setting'],
            defaultActive: '',
        };
    },
    methods: {
        select(val) {
            this.$emit('select', val);
        },
    },
    created() {
        this.defaultActive = window.location.pathname;
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
