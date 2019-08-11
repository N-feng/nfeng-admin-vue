<template>
  <div>
    <!-- 头部工具栏 -->
    <ul class="markdown-toolbars">
      <li>
        <slot name="title" />
      </li>
      <li name="粗体">
        <span @click="insertStrong"
              class="iconfont icon-strong"></span>
      </li>
    </ul>
    <!-- 编辑器 -->
    <div class="markdown-content">
      <div class="markdown-editor">
        <ul class="index"
            ref="index"
            :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}">
          <li v-for="(item, index) in indexLenth"
              :key="index">{{ index + 1 }}</li>
        </ul>
        <textarea ref="textarea"
                  v-model="value"></textarea>
      </div>
      <div class="empty"></div>
      <div ref="preview"
           class="markdown-preview"
           :class="`${themeName}`">
        <div v-html="html"></div>
      </div>
    </div>
  </div>
</template>

<script>
import marked from 'marked'

const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  // highlight(code) {
  //   return hljs.highlightAuto(code).value
  // },
})

export default {
  name: 'NfMarkdown',
  props: {
    value: {},
  },
  data() {
    return {
      timeoutId: null,
      indexLenth: 100,
      html: '',
      scrollHeight: null,
    }
  },
  watch: {
    value() {
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.html = marked(this.value, {
          sanitize: false,
          // ...this.markedOptions
        })
      }, 30)
      this.indexLenth = this.value.split('\n').length
      const height1 = this.indexLenth * 22
      const height2 = this.$refs.textarea.scrollHeight
      const height3 = this.$refs.preview.scrollHeight
      this.scrollHeight = Math.max(height1, height2, height3)
      this.indexLenth = parseInt(this.scrollHeight / 22, 0) - 1
    },
  },
  methods: {
    init() {
      this.html = marked(this.value)
    },
  },
  created() {
    this.init()
  },
  destroyed() { // 销毁时清除定时器
    clearInterval(this.timerId)
  },
}
</script>

<style lang="scss" scoped>
$line-height: 22px;
.markdown-content {
  height: 400px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #dddee1;
}
.markdown-editor {
  flex: 1;
  min-height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: space-between;
  background: #2d2d2d;

  &::-webkit-scrollbar {
    display: none;
  }

  .index {
    background: #272727;
    min-height: 100%;
    width: 36px;
    line-height: $line-height;
    padding: 12px 0;

    li {
      background: #272727;
      color: #ccc;
      font-size: 14px;
      text-align: center;
    }
  }

  textarea {
    width: 100%;
    min-height: 100%;
    outline: none;
    border: 0;
    background: #2d2d2d;
    line-height: $line-height;
    caret-color: #ccc;
    color: #669acc;
    font-size: 14px;
    resize: none;
    padding: 12px 8px;
  }
}
.empty {
  background: #f7f7f7;
  width: 12px;
}
</style>
