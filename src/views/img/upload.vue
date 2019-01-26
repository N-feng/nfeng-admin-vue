<template>
    <div class="content">
        <nf-box title="upload" border>
            <nf-upload action :file-list="fileList" list-type="picture" :auto-upload="false" ref="upload" style="width: 360px;">
                <nf-button slot="trigger" size="small" type="primary">选取文件</nf-button>
                <nf-button class="ml10" size="small" @click="submitUpload">上传到服务器</nf-button>
            </nf-upload>
        </nf-box>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fileList: [{ name: 'food.jpeg', url: 'https://feng-1257981287.cos.ap-chengdu.myqcloud.com/logo.png?q-sign-algorithm=sha1&q-ak=AKIDcJrT97F04m2P8nGmgfDdqxbaEQ9SokaQ&q-sign-time=1548384071;1548385871&q-key-time=1548384071;1548385871&q-header-list=&q-url-param-list=&q-signature=b24e933724de12143b3b9666281eeb8ca3f8ded8&x-cos-security-token=61a63487c6f6abd4edcc583753a04171f59136a610001' }],
        }
    },
    methods: {
        submitUpload() {
            this.$refs.upload.submit()
        },
    },
}
</script>

