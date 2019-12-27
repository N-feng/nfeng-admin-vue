<template>
  <div class="markdown-preview"
       :class="`${themeName}`"
       ref="preview"
       @scroll="$emit('previewScroll')"
       @mouseenter="$emit('mousescrollSide')">
    <div v-html="html"></div>
    <!-- 预览图片 -->
    <nf-img-preview ref="nfImgPreview"></nf-img-preview>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from './js/hljs'

hljs.initHighlightingOnLoad()
const renderer = new marked.Renderer()

marked.setOptions({
  renderer,
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  highlight(code) {
    return hljs.highlightAuto(code).value
  }
})

export default {
  name: 'nfMdPreview',
  props: {
    data: {
      type: String
    },
    markedOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    themeName: {
      type: String,
      default: 'Light'
    }
  },
  data() {
    return {
      html: ''
    }
  },
  // computed: {
  //   html() {
  //     return marked(this.data, {
  //       sanitize: false,
  //       ...this.markedOptions,
  //     })
  //   },
  // },
  watch: {
    data() {
      this.init()
    }
  },
  methods: {
    init() {
      this.html = marked(this.data)
      this.addImageClickListener()
    },
    addImageClickListener() { // 监听查看大图
      setTimeout(() => {
        const imgs = this.$refs.preview.querySelectorAll('img')
        imgs.forEach((item) => {
          item.onclick = () => {
            const src = item.getAttribute('src')
            this.$refs.nfImgPreview.show(src)
          }
        })
      }, 600)
    }
  },
  created() {
    this.init()
  }
}
</script>

<style lang="scss">
@import "./scss/index.scss";
</style>
