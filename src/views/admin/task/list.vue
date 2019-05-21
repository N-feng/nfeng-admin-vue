<template>
    <nf-box title="taskList" border>
        <div slot="header__tools">
            <nf-button type="primary" size="mini" @click="dialogFormVisible = true">new</nf-button>
        </div>
        <nf-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <nf-form :model="form">
                <nf-form-item label="Title:">
                    <nf-input v-model="form.name" autocomplete="off"></nf-input>
                </nf-form-item>
                <nf-form-item label="Description:">
                    <nf-input v-model="form.name" autocomplete="off" type="textarea"></nf-input>
                </nf-form-item>
                <nf-form-item label="Set due date:">
                    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
                </nf-form-item>
                <nf-form-item label="Priority:">
                    <nf-select v-model="form.region" placeholder="请选择活动区域">
                        <nf-option label="区域一" value="shanghai"></nf-option>
                        <nf-option label="区域二" value="beijing"></nf-option>
                    </nf-select>
                </nf-form-item>
            </nf-form>
            <div slot="footer" class="dialog-footer">
                <nf-button @click="dialogFormVisible = false">取 消</nf-button>
                <nf-button type="primary" @click="dialogFormVisible = false">确 定</nf-button>
            </div>
        </nf-dialog>
    </nf-box>
</template>

<script>
export default {
    data() {
        return {
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: '',
            },
            formLabelWidth: '120px',
            value1: '',
        }
    },
}
</script>

