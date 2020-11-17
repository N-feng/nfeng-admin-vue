<template>
  <div>
    <nf-description
      style="margin-bottom: 16px;"
      title="基础示例"
      :bordered="true"
      :formData="formData"
      :options="options"
    ></nf-description>
    <nf-description
      style="margin-bottom: 16px;"
      title="垂直示例"
      layout="vertical"
      :bordered="true"
      :formData="formData"
      :options="options"
    ></nf-description>
    <nf-description
      style="margin-bottom: 16px;"
      title="无边框"
      :formData="formData"
      :options="options"
    ></nf-description>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  formData = {
    username: "test",
    nickName: "VB",
    age: 25,
    phone: "15695909xxx",
    email: "190848757@qq.com",
    addr: "厦门市思明区",
    sex: "男",
    certy: "3504256199xxxxxxxxx",
    tag: "orange",
  };
  options = [
    {
      field: "username",
      label: "用户名",
    },
    {
      field: "nickName",
      label: "昵称",
      render: (curVal, data) => {
        return `${data.username}-${curVal}`;
      },
    },
    {
      field: "phone",
      label: "联系电话",
    },
    {
      field: "email",
      label: "邮箱",
    },
    {
      field: "addr",
      label: "地址",
    },
  ];
}
</script>
