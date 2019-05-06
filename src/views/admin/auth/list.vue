<template>
    <nf-box title="userList" border>
        <nf-form :inline="true" :model="formInline" class="demo-form-inline">
            <nf-form-item label="审批人">
                <nf-input v-model="formInline.user" placeholder="审批人" size="mini"></nf-input>
            </nf-form-item>
            <nf-form-item label="活动区域">
                <nf-select v-model="formInline.region" placeholder="活动区域" filterable size="mini">
                    <nf-option label="区域一" value="shanghai"></nf-option>
                    <nf-option label="区域二" value="beijing"></nf-option>
                </nf-select>
            </nf-form-item>
            <nf-form-item>
                <nf-button type="primary" @click="onSubmit" size="mini">查询</nf-button>
            </nf-form-item>
        </nf-form>
        <nf-table :data="AuthModel.list" border>
            <nf-table-column label="user" prop="username"></nf-table-column>
            <nf-table-column label="操作">
                <template slot-scope="scope">
                    <nf-button @click="handleClick(scope.row)" type="text" size="small">删除</nf-button>
                </template>
            </nf-table-column>
        </nf-table>
        <nf-pagination class="mt10 tr" background :current-page="1" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
            :total="400"></nf-pagination>
    </nf-box>
</template>

<script>
import AuthModel from '../../../model/AuthModel';

export default {
    data() {
        return {
            formInline: {
                user: '',
                region: '',
            },
            options: [
                {
                    label: '区域一',
                    value: 'shanghai',
                },
                {
                    label: '区域二',
                    value: 'beijing',
                },
            ],
            AuthModel: new AuthModel(),
        };
    },
    methods: {
        handleClick(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                AuthModel.delete(row.username).then((res) => {
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: res.msg,
                        });
                        this.AuthModel.getUserList();
                    }
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除',
                });
            });
        },
        onSubmit() {
            console.log('submit!');
        },
    },
    created() {
        this.AuthModel.getList();
    },
};
</script>

<style scoped>
</style>
