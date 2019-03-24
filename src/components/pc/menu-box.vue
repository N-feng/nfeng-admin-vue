<template>
  <div class="menu-box">
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
import { hasPath } from '../../router'

export default {
  data() {
    return {
      menuShow: false,
      menuList: ['Works', 'Blog', 'Tools', 'Admin'],
    }
  },
  methods: {
    routerClick(item) {
      if (hasPath('/'+item)) {
        this.$router.push({
          name: item,
          params: {},
        })
      }
      this.$emit('routerClick', item)
    },
  },
}
</script>

<style lang="css" scoped>
</style>
