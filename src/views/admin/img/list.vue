<template>
  <div class="nf-main">
    <div class="nf-title">图片管理</div>
    <a-upload accept="image/*"
              listType="picture"
              class="upload-list-inline"
              :fileList="fileList"
              :customRequest="handleUpload"
              :remove="handleRemove">
      <a-button type="primary">上传图片</a-button>
    </a-upload>
  </div>
</template>

<script>
import { addImg, deleteImg, getImgList } from '@/api/img'

export default {
  data() {
    return {
      fileList: [],
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
    beforeUpload(file) {
      // this.fileList = [...this.fileList, file]
      console.log(file.raw)
      return false
    },
    handleUpload(e) {
      let file
      console.log(this.fileList.some(item => item.name === e.file.name))
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
      // this.fileList = [...this.fileList, file]

      // cdn.getAuthorization(file)
      // cdn.getCdnUpload(file)
    //   ImgModel.uploadFile(file.raw)
    },
    handleRemove(file) {
      const { name } = file
      const self = this
      this.$confirm({
        title: 'Are you sure delete this img?',
        content: '确定删除',
        okType: 'danger',
        onOk() {
          // console.log('OK')
          deleteImg(name).h_then(() => {
          // self.fileList.filter(item => item.name === name)
            self.fileList = self.fileList.filter(item => item.name !== name)
          })
        },
        // onCancel() {
        //   console.log('Cancel')
        // },
      })
      console.log(file)
      //   return new Promise((resolve) => {
      //     this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning',
      //     }).then(() => {
      //   ImgModel.deleteObject(file).then(() => {
      //     this.$message({
      //       type: 'success',
      //       message: '删除成功!',
      //     })
      //     resolve()
      //   })
      //     }).catch(() => {
      //       this.$message({
      //         type: 'info',
      //         message: '已取消删除',
      //       })
      //     })
      //   })

      // return cdn.deleteObject(file)
    },
    submitUpload() {
      this.$refs.upload.submit()
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
