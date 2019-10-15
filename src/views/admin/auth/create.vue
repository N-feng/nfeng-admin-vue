<template>
  <a-modal width="558px"
           :visible="visible"
           :title="title"
           centered
           @cancel="() => { $emit('cancel') }"
           @ok="() => { $emit('create') }">
    <a-form :form="form">
      <a-form-item v-bind="formItemLayout"
                   label="username">
        <a-input v-decorator="['username', formConfig.username]"
                 placeholder="Please input username"
                 disabled></a-input>
      </a-form-item>
      <a-form-item v-bind="formItemLayout"
                   label="roleName">
        <a-select v-decorator="['roleName', formConfig.roleName]"
                  placeholder="Please select roleName">
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
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
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

<style lang="scss" scoped>
.ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
}
</style>
