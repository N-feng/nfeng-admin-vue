<template>
  <!-- <a-locale-provider :locale="zh_CN"> -->
  <div id="app">
    <router-view></router-view>
  </div>
  <!-- </a-locale-provider> -->
</template>

<script>
// eslint-disable-next-line camelcase
// import zh_CN from 'ant-design-vue/lib/locale-provider/zh_CN'

export default {
  data() {
    return {
      // zh_CN,
    }
  },
}
</script>


<style lang="scss">
/*@import "./nfeng-pc-vue/nfeng-sass/style.scss";*/
/*@import "assets/scss/index.scss";*/
// #app {
//   height: 100%;
// }
</style>
