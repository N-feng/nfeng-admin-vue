<template>
  <a-menu-item :key="routeChildren.path">
    <div @click="handleLink">
      <span class="anticon">
        <nf-icon :icon="routeChildren.meta.icon"></nf-icon>
      </span>
      <span>{{ routeChildren.meta.title }}</span>
    </div>
  </a-menu-item>
</template>

<script>
  import { isExternal } from '@/utils/validate'
  import NfIcon from '@/layout/nf-icon'
  export default {
    name: 'MenuItem',
    components: { NfIcon },
    props: {
      item: {
        type: Object,
        default() {
          return null
        },
      },
      routeChildren: {
        type: Object,
        default: () => null,
      },
    },
    methods: {
      handleLink() {
        const routePath = this.routeChildren.fullPath
        const target = this.routeChildren.meta.target
        if (target === '_blank') {
          if (isExternal(routePath)) window.open(routePath)
          else if (this.$route.path !== routePath) window.open(routePath.href)
        } else {
          if (isExternal(routePath)) window.location.href = routePath
          else if (this.$route.path !== routePath) this.$router.push(routePath)
        }
      },
    },
  }
</script>
