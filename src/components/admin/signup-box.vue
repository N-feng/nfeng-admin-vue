<template>
  <nf-form class="signup-box" ref="signup-form" method="post" :model="auth" :rules="auth.rules">
    <!-- <img src="https://cdn.nfeng.net.cn/upload/me.jpg" alt="" class="avatar"> -->
    <h1>Sign Up</h1>
    <nf-form-item prop="username">
      <nf-input type="text" placeholder="Enter Username" v-model="auth.username"></nf-input>
    </nf-form-item>
    <nf-form-item prop="password">
      <nf-input type="password" placeholder="Enter Password" v-model="auth.password"></nf-input>
    </nf-form-item>
    <nf-form-item prop="checkPassword">
      <nf-input type="checkPassword" placeholder="Enter checkPassword" v-model="auth.checkPassword"></nf-input>
    </nf-form-item>
    <nf-form-item>
      <nf-button type="primary" class="btn" @click="submit">Create Account</nf-button>
    </nf-form-item>
    <a>Lost your password?</a><br>
    <a @click="loginClick">Already have one?</a>
  </nf-form>
</template>

<script>
import AuthModel from '../../model/AuthModel'

export default {
  data() {
    return {
      auth: new AuthModel(),
    }
  },
  methods: {
    submit() {
      this.$refs['signup-form'].validate((valid) => {
        if (valid) {
          this.auth.signup().then((res) => {
            console.log(res)
          })
        }
      })
    },
    loginClick() {
      this.$emit('loginClick')
    },
  },
}
</script>
