<template>
  <a-layout class="nf-layout-wrap">
    <a-layout-sider
      class="nf-sider"
      v-model="collapse"
      :trigger="null"
      collapsible
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
    <a-layout>
      <a-layout-header class="nf-header">
        <a-row>
          <a-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
            <a-icon
              class="trigger"
              :type="collapse ? 'menu-unfold' : 'menu-fold'"
              @click="toggleCollapse"
            />
          </a-col>
        </a-row>
      </a-layout-header>
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
import NfMenu from "./nf-menu/index.vue";
import startQiankun from "@/utils/qiankun";

@Component({
  components: {
    "nf-logo": NfLogo,
    "nf-menu": NfMenu,
  },
})
export default class NfLayout extends Vue {
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

  @Getter("settings/collapse") private collapse?: boolean;
  @Getter("routes/routes") private routes?: Array<any>;

  @Action("settings/toggleCollapse")
  private toggleCollapse;

  @Watch("$route", { immediate: true })
  handler({ path, matched, meta }): void {
    this.selectedKeys = meta.sidebarActive ? [meta.sidebarActive] : [path];
    this.openKeys = [matched[0].path];
  }

  mounted() {
    startQiankun();
  }
}
</script>

<style lang="less">
.nf-layout-wrap {
  .nf-sider {
    height: 100vh;
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
