<template>
  <div>
    <div class="nf-main">

      <div class="nf-title">new note</div>

      <a-form class="oa"
              :form="form">
        <a-form-item label="title"
                     v-bind="formItemLayout">
          <a-input v-decorator="['title', formConfig.title]"
                   placeholder="Please input title"></a-input>
        </a-form-item>
        <a-form-item label="content"
                     :label-col="formItemLayout.labelCol"
                     :wrapper-col="{ span: 19 }"
                     :validate-status="validateStatus"
                     :help="help"
                     required>
          <nf-markdown v-model="createForm.content"
                       @change="changeHandle"></nf-markdown>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: formItemLayout.labelCol.span }">

        </a-form-item>
      </a-form>
    </div>
    <div class="nf-bottom-fixed">
      <a-button type="primary"
                @click="save">save</a-button>
      <a-button class="ml10"
                @click="$router.push({name: 'NoteManager'})">cancel</a-button>
    </div>
  </div>

</template>

<script>
import { addNote, updateNote, getNote } from '@/api/note'

export default {
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 5 },
        wrapperCol: { span: 14 },
      },
      createForm: {
        noteId: '',
        title: '',
        content: '',
      },
      validateStatus: '',
      help: '',
    }
  },
  computed: {
    formConfig() {
      return {
        title: {
          rules: [{ required: true, message: 'Please input title' }],
          initialValue: this.createForm.title,
        },
        content: {
          rules: [{ required: true, message: 'Pleate input content' }],
          initialValue: this.createForm.content,
        },
      }
    },
  },
  methods: {
    save() {
      const { content } = this.createForm
      const value = content
      this.help = value ? '' : 'Pleate input content'
      this.validateStatus = value ? '' : 'error'
      this.form.validateFields((err, values) => {
        if (!err && !this.help) {
          console.log('Received values of form: ', values)
          const params = Object.assign({}, this.createForm, values)
          const fn = this.createForm.noteId ? updateNote : addNote
          fn(params).h_then(({ code, msg }) => {
            if (code === 200) {
              this.$message.success(msg)
              this.$router.push({ name: 'NoteManager' })
            }
          })
        }
      })
    },
    changeHandle(val) {
      const value = val
      this.help = value ? '' : 'Pleate input content'
      this.validateStatus = value ? '' : 'error'
    },
    getDetail() {
      getNote(this.createForm.noteId).h_then(({ data }) => {
        Object.assign(this.createForm, data)
      })
    },
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  created() {
    this.createForm.noteId = this.$route.query.noteId
    if (this.createForm.noteId) {
      this.getDetail()
    }
  },
}
</script>

<style lang="scss" scoped>
.ant-form:not(.ant-form-inline):not(.ant-form-vertical) {
  max-width: 600px;
}
</style>
