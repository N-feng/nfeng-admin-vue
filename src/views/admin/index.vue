<template>
  <div class="landing-page center-page">
    <div class="page-content center">
      <template>
        <h1>Welcome, {{ username || 'stranger' }}</h1>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    username() {
      return this.$store.getters.username
    },
  },
  created() {
    console.log(this.$conver.cvForm({ name: 'n feng Ｍ', phone: 187 }))
    console.log(this.$conver.cvStr('n feng Ｍ'))
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
  .page-content {
    // @extend %center;
    z-index: 1;
    width: 100%;
    max-width: 800px;
    text-align: center;
    padding: 0 40px;
    box-sizing: border-box;
    text-transform: uppercase;
  }
  .page-content h1 {
    color: #fff;
    font-size: 36px;
    margin: 0 0 30px;
  }
  .page-content a {
    background: #0984e3;
    padding: 10px 24px;
    color: white;
    text-decoration: none;
    font-size: 16px;
    border-radius: 20px;
    display: inline-block;
    transition: 0.4s linear;
    cursor: pointer;
  }
}
</style>
