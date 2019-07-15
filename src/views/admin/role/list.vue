<template>
  <div class="nf-main">
    <p class="nf-title">角色管理</p>
    <router-link to="create">
      <a-button type="primary">新增角色</a-button>
    </router-link>
    <a-table class="mt20" :loading="loading" :columns="tableColumns" :dataSource="tableList" :pagination="pagination" :rowKey="record => record.roleName">
      <!-- <nf-table-column label="roleName" prop="roleName"></nf-table-column>
      <nf-table-column label="roleType" prop="roleType"></nf-table-column>
      <nf-table-column label="roleMenu">
        <template slot-scope="scope">
          <span>{{scope.row.roleMenuList | formatList(',', 'title')}}</span>
        </template>
      </nf-table-column>
      <nf-table-column label="permissions">
        <template slot-scope="scope">
          <span>{{scope.row.permissions | formatList}}</span>
        </template>
      </nf-table-column> -->
      <span slot="action" slot-scope="text, record">
        <router-link :to="{ path: 'edit', query:{ roleName: record.roleName }}" class="mr10">编辑</router-link>
        <a href="javascript:;" @click="handleClick(scope.row)">删除</a>
      </span>
    </a-table>
  </div>
</template>

<script>
import RoleModel from '../../../model/RoleModel'
import { getRoleList } from '@/api/role'

export default {
  data() {
    return {
      RoleModel: new RoleModel(),
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
          title: '角色名称',
          dataIndex: 'roleName',
        },
        {
          title: '角色类型',
          dataIndex: 'roleType',
        },
        // {
        //   title: '角色菜单',
        //   dataIndex: 'roleMenu',
        // },
        // {
        //   title: '角色权限',
        //   dataIndex: 'permissions',
        // },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  computed: {
    role() {
      return this.$store.getters.role
    },
  },
  methods: {
    handleClick(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        RoleModel.delete(row.roleName).then((res) => {
          if (res.code === 200) {
            this.$message({
              type: 'success',
              message: res.msg,
            })
            this.RoleModel.getList()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除',
        })
      })
    },
    // 分页查询
    getRoleList() {
      this.loading = true
      // console.log(this.fields)
      getRoleList().h_then(({ data }) => {
        this.tableList = data
        this.pagination.total = data.length
      }).finally(() => {
        this.loading = false
      })
    },
  },
  created() {
    // 获取入驻申请列表
    this.getRoleList()
    // this.RoleModel.getList()
    // this.$store.dispatch('getRoleList').then((res) => {
    //   const { data } = res
    //   this.tableList = data
    // })
  },
}
</script>
