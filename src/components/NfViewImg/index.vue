<template>
  <!-- 预览图片 -->
  <div class="preview-img"
       :class="{active:previewImgModal}">
    <span class="close"
          @click="previewImgModal = false">关闭</span>
    <img :class="[previewImgMode]"
         :src="previewImgSrc"
         alt="">
  </div>
</template>

<script>
export default {
  name: 'NfViewImg',
  data() {
    return {
      previewImgModal: false,
      previewImgSrc: '',
      previewImgMode: '',
    }
  },
  methods: {
    previewImage(src) { // 预览图片
      const img = new Image()
      img.src = src
      img.onload = () => {
        const width = img.naturalWidth
        const height = img.naturalHeight
        if ((height / width) > 1.4) {
          this.previewImgMode = 'horizontal'
        } else {
          this.previewImgMode = 'vertical'
        }
        this.previewImgSrc = src
        this.previewImgModal = true
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./scss/preview-img.scss";
</style>
