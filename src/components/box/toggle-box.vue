<template>
    <label class="toggle-box" @click="toggleClick">
        <i class="fa fa-bars"></i>
    </label>
</template>

<script>
export default {
    methods: {
        toggleClick() {
            this.$emit('toggleClick');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
