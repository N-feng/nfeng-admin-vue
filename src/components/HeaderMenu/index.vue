<template functional>
    <!-- <a-sub-menu :key="props.route.name">
      <span slot="title"
        class="submenu-title-wrapper"
        :key="props.route.name">
        {{props.route.meta.title}}
      </span>
      <template v-for="item in props.route.children">
        <a-menu-item v-if="item.hiddenChildren || !item.children"
          :key="item.name">{{item.meta.title}}</a-menu-item>
        <header-menu v-else
          :route="item"
          :key="item.name"></header-menu>
      </template>
    </a-sub-menu> -->
    <a-sub-menu :key="props.route.path">
        <span slot="title"
              class="submenu-title-wrapper"
              :key="props.route.path">
          {{props.route.title}}
        </span>
        <template v-for="item in props.route.children">
            <a-menu-item v-if="!item.children.length"
                         :key="item.path">{{item.title}}</a-menu-item>
            <header-menu v-else
                         :route="item"
                         :key="item.path"></header-menu>
        </template>
    </a-sub-menu>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: ['route'],
  created() {
    // console.log(this.props.route.name)
  },
}
</script>
