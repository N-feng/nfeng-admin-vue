<template>
  <a-modal width="558px"
           :visible="visible"
           :title="title"
           okText="OK"
           cancelText="Cancel"
           @cancel="() => { $emit('cancel') }"
           @ok="() => { $emit('create') }">
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout"
                   label="roleName">
        <a-input v-decorator="['roleName', formConfig.roleName]"
                 placeholder="Please input roleName"></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout"
                   label="roleType">
        <a-select v-decorator="['roleType', formConfig.roleType]"
                  placeholder="Please select roleType">
          <a-select-option v-for="item in typeList"
                           :key="item.value"
                           :value="item.value">{{item.value}}</a-select-option>
        </a-select>
      </a-form-item>
      <nf-checkbox :form="form"
                   :formItemLayout="formItemLayout"
                   label="roleMenu"
                   field="roleMenu"
                   :plainOptions="menus"
                   :formConfig="formConfig.roleMenu"></nf-checkbox>
      <nf-checkbox :form="form"
                   :formItemLayout="formItemLayout"
                   label="permissions"
                   field="permissions"
                   :plainOptions="permissionsList"
                   :formConfig="formConfig.permissions"></nf-checkbox>
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
    dialogForm: {
      type: Object,
    },
  },
  computed: {
    menus() {
      const menus = []
      router.options.routes
        .filter(item => item.name === 'admin')
        .forEach((item) => {
          if (item.children) {
            item.children.forEach((item2) => {
              menus.push(item2.meta.title)
            })
          }
        })
      return menus
    },
    permissionsList() {
      const arr = Object.values(config)
      return arr
    },
    globalList() {
      return this.$store.getters.globalList
    },
    formConfig() {
      return {
        roleName: {
          rules: [{ required: true, message: 'Please input roleName' }],
          initialValue: this.dialogForm.roleName,
        },
        roleType: {
          rules: [{ required: true, message: 'Please select roleType' }],
          initialValue: this.dialogForm.roleType,
        },
        roleMenu: {
          rules: [{ required: true, message: 'Please select roleMenu' }],
          initialValue: this.dialogForm.roleMenu,
        },
        permissions: {
          rules: [{ required: true, message: 'Please select permissions' }],
          initialValue: this.dialogForm.permissions,
        },
      }
    },
  },
  data() {
    return {
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
