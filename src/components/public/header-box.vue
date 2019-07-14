<template>
    <div class="header-box" :class="{ 'is-collapse': isCollapse }">
        <div class="logo-box">
            <router-link class="logo-mini" to="/"><b>N</b>F</router-link>
            <router-link class="logo-lg" to="/"><b>nfeng</b>.net.cn</router-link>
        </div>
        <div class="nav-box">
            <label class="toggle-box" @click="toggleClick" v-if="false">
                <i class="fa fa-bars"></i>
            </label>
            <div class="menu-box" v-if="showMenu">
                <input type="checkbox" id="chk">
                <label for="chk" class="menu-btn-show">
                    <i class="fas fa-ellipsis-h"></i>
                </label>
                <div class="menu-list" :class="{'show': menuShow}">
                    <label for="chk" class="menu-btn-hide">
                        <i class="fas fa-times"></i>
                    </label>
                    <router-link v-for="(item, key) in menuList" :key="key" :to="item">{{item}}</router-link>
                </div>
            </div>
            <div class="custom-box" v-if="!showMenu">
                <nf-popover width="280" placement="bottom-end" popper-class="nf-user" v-model="visible">
                    <div class="nf-user__header">
                        <img src="" alt="" class="nf-user__img img-circle">
                        <p>{{username}}</p>
                    </div>
                    <div class="nf-user__footer">
                        <div class="pull-left">
                        <nf-button size="small">Profile</nf-button>
                        </div>
                        <div class="pull-right">
                        <nf-button size="small" @click="logout">Sign out</nf-button>
                        </div>
                    </div>
                    <a class="custom-btn" href="javascript:;" slot="reference">
                        <img src="" alt="">
                        <span>{{username}}</span>
                    </a>
                </nf-popover>
            </div>
        </div>
    </div>
</template>

<script>
import AuthModel from '../../model/AuthModel'

export default {
    name: 'HeaderBox',
    props: {
        showMenu: {
            type: Boolean,
            default: true,
        },
        isCollapse: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            visible: false,
            menuShow: false,
            // menuList: ['Works', 'Blog', 'Tools', 'Admin'],
            menuList: ['Admin'],
            AuthModel: new AuthModel(),
            username: '',
        }
    },
    methods: {
        logout() {
            AuthModel.logout()
            this.$router.push('/auth/login')
        },
    },
    created() {
        this.username = window.localStorage.getItem('username')
    },
}
</script>

<style lang="css" scoped>
</style>
