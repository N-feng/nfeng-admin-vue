<template>
  <div>
    <a-row :gutter="24" style="margin-bottom: 24px;">
      <a-col :span="8">
        <a-col :span="8">
          <a-button @click="handleClick">删除字段三</a-button>
        </a-col>
      </a-col>
    </a-row>
    <nf-form
      :field-options="fieldOptions"
      :rules="rules"
      v-model="formData"
    ></nf-form>
    <a-form-model class="ant-advanced-search-form">
      <a-row :gutter="24">
        <a-col :span="8">
          <a-form-model-item label="是否显示字段1">
            <a-switch @change="handleChange" />
          </a-form-model-item>
        </a-col>
      </a-row>
    </a-form-model>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  // 控制表单的数据
  form: any = {
    delivery: true,
  };
  // 表单数据
  formData: any = {};
  rules = {
    label: [{ required: true }],
    prop: [{ required: true }],
    type: [{ required: true }],
  };
  fieldOptions = [
    {
      label: "字段一",
      type: "input",
      prop: "label",
      hidden: false,
      // hidden: !this.form.delivery,
    },
    {
      label: "字段二",
      type: "input",
      prop: "prop",
    },
    {
      label: "字段三",
      type: "select",
      prop: "type",
      options: [
        {
          label: "选择框",
          value: "select",
        },
        {
          label: "输入框",
          value: "input",
        },
        {
          label: "月份选择器",
          value: "month-picker",
        },
        {
          label: "月份区间选择器",
          value: "month-range-picker",
        },
        {
          label: "日期选择器",
          value: "range-picker",
        },
      ],
    },
  ];
  handleChange(e) {
    this.fieldOptions[0].hidden = e;
  }
  handleClick(e) {
    this.fieldOptions = this.fieldOptions.splice(0, 2);
  }
}
</script>

<style lang="less" scoped>
// .ant-advanced-search-form {
//   padding: 24px;
//   background: #fbfbfb;
//   border: 1px solid #d9d9d9;
//   border-radius: 6px;
// }

.ant-advanced-search-form .ant-form-item {
  display: flex;
}

.ant-advanced-search-form .ant-form-item-control-wrapper {
  flex: 1;
}
</style>
