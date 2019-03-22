<template>
  <div class="logo-box" @click="routerClick">
    <a class="logo-mini"><b>N</b>F</a>
    <a class="logo-lg"><b>nfeng</b>.net.cn</a>
  </div>
</template>

<script>
export default {
  methods: {
    routerClick() {
      this.$router.push({
        name: 'Web'
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
