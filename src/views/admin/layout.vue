<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo" />
      <a-menu
        mode="inline"
        :default-selected-keys="['1']"
        :default-open-keys="['sub1', 'sub2', 'sub3']"
        :style="{ height: '100%', borderRight: 0 }"
        @click="handleClick"
      >
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />用户管理</span>
          <a-menu-item key="/auth/list">
            用户列表
          </a-menu-item>
          <a-menu-item key="/auth/create">
            增加用户
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="laptop" />角色管理</span>
          <a-menu-item key="/role/list">
            角色列表
          </a-menu-item>
          <a-menu-item key="/role/create">
            创建角色
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="notification" />权限管理</span>
          <a-menu-item key="/access/list">
            权限列表
          </a-menu-item>
          <a-menu-item key="/access/create">
            创建权限
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
      <a-menu :selectedKeys="current"
              mode="horizontal"
              theme="dark"
              @click="handleClick">
        <template v-for="item in menus">
          <a-sub-menu :key="item.name"
                      v-if="item.children">
            <span slot="title"
                  class="submenu-title-wrapper">{{item.meta.title}}</span>
            <template v-for="item2 in item.children">
              <a-menu-item :key="item2.name">{{item2.meta.title}}</a-menu-item>
            </template>
          </a-sub-menu>
          <a-menu-item :key="item.name"
                        v-else>{{item.meta.title}}</a-menu-item>
        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import router from '../../router'
// import utils from '../../../../nfeng-utils'

export default {
  data() {
    return {
      collapsed: false,
    }
  },
  computed: {
    username() {
      return this.$store.getters.username
    },
    menus() {
      // const { menus } = this.$store.getters
      // const adminRouter = router.options.routes
      //   .filter((item) => item.name === 'admin')[0].children
      // const openTreeMenuData = this.$tree.openTreeMenu(adminRouter)
      // const filterOpenTreeMenuData = openTreeMenuData.filter((item) => menus.includes(item.id))
      // return this.$tree.translateDataToTree(filterOpenTreeMenuData)
      return []
    },
    current() {
      // return [this.$route.name]
      // 为了匹配高亮
      return this.$route.meta.rename
        ? [this.$route.meta.rename]
        : [this.$route.name]
    },
    isHome() {
      // console.log(this.$route.name)
      return this.$route.name === 'Landing'
    },
  },
  methods: {
    // 菜单选择
    handleClick(e) {
      const path = `/admin${e.key}`
      this.$router.push({ path })
    },
    // 登出
    logout() {
      // const { name, query } = this.$route
      this.$store.dispatch('FedLogOut').h_then(() => {
        this.$router.replace({ name: 'admin' })
        // this.$router.push({
        //   name: 'login',
        //   query: {
        //     name,
        //     query: JSON.stringify(query),
        //   },
        // })
      })
    },
  },
  created() {
    // console.log(utils)
    // if (this.username) {
    //   this.$store.dispatch('getMenus')
    // }
    // this.$get('/api/role-access').catch((err) => {
    //   console.log(err)
    // })
  },
}
</script>

<style lang="scss" scoped>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
