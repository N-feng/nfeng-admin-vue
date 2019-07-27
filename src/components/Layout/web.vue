<template>
  <a-layout>
    <a-layout-header>
      <div class="header-content">
        <div class="nf-logo fs16">nfeng.net.cn</div>
        <a-menu theme="light"
                mode="horizontal">
          <a-menu-item>
            <router-link to="/admin">后台管理</router-link>
          </a-menu-item>
        </a-menu>
      </div>
    </a-layout-header>
    <a-layout-content>
      <router-view />
    </a-layout-content>
  </a-layout>
</template>

<script>
export default {
  name: 'webLayout',
}
</script>

<style lang="scss" scoped>
</style>
