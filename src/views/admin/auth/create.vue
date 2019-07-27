<template>
  <a-modal width="558px"
           :visible="visible"
           :title="title"
           okText="确认"
           cancelText="取消"
           @cancel="() => { $emit('cancel') }"
           @ok="() => { $emit('create') }">
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout"
                   label="用户名称">
        <a-input v-decorator="['username', { initialValue: authForm.username }]"
                 placeholder="请输入"
                 disabled></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout"
                   label="用户角色">
        <a-select v-decorator="['roleName', { initialValue: authForm.roleName }]"
                  placeholder="请选择">
          <a-select-option v-for="item in roleList"
                           :key="item.roleName"
                           :value="item.roleName">{{item.roleName}}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
import router from '@/router'
import config from '@/api/config'
import { getRoleList } from '@/api/role'

export default {
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    authForm: {
      type: Object,
    },
  },
  computed: {
    menuList() {
      const arr = []
      router.options.routes.forEach((item) => {
        arr.push(item.meta.title)
        if (item.children) {
          item.children.forEach((item2) => {
            arr.push(item2.meta.title)
          })
        }
      })
      return arr
    },
    permissionsList() {
      const arr = Object.values(config)
      return arr
    },
    globalList() {
      return this.$store.getters.globalList
    },
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 7 },
        wrapperCol: { span: 13 },
      },
      roleList: [],
    }
  },
  methods: {
    getRoleList() {
      getRoleList().h_then(({ data }) => {
        this.roleList = data
      })
    },
  },
  created() {
    this.getRoleList()
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
}
</script>
