<template>
  <div>
    <nf-form-create
      ref="formCreate"
      :option="option"
    />
    <div style="margin-left: 25%;">
      <a-button type="primary" @click="onSubmit">
        确定
      </a-button>
      <a-button style="margin-left: 10px;">
        取消
      </a-button>
    </div>  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  option: object = {
    title: "增加表单内容",
    column: [
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
    ],
    rules: {
      label: [{ required: true }],
      prop: [{ required: true }],
      type: [{ required: true }],
    },
  };

  onSubmit() {
    (this.$refs.formCreate as any).onSubmit((valid: any, form: any) => {
      if (valid) {
        this.submit(form);
      }
    });
  }

  submit(values: any) {
    console.log(values)
  }
}
</script>

<style lang="scss" scoped></style>
