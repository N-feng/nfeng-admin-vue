<template>
  <div class="login-page">
    <a-form class="login-form"
            :form="form"
            @submit="handleSubmit">
      <!-- <img src="https://cdn.nfeng.net.cn/upload/me.jpg"
           alt=""
           class="avatar"> -->
      <h1>Login Here</h1>
      <a-form-item :validate-status="userNameError() ? 'error' : ''"
                   :help="userNameError() || ''">
        <a-input v-decorator="['username', { rules: rules.username }]"
                 placeholder="Username">
          <a-icon slot="prefix"
                  type="user"
                  style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="passwordError() ? 'error' : ''"
                   :help="passwordError() || ''">
        <a-input v-decorator="['password', { rules: rules.password }]"
                 type="password"
                 placeholder="Password">
          <a-icon slot="prefix"
                  type="lock"
                  style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary"
                  class="btn"
                  html-type="submit"
                  :disabled="hasErrors(form.getFieldsError())">Login</a-button>
      </a-form-item>
      <a>Lost your password?</a><br>
      <router-link to="/signup">Don`t have an account</router-link>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}
export default {
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this),
      rules: {
        username: [
          { required: true, message: '请输入帐号' },
        ],
        password: [
          { required: true, message: '请输入密码' },
        ],
      },
    }
  },
  methods: {
    // Only show error after a field is touched.
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('username') && getFieldError('username')
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.dispatch('Login', values).then(() => {
            // console.log(this.$route)
            // 登录后跳转
            // const redirectPath = this.$route.query.redirect || '/'
            // 组装登陆后的跳转地址
            const { name, query } = this.$route.query
            if (query) {
              this.$router.push({
                name,
                query: JSON.parse(query),
              })
            } else {
              this.$router.push('/admin')
            }
            // this.$router.replace({ path: redirectPath })
          })
        }
      })
    },
  },
}
</script>

<style scoped lang="scss">
.login-page {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, #9fbaa8, #31354c);
}
.login-form {
  background: white;
  color: #232945;
  padding: 30px;
  width: 400px;
  height: 400px;
  border-radius: 6px;
  box-sizing: border-box;
  max-width: 85vw;
  @extend %center;
  .avatar {
    width: 100px;
    height: 100px;
    border: 5px solid white;
    border-radius: 50%;
    margin: -80px auto 20px;
    display: block;
  }
  h1 {
    margin: 0;
    padding: 0 0 20px;
    font-size: 22px;
    text-align: center;
  }
  .btn {
    width: 100%;
  }
  a {
    text-decoration: none;
    font-size: 12px;
    line-height: 20px;
    color: darkgrey;
    &:hover {
      color: #ffc107;
      cursor: pointer;
    }
  }
}
</style>
