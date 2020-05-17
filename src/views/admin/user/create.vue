<template>
  <div>
    <ncform
      :form-schema="formSchema"
      form-name="your-form-name"
      v-model="formSchema.value"
      @submit="submit()"
    ></ncform>
    <div style="text-align: center">
      <a-button @click="submit()">提交</a-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formSchema: {
        type: 'object',
        properties: {
          username: {
            ui: {
              label: '用户名称',
              widget: 'nf-input',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写用户名称',
              },
            },
          },
          password: {
            type: 'string',
            ui: {
              label: '用户密码',
              widget: 'nf-input',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写用户密码',
              },
            },
          },
          mobile: {
            ui: {
              label: '用户电话',
              widget: 'nf-input',
            },
          },
          email: {
            ui: {
              label: '用户邮箱',
              widget: 'nf-input',
            },
          },
          roleId: {
            type: 'string',
            ui: {
              label: '用户角色',
              widget: 'nf-select',
              widgetConfig: {
                enumSourceRemote: {
                  // 远程数据源
                  remoteUrl: '/api/enum/findRoles', // 如果是远程访问，则填写该url
                  paramName: 'keyword', // 请求参数名，默认是keyword
                  otherParams: {}, // 其它请求的参数，支持字符串表达式
                  resField: 'list', // 响应结果的字段
                  selectFirstItem: false, // 默认选中第一项
                },
              },

            },
            rules: {
              required: {
                value: true,
                errMsg: '请选择用户角色',
              },
            },
          },
        },
        ui: {
          widgetConfig: {
            layout: 'h',
          },
        },
        globalConfig: {
          style: {
            formCls: 'nf-form',
            invalidFeedbackCls: [
              'el-form-item__error',
            ],
          },
        },
      },
    }
  },
  methods: {
    submit() {
      this.$ncformValidate('your-form-name').then((data) => {
        if (data.result) {
          if (this.$route.query.id) {
            this.$post('/api/user/update', { id: this.$route.query.id, ...this.$data.formSchema.value }).then(() => {
              this.$message.success('更新成功!')
            })
          } else {
            this.$post('/api/user/create', { ...this.$data.formSchema.value }).then(() => {
              this.$message.success('创建成功!')
            })
          }
        }
      })
    },
  },
  created() {
    if (this.$route.query.id) {
      this.$get('/api/user/findOne', { id: this.$route.query.id }).then(({ data }) => {
        this.formSchema.value = data
      })
    }
  },
}
</script>
