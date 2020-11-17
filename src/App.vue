<template>
  <a-config-provider :locale="zh_CN">
    <router-view />
  </a-config-provider>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import zh_CN from "ant-design-vue/lib/locale-provider/zh_CN";

@Component
export default class App extends Vue {
  zh_CN = zh_CN;
}
</script>

<style></style>
