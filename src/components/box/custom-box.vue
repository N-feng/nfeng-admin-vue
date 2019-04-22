<template>
  <div class="custom-box">
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
          <nf-button size="small" @click="logOut">Sign out</nf-button>
        </div>
      </div>
      <a class="custom-btn" href="javascript:;" slot="reference">
        <img src="" alt="">
        <span>nfeng</span>
      </a>
    </nf-popover>
  </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
        };
    },
    methods: {
        logOut() {
            console.log('logOut');
        },
    },
};
</script>

<style lang="css" scoped>
</style>
