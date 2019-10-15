<template>
  <div class="markdown"
       :class="{ fullscreen: isFullscreen }">

    <!-- 头部工具栏 -->
    <ul class="markdown-toolbars">
      <li>
        <slot name="title" />
      </li>
      <li v-show="tools.strong">
        <span class="iconfont icon-strong"
              name="粗体"
              @click="insertMid('****')"></span>
      </li>
      <li v-show="tools.italic">
        <span class="iconfont icon-italic"
              name="斜体"
              @click="insertMid('**')"></span>
      </li>
      <li v-show="tools.overline">
        <span class="iconfont icon-overline"
              name="删除线"
              @click="insertMid('~~~~')"></span>
      </li>
      <li v-show="tools.h1">
        <span style="font-size: 16px;"
              name="标题1"
              @click="insertEnd(titleLevel[1])">h1</span>
      </li>
      <li v-show="tools.h2">
        <span style="font-size: 16px;"
              name="标题2"
              @click="insertEnd(titleLevel[2])">h2</span>
      </li>
      <li v-show="tools.h3">
        <span style="font-size: 16px;"
              name="标题3"
              @click="insertEnd(titleLevel[3])">h3</span>
      </li>
      <li v-show="tools.h4">
        <span style="font-size: 16px;"
              name="标题4"
              @click="insertEnd(titleLevel[4])">h4</span>
      </li>
      <li v-show="tools.h5">
        <span style="font-size: 16px;"
              name="标题5"
              @click="insertEnd(titleLevel[5])">h5</span>
      </li>
      <li v-show="tools.h6">
        <span style="font-size: 16px;"
              name="标题6"
              @click="insertEnd(titleLevel[6])">h6</span>
      </li>
      <li v-show="tools.hr">
        <span class="iconfont icon-horizontal"
              name="分割线"
              @click="insertEnd('----')"></span>
      </li>
      <li v-show="tools.quote">
        <span class="iconfont icon-quote"
              name="引用"
              @click="insertEnd('>  ')"></span>
      </li>
      <li v-show="tools.ul">
        <span class="iconfont icon-ul"
              name="无序列表"
              @click="insertEnd('-  ')"></span>
      </li>
      <li v-show="tools.ol">
        <span class="iconfont icon-ol"
              name="有序列表"
              @click="insertEnd('1. ')"></span>
      </li>
      <li v-show="tools.code">
        <span class="iconfont icon-code"
              name="代码块"
              @click="insertMid('```\n\n```')"></span>
      </li>
      <li v-show="tools.notChecked">
        <span class="iconfont icon-checked-false"
              name="未完成列表"
              @click="insertEnd('- [ ]  ')"></span>
      </li>
      <li v-show="tools.checked">
        <span class="iconfont icon-checked"
              name="已完成列表"
              @click="insertEnd('- [x]  ')"></span>
      </li>
      <li v-show="tools.link">
        <span class="iconfont icon-link"
              name="链接"
              @click="insertEnd('[插入链接](href)')"></span>
      </li>
      <li v-show="tools.image">
        <span class="iconfont icon-img"
              name="图片"
              @click="insertEnd('![image](imgUrl)')"></span>
      </li>
      <li v-show="tools.table">
        <span class="iconfont icon-table"
              name="表格"
              @click="insertEnd('\nheader 1 | header 2\n---|---\nrow 1 col 1 | row 1 col 2\nrow 2 col 1 | row 2 col 2')"></span>
      </li>
      <li class="shift-theme"
          v-show="tools.theme">
        <span class="iconfont icon-yanse"
              name="代码块主题"
              @click="themeSlideDown = !themeSlideDown"></span>
        <ul :class="{ active: themeSlideDown }"
            @mouseleave="themeSlideDown = false">
          <li :class="{'active': themeName === 'Light'}"
              @click="setThemes('Light')">Light</li>
          <li :class="{'active': themeName === 'Dark'}"
              @click="setThemes('Dark')">VS Code</li>
          <li :class="{'active': themeName === 'OneDark'}"
              @click="setThemes('OneDark')">Atom OneDark</li>
          <li :class="{'active': themeName === 'GitHub'}"
              @click="setThemes('GitHub')">GitHub</li>
        </ul>
      </li>
      <li class="import-file"
          v-show="tools.importmd">
        <span class="iconfont icon-daoru"
              name="导入本地文件"
              @click="$refs['file'].click()"></span>
        <input ref="file"
               type="file"
               accept="text/markdown"
               @change="importFile" />
      </li>
      <li v-show="tools.exportmd">
        <span class="iconfont icon-download"
              name="保存到本地"
              @click="exportFile"></span>
      </li>
      <li v-show="tools.shift && preview == 2">
        <span class="iconfont icon-md"
              name="全屏编辑"
              @click="preview = 3"></span>
      </li>
      <li v-show="tools.shift && preview == 3">
        <span class="iconfont icon-group"
              name="分屏显示"
              @click="preview = 1"></span>
      </li>
      <li v-show="tools.shift && preview == 1">
        <span class="iconfont icon-preview"
              name="预览"
              @click="preview = 2"></span>
      </li>
      <li v-show="tools.scrolling">
        <span class="iconfont icon-on"
              v-show="scrolling"
              name="同步滚动:开"
              @click="scrolling = !scrolling"></span>
        <span class="iconfont icon-off"
              v-show="!scrolling"
              name="同步滚动:关"
              @click="scrolling = !scrolling"></span>
      </li>
      <li class="empty"></li>
      <li v-show="tools.fullscreen && !isFullscreen">
        <span class="iconfont icon-full-screen"
              name="全屏"
              @click="isFullscreen = !isFullscreen"></span>
      </li>
      <li v-show="tools.fullscreen && isFullscreen">
        <span class="iconfont icon-exit-full-screen"
              name="退出全屏"
              @click="isFullscreen = !isFullscreen"></span>
      </li>
    </ul>

    <!-- 编辑器 -->
    <div class="markdown-content">
      <div class="markdown-editor"
           v-show="preview === 1 || preview === 3"
           ref="editor"
           @scroll="editorScroll"
           @mouseenter="mousescrollSide('markdown')">
        <ul>
          <li v-for="(item, index) in indexLenth"
              :key="index">{{ index + 1 }}</li>
        </ul>
        <textarea :style="{height:scrollHeight?`${scrollHeight}px`:'100%'}"
                  v-model="textareaValue"
                  ref="textarea"></textarea>
      </div>
      <div class="markdown-preview"
           :class="`${themeName}`"
           v-show="preview === 1 || preview === 2"
           ref="preview"
           @scroll="previewScroll"
           @mouseenter="mousescrollSide('preview')">
        <div v-html="html"></div>
      </div>
    </div>

    <!-- 预览图片 -->
    <NfImgView ref="viewImg"></NfImgView>

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

<style lang="scss" scoped>
@import "./scss/preview-img.scss";
</style>
