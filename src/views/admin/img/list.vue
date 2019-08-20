<template>
  <div class="nf-main">

    <div class="nf-title">图片管理</div>

    <a-upload accept="image/*"
              :fileList="[]"
              :customRequest="customRequest">
      <a-button type="primary">上传图片</a-button>
    </a-upload>

    <a-list class="mt20"
            :dataSource="fileList">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <a slot="actions"
           @click="$refs.viewImg.previewImage(item.url)">预览</a>
        <a slot="actions"
           :href="`/api/img/get?fileName=${item.name}`"
           target="_blank">下载</a>
        <a-popconfirm slot="actions"
                      title="确认删除?"
                      @confirm="handleDelete(item.name)"
                      okText="确定"
                      cancelText="取消"
                      class="mr10"><a href="javascript:;">删除</a>
        </a-popconfirm>
        <a-list-item-meta>
          <span slot="description">
            <a-input-search type="text"
                            :value="item.url"
                            readOnly
                            :ref="item.name"
                            @search="copyText(item.name)">
              <a-button slot="enterButton"
                        icon="copy">复制</a-button>
            </a-input-search>
          </span>
          <a slot="title"
             :href="item.url"
             target="_blank">{{item.name}}</a>
          <a-avatar slot="avatar"
                    :src="item.url" />
        </a-list-item-meta>
      </a-list-item>
    </a-list>

    <nf-viewImg ref="viewImg"></nf-viewImg>

  </div>
</template>

<script>
import {
  addImg, deleteImg, getImgList,
} from '@/api/img'

export default {
  data() {
    return {
      fileList: [],
      imgSrc: '',
    }
  },
  methods: {
    getList() {
      getImgList().h_then(({ data }) => {
        this.fileList = data
      })
    },
    customRequest(e) {
      addImg(e).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
    handleDelete(fileName) {
      deleteImg(fileName).h_then(({ msg }) => {
        this.$message.success(msg)
        this.getList()
      })
    },
    copyText(name) {
      const { input } = this.$refs[name].$refs
      input.select()
      try {
        document.execCommand('copy') // 执行浏览器复制命令
        this.$message.success('复制成功~')
      } catch (e) {
        this.$message.error('复制失败~')
      }
    },
  },
  created() {
    this.getList()
  },
}
</script>
