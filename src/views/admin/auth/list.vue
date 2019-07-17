<template>
  <div class="nf-main">
    <p class="nf-title">用户管理</p>
    <a-table class="mt20"
             :loading="loading"
             :columns="tableColumns"
             :dataSource="tableList"
             :pagination="pagination"
             :rowKey="record => record.username">
      <span slot="action"
            slot-scope="text, record">
        <a-popconfirm title="确认删除?"
                      @confirm="handleDelete(record)"
                      okText="确定"
                      cancelText="取消"
                      class="mr10"><a href="javascript:;">删除</a>
        </a-popconfirm>
      </span>
    </a-table>
  </div>
</template>

<script>
import { getAuthList, deleteAuth } from '@/api/auth'

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
          title: '用户名称',
          dataIndex: 'username',
        },
        {
          title: '角色名称',
          dataIndex: 'roleName',
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  methods: {
    // 分页查询
    getAuthList() {
      this.loading = true
      // console.log(this.fields)
      getAuthList().h_then(({ data }) => {
        this.tableList = data
        this.pagination.total = data.length
      }).finally(() => {
        this.loading = false
      })
    },
    // 删除按钮
    handleDelete(record) {
      deleteAuth(record).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getAuthList()
      })
    },
  },
  created() {
    this.getAuthList()
  },
}
</script>

<style scoped>
</style>
