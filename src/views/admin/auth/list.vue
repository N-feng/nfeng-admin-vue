<template>
  <div class="nf-main">

    <div class="nf-title">AuthManager</div>

    <a-table class="mt20 oa"
             :loading="loading"
             :columns="tableColumns"
             :dataSource="tableList"
             :pagination="pagination"
             :rowKey="record => record.username">
      <span slot="action"
            slot-scope="text, record">
        <a href="javascript:;"
           @click="update(record.username)"
           class="mr10">Edit</a>
        <a-popconfirm title="Are you sure delete this item?"
                      @confirm="handleDelete(record)"
                      class="mr10"><a href="javascript:;">Delete</a>
        </a-popconfirm>
      </span>
    </a-table>

    <create-auth ref="dialogForm"
                 :visible="visible"
                 :dialogForm="dialogForm"
                 :title="title"
                 @cancel="visible = false"
                 @create="handleCreate"></create-auth>

  </div>
</template>

<script>
import {
  getAuthList, getAuthDetail, deleteAuth, updateUser,
} from '@/api/auth'
import createAuth from './create.vue'

export default {
  components: {
    createAuth,
  },
  data() {
    return {
      loading: true,
      pagination: {
        size: 'small',
        showQuickJumper: true,
        showSizeChanger: true,
        total: 500,
        showTotal: total => `Total ${total} items`,
      },
      tableList: [],
      tableColumns: [
        {
          title: 'username',
          dataIndex: 'username',
        },
        {
          title: 'roleName',
          dataIndex: 'roleName',
        },
        {
          title: 'action',
          dataIndex: 'action',
          // width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      dialogForm: {},
      visible: false,
      title: '',
    }
  },
  methods: {
    // 分页查询
    getList() {
      this.loading = true
      // console.log(this.fields)
      getAuthList().h_then(({ data }) => {
        this.tableList = data
        this.pagination.total = data.length
      }).finally(() => {
        this.loading = false
      })
    },
    // 修改按钮
    async update(username) {
      await getAuthDetail(username).h_then(({ data }) => {
        console.log(data)
        this.dialogForm = data
        this.visible = true
        this.title = 'Edit Auth'
      })
    },
    // 提交按钮
    handleCreate() {
      const { form } = this.$refs.dialogForm
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        // form.resetFields()
        updateUser(values).h_then(({ msg }) => this.save(msg))
      })
    },
    // 保存处理
    save(message) {
      this.$message.success(message)
      this.getList()
      this.visible = false
    },
    // 删除按钮
    handleDelete(record) {
      deleteAuth(record).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style scoped>
</style>
