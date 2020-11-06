<template>
  <i :class="'ri-' + icon" aria-hidden="true"></i>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import "remixicon/fonts/remixicon.css";

@Component
export default class Icon extends Vue {
  @Prop({ required: true })
  icon?: string;
}
</script>

<style lang="less" scoped>
[class*="ri"] {
  font-size: 16px;
  vertical-align: -1px;
}
</style>
