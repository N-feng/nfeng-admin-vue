<template lang="html">
  <div class="transition-box" :class="{'showed':show}">
    <div class="hide-btn" @click="closeClick">
      <i class="fas fa-times"></i>
    </div>
    <div class="transition-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeClick() {
      this.$emit('closeClick')
    },
  },
}
</script>

<style lang="css" scoped>
</style>
