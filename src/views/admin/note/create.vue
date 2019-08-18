<template>
  <div class="nf-main">
    <div class="nf-title">笔记创建</div>
    <a-form :form="form">
      <a-form-item label="笔记标题">
        <a-input v-decorator="['title', formConfig.noteTitle]"
                 placeholder="请输入"></a-input>
      </a-form-item>
      <a-form-item label="笔记内容"
                   :validate-status="validateStatus"
                   :help="help"
                   required>
        <nf-markdown v-model="createForm.content"
                     @change="changeHandle"></nf-markdown>
      </a-form-item>
      <a-form-item class="tr">
        <a-button type="primary"
                  @click="save">保存</a-button>
        <a-button class="ml10"
                  @click="$router.push({name: 'noteList'})">取消</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import { addNote, updateNote, getNote } from '@/api/note'

export default {
  data() {
    return {
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
        noteTitle: {
          rules: [{ required: true, message: '请输入笔记标题' }],
          initialValue: this.createForm.title,
        },
        noteContent: {
          rules: [{ required: true, message: '请输入笔记内容' }],
          initialValue: this.createForm.content,
        },
      }
    },
  },
  methods: {
    save() {
      const { content } = this.createForm
      const value = content
      this.help = value ? '' : '请输入笔记内容'
      this.validateStatus = value ? '' : 'error'
      this.form.validateFields((err, values) => {
        if (!err && !this.help) {
          const params = Object.assign({}, this.createForm, values)
          console.log('Received values of form: ', params)
          const fn = this.createForm.noteId ? updateNote : addNote
          fn(params).h_then(({ code, msg }) => {
            if (code === 200) {
              this.$message.success(msg)
              this.$router.push({ name: 'noteList' })
            }
          })
        }
      })
    },
    changeHandle(val) {
      const value = val
      this.help = value ? '' : '请输入笔记内容'
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
    this.getDetail()
  },
}
</script>

<style lang="scss">
.has-error {
  .markdown {
    border-color: red;
  }
}
</style>
