<template>
  <a-menu
    class="nf-menu"
    theme="dark"
    mode="inline"
    v-model="selectedKeys"
    :openKeys.sync="openKeys"
  >
    <template v-for="item in routes">
      <a-menu-item v-if="!item.children.length" :key="item.path">
        <div @click="handleLink(item)">
          <span class="anticon" v-if="item.meta.icon">
            <nf-icon :icon="item.meta.icon" />
          </span>
          <!-- <a-icon type="pie-chart" /> -->
          <span>{{ item.meta.title }}</span>
        </div>
      </a-menu-item>
      <sub-menu
        v-else
        :key="item.path"
        :menu-info="item"
        @handleLink="handleLink"
      />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { Menu } from "ant-design-vue";
import { isExternal } from "@/utils/validate";
import NfIcon from "@/layout/nf-icon/index.vue";
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <span class="anticon" v-if="menuInfo.meta.icon">
            <nf-icon :icon="menuInfo.meta.icon" />
          </span>
          <span>{{ menuInfo.meta.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.path">
            <div @click="$emit('handleLink', item)">
              <span class="anticon" v-if="item.meta.icon">
                <nf-icon :icon="item.meta.icon" />
              </span>
              <span>{{ item.meta.title }}</span>
            </div>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  components: { "nf-icon": NfIcon },
  props: {
    ...(Menu.SubMenu as any).props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};

@Component({
  components: {
    "sub-menu": SubMenu,
    "nf-icon": NfIcon,
  },
})
export default class NfMenu extends Vue {
  selectedKeys: Array<any> = [];
  openKeys: Array<any> = [];
  @Getter("routes/routes") routes?: Array<any>;

  @Watch("$route", { immediate: true })
  handler({ path, matched, meta }): void {
    this.selectedKeys = [matched[matched.length - 1].path];
    this.openKeys = [matched[0].path];
  }

  handleLink(item) {
    const routePath = item.path;
    const target = item.meta.target;
    if (target === "_blank") {
      if (isExternal(routePath)) window.open(routePath);
      else if (this.$route.path !== routePath) window.open(routePath);
    } else {
      if (isExternal(routePath)) window.location.href = routePath;
      else if (this.$route.path !== routePath) this.$router.push(routePath);
    }
  }
}
</script>
