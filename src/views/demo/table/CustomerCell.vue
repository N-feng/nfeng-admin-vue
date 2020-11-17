<template>
  <nf-table :formData="formData" :columns="columns" :getList="getList">
    <template v-slot:id="text">
      <span>ID: <a-tag color="green">{{text.id}}</a-tag></span>
    </template>
    <template v-slot:img="text">
      <nf-table-img :imgList="[text.img, text.img]"></nf-table-img>
    </template>
  </nf-table>
</template>

<script>
import { getList } from "@/api/table";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    scopedSlots: { customRender: "id" },
  },
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
    title: "img",
    dataIndex: "img",
    scopedSlots: { customRender: "img" },
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
