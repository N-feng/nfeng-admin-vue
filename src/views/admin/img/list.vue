<template>
    <div class="content">
        <nf-box title="upload" border>
            <nf-upload ref="upload" :file-list="fileList" list-type="picture" style="width: 360px;" action cdn :auto-upload="false" :before-remove="beforeRemove">
                <nf-button slot="trigger" size="small" type="primary">选取文件</nf-button>
                <nf-button class="ml10" size="small" @click="submitUpload">上传到服务器</nf-button>
            </nf-upload>
        </nf-box>
    </div>
</template>

<script>
import ImgModel from '../../../model/ImgModel'

export default {
    data() {
        return {
            fileList: [],
        }
    },
    methods: {
        handleChange(file) {
            // cdn.getAuthorization(file)
            // cdn.getCdnUpload(file)
            ImgModel.uploadFile(file.raw)
        },
        beforeRemove(file) {
            return new Promise((resolve) => {
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }).then(() => {
                    ImgModel.deleteObject(file).then(() => {
                        this.$message({
                            type: 'success',
                            message: '删除成功!',
                        })
                        resolve()
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除',
                    })
                })
            })

            // return cdn.deleteObject(file)
        },
        submitUpload() {
            this.$refs.upload.submit()
        },
    },
    mounted() {
        ImgModel.getList().then((res) => {
            this.fileList = res.data
        })
    },
}
</script>

