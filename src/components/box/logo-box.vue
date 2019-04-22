<template>
    <div class="logo-box" @click="logoClick">
        <a class="logo-mini"><b>N</b>F</a>
        <a class="logo-lg"><b>nfeng</b>.net.cn</a>
    </div>
</template>

<script>
export default {
    methods: {
        logoClick() {
            this.$router.push({
                name: 'Web',
            });
            this.$emit('logoClick');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
