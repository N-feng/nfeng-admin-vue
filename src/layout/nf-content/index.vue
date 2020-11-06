<template>
  <a-layout-content class="nf-content">
    <router-view v-slot="{ Component }">
      <transition mode="out-in" name="fade-transform">
        <component :is="Component" />
      </transition>
    </router-view>
    <slot></slot>
  </a-layout-content>
</template>

<script>
  export default {
    name: 'NfContent',
    watch: {
      $route: {
        handler() {
          if ('mobile' === this.device) {
            this.$store.dispatch('settings/foldSideBar')
          }
        },
        immediate: true,
      },
    },
  }
</script>

<style lang="less">
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.2s;
  }

  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-30px);
  }

  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .nf-content {
    min-height: calc(
      100vh - @nf-header-height - @nf-padding - @nf-padding - @nf-padding -
        @nf-padding
    ) !important;
    padding: @nf-padding;
    margin: @nf-margin;
    background: #fff;
    .error-container {
      height: calc(
        100vh - @nf-header-height - @nf-padding - @nf-padding - @nf-padding -
          @nf-padding - @nf-padding - @nf-margin
      ) !important;
    }
  }
</style>
