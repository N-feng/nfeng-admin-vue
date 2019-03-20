<template>
  <div class="login-box" :class="{'showed':showLogin}">
    <div class="hide-login-btn" @click="closeClick">
      <i class="fas fa-times"></i>
    </div>
    <form class="login-form">
      <h1>Welcome</h1>
      <input type="text" placeholder="Username">
      <input type="password" placeholder="Password">
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
export default {
  props: {
    showLogin: {
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
