<template>
    <a-layout>
        <a-layout-header>
            <div class="header-content">
                <div class="logo fs16">
                    <a href="javascript:;">nfeng.net.cn</a>
                </div>
                <a-menu theme="light"
                        mode="horizontal"
                        :defaultSelectedKeys="['1']"
                        id="nav">
                    <a-menu-item key="1">Admin</a-menu-item>
                </a-menu>
            </div>
        </a-layout-header>
        <a-layout-content>
<!--            <a-breadcrumb :style="{ margin: '16px 0' }">-->
<!--                <a-breadcrumb-item>Home</a-breadcrumb-item>-->
<!--                <a-breadcrumb-item>List</a-breadcrumb-item>-->
<!--                <a-breadcrumb-item>App</a-breadcrumb-item>-->
<!--            </a-breadcrumb>-->
<!--            <div :style="{ background: '#fff', padding: '24px', minHeight: '380px' }">-->
<!--                Content-->
<!--            </div>-->
            <nf-card></nf-card>
        </a-layout-content>
<!--        <a-layout-footer :style="{ textAlign: 'center' }">-->
<!--            Ant Design ©2018 Created by Ant UED-->
<!--        </a-layout-footer>-->
    </a-layout>
</template>

<script>
export default {
  name: 'layout',
}
</script>

<style lang="scss" scoped>
    /*@import "../../assets/sass/index.scss";*/
    .ant-layout-header {
        background: #fff;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo {
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }

    .logo {
    //transition: 0.4s;
        text-decoration: none;
    }

    #nav.ant-menu-horizontal > .ant-menu-item {
        height: 64px;
        line-height: 60px;
        min-width: 72px;
        border-top: 2px solid transparent;
    }

    #nav.ant-menu-horizontal > .ant-menu-item-selected {
        border-top: 2px solid #1890ff;
        border-bottom: 2px solid transparent;
    }

    .ant-layout {
        background: transparent;
    }

    .ant-layout-content {
        padding: 0 50px;
    }

    .ant-card {
        width: 400px;
        @extend %center;
    }
</style>
