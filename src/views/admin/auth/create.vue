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
        <a-input v-decorator="['username', { initialValue: formConfig.username }]"
                 placeholder="请输入"
                 disabled></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout"
                   label="用户角色">
        <a-select v-decorator="['roleName', { initialValue: formConfig.roleName }]"
                  placeholder="请选择">
          <a-select-option v-for="item in globalList.roleNameList"
                           :key="item"
                           :value="item">{{item}}</a-select-option>
        </a-select>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script>
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
    globalList() {
      return this.$store.getters.globalList
    },
    formConfig() {
      return {
        username: {
          initialValue: this.dialogForm.username,
        },
        roleName: {
          initialValue: this.dialogForm.roleName,
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
    }
  },
  created() {
    this.$store.dispatch('getRoleNameList')
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
}
</script>
