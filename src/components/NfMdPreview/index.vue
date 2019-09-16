<template>
  <div class="markdown-preview">
    <div v-html="html"></div>
  </div>
</template>

<script>
import marked from 'marked'
import hljs from '../NfMarkdown/js/hljs'

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
  },
})

export default {
  name: 'NfMdPreview',
  props: {
    data: {
      type: String,
    },
    markedOptions: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  computed: {
    html() {
      return marked(this.data, {
        sanitize: false,
        ...this.markedOptions,
      })
    },
  },
}
</script>

<style lang="css" scoped>
</style>
