<template>
  <div class="nf-main">
    <transition-box :show="showTransition" @closeClick="showTransition=false">
      <flip-box :showFlip="showFlip">
        <login-box slot="front" @registerClick="showFlip=true"></login-box>
        <register-box slot="back" @loginClick="showFlip=false"></register-box>
      </flip-box>
    </transition-box>
    <header-box :showMenu="false" :isCollapse="isCollapse"></header-box>
    <sidebar-box :auth="auth" :isCollapse="isCollapse"></sidebar-box>
    <div class="nf-main-wrapper" :class="{ 'is-collapse': isCollapse }">
      <!-- <div class="content-header">
        <nf-breadcrumb>
          <nf-breadcrumb-item :to="{ path: '/Admin' }">Admin</nf-breadcrumb-item>
          <nf-breadcrumb-item>{{ parentMenu ? parentMenu.title : '' }}</nf-breadcrumb-item>
          <nf-breadcrumb-item>{{ subMenu ? subMenu.title : '' }}</nf-breadcrumb-item>
        </nf-breadcrumb>
      </div> -->
      <div class="content">
        <router-view @loginClick="showTransition=true"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import transitionBox from '../../components/layout/transition-box.vue'
import flipBox from '../../components/layout/flip-box.vue'
import loginBox from '../../components/admin/login-box.vue'
import registerBox from '../../components/admin/register-box.vue'
import headerBox from '../../components/layout/header-box.vue'
import sidebarBox from '../../components/admin/sidebar-box.vue'
import AuthModel from '../../model/AuthModel'
import { addClass, removeClass } from '../../nfeng-pc-vue/nfeng-utils/utils/dom'
import { maxWidth } from '../../utils'

export default {
  components: {
    transitionBox,
    flipBox,
    loginBox,
    registerBox,
    headerBox,
    sidebarBox,
  },
  data() {
    return {
      auth: new AuthModel(),
      isCollapse: false,
      parentMenu: '',
      subMenu: '',
      showTransition: false,
      showFlip: false,
    }
  },
  methods: {
    maxWidth(bool) {
      this.isCollapse = bool
    },
  },
  // ...前面的省略
  // 通过两个钩子函数来添加移除class改变颜色
  mounted() {
    // document.getElementsByTagName("body")[0].className = "nf-main__page";
    addClass(document.body, 'skin-blue')
    maxWidth(800, this.maxWidth)
  },
  beforeDestroy() {
    // document.body.removeAttribute("class", "nf-main__page");
    removeClass(document.body, 'skin-blue')
  },
  created() {
    // this.auth.getUserInfo();
    // console.log(this.$route)
  },
}
</script>

<style lang="css" scoped>
</style>
