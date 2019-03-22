<template>
<div class="nf-main">
  <!--<img alt="Vue logo" src="../assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header-box-new :showBtnToggle="true" @toggleClick="isCollapse = !isCollapse" :showMenu="false"></header-box-new>
  <header-box :auth="auth" :isCollapse="isCollapse" @collapseClick="isCollapse = !isCollapse"></header-box>
  <sidebar-box :auth="auth" :isCollapse="isCollapse" @select="select"></sidebar-box>
  <div class="nf-main-wrapper" :class="{ 'is-collapse': isCollapse }">
    <div class="content-header">
      <nf-breadcrumb>
        <!-- <nf-breadcrumb-item :to="{ path: '/' }">首页</nf-breadcrumb-item> -->
        <nf-breadcrumb-item>{{ parentMenu ? parentMenu.title : '' }}</nf-breadcrumb-item>
        <nf-breadcrumb-item>{{ subMenu ? subMenu.title : '' }}</nf-breadcrumb-item>
      </nf-breadcrumb>
    </div>
    <router-view></router-view>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import headerBox from '../../../components/admin/header-box.vue'
import headerBoxNew from '../../../components/pc/header-box.vue'
import sidebarBox from '../../../components/admin/sidebar-box.vue'
import AuthModel from '../../../model/AuthModel'
import {
  addClass,
  removeClass,
} from '../../../nfeng-pc-vue/nfeng-utils/utils/dom'
import pc from '../../../router/pc'

export default {
  components: {
    // HelloWorld,
    headerBox,
    sidebarBox,
    headerBoxNew,
  },
  data() {
    return {
      auth: new AuthModel(),
      isCollapse: false,
      parentMenu: '',
      subMenu: '',
    }
  },
  computed: {
    pc() {
      return pc
    },
  },
  methods: {
    getMenuTitle() {
      this.$nextTick(() => {
        const {
          path,
        } = this.$router.currentRoute
        pc.forEach((element) => {
          if (element.children) {
            element.children.forEach((el) => {
              if (el.path === path) {
                this.parentMenu = element
                this.subMenu = el
              }
            })
          }
        })
      })
    },
    select() {
      this.getMenuTitle()
    },
  },
  // ...前面的省略
  // 通过两个钩子函数来添加移除class改变颜色
  mounted() {
    addClass(document.body, 'skin-blue')
    // document.getElementsByTagName("body")[0].className = "nf-main__page";
  },
  beforeDestroy() {
    removeClass(document.body, 'skin-blue')
    // document.body.removeAttribute("class", "nf-main__page");
  },
  created() {
    // this.auth.getUserInfo();
    this.getMenuTitle()
  },
}
</script>
