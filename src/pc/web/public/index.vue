<template>
    <div class="container" style="">
        <nheader style="margin-bottom: 30px;"></nheader>
        <div class="bg_1">
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
        </div>
        <div>这是一段文字</div>
        <div class="bg_2">
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
            <p>这里可能也有文字</p>
        </div>
        <div>这是另外一段文字</div>
        <div class="bg_3"></div>
    </div>
</template>

<script>
import nheader from '../../../components/pc/nheader.vue'

export default {
    components: { nheader },
    data() {
        return {
            backgroundPositionY_1: '125px',
            backgroundPositionY_2: '125px',
            backgroundPositionY_3: '',
        }
    },
    mounted() {
        const self = this
        window.onscroll = function () {
            const speed = 4.0
            self.backgroundPositionY_1 = `${-(window.pageYOffset - 500) / speed}px`
            self.backgroundPositionY_2 = `${-(window.pageYOffset - 720) / speed}px`
        }
    },
}
</script>

<style scoped>
.container {
    width: 1366px;
    height: 100%;
    margin: 0 auto;
}
.bg_1 {
    background-image: url(../../../assets/img/sea.jpg);
    background-attachment: fixed;
    /* width: 960px; */
    height: 720px;
    width: 100%;
	/* height: 100%; */
    /* display: flex; */
    /* background-size: cover; */
    background-repeat: no-repeat;
    text-align: right;
}
.bg_2 {
    background-image: url(../../../assets/img/winnower.jpg);
    background-attachment: fixed;
    width: 960px;
    height: 640px;
    width: 100%;
	/* height: 100%; */
    /* display: flex; */
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: center;
}
.bg_3 {
    background-image: url(../../../assets/img/room.jpg);
    background-attachment: fixed;
    width: 960px;
    height: 640px;
    width: 100%;
	/* height: 100%; */
    display: flex;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-position-y: bottom;
}
</style>


