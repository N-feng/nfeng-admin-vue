<template>
  <div class="nf-main">
    <div class="nf-title">任务管理</div>
    <a-button type="primary"
              @click="handleAdd">新增任务</a-button>
    <a-table class="mt20"
             :loading="loading"
             :columns="tableColumns"
             :dataSource="tableList"
             :pagination="pagination"
             :rowKey="record => record.taskId">
      <span slot="roleMenu"
            slot-scope="text, record">
        <a-tag v-for="tag in record.roleMenu"
               color="blue"
               :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="permissions"
            slot-scope="text, record">
        <a-tag v-for="tag in record.permissions"
               color="blue"
               :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="action"
            slot-scope="text, record">
        <a href="javascript:;"
           @click="update(record.taskId)"
           class="mr10">修改</a>
        <a-popconfirm title="确认删除?"
                      @confirm="handleDelete(record.taskId)"
                      okText="确定"
                      cancelText="取消"
                      class="mr10"><a href="javascript:;">删除</a>
        </a-popconfirm>
      </span>
    </a-table>
    <create ref="dialogForm"
            :visible="visible"
            :dialogForm="dialogForm"
            :title="title"
            @cancel="visible = false"
            @create="handleCreate"></create>
  </div>
</template>

<script>
import {
  addTask, deleteTask, updateTask, getTask, getTaskList,
} from '@/api/task'
import create from './create.vue'

export default {
  data() {
    return {
      loading: true,
      pagination: {
        size: 'small',
        showQuickJumper: true,
        showSizeChanger: true,
        total: 500,
        showTotal: total => `共${total}条`,
      },
      tableList: [],
      tableColumns: [
        {
          title: '任务名称',
          dataIndex: 'title',
        },
        {
          title: '任务描述',
          dataIndex: 'description',
        },
        {
          title: '任务日期',
          dataIndex: 'date',
          // scopedSlots: { customRender: 'roleMenu' },
        },
        {
          title: '任务优先级',
          dataIndex: 'priority',
          // scopedSlots: { customRender: 'permissions' },
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      dialogForm: {},
      visible: false,
      title: '',
    }
  },
  components: {
    create,
  },
  methods: {
    // 分页查询
    getList() {
      this.loading = true
      // console.log(this.fields)
      getTaskList().h_then(({ data }) => {
        this.tableList = data
        this.pagination.total = data.length
      }).finally(() => {
        this.loading = false
      })
    },
    // 提交按钮
    handleCreate() {
      const { form } = this.$refs.dialogForm
      form.validateFields((err, fieldsValues) => {
        if (err) {
          return
        }
        const values = {
          ...fieldsValues,
          date: fieldsValues.date.format('YYYY-MM-DD HH:mm:ss'),
        }
        if (this.title === '修改任务') {
          values.taskId = this.dialogForm.taskId
        }
        console.log('Received values of form: ', values)
        form.resetFields()
        const submit = this.title === '新增任务' ? addTask : updateTask
        submit(values).h_then(({ msg }) => {
          this.$message.success(msg)
          this.getList()
          this.visible = false
        })
      })
    },
    // 新增按钮
    handleAdd() {
      this.visible = true
      this.title = '新增任务'
      this.dialogForm = {
        title: '',
        description: '',
        date: null,
        priority: undefined,
      }
      const { form } = this.$refs.dialogForm
      form.resetFields()
    },
    // 删除按钮
    handleDelete(taskId) {
      deleteTask(taskId).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
    // 修改按钮
    async update(taskId) {
      await getTask(taskId).h_then(({ data }) => {
        this.dialogForm = data
        this.visible = true
        this.title = '修改任务'
      })
    },
  },
  created() {
    // 获取任务列表
    this.getList()
  },
}
</script>
