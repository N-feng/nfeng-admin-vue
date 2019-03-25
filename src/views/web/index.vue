<template>
  <div class="wrap">
    <header-box style="position: absolute;" :isCollapse="isCollapse"></header-box>
    <section class="web-box">
      <div class="box">
        <div class="content">
          <img src="../../assets/img/me.jpg" alt="" class="box-img">
          <h1>Nfeng</h1>
          <h5>Web Devlopoer - Web Designer</h5>
          <p>A web developer is a programmer who specializes In, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.</p>
          <social-box></social-box>
        </div>
      </div>
    </section>
    <!-- <p>HTML (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file intended for display on a World Wide Web browser page. The markup tells the Web browser how to display a Web page's words and images for the user. Each individual markup code is referred to as an element (but many people also refer to it as a tag). Some elements come in pairs that indicate when some display effect is to begin and when it is to end.</p> -->
  </div>
</template>

<script>
import headerBox from '../../components/layout/header-box.vue'
import socialBox from '../../components/layout/social-box.vue'
import { maxWidth } from '../../utils'

export default {
  components: {
    headerBox,
    socialBox,
  },
  data() {
    return {
      isCollapse: false,
    }
  },
  methods: {
    maxWidth(bool) {
      this.isCollapse = bool
    },
  },
  mounted() {
    maxWidth(800, this.maxWidth)
  },
}
</script>

<style lang="css" scoped>
.wrap {
  width: 100%;
  height: 100%;
  /* display: flex; */
  /* flex-direction: column; */
}
</style>
