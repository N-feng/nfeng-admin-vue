<template>
    <a-layout>
        <a-layout-header>
            <div class="header-content">
                <div class="logo fs16">
                    <router-link to="/web">nfeng.net.cn</router-link>
                </div>
                <a-menu theme="light"
                        mode="horizontal"
                        :defaultSelectedKeys="['1']">
                    <a-menu-item v-for="(item, key) in menus" :key="key">
                        <router-link :to="item.path">{{item.title}}</router-link>
                    </a-menu-item>
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
            <router-view />
        </a-layout-content>
        <!--        <a-layout-footer :style="{ textAlign: 'center' }">-->
        <!--            Ant Design ©2018 Created by Ant UED-->
        <!--        </a-layout-footer>-->
    </a-layout>
</template>

<script>
import router from '@/router'

export default {
  name: 'webLayout',
  computed: {
    menus() {
      function filterItems(item) {
        if (!item.hidden
          && item.path !== '/web'
          && item.path !== '/login'
          && item.path !== '/signup'
          && item.path !== '*') {
          return true
        }
        return false
      }
      return router.options.routes.filter(filterItems)
    },
  },
}
</script>

<style lang="scss" scoped>
    // layout
    .ant-layout {
        /*background: transparent;*/
        height: 100%;
    }

    // layout 头部
    .ant-layout-header {
        background: #fff;
    }

    // layout 头部内部布局
    .header-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // layout 头部logo
    .logo {
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }

    .logo a {
        //transition: 0.4s;
        text-decoration: none;
    }

    // layout 头部菜单调整
    .ant-menu-horizontal > .ant-menu-item {
        height: 64px;
        line-height: 60px;
        min-width: 72px;
        border-top: 2px solid transparent;
    }

    .ant-menu-horizontal > .ant-menu-item-selected {
        border-top: 2px solid #1890ff;
        border-bottom: 2px solid transparent;
    }

    .ant-menu-horizontal > .ant-menu-item:hover {
        border-top: 2px solid #1890ff;
        border-bottom: 2px solid transparent;
    }

    // layer 内容
    .ant-layout-content {
        padding: 0 50px;
    }
</style>
