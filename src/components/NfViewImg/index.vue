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
.preview-img {
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
  display: none;
  opacity: 0;
  transition: opacity 0.3s 0.1s;
  justify-content: center;
  align-items: center;
  &.active {
    display: flex;
    opacity: 1;
  }

  .close {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
  }

  img {
    display: block;
    &.vertical {
      height: 80%;
      width: auto;
    }
    &.horizontal {
      width: 80%;
      height: auto;
    }
  }
}
</style>
