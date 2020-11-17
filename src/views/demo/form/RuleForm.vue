<template>
  <nf-form :field-options="fieldOptions" :rules="rules" v-model="formData"></nf-form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  // 表单数据
  formData: any = {};
  rules = {
      label: [{ required: true }],
      prop: [{ required: true }],
      type: [{ required: true }],
    }
  get fieldOptions() {
    return [
      {
        label: "label",
        type: "input",
        prop: "label",
      },
      {
        label: "prop",
        type: "input",
        prop: "prop",
      },
      {
        label: "type",
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
  }
}
</script>

<style lang="less" scoped>
</style>
