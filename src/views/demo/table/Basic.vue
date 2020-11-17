<template>
  <nf-table :formData="formData" :columns="columns" :getList="getList" />
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
  }
}
</script>
