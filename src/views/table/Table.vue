<template>
  <div>
    <nf-form-search v-model="formData" :field-options="fieldOptions" />
    <nf-table :formData="formData" :columns="columns" :getList="getList" />
  </div>
</template>
<script>
import { getList } from "@/api/table";
const columns = [
  {
    title: "title",
    dataIndex: "title",
  },
  {
    title: "description",
    dataIndex: "description",
  },
  {
    title: "author",
    dataIndex: "author",
  },
  {
    title: "datetime",
    dataIndex: "datetime",
  },
];

export default {
  data() {
    return {
      columns,
      getList,
      formData: {},
    };
  },
  computed: {
    fieldOptions() {
      return [
        {
          type: "input",
          label: "输入框",
          prop: "input",
          // disabled: this.formData.select === "xxx",
        },
        {
          type: "select",
          label: "选择框",
          prop: "select",
          options: [
            {
              label: "xxx",
              value: "xxx",
            },
          ],
        },
      ];
    },
  },
};
</script>
