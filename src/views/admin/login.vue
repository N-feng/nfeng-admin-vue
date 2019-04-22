<template>
    <transition-box :show="showTransition" @closeClick="showTransition=false">
        <flip-box :showFlip="showFlip">
            <login-box slot="front" @showFlip="showFlip = true"></login-box>
            <signup-box slot="back" @hideFlip="showFlip = false"></signup-box>
        </flip-box>
    </transition-box>
</template>

<script>
import flipBox from '../../components/admin/flip-box.vue';
import loginBox from '../../components/admin/login-box.vue';
import signupBox from '../../components/admin/signup-box.vue';
import transitionBox from '../../components/admin/transition-box.vue';

export default {
    components: {
        flipBox,
        loginBox,
        signupBox,
        transitionBox,
    },
    data() {
        return {
            showTransition: true,
            showFlip: false,
        };
    },
};
</script>

