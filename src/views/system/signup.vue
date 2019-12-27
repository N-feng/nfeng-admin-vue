<template>
  <div class="signup-page">
    <a-form class="signup-form center"
            :form="form"
            @submit="handleSubmit"
            autocomplete="off">
      <!-- <img src="https://cdn.nfeng.net.cn/upload/me.jpg" alt="" class="avatar"> -->
      <h1>Sign Up</h1>
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
                 placeholder="Password"
                 autocomplete="new-password">
          <a-icon slot="prefix"
                  type="lock"
                  style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <a-form-item :validate-status="checkPasswordError() ? 'error' : ''"
                   :help="checkPasswordError() || ''">
        <a-input v-decorator="['checkPassword', { rules: rules.checkPassword, validateTrigger: 'blur' }]"
                 type="password"
                 placeholder="checkPassword">
          <a-icon slot="prefix"
                  type="lock"
                  style="color:rgba(0,0,0,.25)" />
        </a-input>
      </a-form-item>
      <!-- <a-form-item :validate-status="roleNameError() ? 'error' : ''"
                   :help="roleNameError() || ''">
        <a-select v-decorator="['roleName', { rules: rules.roleName }]"
                  placeholder="roleName">
          <a-select-option v-for="item in roleList"
                           :key="item.roleName"
                           :value="item.roleName">{{item.roleName}}</a-select-option>
        </a-select>
      </a-form-item> -->
      <a-form-item>
        <a-button type="primary"
                  class="btn"
                  html-type="submit"
                  :disabled="hasErrors(form.getFieldsError())">Create Account</a-button>
      </a-form-item>
      <a>Lost your password?</a><br>
      <router-link to="/login">Already have one?</router-link>
    </a-form>
  </div>
</template>

<script>
import { getRoleList } from '../../api/role'

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}

export default {
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === this.form.getFieldValue('password')) {
        callback()
      } else {
        callback('Please confirm your password!')
      }
    }
    return {
      hasErrors,
      form: this.$form.createForm(this),
      rules: {
        username: [
          { required: true, message: 'Please input username' }
        ],
        password: [
          { required: true, message: 'Please input password' }
        ],
        checkPassword: [
          { required: true, message: 'Please confirm your password!' },
          { validator: validatePass }
        ],
        roleName: [
          { required: true, message: 'Please select role' }
        ]
      },
      roleList: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
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
    // Only show error after a field is touched.
    checkPasswordError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('checkPassword') && getFieldError('checkPassword')
    },
    // Only show error after a field is touched.
    roleNameError() {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('roleName') && getFieldError('roleName')
    },
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.$store.dispatch('SignUp', values).then(() => {
            // this.$router.push('/admin/landing')
          })
        }
      })
    },
    getRoleList() {
      getRoleList().h_then(({ data }) => {
        this.roleList = data
      })
    }
  },
  created() {
    // this.getRoleList()
  }
}
</script>

<style lang="scss" scoped>
.signup-page {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(45deg, #9fbaa8, #31354c);
}
.signup-form {
  background: white;
  color: #232945;
  padding: 30px;
  width: 400px;
  // height: 400px;
  border-radius: 6px;
  box-sizing: border-box;
  max-width: 85vw;
  // @extend %center;
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
