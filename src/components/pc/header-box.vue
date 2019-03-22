<template>
  <div class="header-box" :class="{ 'is-collapse': isCollapse }">
    <logo-box></logo-box>
    <menu-box :showBtnToggle="showBtnToggle" @toggleClick="toggleClick" v-if="showMenu"></menu-box>
  </div>
</template>

<script>
import logoBox from './logo-box.vue'
import menuBox from './menu-box.vue'

export default {
  components: { logoBox, menuBox },
  props: {
    showBtnToggle: {
      type: Boolean,
      default: false,
    },
    showMenu: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    toggleClick() {
      this.isCollapse = !this.isCollapse
      this.$emit('toggleClick')
    },
    resize() {
      const w = document.documentElement.clientWidth
      this.isCollapse = w <= 800 ? 1 : 0
    },
  },
  mounted() {
    this.resize()
    window.onresize = () => {
      this.resize()
    }
  },
}
</script>

<style lang="css" scoped>
</style>
