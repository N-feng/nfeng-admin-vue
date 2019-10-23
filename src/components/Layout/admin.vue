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
            <a-sub-menu :key="item.name"
                        v-if="item.children">
              <span slot="title"
                    class="submenu-title-wrapper">{{item.meta.title}}</span>
              <template v-for="item2 in item.children">
                <a-menu-item :key="item2.name">{{item2.meta.title}}</a-menu-item>
              </template>
            </a-sub-menu>
            <a-menu-item :key="item.name"
                         v-else>{{item.meta.title}}</a-menu-item>
          </template>
        </a-menu>
        <a-dropdown>
          <a><span class="media-hide">Welcome, </span>{{ username || 'stranger' }}
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay"
                  theme="dark">
            <a-menu-item>
              <router-link to="/web">The front page</router-link>
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
      <a-breadcrumb :style="{ margin: '16px 0' }"
                    v-if="!isHome">
        <a-breadcrumb-item v-for="item in $route.matched"
                           :key="item.name">{{item.meta.title}}</a-breadcrumb-item>
      </a-breadcrumb>
      <router-view />
    </a-layout-content>

  </a-layout>
</template>

<script>
import router from '@/router'

export default {
  name: 'adminLayout',
  computed: {
    username() {
      return this.$store.getters.username
    },
    menus() {
      const { menus } = this.$store.getters
      const adminRouter = router.options.routes
        .filter(item => item.name === 'admin')[0].children
      const openTreeMenuData = this.$tree.openTreeMenu(adminRouter)
      // console.log(openTreeMenuData)
      const filterOpenTreeMenuData = openTreeMenuData.filter(item => menus.includes(item.id))
      return this.$tree.translateDataToTree(filterOpenTreeMenuData)
    },
    current() {
      // return [this.$route.name]
      // 为了匹配高亮
      return this.$route.meta.rename
        ? [this.$route.meta.rename]
        : [this.$route.name]
    },
    isHome() {
      // console.log(this.$route.name)
      return this.$route.name === 'Landing'
    },
  },
  methods: {
    // 菜单选择
    handleClick(e) {
      const name = e.key
      this.$router.push({ name })
    },
    // 登出
    logout() {
      // const { name, query } = this.$route
      this.$store.dispatch('FedLogOut').h_then(() => {
        this.$router.replace({ name: 'admin' })
        // this.$router.push({
        //   name: 'login',
        //   query: {
        //     name,
        //     query: JSON.stringify(query),
        //   },
        // })
      })
    },
  },
  created() {
    if (this.username) {
      this.$store.dispatch('getMenus')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/layout.scss";
</style>
