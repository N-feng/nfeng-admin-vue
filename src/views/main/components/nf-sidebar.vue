<template>
    <aside class="nf-sidebar nf-home__sidebar">
        {{auth}}
        <a href="javascript:;">auth/userList</a>
    </aside>
</template>

<script>
    export default {
        name: "nf-sidebar",
        props: {
            auth: {
                type: Object
            }
        }
    }
</script>

<style scoped>

</style>