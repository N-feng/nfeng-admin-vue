<template>
    <nf-form class="signup-box" ref="signup-form" method="post" :model="AuthModel" :rules="rules">
        <!-- <img src="https://cdn.nfeng.net.cn/upload/me.jpg" alt="" class="avatar"> -->
        <h1>Sign Up</h1>
        <nf-form-item prop="username">
            <nf-input type="text" placeholder="Enter Username" v-model="AuthModel.username"></nf-input>
        </nf-form-item>
        <nf-form-item prop="password">
            <nf-input type="password" placeholder="Enter Password" v-model="AuthModel.password"></nf-input>
        </nf-form-item>
        <nf-form-item prop="checkPassword">
            <nf-input type="password" placeholder="Enter checkPassword" v-model="AuthModel.checkPassword"></nf-input>
        </nf-form-item>
        <nf-form-item>
            <nf-button type="primary" class="btn" @click="submit">Create Account</nf-button>
        </nf-form-item>
        <a>Lost your password?</a><br>
        <a @click="hideFlip">Already have one?</a>
    </nf-form>
</template>

<script>
import AuthModel from '../../model/AuthModel';

export default {
    data() {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback('Please enter your checkPassword');
            } else if (value !== this.AuthModel.password) {
                callback('The two passwords do not match');
            } else {
                callback();
            }
        };
        return {
            rules: {
                username: [
                    { required: true, message: 'Please enter your username', trigger: 'blur' },
                // {
                //     pattern: /^(1\d{10})$/,
                //     message: 'Please enter your username correctly',
                //     trigger: 'blur',
                // },
                ],
                password: [
                    { required: true, message: 'Please enter your password', trigger: 'blur' },
                ],
                checkPassword: [
                    { validator: validatePass, trigger: 'blur' },
                ],
            },
            AuthModel: new AuthModel(),
        };
    },
    methods: {
        submit() {
            this.$refs['signup-form'].validate((valid) => {
                if (valid) {
                    this.AuthModel.signup().then(() => {
                        this.hideFlip();
                    });
                }
            });
        },
        hideFlip() {
            this.$emit('hideFlip');
        },
    },
};
</script>
