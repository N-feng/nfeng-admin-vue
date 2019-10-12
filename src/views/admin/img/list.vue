<template>
  <div>

    <div class="nf-title">ImgManager</div>

    <a-upload accept="image/*"
              :fileList="[]"
              :customRequest="customRequest">
      <a-button type="primary">upload img</a-button>
    </a-upload>

    <a-list class="mt20"
            :dataSource="fileList">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <input class="hide-input"
               :value="item.url"
               :id="item.url">
        <a slot="actions"
           @click="copyText(item.url)">Copy</a>
        <a slot="actions"
           @click="$refs.viewImg.previewImage(item.url)">Preview</a>
        <a slot="actions"
           :href="`/api/img/get?fileName=${item.name}`"
           target="_blank">Download</a>
        <a-popconfirm slot="actions"
                      title="Are you sure delete this item?"
                      @confirm="handleDelete(item.name)"
                      class="mr10"><a href="javascript:;">Delete</a>
        </a-popconfirm>
        <a-list-item-meta>
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
  name: 'imgList',
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
    copyText(url) {
      const input = document.getElementById(url)
      input.select()
      try {
        document.execCommand('copy') // 执行浏览器复制命令
        this.$message.success('copy success')
      } catch (e) {
        this.$message.error('copy fail')
      }
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style lang="scss" scoped>
.hide-input {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: -10;
}
</style>
