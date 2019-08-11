<template>
  <div class="nf-main">
    <div class="nf-title">笔记创建</div>
    <nf-markdown v-model="markedown"></nf-markdown>
    <!-- <div v-html="markedown"></div> -->
    <!-- <mark-down v-model="content"
               initialValue="222"
               :interval="10000"
               @on-save="changeMavon" /> -->

    <a href="javascript:;"
       @click="getContent"></a>
  </div>
</template>

<script>
// import MarkDown from 'vue-meditor'

export default {
  components: {
    // MarkDown,
  },
  data() {
    return {
      content: '222',
      /**
       * 解析的数据
       */
      markedown: '# Marked in browser\n\nRendered by **marked**.',
    }
  },
  methods: {
    changeMavon(e) {
      console.log(e)
    },
    getContent() {
      console.log(this.content)
    },
  },
}
</script>
