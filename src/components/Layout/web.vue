<template>
<a-layout>
  <a-layout-header>
    <div class="header-content">
      <router-link to="/" class="nf-logo fs16">nfeng.net.cn</router-link>
      <a-menu theme="light" :selectedKeys="current" mode="horizontal" @click="handleClick">
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
        <a class="ant-dropdown-link" href="javascript:;">Welcome, {{ username || 'stranger' }}
            <a-icon type="down" />
          </a>
        <a-menu slot="overlay" v-if="username">
          <a-menu-item>
            <a href="javascript:;" @click="logout">退出登录</a>
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
import router from '@/router'

export default {
  name: 'webLayout',
  data() {
    return {
      username: getName(), // 用户名
    }
  },
  computed: {
    menus() {
      const menus = []
      router.options.routes
        .filter(item => item.name === 'web')
        .forEach((item) => {
          if (item.children) {
            item.children.forEach((item2) => {
              menus.push(item2)
            })
          }
        })
      router.options.routes
        .filter(item => item.name === 'admin')
        .forEach((item) => {
          menus.push(item)
        })
      return menus
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
</style>
