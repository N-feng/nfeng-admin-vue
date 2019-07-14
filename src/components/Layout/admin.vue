<template>
    <a-layout>
        <a-layout-header>
            <div class="header-content">
                <div class="logo fs16">
                    <router-link to="/web">nfeng.net.cn</router-link>
                </div>
                <a-menu theme="light"
                        v-model="current"
                        mode="horizontal">
                    <template v-for="item in menus">
                        <a-menu-item :key="item.path" v-if="item.children && !item.children.length">
                            <router-link :to="item.path">{{item.title}}</router-link>
                        </a-menu-item>
<!--                        <header-menu v-else :key="item.key" :route="item"></header-menu>-->
                        <a-sub-menu :key="item.path" v-else>
                            <span slot="title" class="submenu-title-wrapper">{{item.title}}</span>
                            <template v-for="item2 in item.children">
                                <a-menu-item :key="item2.path">{{item2.title}}</a-menu-item>
                            </template>
                        </a-sub-menu>
                    </template>
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
  name: 'adminLayout',
  computed: {
    menus() {
      function filterItems(item) {
        if (!item.hidden && item.path !== '/login') {
          return true
        }
        return false
      }
      // return this.$route.path.indexOf('admin') === -1 ? router.options.routes.filter(filterItems) : this.$store.getters.menus
      return router.options.routes.filter(filterItems)
    },
    current() {
      return [this.$route.name]
    },
  },
  created() {
    this.$store.dispatch('getMenu')
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
    .ant-menu-horizontal > .ant-menu-submenu {
        height: 64px;
        line-height: 60px;
        min-width: 72px;
        border-top: 2px solid transparent;
    }

    .ant-menu-horizontal > .ant-menu-submenu-selected {
        border-top: 2px solid #1890ff;
        border-bottom: 2px solid transparent;
    }

    .ant-menu-horizontal > .ant-menu-submenu:hover {
        border-top: 2px solid #1890ff;
        border-bottom: 2px solid transparent;
    }

    // layer 内容
    .ant-layout-content {
        padding: 0 50px;
    }
</style>
