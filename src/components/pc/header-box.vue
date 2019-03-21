<template>
  <div class="header-box">
    <logo-box></logo-box>
    <!-- <h2 class="logo">nfeng.net.cn</h2> -->
    <input type="checkbox" id="chk">
    <label for="chk" class="show-menu-btn">
      <i class="fas fa-ellipsis-h"></i>
    </label>
    <a class="btn" @click="showMenu=!showMenu">
      <span></span>
      <span></span>
      <span></span>
    </a>
    <div class="menu" :class="{'show': showMenu}">
      <a v-for="(item, key) in routers" :key="key" @click="routerClick(item)">{{item}}</a>
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </div>
  </div>
</template>

<script>
import logoBox from './logo-box.vue'

export default {
  components: { logoBox },
  data() {
    return {
      showMenu: false,
      routers: ['Home', 'Works', 'Blog', 'Tools', 'Admin'],
    }
  },
  methods: {
    routerClick(item) {
      this.$emit('routerClick', item)
      this.$router.push({
        name: item,
        params: {},
      })
    },
  },
}
</script>

<style lang="css" scoped>
</style>
