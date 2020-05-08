<template>
  <div>
    <ncform
      :form-schema="formSchema"
      form-name="your-form-name"
      v-model="formSchema.value"
      @submit="submit()"
    ></ncform>
    <div style="text-align: center">
      <el-button @click="submit()">Submit</el-button>
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
          // standard component: input
          module_name: {
            // type: 'string',
            ui: {
              label: '模块名称',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写模块名称',
              },
            },
          },
          type: {
            type: 'string',
            ui: {
              // columns: 6,
              label: '节点类型',
              // description: 'Type anything to test the custom rule',
              widget: 'select',
              widgetConfig: {
                enumSource: [
                  { label: '模块', value: 1 },
                  { label: '菜单', value: 2 },
                  { label: '操作', value: 3 },
                ],
              },

            },
            rules: {
              required: {
                value: true,
                errMsg: '请选择节点类型',
              },
            //   myCustom: {
            //     // your custom rule
            //     value: 'daniel',
            //     errMsg: 'Fill in "daniel" pls',
            //   },
            },
          },
          action_name: {
            // type: 'string',
            ui: {
              label: '操作名称',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写操作名称',
              },
            },
          },
          url: {
            // type: 'string',
            ui: {
              label: '操作地址',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写操作地址',
              },
            },
          },
          module_id: {
            type: 'string',
            ui: {
              // columns: 6,
              label: '所属模块',
              // description: 'Type anything to test the custom rule',
              widget: 'select',
              widgetConfig: {
                enumSource: [
                  { label: '顶级模块', value: 0 },
                ],
              },

            },
            rules: {
              required: {
                value: true,
                errMsg: '请选择所属模块',
              },
            },
          },
          sort: {
            // type: 'string',
            default: 100,
            ui: {
              label: '排序',
            },
            rules: {
              required: {
                value: true,
                errMsg: '请填写排序',
              },
            },
          },
          description: {
            // type: 'string',
            ui: {
              label: '描述',
            },
          },
          // custom widget: my-custom-comp
          // custom: {
          //   type: 'string',
          //   ui: {
          //     columns: 6,
          //     widget: 'my-custom-comp',
          //     widgetConfig: {
          //       name: 'daniel', // try "dx: {{$root.name}}" and fill in the name input
          //     },
          //   },
          // },
        },
        ui: {
          widgetConfig: {
            layout: 'h',
          },
        },
      },
    }
  },
  methods: {
    submit() {
      this.$ncformValidate('your-form-name').then((data) => {
        if (data.result) {
          // alert(JSON.stringify(this.$data.formSchema.value, null, 2))
          console.log(this.$data.formSchema.value)
          // do what you like to do
        }
      })
    },
  },
}
</script>
