<template>
  <div class="nf-main mt35 mb35">
    <div class="nf-title">{{$route.meta.title}}</div>
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
           @click="$router.push({name: 'webNotePreview', query: {noteId: record.noteId}})"
           class="mr10">查看</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import { getNoteList } from '@/api/note'

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
    }
  },
  methods: {
    // 分页查询
    getList() {
      this.loading = true
      // console.log(this.fields)
      getNoteList()
        .h_then(({ data }) => {
          this.tableList = data
          this.pagination.total = data.length
        })
        .finally(() => {
          this.loading = false
        })
    },
  },
  created() {
    // 获取任务列表
    this.getList()
  },
}
</script>

<style lang="css" scoped>
</style>
