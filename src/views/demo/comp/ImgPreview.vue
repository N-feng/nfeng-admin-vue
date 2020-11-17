<template>
  <div>
    <div style="display: flex; justify-content: center;margin-bottom: 16px;">
      <img
        v-for="(item, key) in imageList"
        :key="key"
        :src="item"
        style="margin-right: 8px;cursor: pointer;"
        @click="(show = true), (index = key)"
      />
    </div>
    <a-button type="primary" @click="show = true">预览图片</a-button>
    <nf-preview
      :imageList="imageList"
      :show.sync="show"
      :index.sync="index"
    ></nf-preview>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  imageList: Array<any> = [
    "https://picsum.photos/id/66/346/216",
    "https://picsum.photos/id/67/346/216",
    "https://picsum.photos/id/68/346/216",
  ];
  show = false;
  index = 0;
}
</script>
