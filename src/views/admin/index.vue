<template>
  <div class="landing-page">
    <div class="page-content">
      <template v-if="username">
        <h1>Welcome, {{username}}</h1>
      </template>
      <template v-else>
        <h1>Welcome, stranger</h1>
        <router-link to="/login">Login Now</router-link>
      </template>
    </div>
  </div>
</template>

<script>
import utils from '@/utils/index'

export default {
  computed: {
    username() {
      return this.$store.getters.username
    },
  },
  created() {
    const oldObj = {
      a: 1,
      b: 2,
      c: 3,
    }
    // const oldObj2 = {
    //   a: '2a',
    //   d: 4,
    //   e: 5,
    //   f: 6,
    // }
    const newObj = utils.jquery.extend(true, oldObj)
    newObj.b = 'b'
    oldObj.a = 'a'
    // oldObj2.e = 'e'
    // console.log(newObj)
    // console.log(oldObj)
    // console.log(oldObj2)
  },
}
</script>

<style lang="scss" scoped>
.landing-page {
  width: 100%;
  height: 100%;
  min-height: 380px;
  position: relative;
  overflow: hidden;
  .page-content {
    @extend %center;
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
