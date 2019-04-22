<template>
    <div class="wrap">
        <header-box style="position: absolute;" :isCollapse="isCollapse"></header-box>
        <section class="web-page"><card-box></card-box></section>
        <!-- <p>HTML (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file intended for display on a World Wide Web browser page. The markup tells the Web browser how to display a Web page's words and images for the user. Each individual markup code is referred to as an element (but many people also refer to it as a tag). Some elements come in pairs that indicate when some display effect is to begin and when it is to end.</p> -->
    </div>
</template>

<script>
import headerBox from '../../components/box/header-box.vue';
import cardBox from '../../components/box/card-box.vue';
import { maxWidth } from '../../utils';

export default {
    components: {
        headerBox,
        cardBox,
    },
    data() {
        return {
            isCollapse: false,
        };
    },
    methods: {
        maxWidth(bool) {
            this.isCollapse = bool;
        },
    },
    mounted() {
        maxWidth(800, this.maxWidth);
    },
};
</script>

<style lang="css" scoped>
</style>
