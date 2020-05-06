<template>
  <div class="nf-main">
    <!-- <div class="nf-title">RoleManager</div>
    <div>
      <a-button type="primary" @click="addRole">new role</a-button>
    </div>
    <a-table
      class="mt20 oa"
      :loading="loading"
      :columns="tableColumns"
      :dataSource="tableList"
      :pagination="pagination"
      :rowKey="record => record.roleName"
    >
      <span slot="roleMenu" slot-scope="text, record">
        <a-tag v-for="tag in record.roleMenu" color="blue" :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="permissions" slot-scope="text, record">
        <a-tag v-for="tag in record.permissions" color="blue" :key="tag">{{tag}}</a-tag>
      </span>
      <span slot="action" slot-scope="text, record">
        <a href="javascript:;" @click="updateRole(record)" class="mr10">Edit</a>
        <a-popconfirm
          title="Are you sure delete this item?"
          @confirm="handleDelete(record)"
          class="mr10"
        >
          <a href="javascript:;">Delete</a>
        </a-popconfirm>
      </span>
    </a-table>-->
    <nf-dynamic-table queryUrl="/api/role" :tableColumns="tableColumns" :actions="actions">
      <a-button slot="tabBarExtraContent" type="primary">
        <router-link to="rechargeApplication">新增</router-link>
      </a-button>
    </nf-dynamic-table>
    <!-- <create-role
      ref="dialogForm"
      :visible="visible"
      :dialogForm="dialogForm"
      :title="title"
      @cancel="visible = false"
      @create="handleCreate"
    ></create-role>-->
  </div>
</template>

<script>
import {
  getRoleList, addRole, getRoleDetail, updateRole, deleteRole,
} from '../../../api/role'
// import createRole from './create.vue'
import NfDynamicTable from '../../../components/dynamicTable'
import { format } from 'silly-datetime'

export default {
  components: {
    // createRole,
    NfDynamicTable,
  },
  data() {
    return {
      // loading: true,
      // pagination: {
      //   size: 'small',
      //   showQuickJumper: true,
      //   showSizeChanger: true,
      //   total: 500,
      //   showTotal: (total) => `Total ${total} items`,
      // },
      tableList: [],
      // 表格配置
      tableColumns: [
        {
          title: '角色名称',
          dataIndex: 'title',
          // width: 150,
        },
        {
          title: '角色描述',
          dataIndex: 'description',
          // width: 150,
        },
        {
          title: '增加时间',
          dataIndex: 'add_time',
          // width: 250,
          // scopedSlots: { customRender: 'roleMenu' },
          customRender: (text) => format(text),
        },
        {
          title: '操作',
          dataIndex: 'action',
          // width: 150,
          scopedSlots: { customRender: 'action' },
        },
      ],
      actions: [{ name: '授权', url: '/admin/role-access/create' }],
      dialogForm: {
        roleName: '',
        roleType: '',
        roleMenu: [],
        permissions: [],
      },
      visible: false,
      title: '',
      // 搜索表单
      searchForm: {
        appId: '',
        rechargeCode: '',
        // state:'',
        stateForQuery: [],
        page: 1,
        pageSize: 10,
      },
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
    // this.getList()
  },
}
</script>
