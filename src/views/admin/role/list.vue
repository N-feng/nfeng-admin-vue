<template>
  <div class="nf-main">

    <div class="nf-title">RoleManager</div>

    <div>
      <a-button type="primary"
                @click="addRole">new role</a-button>
    </div>

    <a-table class="mt20 oa"
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
           class="mr10">Edit</a>
        <a-popconfirm title="Are you sure delete this item?"
                      @confirm="handleDelete(record)"
                      class="mr10"><a href="javascript:;">Delete</a>
        </a-popconfirm>
      </span>
    </a-table>

    <create-role ref="dialogForm"
                 :visible="visible"
                 :dialogForm="dialogForm"
                 :title="title"
                 @cancel="visible = false"
                 @create="handleCreate"></create-role>

  </div>
</template>

<script>
import {
  getRoleList, addRole, getRoleDetail, updateRole, deleteRole,
} from '@/api/role'
import createRole from './create.vue'

export default {
  components: {
    createRole,
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
          title: 'roleName',
          dataIndex: 'roleName',
          // width: 150,
        },
        {
          title: 'roleType',
          dataIndex: 'roleType',
          // width: 150,
        },
        {
          title: 'roleMenu',
          dataIndex: 'roleMenu',
          // width: 250,
          scopedSlots: { customRender: 'roleMenu' },
        },
        {
          title: 'permissions',
          dataIndex: 'permissions',
          scopedSlots: { customRender: 'permissions' },
        },
        {
          title: 'action',
          dataIndex: 'action',
          // width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      dialogForm: {
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
    getList() {
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
      this.title = 'new role'
      this.dialogForm = {
        roleName: '',
        roleType: '',
        roleMenu: [],
        permissions: [],
      }
      const { form } = this.$refs.dialogForm
      form.resetFields()
    },
    // 修改按钮
    async updateRole(record) {
      const { roleName } = record
      await getRoleDetail(roleName).h_then(({ data }) => {
        this.dialogForm = data
        this.visible = true
        this.title = 'edit role'
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
      this.getList()
      this.visible = false
    },
    // 删除按钮
    handleDelete(record) {
      deleteRole(record).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
  },
  created() {
    // 获取角色列表
    this.getList()
  },
}
</script>
