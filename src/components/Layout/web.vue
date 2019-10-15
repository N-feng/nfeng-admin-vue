<template>
  <a-layout id="components-layout-demo-top"
            class="nf-bg">
    <a-layout-header>
      <div class="header-content space-box">
        <a class="nf-logo media-hide">nfeng.net.cn</a>
        <a class="nf-logo media-show">nf</a>
        <!-- <router-link to="/"
                     class="nf-logo fs16">nfeng.net.cn</router-link> -->
        <a-menu :selectedKeys="current"
                mode="horizontal"
                theme="dark"
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
          <a><span class="media-hide">Welcome, </span>{{ username || 'stranger' }}
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
    username() {
      return this.$store.getters.username
    },
    menus() {
      const menus = ['Landing', 'Note', 'Project']
      const webRouter = router.options.routes
        .filter(item => item.name === 'web')[0].children
      const filterData = webRouter.filter(item => menus.includes(item.meta && item.meta.title))
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
@import "@/assets/scss/layout.scss";
</style>
