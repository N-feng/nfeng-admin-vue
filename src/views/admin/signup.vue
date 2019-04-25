<template>
    <div class="signup-page">
        <nf-form class="signup-form" ref="signup-form" method="post" :model="AuthModel" :rules="rules" autocomplete="off">
            <!-- <img src="https://cdn.nfeng.net.cn/upload/me.jpg" alt="" class="avatar"> -->
            <h1>Sign Up</h1>
            <input type="password" style="position:absolute;top:-999px;">
            <nf-form-item prop="username">
                <nf-input type="text" placeholder="Enter Username" v-model="AuthModel.username" autocomplete="off"></nf-input>
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
            <router-link to="/auth/login">Already have one?</router-link>
        </nf-form>
    </div>
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
    },
};
</script>

