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
            <a-menu-item :key="item.path"
                         v-if="item.children && !item.children.length">
              <router-link :to="item.path">{{item.title}}</router-link>
            </a-menu-item>
            <a-sub-menu :key="item.path"
                        v-else>
              <span slot="title"
                    class="submenu-title-wrapper">{{item.title}}</span>
              <template v-for="item2 in item.children">
                <a-menu-item :key="item2.path">
                  <router-link :to="item2.path">{{item2.title}}</router-link>
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
import router from '@/router'
import { getRoleDetail } from '@/api/role'
import { getRoleName } from '@/utils/auth'

export default {
  name: 'adminLayout',
  computed: {
    username() {
      return this.$store.getters.username
    },
    // menus() {
    //   function filterItems(item) {
    //     if (!item.hidden && item.path !== '/login') {
    //       return true
    //     }
    //     return false
    //   }
    //   // return this.$route.path.indexOf('admin') === -1 ? router.options.routes.filter(filterItems) : this.$store.getters.menus
    //   return router.options.routes.filter(filterItems)
    // },
    current() {
      return [this.$route.name]
    },
  },
  data() {
    return {
      menus: [],
    }
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
    getRoleDetail(getRoleName()).h_then(({ data }) => {
      // const menus = router.options.routes.filter((item) => {
      //   data.roleMenu.forEach((item2) => {
      //     if (item.meta.title === item2) {
      //       return item
      //     }
      //   })
      // })
      console.log(data)
      console.log(router)
    })
    // this.menus = getRoleDetail(getRoleName()).roleMenu
    // console.log(getRoleDetail(getRoleName()))
  },
}
</script>

<style lang="scss" scoped>
</style>
