<template>
  <div class="nf-main">
    <div class="nf-title">笔记管理</div>
    <a-button type="primary"
              @click="addNote">笔记创建</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    addNote() {
      this.$router.push({ name: 'noteCreate' })
    },
  },
}
</script>
