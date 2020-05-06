<template>
  <div>
    <nf-dynamic-table queryUrl="/api/access" :tableColumns="tableColumns">
      <a-button slot="tabBarExtraContent" type="primary">
        <router-link to="/admin/access/create">新增</router-link>
      </a-button>
    </nf-dynamic-table>
  </div>
</template>


<script>
import NfDynamicTable from '../../../components/dynamicTable'

export default {
  components: {
    // createRole,
    NfDynamicTable,
  },
  data() {
    return {
      typeName: {
        1: '模块',
        2: '菜单',
        3: '操作',
      },
      // 表格配置
      tableColumns: [
        {
          title: '模块名称',
          dataIndex: 'module_name',
        },
        {
          title: '节点类型',
          dataIndex: 'type',
          customRender: (text) => this.typeName[text],
        },
        {
          title: '操作名称',
          dataIndex: 'action_name',
        },
        {
          title: '操作地址',
          dataIndex: 'url',
        },
        {
          title: '排序',
          dataIndex: 'sort',
        },
        {
          title: '描述',
          dataIndex: 'description',
        },
        {
          title: '操作',
          dataIndex: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
    }
  },
  created() {

  },
}
</script>
