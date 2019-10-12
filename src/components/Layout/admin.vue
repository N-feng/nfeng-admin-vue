<template>
  <a-layout>
    <a-layout-header>
      <div class="header-content space-box">
        <router-link to="/"
                     class="nf-logo fs16">nfeng.net.cn</router-link>
        <a-menu theme="light"
                :selectedKeys="current"
                mode="horizontal"
                @click="handleClick">
          <template v-for="item in menus">
            <a-sub-menu :key="item.path"
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
        <a-dropdown v-if="username">
          <a class="ant-dropdown-link"
             href="javascript:;">Welcome, {{ username }}
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
      const menus = []
      router.options.routes
        .filter(item => item.name === 'admin')
        .forEach((item) => {
          if (item.children) {
            item.children.forEach((item2) => {
              if (
                this.$store.getters.menus.some(
                  item3 => item3 === item2.meta.title,
                )
              ) {
                menus.push(item2)
              }
            })
          }
        })
      return menus
    },
    current() {
      // 为了匹配高亮
      return this.$route.meta.rename
        ? [this.$route.meta.rename]
        : [this.$route.name]
    },
    isHome() {
      return this.$route.name === 'adminIndex'
    },
  },
  methods: {
    // 菜单选择
    handleClick(e) {
      this.$router.push({ name: e.key })
    },
    // 登出
    logout() {
      // const { name, query } = this.$route
      this.$store.dispatch('FedLogOut').h_then(() => {
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
</style>
