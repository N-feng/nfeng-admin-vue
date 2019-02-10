<template>
    <div class="content">
        <nf-box title="upload" border>
            <nf-upload ref="upload" action :file-list="fileList" :on-change="handleChange" list-type="picture" :auto-upload="false" style="width: 360px;">
                <nf-button slot="trigger" size="small" type="primary">选取文件</nf-button>
                <nf-button class="ml10" size="small" @click="submitUpload">上传到服务器</nf-button>
            </nf-upload>
        </nf-box>
    </div>
</template>

<script>
import cdn from '../../nfeng-pc-vue/nfeng-service/cdn'

export default {
    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://feng-1257981287.cos.ap-chengdu.myqcloud.com/upload/timg.jpg?q-sign-algorithm=sha1&q-ak=AKIDwoFTVAZq47k7Zt0xn9wHXYrhSp6UUftE&q-sign-time=1549792799;1549794599&q-key-time=1549792799;1549794599&q-header-list=&q-url-param-list=&q-signature=6126ceb492b4660743fb87eb506ac8ceacd6182d&x-cos-security-token=336fe451232725a5c39704ed8c09149969c6e69b10001' }],
        }
    },
    methods: {
        handleChange(file) {
            // cdn.getAuthorization(file)
            // cdn.getCdnUpload(file)
            cdn.uploadFile(file.raw)
        },
        submitUpload() {
            this.$refs.upload.submit()
        },
    },
}
</script>

