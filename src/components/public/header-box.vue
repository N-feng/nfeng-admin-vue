<template>
    <div class="header-box" :class="{ 'is-collapse': isCollapse }">
        <div class="logo-box" @click="routerClick('/')">
            <a class="logo-mini"><b>N</b>F</a>
            <a class="logo-lg"><b>nfeng</b>.net.cn</a>
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
                    <a v-for="(item, key) in menuList" :key="key" @click="routerClick(item)">{{item}}</a>
                </div>
            </div>
            <div class="custom-box" v-if="!showMenu">
                <nf-popover width="280" placement="bottom-end" popper-class="nf-user" v-model="visible">
                    <div class="nf-user__header">
                        <img src="" alt="" class="nf-user__img img-circle">
                        <p>nfeng</p>
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
                        <span>nfeng</span>
                    </a>
                </nf-popover>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
            menuList: ['Works', 'Blog', 'Tools', 'Admin'],

        };
    },
    methods: {
        routerClick(item) {
            this.$router.push({
                path: item,
            });
        },
        logout() {
            console.log('logOut');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
