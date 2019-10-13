<template>
  <a-layout id="components-layout-demo-top"
            class="nf-bg">
    <a-layout-header class="bgfff">
      <div class="header-content space-box">
        <router-link to="/"
                     class="nf-logo fs16">nfeng.net.cn</router-link>
        <a-menu theme="light"
                :selectedKeys="current"
                mode="horizontal"
                @click="handleClick">
          <template v-for="item in menus">
            <a-menu-item :key="item.name">{{item.meta.title}}</a-menu-item>
          </template>
          <!-- <a-menu-item>
          <router-link to="/admin">学习笔记</router-link>
        </a-menu-item>
        <a-menu-item>
          <router-link to="/admin">后台管理</router-link>
        </a-menu-item> -->
        </a-menu>
        <a-dropdown>
          <a class="ant-dropdown-link"
             href="javascript:;">Welcome, {{ username || 'stranger' }}
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay">
            <a-menu-item>
              <router-link to="/admin">Admin Manager</router-link>
            </a-menu-item>
            <a-menu-item v-if="username">
              <a href="javascript:;"
                 @click="logout">Logout Now</a>
            </a-menu-item>
            <a-menu-item v-else>
              <router-link to="/login">Login Now</router-link>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </div>
    </a-layout-header>
    <a-layout-content class="pl50 pr50">
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
import router from '@/router'

export default {
  name: 'webLayout',
  computed: {
    username() {
      return this.$store.getters.username
    },
    menus() {
      const menus = ['Landing', 'Notes']
      const webRouter = router.options.routes
        .filter(item => item.name === 'web')[0].children
      const filterData = webRouter.filter(item => menus.indexOf(item.meta && item.meta.title) !== -1)
      return filterData
    },
    current() {
      // 为了匹配高亮
      return this.$route.meta.rename
        ? [this.$route.meta.rename]
        : [this.$route.name]
    },
  },
  methods: {
    // 菜单选择
    handleClick(e) {
      this.$router.push({ name: e.key })
    },
    // 登出
    logout() {
      this.$store.dispatch('FedLogOut')
    },
  },
}
</script>

<style lang="scss" scoped>
#components-layout-demo-top {
  height: 100%;
  overflow: auto;
}
</style>
