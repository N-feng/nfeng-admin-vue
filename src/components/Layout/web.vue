<template>
  <a-layout>
    <a-layout-header>
      <div class="header-content">
        <div class="nf-logo fs16">nfeng.net.cn</div>
        <a-menu theme="light"
                mode="horizontal">
          <a-menu-item>
            <router-link to="/admin">后台管理</router-link>
          </a-menu-item>
        </a-menu>
        <a-dropdown>
          <a class="ant-dropdown-link"
             href="javascript:;">Welcome, {{ username || 'stranger' }}
            <a-icon type="down" />
          </a>
          <a-menu slot="overlay"
                  v-if="username">
            <a-menu-item>
              <a href="javascript:;"
                 @click="logout">退出登录</a>
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
import { getName } from '@/utils/auth'

export default {
  name: 'webLayout',
  data() {
    return {
      username: getName(), // 用户名
    }
  },
  methods: {
    // 登出
    logout() {
      this.$store.dispatch('FedLogOut')
    },
  },
}
</script>

<style lang="scss" scoped>
</style>
