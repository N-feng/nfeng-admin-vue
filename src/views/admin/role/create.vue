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
                   label="角色名称">
        <a-input v-decorator="['roleName', { rules: rules.roleName, initialValue: roleForm.roleName }]"
                 placeholder="请输入"></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout"
                   label="角色类型">
        <a-select v-decorator="['roleType', { rules: rules.roleType, initialValue: roleForm.roleType }]"
                  placeholder="请选择">
          <a-select-option v-for="item in typeList"
                           :key="item.value"
                           :value="item.value">{{item.name}}</a-select-option>
        </a-select>
      </a-form-item>
      <nf-checkbox :form="form"
                   :formItemLayout="formItemLayout"
                   label="角色菜单"
                   field="roleMenu"
                   :rules="rules.roleMenu"
                   :checkedList="roleForm.roleMenu"
                   :plainOptions="menuList"></nf-checkbox>
      <nf-checkbox :form="form"
                   :formItemLayout="formItemLayout"
                   label="角色权限"
                   field="permissions"
                   :rules="rules.permissions"
                   :checkedList="roleForm.permissions"
                   :plainOptions="permissionsList"></nf-checkbox>
    </a-form>
  </a-modal>
</template>

<script>
import router from '@/router'
import config from '@/api/config'

export default {
  props: {
    visible: {
      type: Boolean,
    },
    title: {
      type: String,
    },
    roleForm: {
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
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称' },
        ],
        roleType: [
          { required: true, message: '请输入角色类型' },
        ],
        roleMenu: [
          { required: true, message: '请选择角色菜单' },
        ],
      },
      formItemLayout: {
        labelCol: { span: 7 },
        wrapperCol: { span: 13 },
      },
      typeList: [
        { name: '会员', value: 'member' },
        { name: '管理', value: 'admin' },
      ],
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
}
</script>
