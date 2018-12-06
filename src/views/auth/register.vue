<template>
    <div class="nf-login">
        <div class="nf-login__box">
            <div class="nf-login__logo">
                <a href="javascript:;"><b>Admin</b>NF</a>
            </div>
            <div class="nf-login__body">
                <nf-form :model="auth" ref="auth" :rules="auth.rules">
                    <p class="nf-login__msg">Register a new membership</p>
                    <nf-form-item class="nf-login__item" prop="user">
                        <nf-input class="nf-login__input" size="small" v-model="auth.user" placeholder="User">
                            <i slot="suffix" class="nf-input__icon el-icon-message"></i>
                        </nf-input>
                    </nf-form-item>
                    <nf-form-item class="nf-login__item" prop="pass">
                        <nf-input class="nf-login__input" size="small" v-model="auth.pass" placeholder="Pass">
                            <i slot="suffix" class="nf-input__icon glyphicon glyphicon-lock"></i>
                        </nf-input>
                    </nf-form-item>
                    <div class="row">
                        <div class="col-xs-8" style="line-height: 34px;">
                            <nf-checkbox> I agree to the <a>terms</a></nf-checkbox>
                        </div>
                        <div class="col-xs-4 tr">
                            <nf-button class="nf-login__button" type="primary" size="medium" @click="submit('auth')">Register</nf-button>
                        </div>
                    </div>
                </nf-form>
                <p class="nf-login__links tc">- OR -</p>
                <router-link to="login">
                    <a>I already have a membership</a>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import AuthModel from '../../model/AuthModel'
    export default {
        data () {
            return {
                auth: new AuthModel()
            }
        },
        methods: {
            submit (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.auth.register(()=>{
                            this.$router.push({
                                path: '/auth/login'
                            });
                        });
                    }
                })
            }
        },
        //...前面的省略
        //通过两个钩子函数来添加移除class改变颜色
        mounted: function() {
            document.getElementsByTagName("body")[0].className="nf-login__page";
        },
        beforeDestroy: function() {
            document.body.removeAttribute("class","nf-login__page");
        }
    }
</script>

<style scoped>

</style>