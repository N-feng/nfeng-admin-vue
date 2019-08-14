import marked from 'marked'
import hljs from './hljs'
import defaultTools from './tools'

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
  },
  data() {
    return {
      textareaValue: '', // 输入框内容
      timeoutId: null,
      indexLenth: 100,
      html: '',
      scrollHeight: null,
      themeName: '', // 主题名称
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
    },
  },
  methods: {
    init() {
      this.textareaValue = this.value
      this.themeName = this.theme
      this.html = marked(this.textareaValue)
    },
    insertContent(initStr) { // 插入文本
      const {
        preview,
      } = this
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
    insertMid(str) {
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      const exOff = lastChart !== '\n' && value !== '' ? 1 : 0 // 外偏移量(编辑框内换行等)
      const newPoint = point + str.length / 2 + exOff // 光标新位置
      this.insertContent(str)
      this.setCaretPosition(newPoint)
    },
    insertEnd(str) {
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
    insertStrong() { // 粗体
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      this.insertContent('****')
      if (lastChart !== '\n' && value !== '') {
        this.setCaretPosition(point + 3)
      } else {
        this.setCaretPosition(point + 2)
      }
    },
    insertItalic() { // 斜体
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      this.insertContent('**')
      if (lastChart !== '\n' && value !== '') {
        this.setCaretPosition(point + 2)
      } else {
        this.setCaretPosition(point + 1)
      }
    },
    insertOverline() { // overline
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      this.insertContent('~~~~')
      if (lastChart !== '\n' && value !== '') {
        this.setCaretPosition(point + 3)
      } else {
        this.setCaretPosition(point + 2)
      }
    },
    insertTitle(level) { // 插入标题
      const titleLevel = {
        1: '#  ',
        2: '##  ',
        3: '###  ',
        4: '####  ',
        5: '#####  ',
        6: '######  ',
      }
      this.insertContent(titleLevel[level])
    },
    handleInput(e) {
      const { value } = e.target
      this.html = marked(value, {
        sanitize: false,
        // ...this.markedOptions
      })
    },
  },
  created() {
    this.init()
  },
  destroyed() { // 销毁时清除定时器
    clearInterval(this.timerId)
  },
}
