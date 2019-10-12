<template>
  <div class="nf-main mb40">
    <div class="nf-title">new note</div>
    <a-form :form="form">
      <a-form-item>
        <a-input v-decorator="['title', formConfig.title]"
                 placeholder="Please input title"></a-input>
      </a-form-item>
      <a-form-item :validate-status="validateStatus"
                   :help="help"
                   required>
        <nf-markdown v-model="createForm.content"
                     @change="changeHandle"></nf-markdown>
      </a-form-item>
      <div class="tr">
        <a-button type="primary"
                  @click="save">save</a-button>
        <a-button class="ml10"
                  @click="$router.push({name: 'NoteManagerList'})">cancel</a-button>
      </div>
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
          const params = Object.assign({}, this.createForm, values)
          console.log('Received values of form: ', params)
          const fn = this.createForm.noteId ? updateNote : addNote
          fn(params).h_then(({ code, msg }) => {
            if (code === 200) {
              this.$message.success(msg)
              this.$router.push({ name: 'NoteManagerList' })
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

<style lang="scss">
.has-error {
  .markdown {
    border-color: red;
  }
}
</style>
