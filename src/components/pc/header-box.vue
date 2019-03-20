<template>
  <div class="header-box">
    <h2 class="logo">nfeng.net.cn</h2>
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
      <a href="#">Home</a>
      <a href="#">Works</a>
      <a href="#">Blog</a>
      <a href="#">Tools</a>
      <label for="chk" class="hide-menu-btn">
        <i class="fas fa-times"></i>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    }
  },
}
</script>

<style lang="css" scoped>
</style>
