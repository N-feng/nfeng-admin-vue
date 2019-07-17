<template>
  <div class="nf-main">
    <p class="nf-title">角色管理</p>
    <a-button type="primary"
              @click="addRole">新增角色</a-button>
    <a-table class="mt20"
             :loading="loading"
             :columns="tableColumns"
             :dataSource="tableList"
             :pagination="pagination"
             :rowKey="record => record.roleName">
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
           @click="updateRole(record)"
           class="mr10">修改</a>
        <a-popconfirm title="确认删除?"
                      @confirm="handleDelete(record)"
                      okText="确定"
                      cancelText="取消"
                      class="mr10"><a href="javascript:;">删除</a>
        </a-popconfirm>
      </span>
    </a-table>
    <create ref="roleForm"
            :visible="visible"
            :roleForm="roleForm"
            :title="title"
            @cancel="visible = false"
            @create="handleCreate"></create>
  </div>
</template>

<script>
import {
  getRoleList, getRoleDetail, addRole, updateRole, deleteRole,
} from '@/api/role'
import create from './create.vue'

export default {
  components: {
    create,
  },
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
          title: '角色名称',
          dataIndex: 'roleName',
          width: 150,
        },
        {
          title: '角色类型',
          dataIndex: 'roleType',
          width: 150,
        },
        {
          title: '角色菜单',
          dataIndex: 'roleMenu',
          scopedSlots: { customRender: 'roleMenu' },
        },
        {
          title: '角色权限',
          dataIndex: 'permissions',
          scopedSlots: { customRender: 'permissions' },
        },
        {
          title: '操作',
          dataIndex: 'action',
          width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      roleForm: {
        roleName: '',
        roleType: '',
        roleMenu: [],
        permissions: [],
      },
      visible: false,
      title: '',
    }
  },
  computed: {
    role() {
      return this.$store.getters.role
    },
  },
  methods: {
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
    // 新增按钮
    addRole() {
      this.visible = true
      this.title = '新增角色'
      this.roleForm = {
        roleName: '',
        roleType: '',
        roleMenu: [],
        permissions: [],
      }
      const { form } = this.$refs.roleForm
      form.resetFields()
    },
    // 修改按钮
    async updateRole(record) {
      const { roleName } = record
      await getRoleDetail(roleName).h_then(({ data }) => {
        this.roleForm = data
        this.visible = true
        this.title = '修改角色'
      })
    },
    // 提交按钮
    handleCreate() {
      const { form } = this.$refs.roleForm
      form.validateFields((err, values) => {
        if (err) {
          return
        }
        console.log('Received values of form: ', values)
        // form.resetFields()
        if (this.title === '新增角色') {
          addRole(values).h_then((res) => {
            if (res.code === 200) {
              this.save(res.msg)
            }
          })
        } else {
          updateRole(values).h_then(({ msg }) => this.save(msg))
        }
      })
    },
    // 保存处理
    save(message) {
      this.$message.success(message)
      this.getRoleList()
      this.visible = false
    },
    // 删除按钮
    handleDelete(record) {
      deleteRole(record).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getRoleList()
      })
    },
  },
  created() {
    // 获取角色列表
    this.getRoleList()
  },
}
</script>
