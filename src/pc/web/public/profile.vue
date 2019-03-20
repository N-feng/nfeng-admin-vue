<template>
  <div style="width: 100%;height: 100%;">
    <header-box></header-box>
    <section class="profile-box">
      <div class="box">
        <div class="content">
          <img src="../../../assets/img/me.jpg" alt="" class="box-img">
          <h1>Nfeng</h1>
          <h5>Web Devlopoer - Web Designer</h5>
          <p>A web developer is a programmer who specializes In, or is specifically engaged in, the development of World Wide Web applications, or applications that are run over HTTP from a web server to a web browser.</p>
          <ul>
            <li>
              <a href="#">
                <i class="fab fa-facebook-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-twitter-square" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-google-plus-square" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <!-- <p>HTML (Hypertext Markup Language) is the set of markup symbols or codes inserted in a file intended for display on a World Wide Web browser page. The markup tells the Web browser how to display a Web page's words and images for the user. Each individual markup code is referred to as an element (but many people also refer to it as a tag). Some elements come in pairs that indicate when some display effect is to begin and when it is to end.</p> -->
  </div>
</template>

<script>
import headerBox from '../../../components/pc/header-box.vue'

export default {
  components: { headerBox },
}
</script>

<style lang="css" scoped>
</style>
