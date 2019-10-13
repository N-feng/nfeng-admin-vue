<template>
  <div class="nf-main">
    <div class="nf-title">new project</div>
    <a-form :form="form">
      <a-form-item>
        <a-input v-decorator="['title', formConfig.title]"
                 placeholder="Please input title"></a-input>
      </a-form-item>
      <a-form-item>
        <a-input v-decorator="['description', formConfig.description]"
                 placeholder="Please input description"></a-input>
      </a-form-item>
      <a-form-item :validate-status="validateStatus"
                   :help="help"
                   required>
        <nf-markdown v-model="createForm.content"
                     @change="changeHandle"></nf-markdown>
      </a-form-item>
      <a-upload accept="image/*"
                :showUploadList="false"
                :customRequest="customRequest">
        <a-button type="primary">upload logo img</a-button>
      </a-upload>
      <div class="tr">
        <a-button type="primary"
                  @click="save">save</a-button>
        <a-button class="ml10"
                  @click="$router.push({name: 'ProjectManagerList'})">cancel</a-button>
      </div>
    </a-form>
  </div>
</template>

<script>
import { addProject } from '@/api/project'

export default {
  data() {
    return {
      createForm: {
        projectId: '',
        title: '',
        description: '',
        content: '',
        logo: '',
      },
      validateStatus: '',
      help: '',
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this)
  },
  computed: {
    formConfig() {
      return {
        title: {
          rules: [{ required: true, message: 'Please input title' }],
          initialValue: this.createForm.title,
        },
        description: {
          rules: [{ required: true, message: 'Please input description' }],
          initialValue: this.createForm.description,
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
          console.log(this.createForm)
          const params = this.$utils.jquery.extend({}, this.createForm, values)
          addProject(params)
        }
      })
    },
    customRequest() {},
    changeHandle(val) {
      const value = val
      this.help = value ? '' : 'Pleate input content'
      this.validateStatus = value ? '' : 'error'
    },
  },
}
</script>
