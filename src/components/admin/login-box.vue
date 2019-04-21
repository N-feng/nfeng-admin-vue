<template>
    <nf-form class="login-box" ref="login-form" method="post" :model="AuthModel" :rules="rules">
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
        <a @click="registerClick">Don`t have an account</a>
    </nf-form>
</template>

<script>
export default {
    props: ['AuthModel'],
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
        };
    },
    methods: {
        submit() {
            this.$refs['login-form'].validate((valid) => {
                if (valid) {
                    this.AuthModel.login().then((res) => {
                        this.$emit('loginSuccess', res);
                    });
                }
            });
        },
        registerClick() {
            this.$emit('registerClick');
        },
    },
};
</script>
