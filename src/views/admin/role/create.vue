<template>
  <a-modal :visible="visible" :title="title" okText="确认" cancelText="取消" @cancel="() => { $emit('cancel') }" @ok="() => { $emit('create') }">
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout" label="角色名称">
        <a-input v-decorator="['roleName', { rules: rules.roleName, initialValue: roleForm.roleName }]" placeholder="请输入"></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="角色类型">
        <a-select v-decorator="['roleType', { rules: rules.roleType, initialValue: roleForm.roleType }]" placeholder="请选择">
          <a-select-option v-for="item in globalList.roleOption.typeList" :key="item.value" :value="item.value">{{item.name}}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="角色菜单">
        <!-- <nf-checkbox v-model="menuCheckAll" @change="menuHandleCheckAllChange">全选</nf-checkbox> -->
        <a-checkbox :indeterminate="indeterminate" @change="onCheckAllChange" :checked="checkAll">全部</a-checkbox>
        <a-checkbox-group v-decorator="['roleMenu', { rules: rules.roleMenu, initialValue: roleForm.roleMenu }]" @change="onChange">
          <div v-for="item in admin" :key="item.meta.title">
            <a-checkbox v-for="item2 in item.children" :key="item2.meta.title" :value="item2.meta.title">{{item2.meta.title}}</a-checkbox>
          </div>
        </a-checkbox-group>
      </a-form-item>
      <!-- <nf-form-item prop="permissions" label="Permissions:">
        <nf-checkbox v-model="permCheckAll" @change="permHandleCheckAllChange">全选</nf-checkbox>
        <nf-checkbox-group v-model="RoleModel.permissions" @change="permHandleCheckedChange">
          <nf-checkbox v-for="(item,key) in RoleModel.permissionsList" :label="item.path" :key="key">{{item.title}}</nf-checkbox>
        </nf-checkbox-group>
      </nf-form-item> -->
    </a-form>
    <!-- <div slot="footer">
      <router-link to="list">
        <nf-button>Cancel</nf-button>
      </router-link>
      <nf-button type="primary" class="pull-right" @click="submit">Submit</nf-button>
    </div> -->
  </a-modal>
</template>

<script>
import RoleModel from '../../../model/RoleModel'
import admin from '@/router/modules/admin'

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
    globalList() {
      return this.$store.getters.globalList
    },
  },
  data() {
    return {
      RoleModel: new RoleModel(),
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
      menuCheckAll: false,
      menuListPath: [],
      permCheckAll: false,
      permListPath: [],
      formItemLayout: {
        labelCol: { span: 7 },
        wrapperCol: { span: 10 },
      },
      admin,
      indeterminate: false,
      checkAll: false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  methods: {
    submit() {
      this.$refs['role-form'].validate((valid) => {
        if (valid) {
          this.RoleModel.save().then(() => {
            this.$router.push('/role/list')
          })
        }
      })
    },
    onChange(checkedList) {
      let optionsLength = 0
      this.admin.forEach((item) => {
        if (item.children) {
          optionsLength += item.children.length
        }
      })
      this.indeterminate = !!checkedList.length && (checkedList.length < optionsLength)
      this.checkAll = checkedList.length === optionsLength
    },
    onCheckAllChange(e) {
      const arr = []
      this.admin.forEach((item) => {
        item.children.forEach((item2) => {
          arr.push(item2.meta.title)
        })
      })
      Object.assign(this, {
        // checkedList: e.target.checked ? arr : [],
        indeterminate: false,
        checkAll: e.target.checked,
      })
      this.form.setFieldsValue({
        roleMenu: e.target.checked ? arr : [],
      })
    },
    permHandleCheckAllChange(val) {
      this.RoleModel.permissions = val ? this.permListPath : []
    },
    permHandleCheckedChange(value) {
      const checkedCount = value.length
      this.permCheckAll = checkedCount === this.permListPath.length
    },
  },
  created() {
    // const p1 = this.RoleModel.getOption().then(() => {
    //   this.menuListPath = RoleModel.getAllPath(this.RoleModel.menuList)
    //   this.permListPath = RoleModel.getAllPath(this.RoleModel.permissionsList)
    // })
    // if (this.$route.query.roleName) {
    //   const p2 = this.RoleModel.getDetail(this.$route.query.roleName)
    //   Promise.all([p1, p2]).then(() => {
    //     const { roleMenu, permissions } = this.RoleModel
    //     this.menuCheckAll = roleMenu.length === this.menuListPath.length
    //     this.permCheckAll = permissions.length === this.permListPath.length
    //   })
    // }
    this.$store.dispatch('getRoleOption')
  },
}
</script>
