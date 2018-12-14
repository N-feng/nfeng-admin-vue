<template>
  <div class="nf-main">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <nfHeader
      :auth="auth"
      :isCollapse="isCollapse"
      @collapseClick="isCollapse = !isCollapse"
    ></nfHeader>
    <nfSidebar
      :auth="auth"
      :isCollapse="isCollapse"
    ></nfSidebar>
    <div
      class="nf-main-wrapper"
      :class="{ 'is-collapse': isCollapse }"
    >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import nfHeader from './components/nf-header'
import nfSidebar from './components/nf-sidebar'
import AuthModel from '../../model/AuthModel'
import { addClass, removeClass } from '../../nfeng-pc-vue/nfeng-utils/utils/dom.js'

export default {
  components: {
    // HelloWorld,
    nfHeader,
    nfSidebar
  },
  data () {
    return {
      auth: new AuthModel(),
      isCollapse: false
    }
  },
  //...前面的省略
  //通过两个钩子函数来添加移除class改变颜色
  mounted: function () {
    addClass(document.body, 'skin-blue');
    // document.getElementsByTagName("body")[0].className = "nf-main__page";
  },
  beforeDestroy: function () {
    removeClass(document.body, 'skin-blue');
    // document.body.removeAttribute("class", "nf-main__page");
  },
  created () {
    // this.auth.getUserInfo();
  }
}
</script>
