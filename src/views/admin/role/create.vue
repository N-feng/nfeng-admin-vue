<template>
  <a-modal width="648px"
           height="700px"
           :visible="visible"
           :title="title"
           centered
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
      <!-- <a-form-item v-bind="formItemLayout"
                   label="roleMenu">
        <a-tree checkable
                checkStrictly
                :treeData="adminRouter"
                :checkedKeys="checkedKeys"
                @check="onCheck"></a-tree>
      </a-form-item> -->
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

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
]

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
    adminRouter() {
      const adminRouter = router.options.routes
        .filter(item => item.name === 'admin')[0].children
      function getKey(arr) {
        return arr.map((item) => {
          const { title } = item.meta
          item.title = title
          item.key = title
          if (item.children) {
            item.children = getKey(item.children)
          }
          return item
        })
      }

      return getKey(adminRouter)
    },
    menus() {
      function flatten(data) {
        return data.reduce((arr, {
          meta,
          children = [],
        }) => arr.concat([meta.title], flatten(children)), [])
      }
      const adminRouter = router.options.routes
        .filter(item => item.name === 'admin')[0].children
      return flatten(adminRouter)
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
    // checkedKeys: {
    //   get() {
    //     console.log(this.dialogForm.roleMenu)
    //     return this.dialogForm.roleMenu
    //   },
    //   set(val) {
    //     console.log(val)
    //     // this.checkedKeys = val
    //   },
    // },
  },
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
      typeList: [
        { name: '会员', value: 'member' },
        { name: '管理', value: 'admin' },
      ],
      treeData,
      checkedKeys: [],
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    onCheck(checkedKeys) {
      console.log('onCheck', checkedKeys)
      this.checkedKeys = checkedKeys.checked
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
  margin: 0 auto;
}
</style>

<style lang="scss">
.ant-modal-body {
  max-height: 700px;
  overflow: auto;
}
</style>
