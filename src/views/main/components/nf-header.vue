<template>
<header class="nf-header">
    <a href="javascript:;" class="nf-header__logo nf-home__logo"><b>Admin</b>NF</a>
    <nav class="nf-header__navbar nf-home__navbar">
        <div class="nf-header__custom">
            <div class="nf-header__user">
                <nf-popover width="160">
                    <p>这是一段内容这是一段内容确定删除吗？</p>
                    <div style="text-align: right; margin: 0">
                        <nf-button size="mini" type="text" @click="visible2 = false">取消</nf-button>
                        <nf-button type="primary" size="mini" @click="visible2 = false">确定</nf-button>
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
