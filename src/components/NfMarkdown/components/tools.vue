<template>
  <ul class="markdown-toolbars">
    <li>
      <slot name="title" />
    </li>
    <li>
      <span @click="insertMid('****')"
            class="iconfont icon-strong"
            name="粗体"></span>
    </li>
    <li v-show="tools.italic">
      <span @click="insertMid('**')"
            class="iconfont icon-italic"
            name="斜体"></span>
    </li>
    <li v-show="tools.overline">
      <span @click="insertMid('~~~~')"
            class="iconfont icon-overline"
            name="删除线"></span>
    </li>
    <li v-show="tools.h1">
      <span @click="insertEnd(titleLevel[1])"
            style="font-size: 16px;"
            name="标题1">h1</span>
    </li>
    <li v-show="tools.h2">
      <span @click="insertEnd(titleLevel[2])"
            style="font-size: 16px;"
            name="标题2">h2</span>
    </li>
    <li v-show="tools.h3">
      <span @click="insertEnd(titleLevel[3])"
            style="font-size: 16px;"
            name="标题3">h3</span>
    </li>
    <li v-show="tools.h4">
      <span @click="insertEnd(titleLevel[4])"
            style="font-size: 16px;"
            name="标题4">h4</span>
    </li>
    <li v-show="tools.h5">
      <span @click="insertEnd(titleLevel[5])"
            style="font-size: 16px;"
            name="标题5">h5</span>
    </li>
    <li v-show="tools.h6">
      <span @click="insertEnd(titleLevel[6])"
            style="font-size: 16px;"
            name="标题6">h6</span>
    </li>
    <li v-show="tools.hr">
      <span @click="insertEnd('----')"
            class="iconfont icon-horizontal"
            name="分割线"></span>
    </li>
    <li v-show="tools.quote">
      <span @click="insertEnd('>  ')"
            class="iconfont icon-quote"
            name="引用"></span>
    </li>
    <li v-show="tools.ul">
      <span @click="insertEnd('-  ')"
            class="iconfont icon-ul"
            name="无序列表"></span>
    </li>
    <li v-show="tools.ol">
      <span @click="insertEnd('1. ')"
            class="iconfont icon-ol"
            name="有序列表"></span>
    </li>
    <li v-show="tools.code">
      <span @click="insertMid('```\n\n```')"
            class="iconfont icon-code"
            name="代码块"></span>
    </li>
    <li v-show="tools.notChecked">
      <span @click="insertEnd('- [ ]  ')"
            class="iconfont icon-checked-false"
            name="未完成列表"></span>
    </li>
    <li v-show="tools.checked">
      <span @click="insertEnd('- [x]  ')"
            class="iconfont icon-checked"
            name="已完成列表"></span>
    </li>
    <li v-show="tools.link">
      <span @click="insertEnd('[插入链接](href)')"
            class="iconfont icon-link"
            name="链接"></span>
    </li>
    <li v-show="tools.image">
      <span @click="insertEnd('![image](imgUrl)')"
            class="iconfont icon-img"
            name="图片"></span>
    </li>
    <li v-show="tools.table">
      <span @click="insertEnd('\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2')"
            class="iconfont icon-table"
            name="表格"></span>
    </li>
    <li v-show="tools.theme"
        class="shift-theme">
      <span @click="themeSlideDown = !themeSlideDown"
            class="iconfont icon-yanse"
            name="代码块主题"></span>
      <ul :class="{ active: themeSlideDown }"
          @mouseleave="themeSlideDown = false">
        <li @click="setThemes('Light')"
            :class="{'active': themeName === 'Light'}">Light</li>
        <li @click="setThemes('Dark')"
            :class="{'active': themeName === 'Dark'}">VS Code</li>
        <li @click="setThemes('OneDark')"
            :class="{'active': themeName === 'OneDark'}">Atom OneDark</li>
        <li @click="setThemes('GitHub')"
            :class="{'active': themeName === 'GitHub'}">GitHub</li>
      </ul>
    </li>
    <li v-show="tools.importmd"
        class="import-file">
      <span @click="$refs['file'].click()"
            class="iconfont icon-daoru"
            name="导入本地文件"></span>
      <input ref="file"
             type="file"
             @change="importFile"
             accept="text/markdown" />
    </li>
    <li v-show="tools.exportmd">
      <span @click="exportFile"
            class="iconfont icon-download"
            name="保存到本地"></span>
    </li>
    <li v-show="tools.shift && preview == 2">
      <span @click="preview = 3"
            class="iconfont icon-md"
            name="全屏编辑"></span>
    </li>
    <li v-show="tools.shift && preview == 3">
      <span @click="preview = 1"
            class="iconfont icon-group"
            name="分屏显示"></span>
    </li>
    <li v-show="tools.shift && preview == 1">
      <span @click="preview = 2"
            class="iconfont icon-preview"
            name="预览"></span>
    </li>
    <li>
      <span @click="scrolling=!scrolling"
            v-show="scrolling"
            class="iconfont icon-on"
            name="同步滚动:开"></span>
      <span @click="scrolling=!scrolling"
            v-show="!scrolling"
            class="iconfont icon-off"
            name="同步滚动:关"></span>
    </li>
    <li class="empty"></li>
    <li v-show="tools.fullscreen && !isFullscreen">
      <span @click="isFullscreen = !isFullscreen"
            class="iconfont icon-full-screen"
            name="全屏"></span>
    </li>
    <li v-show="tools.fullscreen && isFullscreen">
      <span @click="isFullscreen = !isFullscreen"
            class="iconfont icon-exit-full-screen"
            name="退出全屏"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    tools: {
      type: Object,
    },
  },
  methods: {
    insertMid(str) { // 插入之后光标在中间
      const point = this.getCursortPosition()
      const value = this.textareaValue
      const lastChart = value.substring(point - 1, point)
      const exOff = lastChart !== '\n' && value !== '' ? 1 : 0 // 外偏移量(编辑框内换行等)
      const newPoint = point + str.length / 2 + exOff // 光标新位置
      this.insertContent(str)
      this.setCaretPosition(newPoint)
    },
  },
}
</script>
