<template>
  <div class="markdown"
       :class="{ fullscreen: isFullscreen }">

    <!-- 头部工具栏 -->
    <tools :tools="tools"></tools>

    <!-- 编辑器 -->
    <div class="markdown-content">
      <div v-show="preview === 1 || preview === 3"
           class="markdown-editor">
        <ul class="index"
            ref="index"
            :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}">
          <li v-for="(item, index) in indexLenth"
              :key="index">{{ index + 1 }}</li>
        </ul>
        <textarea ref="textarea"
                  v-model="textareaValue"
                  @input="handleInput"
                  :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}"></textarea>
      </div>
      <div v-show="preview === 1 || preview === 2"
           ref="preview"
           class="markdown-preview"
           :class="`${themeName}`">
        <div v-html="html"></div>
      </div>
    </div>
    <!-- 预览图片 -->
    <div class="img-preview"
         :class="{active:previewImgModal}">
      <span class="close"
            @click="previewImgModal = false">关闭</span>
      <img :class="[previewImgMode]"
           :src="previewImgSrc"
           alt="">
    </div>
  </div>
</template>

<script>
import markdown from './js/index'

export default markdown
</script>

<style lang="scss">
@import "./font/iconfont.css";
@import "./scss/index.scss";
</style>
