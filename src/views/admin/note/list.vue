<template>
  <div class="nf-main">

    <div class="nf-title">笔记管理</div>

    <a-button type="primary"
              @click="$router.push({ name: 'noteCreate' })">笔记创建</a-button>
    <a-button class="ml20"
              type="primary"
              @click="drawerVisible = true">图片管理</a-button>

    <a-drawer title="图片管理"
              :width="720"
              :closable="false"
              @close="drawerVisible = false"
              :visible="drawerVisible">
      <imgList></imgList>
    </a-drawer>

    <a-table class="mt20"
             :loading="loading"
             :columns="tableColumns"
             :dataSource="tableList"
             :pagination="pagination"
             :rowKey="record => record.noteId">
      <span slot="createTime"
            slot-scope="text, record">{{record.createTime | timeTransfer}}</span>
      <span slot="updateTime"
            slot-scope="text, record">{{record.updateTime | timeTransfer}}</span>
      <span slot="action"
            slot-scope="text, record">
        <a href="javascript:;"
           @click="$router.push({name: 'noteCreate', query: {noteId: record.noteId}})"
           class="mr10">编辑</a>
        <a-popconfirm title="确认删除?"
                      @confirm="handleDelete(record.noteId)"
                      okText="确定"
                      cancelText="取消"
                      class="mr10"><a href="javascript:;">删除</a>
        </a-popconfirm>
      </span>
    </a-table>

  </div>
</template>

<script>
import { getNoteList, deleteNote } from '@/api/note'
import imgList from '@/views/admin/img/list.vue'

export default {
  components: { imgList },
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
          title: '笔记标题',
          dataIndex: 'title',
        },
        // {
        //   title: '笔记内容',
        //   dataIndex: 'content',
        // },
        {
          title: '创建时间',
          dataIndex: 'createTime',
          scopedSlots: { customRender: 'createTime' },
        },
        {
          title: '更新时间',
          dataIndex: 'updateTime',
          scopedSlots: { customRender: 'updateTime' },
        },
        {
          title: '操作',
          dataIndex: 'action',
          // width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      drawerVisible: false,
    }
  },
  methods: {
    // 分页查询
    getList() {
      this.loading = true
      // console.log(this.fields)
      getNoteList().h_then(({ data }) => {
        this.tableList = data
        this.pagination.total = data.length
      }).finally(() => {
        this.loading = false
      })
    },
    addNote() {
      this.$router.push({ name: 'noteCreate' })
    },
    // 删除按钮
    handleDelete(taskId) {
      deleteNote(taskId).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
  },
  created() {
    // 获取任务列表
    this.getList()
  },
}
</script>
