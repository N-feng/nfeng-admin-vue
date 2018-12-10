<template>
<header class="nf-header">
    <a href="javascript:;" class="nf-header__logo nf-home__logo"><b>Admin</b>NF</a>
    <nav class="nf-header__navbar nf-home__navbar">
        <div class="nf-header__custom">
            <div class="nf-header__user">
                <nf-popover width="280" placement="bottom-end" popper-class="nf-user">
                    <div class="nf-user__header">
                        <img v-if="auth.icon" src="" alt="" class="nf-user__img img-circle">
                        <p>{{auth.user}}</p>
                    </div>
                    <div class="nf-user__footer">
                        <div class="pull-left">
                            <nf-button size="small">Profile</nf-button>
                        </div>
                        <div class="pull-right">
                            <nf-button size="small">Sign out</nf-button>
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
import AuthModel from '../../../model/AuthModel'
export default {
    name: "nf-header",
    props: {
        // auth: {
        //     type: Object
        // }
    },
    data() {
        return {
            auth: new AuthModel(),
            visible2: false
        }
    },
    created() {
        this.auth.getUserInfo();
    }
}
</script>

<style scoped>

</style>
