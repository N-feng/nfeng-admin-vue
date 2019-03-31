<template lang="html">
  <div class="flip-box" :class="{'showed':showFlip}">
    <div class="front">
      <slot name="front"></slot>
    </div>
    <div class="back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showFlip: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="css" scoped>
</style>
