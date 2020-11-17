<template>
  <nf-form-table :options="options"></nf-form-table>
</template>
<script>
import { getList } from "@/api/table";

export default {
  computed: {
    options() {
      return {
        fieldOptions: [
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
        ],
        columns: [
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
        ],
        getList,
      };
    },
  },
};
</script>
