<template>
    <header class="nf-main-header">
        <a href="javascript:;" class="nf-logo" :class="{ 'is-collapse': isCollapse }">
            <span class="nf-logo-mini">
                <b>A</b>NF
            </span>
            <span class="nf-logo-lg">
                <b>Admin</b>NF
            </span>
        </a>
        <nav class="nf-main-header__navbar" :class="{ 'is-collapse': isCollapse }">
            <a href="javascript:;" class="nf-main-header__toggle fa fa-bars" @click="handleClick"></a>
            <div class="nf-main-header__custom">
                <div class="nf-main-header__user">
                    <nf-popover width="280" placement="bottom-end" popper-class="nf-user" v-model="visible">
                        <div class="nf-user__header">
                            <img v-if="auth.icon" src="" alt="" class="nf-user__img img-circle">
                            <p>{{auth.user}}</p>
                        </div>
                        <div class="nf-user__footer">
                            <div class="pull-left">
                                <nf-button size="small">Profile</nf-button>
                            </div>
                            <div class="pull-right">
                                <nf-button size="small" @click="logOut">Sign out</nf-button>
                            </div>
                        </div>
                        <a href="javascript:;" slot="reference">
                            <img :src="auth.icon" alt="">
                            <span>{{auth.user}}</span>
                        </a>
                    </nf-popover>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'nf-main-header',
    data() {
        return {
            visible: false,
        }
    },
    props: {
        auth: Object,
        isCollapse: Boolean,
    },
    methods: {
        logOut() {
            this.visible = !this.visible
            this.auth.logout(() => {
                // this.$message.success(res.msg);
                this.$router.push({
                    path: '/login',
                })
            })
        },
        handleClick() {
            this.$emit('collapseClick')
        },
    },
    created() {
        this.auth.getUserInfo()
    },
}
</script>

<style scoped>
</style>
