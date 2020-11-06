<template>
  <div class="login-container">
    <div class="client-bg"></div>
    <div class="login-panel">
      <p class="title">欢迎登录</p>
      <a-form-model
        class="login-form"
        ref="loginForm"
        :model="form"
        :rules="rules"
      >
        <a-form-model-item prop="username">
          <a-input
            class="active-input"
            v-model="form.username"
            placeholder="请输入登录账号"
            autoComplete="off"
          />
        </a-form-model-item>
        <a-form-model-item prop="password">
          <a-input
            type="password"
            class="active-input"
            v-model="form.password"
            placeholder="请输入密码"
            autoComplete="off"
          />
        </a-form-model-item>
        <a-form-model-item>
          <a-button class="submit-button" @click="onSubmit">
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Login extends Vue {
  form = {
    username: "admin",
    password: "123456",
  };
  rules = {
    username: [{ required: true, message: "请输入登录账号" }],
    password: [{ required: true, message: "请输入密码" }],
  };
  redirect = undefined;

  @Action("user/login")
  login;

  @Watch("$route", { immediate: true })
  handler(route): void {
    this.redirect = (route.query && route.query.redirect) || "/";
  }

  onSubmit() {
    (this.$refs.loginForm as any).validate((valid) => {
      if (valid) {
        // alert("submit!");
        this.handleSubmit();
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }

  handleRoute() {
    return this.redirect === "/404" || this.redirect === "/403"
      ? "/"
      : this.redirect;
  }

  async handleSubmit() {
    await this.login(this.form);
    const path = this.handleRoute();
    await this.$router.push({ path });
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-image: linear-gradient(45deg, #9fbaa8, #31354c);
  background-image: url("../assets/open.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .client-bg {
    width: 50%;
    max-width: 800px;
    min-width: 400px;
  }

  .login-panel {
    width: 450px;
    padding: 55px 35px;
    margin-left: 100px;
    background-color: #ffffff;
    border-radius: 11px;
    box-shadow: 0 6px 22px 0 rgba(51, 62, 153, 0.7);
  }

  .title {
    font-size: 24px;
    color: #40424d;
    text-align: center;
    margin: 0 0 24px 0;
    font-weight: bold;
  }

  .login-form {
    input {
      border: none;
    }

    input.default-input,
    .ant-input-password {
      height: 56px;
      background: #f9f9f9;
      border-radius: 4px;
    }

    input.active-input,
    .ant-input-password {
      height: 56px;
      background: #ffffff;
      border-radius: 4px;
      border: 1px solid #d9d9d9;
    }
  }

  .ant-input-password {
    padding: 0;
    border: none;
    input {
      padding: 4px 30px 4px 11px;
    }
    .ant-input-suffix {
      position: absolute;
      right: 12px;
      top: 50%;
      color: rgba(0, 0, 0, 0.65);
      transform: translateY(-50%);
    }
  }

  .submit-button {
    width: 100%;
    border: none;
    height: 56px;
    background: #3b86ff;
    border-radius: 4px;
    color: #ffffff;
    font-size: 20px;

    &:hover,
    &:focus,
    &:active {
      color: #fff;
      background-color: #40a9ff;
      border-color: #40a9ff;
    }
  }
}
</style>
