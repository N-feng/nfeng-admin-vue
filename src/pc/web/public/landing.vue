<template>
  <div class="simple-box">
    <div class="container">
      <span class="text1">Welcome in</span>
      <router-link :to="{ name: 'Profile', params: {} }">
        <a class="text2">nfeng.net.cn</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
