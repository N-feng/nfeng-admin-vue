<template>
    <div class="login-page">
        <nf-form class="login-form" ref="login-form" method="post" :model="AuthModel" :rules="rules">
            <img :src="AuthModel.avatar||`https://cdn.nfeng.net.cn/upload/me.jpg`" alt="" class="avatar">
            <h1>Login Here</h1>
            <nf-form-item prop="username">
                <nf-input type="text" placeholder="Username" v-model="AuthModel.username"></nf-input>
            </nf-form-item>
            <nf-form-item prop="password">
                <nf-input type="password" placeholder="Password" v-model="AuthModel.password"></nf-input>
            </nf-form-item>
            <nf-form-item>
                <nf-button type="primary" class="btn" @click="submit">Login</nf-button>
            </nf-form-item>
            <a>Lost your password?</a><br>
            <router-link to="/auth/signup">Don`t have an account</router-link>
        </nf-form>
    </div>
</template>

<script>
import AuthModel from '../../../model/AuthModel'

export default {
    data() {
        return {
            rules: {
                username: [
                    { required: true, message: 'Please enter your username', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' },
                ],
            },
            AuthModel: new AuthModel(),
        }
    },
    methods: {
        submit() {
            this.$refs['login-form'].validate((valid) => {
                if (valid) {
                    this.AuthModel.login().then(() => {
                        this.$router.push('/public/landing')
                    })
                }
            })
        },
    },
}
</script>

