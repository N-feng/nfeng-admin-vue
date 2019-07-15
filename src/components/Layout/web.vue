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
            <router-view />
        </a-layout-content>
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

</style>
