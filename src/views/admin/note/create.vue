<template>
  <div class="nf-main">
    <div class="nf-title">笔记创建</div>
    <div v-html="markedown"></div>2223
    {{content}}
    <mark-down v-model="content"
               initialValue="222"
               :interval="10000"
               @on-save="changeMavon" />

    <a href="javascript:;"
       @click="getContent"></a>
  </div>
</template>

<script>
import Marked from 'marked'
import MarkDown from 'vue-meditor'

export default {
  components: {
    MarkDown,
  },
  data() {
    return {
      content: '222',
      /**
       * 解析的数据
       */
      markedown: '',
      /**
       * marked解析对象
       */
      marked: new Marked.Renderer(),
    }
  },
  methods: {
    /**
     * 初始化解析对象
     */
    initMarked() {
      const rendererMD = new Marked.Renderer()
      Marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
      })
    },
    changeMavon(e) {
      console.log(e)
    },
    getContent() {
      console.log(this.content)
    },
  },
  created() {
    this.initMarked()
  },
}
</script>
