<template>
  <a-layout class="nf-layout-wrap">
    <div
      v-if="device === 'mobile' && !collapse"
      class="nf-mask"
      @click="handleFoldSideBar"
    ></div>
    <a-layout-sider
      collapsible
      class="nf-sider"
      width="250"
      v-model="collapse"
      :class="classObj"
      :trigger="null"
    >
      <nf-logo />
      <a-menu
        class="nf-menu"
        theme="dark"
        mode="inline"
        v-model="selectedKeys"
        :openKeys.sync="openKeys"
      >
        <nf-menu
          v-for="route in routes"
          :key="route.path"
          :item="route"
        ></nf-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout
      class="nf-layout"
      :class="'mobile' === device ? 'nf-mobile-layout' : ''"
    >
      <a-layout-header class="nf-header">
        <a-row>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <a-icon
              class="trigger"
              :type="collapse ? 'menu-unfold' : 'menu-fold'"
              @click="toggleCollapse"
            />
          </a-col>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <nf-avatar />
          </a-col>
        </a-row>
      </a-layout-header>
      <nf-tabs />
      <nf-content>
        <div id="subapp-viewport" />
      </nf-content>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
        <div id="subapp-viewport" />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import NfLogo from "./nf-logo/index.vue";
import NfAvatar from "./nf-avatar/index.vue";
import NfMenu from "./nf-menu/index.vue";
import NfTabs from "./nf-tabs/index.vue";
import NfContent from "./nf-content/index.vue";
import startQiankun from "@/micro";
import apps from "@/micro/apps";

@Component({
  components: {
    "nf-logo": NfLogo,
    "nf-avatar": NfAvatar,
    "nf-menu": NfMenu,
    "nf-tabs": NfTabs,
    "nf-content": NfContent,
  },
})
export default class NfLayout extends Vue {
  width;
  selectedKeys: Array<any> = [];
  openKeys: Array<any> = [];
  // routes: Array<any> = [
  //   {
  //     action: "/home",
  //     title: "Home",
  //     children: [
  //       {
  //         action: "/home/child-one",
  //         title: "ChildOne",
  //       },
  //       {
  //         action: "/home/child-two",
  //         title: "ChildTwo",
  //       },
  //     ],
  //   },
  //   {
  //     action: "/micro-react",
  //     title: "React",
  //     children: [
  //       {
  //         action: "/micro-react/child-one",
  //         title: "MicroChildOne",
  //       },
  //       {
  //         action: "/micro-react/child-two",
  //         title: "MicroChildTwo",
  //       },
  //     ],
  //   },
  //   {
  //     action: "/micro-vue",
  //     title: "Vue",
  //     children: [
  //       {
  //         action: "/micro-vue/home",
  //         title: "首页",
  //       },
  //       {
  //         action: "/micro-vue/courses/list",
  //         title: "课程管理",
  //       },
  //       {
  //         action: "/micro-vue/episodes/list",
  //         title: "课时管理",
  //       },
  //       {
  //         action: "/micro-vue/users/list",
  //         title: "用户管理",
  //       },
  //     ],
  //   },
  // ];

  @Getter("settings/collapse") collapse?: boolean;
  @Getter("routes/routes") routes?: Array<any>;
  @Getter("settings/device") device?: string;

  get classObj() {
    return {
      "nf-mobile": this.device === "mobile",
      "nf-collapse": this.collapse,
    };
  }

  @Action("settings/toggleDevice") toggleDevice;
  @Action("settings/foldSideBar") handleFoldSideBar;
  @Action("settings/toggleCollapse") toggleCollapse;

  @Watch("$route", { immediate: true })
  handler({ path, matched, meta }): void {
    
    
    
    this.selectedKeys = meta.sidebarActive ? [meta.sidebarActive] : [path];
    this.openKeys = [matched[0].path];
  }

  beforeMount() {
    window.addEventListener("resize", this.handleLayouts);
  }

  beforeUnmount() {
    window.removeEventListener("resize", this.handleLayouts);
  }

  mounted() {
    startQiankun(apps);
    this.handleLayouts();
  }

  handleLayouts() {
    const width = document.body.getBoundingClientRect().width;
    if (this.width !== width) {
      const isMobile = width - 1 < 992;
      this.toggleDevice(isMobile ? "mobile" : "desktop");
      this.width = width;
    }
  }
}
</script>

<style lang="less">
.nf-layout-wrap {
  .nf-sider {
    position: fixed;
    left: 0;
    height: 100vh;
    overflow: auto;
    .nf-menu {
      height: calc(100vh - @nf-header-height);
    }
  }
  .nf-layout {
    padding-left: 250px;
    transition: all 0.2s;
  }
  .nf-mobile-layout {
    padding-left: 0;
    transition: all 0.2s;
  }
  .nf-collapse {
    .nf-logo .anticon + span {
      display: inline-block;
      max-width: 0;
      opacity: 0;
      transition: all 0.2s;
    }
    & + .nf-layout {
      padding-left: 81px;
      transition: all 0.2s;
    }
  }
  .nf-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 998;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000;
    opacity: 0.5;
  }
  .nf-mobile {
    position: fixed !important;
    z-index: 999;
    &.nf-collapse {
      width: 0 !important;
      min-width: 0 !important;
      max-width: 0 !important;
      * {
        display: none !important;
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
      }
      .ant-menu-item,
      .ant-menu-submenu {
        display: none !important;
        width: 0 !important;
        min-width: 0 !important;
        max-width: 0 !important;
      }
      & + .nf-layout {
        padding-left: 0px !important;
        transition: all 0.2s;
      }
    }
  }
  .nf-header {
    padding: 0;
    background: #fff;
    .ant-col + .ant-col {
      display: flex;
      justify-content: flex-end;
      padding: 0 @nf-padding;
    }
    .trigger {
      height: @nf-header-height;
      padding: 0 @nf-padding;
      font-size: 18px;
      line-height: @nf-header-height;
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: #1890ff;
      }
    }
  }
}
</style>
