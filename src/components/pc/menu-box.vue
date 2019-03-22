<template>
  <div class="menu-box">
    <label class="menu-btn-toggle" v-if="showBtnToggle" @click="toggleClick">
      <i class="fa fa-bars"></i>
    </label>
    <input type="checkbox" id="chk">
    <label for="chk" class="menu-btn-show">
      <i class="fas fa-ellipsis-h"></i>
    </label>
    <div class="menu-list" :class="{'show': menuShow}">
      <label for="chk" class="menu-btn-hide">
        <i class="fas fa-times"></i>
      </label>
      <a v-for="(item, key) in menuList" :key="key" @click="routerClick(item)">{{item}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuShow: false,
      menuList: ['Works', 'Blog', 'Tools', 'Admin'],
    }
  },
  props: {
    showBtnToggle: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    routerClick(item) {
      this.$emit('routerClick', item)
      this.$router.push({
        name: item,
        params: {},
      })
    },
    toggleClick() {
      this.$emit('toggleClick')
    },
  },
}
</script>

<style lang="css" scoped>
</style>
