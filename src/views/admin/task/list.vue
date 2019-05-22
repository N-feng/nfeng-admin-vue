<template>
    <nf-box title="taskList" border>
        <div slot="header__tools">
            <el-button type="primary" size="mini" @click="dialogFormVisible = true">new</el-button>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible" append-to-body>
            <el-form :model="TaskModel">
                <el-form-item label="Title:">
                    <el-input v-model="TaskModel.title" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Description:">
                    <el-input v-model="TaskModel.description" autocomplete="off" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="Set due date:">
                    <el-date-picker v-model="TaskModel.date" type="datetime" placeholder="选择日期时间" style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="Priority:">
                    <el-select v-model="TaskModel.priority" placeholder="Select priority" style="width: 100%;">
                        <el-option label="Low" value="Low"></el-option>
                        <el-option label="Normal" value="Normal"></el-option>
                        <el-option label="High" value="High"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </nf-box>
</template>

<script>
import TaskModel from '../../../model/TaskModel'

export default {
    data() {
        return {
            dialogFormVisible: false,
            TaskModel: new TaskModel(),
        }
    },
}
</script>

