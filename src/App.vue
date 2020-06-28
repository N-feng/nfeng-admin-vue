<template>
  <a-config-provider :locale="zh_CN">
    <div id="app">
      <router-view></router-view>
    </div>
  </a-config-provider>
</template>

<script>
// eslint-disable-next-line camelcase
import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data() {
    return {
      zh_CN,
    }
  },
  methods: {
    // 常规操作
    usualOp() {
      const that = this
      // 子项目无权限需要跳转登陆页面时
      window.myBus.on('login', () => {
        that.$router.replace('/login')
      })
    },
  },
  created() {
    // 必有常规操作
    this.usualOp()
  },
}
</script>

<style lang="scss">
#app {
  height: 100%;
}
</style>
