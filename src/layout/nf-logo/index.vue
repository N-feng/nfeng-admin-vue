<template>
  <div class="nf-logo">
    <nf-icon v-if="logo" :icon="logo"></nf-icon>
    <span class="anticon"></span>
    <span>{{ title }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter } from 'vuex-class';
import NfIcon from '@/layout/nf-icon/index.vue'

const namespace = 'settings';

@Component({
  components: {
    "nf-icon": NfIcon
  }
})
export default class NfLogo extends Vue {
  @Getter('logo', { namespace }) private logo?: string;
  @Getter('title', { namespace }) private title?: string;
}
</script>

<style lang="less" scoped>
.nf-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 16px 5px;
  overflow: hidden;
  overflow: hidden;
  font-size: 15px;
  color: #fff;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
