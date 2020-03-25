<template>
  <a-layout class="nf-bg">
    <a-layout-header>
      <div class="nf-logo">
        <a>NFENG.NET.CN</a>
      </div>

      <a-dropdown class="fr mt15 ml20">
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/admin">Admin Manager</router-link>
          </a-menu-item>
          <a-menu-item v-if="username">
            <a href="javascript:;" @click="logout">Logout Now</a>
          </a-menu-item>
          <a-menu-item v-else>
            <router-link to="/login">Login Now</router-link>
          </a-menu-item>
        </a-menu>
        <a-button>
          <span class="media-hide">Welcome,</span>
          {{ username || 'stranger' }}
          <a-icon type="down" />
        </a-button>
      </a-dropdown>

      <a-menu
        class="tc"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
        :selectedKeys="current"
        @click="handleClick"
      >
        <template v-for="item in menus">
          <a-menu-item :key="item.name">{{item.meta.title}}</a-menu-item>
        </template>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
    <a-layout-footer class="fixed-footer">
      <a href="http://beian.miit.gov.cn">粤ICP备19027391号-1</a>
    </a-layout-footer>
  </a-layout>
</template>

<script>
import router from '../../router'

export default {
  name: 'webLayout',
  computed: {
    username() {
      return this.$store.getters.username
    },
    menus() {
      const menus = ['Landing', 'Note', 'Project']
      const webRouter = router.options.routes
        .filter((item) => item.name === 'web')[0].children
      const filterData = webRouter.filter((item) => menus.includes(item.meta && item.meta.title))
      return filterData
    },
    current() {
      // 为了匹配高亮
      return this.$route.meta.rename
        ? [this.$route.meta.rename]
        : [this.$route.name]
    }
  },
  methods: {
    // 菜单选择
    handleClick(e) {
      this.$router.push({ name: e.key })
    },
    // 登出
    logout() {
      this.$store.dispatch('FedLogOut')
    }
  }
}
</script>

<style lang="scss" scoped>
.fixed-footer {
  text-align: center;
  z-index: 2;
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
