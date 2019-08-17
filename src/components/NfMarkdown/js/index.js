import marked from 'marked'
import hljs from './hljs'
import { saveFile } from './utils'
import defaultTools from './tools'
import tools from '../components/tools.vue'

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
  name: 'NfMarkdown',
  components: { tools },
  props: {
    value: {},
    theme: { // 默认主题
      type: String,
      default: 'Light',
    },
    toolbars: { // 工具栏
      type: Object,
      default() {
        return {}
      },
    },
    exportFileName: { // 默认导出文件名称
      type: String,
      default: '未命名文件',
    },
  },
  data() {
    return {
      textareaValue: '', // 输入框内容
      timeoutId: null,
      indexLenth: 100,
      html: '',
      preview: 1, // 是否是预览状态
      isFullscreen: false, // 是否是全屏
      scrollHeight: null,
      themeName: '', // 主题名称
      themeSlideDown: false,
      scrolling: true, // 同步滚动
      previewImgModal: false,
      previewImgSrc: '',
      previewImgMode: '',
      titleLevel: {
        1: '#  ',
        2: '##  ',
        3: '###  ',
        4: '####  ',
        5: '#####  ',
        6: '######  ',
      },
    }
  },
  computed: {
    tools() {
      const {
        toolbars = {},
      } = this
      return {
        ...defaultTools,
        ...toolbars,
      }
    },
  },
  watch: {
    textareaValue(val) {
      clearTimeout(this.timeoutId)
      this.timeoutId = setTimeout(() => {
        this.html = marked(val, {
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
      this.addImageClickListener()
    },
  },
  methods: {
    init() {
      this.textareaValue = this.value
      this.themeName = this.theme
      this.html = marked(this.textareaValue)
    },
    insertContent(initStr) { // 插入文本
      const { preview } = this
      if (preview === 2) {
        return
      }
      this.lastInsert = initStr
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      const lastFourCharts = value.substring(point - 4, point)
      if (lastChart !== '\n' && value !== '' && lastFourCharts !== '    ') {
        const str = `\n${initStr}`
        this.insertAfterText(str)
      } else {
        this.insertAfterText(initStr)
      }
    },
    getCursortPosition() { // 获取光标位置
      const textDom = this.$refs.textarea
      let cursorPos = 0
      if (document.selection) {
        textDom.focus()
        const selectRange = document.selection.createRange()
        selectRange.moveStart('character', -this.value.length)
        cursorPos = selectRange.text.length
      } else if (textDom.selectionStart || parseInt(textDom.selectionStart, 0) === 0) {
        cursorPos = textDom.selectionStart
      }
      return cursorPos
    },
    insertAfterText(value) { // 插入文本
      const textDom = this.$refs.textarea
      let selectRange
      if (document.selection) {
        textDom.focus()
        selectRange = document.selection.createRange()
        selectRange.text = value
        textDom.focus()
      } else if (textDom.selectionStart || parseInt(textDom.selectionStart, 0) === 0) {
        const startPos = textDom.selectionStart
        const endPos = textDom.selectionEnd
        // const { scrollTop } = textDom
        this.textareaValue = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length)
        // console.log(this.textareaValue)
        textDom.value = textDom.value.substring(0, startPos) + value + textDom.value.substring(endPos, textDom.value.length)
        // textDom.focus()
        // textDom.selectionStart = startPos + value.length
        // textDom.selectionEnd = startPos + value.length
        // textDom.scrollTop = scrollTop
      } else {
        textDom.value += value
        textDom.focus()
      }
      // this.$emit('input', textDom.value)
    },
    setCaretPosition(position) { // 设置光标位置
      const textDom = this.$refs.textarea
      if (textDom.setSelectionRange) {
        textDom.focus()
        textDom.setSelectionRange(position, position)
      } else if (textDom.createTextRange) {
        const range = textDom.createTextRange()
        range.collapse(true)
        range.moveEnd('character', position)
        range.moveStart('character', position)
        range.select()
      }
    },
    insertEnd(str) { // 插入之后光标在最后
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      this.insertContent(str)
      if (lastChart !== '\n' && value !== '') {
        this.setCaretPosition(point + str.length + 1)
      } else {
        this.setCaretPosition(point + str.length)
      }
    },
    setThemes(name) { // 设置主题
      this.themeName = name
      this.themeSlideDown = false
    },
    exportFile() { // 导出为.md格式
      saveFile(this.value, `${this.exportFileName}.md`)
    },
    importFile(e) { // 导入本地文件
      const file = e.target.files[0]
      if (!file) {
        return
      }
      const { type } = file
      if (type !== 'text/markdown') {
        this.$Notice.error('文件格式有误!')
        return
      }
      const reader = new FileReader()
      reader.readAsText(file, {
        encoding: 'utf-8',
      })
      reader.onload = () => {
        this.textareaValue = reader.result
        e.target.value = ''
      }
    },
    handleInput(e) {
      const { value } = e.target
      this.html = marked(value, {
        sanitize: false,
        // ...this.markedOptions
      })
    },
    addImageClickListener() { // 监听查看大图
      setTimeout(() => {
        const imgs = this.$refs.preview.querySelectorAll('img')
        imgs.forEach((item) => {
          item.onclick = () => {
            const src = item.getAttribute('src')
            this.previewImage(src)
          }
        })
      }, 600)
    },
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
  created() {
    this.init()
  },
  destroyed() { // 销毁时清除定时器
    clearInterval(this.timerId)
  },
}
