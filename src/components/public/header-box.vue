<template>
    <div class="header-box" :class="{ 'is-collapse': isCollapse }">
        <logo-box></logo-box>
        <navBox>
            <toggle-box slot="toggle-box" v-if="false"></toggle-box>
            <menu-box slot="menu-box" v-if="showMenu"></menu-box>
            <custom-box slot="custom-box" v-if="!showMenu"></custom-box>
        </navBox>
    </div>
</template>

<script>
import logoBox from './logo-box.vue';
import navBox from './nav-box.vue';
import toggleBox from './toggle-box.vue';
import menuBox from './menu-box.vue';
import customBox from './custom-box.vue';

export default {
    components: {
        logoBox,
        navBox,
        toggleBox,
        menuBox,
        customBox,
    },
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
};
</script>

<style lang="css" scoped>
</style>
