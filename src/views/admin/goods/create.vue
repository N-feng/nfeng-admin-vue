<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="通用信息">
        <step1></step1>
      </a-tab-pane>
      <a-tab-pane key="2" tab="详细描述" force-render>
        <step2></step2>
      </a-tab-pane>
      <a-tab-pane key="3" tab="商品属性">
        Content of Tab Pane 3
      </a-tab-pane>
      <a-tab-pane key="4" tab="规格与包装"></a-tab-pane>
      <a-tab-pane key="5" tab="商品相册"></a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import step1 from './component/step1.vue'
import step2 from './component/step2.vue'

export default {
  components: { step1, step2 },
}
</script>
