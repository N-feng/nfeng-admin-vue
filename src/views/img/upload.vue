<template>
    <div class="content">
        <nf-box title="upload" border>
            <nf-upload :auto-upload="false" ref="upload">
                <nf-button slot="trigger" size="small" type="primary">选取文件</nf-button>
                <nf-button class="ml10" size="small" @click="submitUpload">上传到服务器</nf-button>
            </nf-upload>
        </nf-box>
    </div>
</template>

<script>
export default {
    methods: {
        submitUpload() {
            this.$refs.upload.submit()
        },
    },
}
</script>

