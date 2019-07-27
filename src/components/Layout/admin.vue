<template>
  <a-layout>
    <a-layout-header>
      <div class="header-content">
        <div class="nf-logo fs16">nfeng.net.cn</div>
        <a-menu theme="light"
                :selectedKeys="current"
                mode="horizontal">
          <template v-for="item in menus">
            <a-menu-item :key="item.path"
                         v-if="item.children && !item.children.length">
              <router-link :to="item.path">{{item.meta.title}}</router-link>
            </a-menu-item>
            <a-sub-menu :key="item.path"
                        v-else>
              <span slot="title"
                    class="submenu-title-wrapper">{{item.meta.title}}</span>
              <template v-for="item2 in item.children">
                <a-menu-item :key="item2.path">
                  <router-link :to="item2.path">{{item2.meta.title}}</router-link>
                </a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-menu>
        <a-dropdown>
          <a class="ant-dropdown-link"
             href="javascript:;">
            {{username}}
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <a href="javascript:;"
                 @click="logout">退出登录</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout-content>
      <a-breadcrumb :style="{ margin: '16px 0' }">
        <a-breadcrumb-item v-for="item in $route.matched"
                           :key="item.name">{{item.meta.title}}</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { getName } from '@/utils/auth'

export default {
  name: 'adminLayout',
  data() {
    return {
      username: getName(), // 用户名
    }
  },
  computed: {
    menus() {
      return this.$store.getters.menus
    },
    current() {
      return [this.$route.path]
    },
  },
  methods: {
    // 登出
    logout() {
      this.$store.dispatch('FedLogOut').h_then(() => {
        this.$router.replace({ name: 'login' })
      })
    },
  },
  created() {
    this.$store.dispatch('getMenus')
  },
}
</script>

<style lang="scss" scoped>
</style>
