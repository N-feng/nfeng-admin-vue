<template>
    <div class="login-page">
        <nf-form class="login-form" ref="login-form" method="post" :model="AuthModel" :rules="rules">
            <img :src="AuthModel.avatar||`https://cdn.nfeng.net.cn/upload/me.jpg`" alt="" class="avatar">
            <h1>Login Here</h1>
            <nf-form-item prop="username">
                <nf-input type="text" placeholder="Enter Username" v-model="AuthModel.username"></nf-input>
            </nf-form-item>
            <nf-form-item prop="password">
                <nf-input type="password" placeholder="Enter Password" v-model="AuthModel.password"></nf-input>
            </nf-form-item>
            <nf-form-item>
                <nf-button type="primary" class="btn" @click="submit">Login</nf-button>
            </nf-form-item>
            <a>Lost your password?</a><br>
            <a @click="routerClick('/signup')">Don`t have an account</a>
        </nf-form>
    </div>
</template>

<script>
import AuthModel from '../../model/AuthModel';

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
        };
    },
    methods: {
        submit() {
            this.$refs['login-form'].validate((valid) => {
                if (valid) {
                    this.AuthModel.login().then(() => {
                        this.$router.push('/system/landing');
                    });
                }
            });
        },
        showFlip() {
            this.$emit('showFlip');
        },
        routerClick(item) {
            this.$router.push({
                path: item,
            });
        },
    },
};
</script>

