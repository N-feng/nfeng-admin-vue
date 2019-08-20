<template>
  <div class="nf-main">

    <div class="nf-title">图片管理</div>

    <a-upload accept="image/*"
              listType="picture"
              class="upload-list-inline"
              :customRequest="handleUpload"
              :remove="handleRemove">
      <a-button type="primary">上传图片</a-button>
    </a-upload>

    <a-list class="mt20"
            :dataSource="fileList">
      <a-list-item slot="renderItem"
                   slot-scope="item">
        <a slot="actions"
           @click="$refs.viewImg.previewImage(item.url)">预览</a>
        <!-- <a slot="actions"
           @click="downloadHandle(item.name)">下载</a> -->
        <a slot="actions"
           :href="`/api/img/get?fileName=${item.name}`"
           target="_blank">下载</a>
        <a slot="actions">删除</a>
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
  addImg, deleteImg, getImg, getImgList,
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
        this.fileList = data.map((item, key) => {
          item.uid = -key
          return item
        })
      })
    },
    handleUpload(e) {
      let file
      if (this.fileList.some(item => item.name === e.file.name)) {
        file = this.fileList.find(item => item.name === e.file.name)
      } else {
        file = {
          uid: -this.fileList.length,
          name: e.file.name,
          status: '',
          url: '',
          thumbUrl: '',
        }
        this.fileList.push(file)
      }
      file.status = 'uploading'
      addImg(e).h_then(({ data }) => {
        const { url } = data
        file.url = url
        file.thumbUrl = url
        file.status = 'done'
      })
    },
    handleRemove(file) {
      const { name } = file
      const self = this
      this.$confirm({
        title: 'Are you sure delete this img?',
        content: '确定删除',
        okType: 'danger',
        onOk() {
          deleteImg(name).h_then(() => {
            self.fileList = self.fileList.filter(item => item.name !== name)
          })
        },
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
    download(src, name) {
      const image = new Image()
      // 解决跨域 canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = () => {
        const canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height
        const context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        // 得到图片的base64编码数据
        const url = canvas.toDataURL('image/png')
        // 生成一个 a 标签
        const a = document.createElement('a')
        // 创建一个点击事件
        const event = new MouseEvent('click')
        // 将 a 的 download 属性设置为我们想要下载的图片的名称，若 name 不存在则使用'图片'作为默认名称
        a.download = name || '图片'
        // 将生成的 URL 设置为 a.href 属性
        a.href = url
        // 触发 a 的点击事件
        a.dispatchEvent(event)
        // return a;
      }
      image.src = src
    },
    downloadHandle(fileName) {
      // this.$get('/api/download/index')
      // window.open(`/api/static/upload?${fileName}`)
      getImg(fileName)
    },
  },
  created() {
    this.getList()
  },
}
</script>

<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .ant-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .ant-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
</style>
