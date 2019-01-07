<template>
    <div class="content">
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
                    <n-select v-model="formInline.region" placeholder="活动区域" filterable size="mini" :options="options"></n-select>
                </nf-form-item>
                <nf-form-item>
                    <nf-button type="primary" @click="onSubmit" size="mini">查询</nf-button>
                </nf-form-item>
            </nf-form>
            <nf-table :data="auth.userList" border>
                <nf-table-column label="user" prop="user"></nf-table-column>
                <nf-table-column label="icon" prop="icon"></nf-table-column>
                <nf-table-column label="操作" width="300">
                    <template slot-scope="scope">
                        <nf-button @click="handleClick(scope.row)" type="text" size="small">删除</nf-button>
                    </template>
                </nf-table-column>
            </nf-table>
            <nf-pagination class="mt10 tr" background :current-page="4" :page-size="100" layout="total, sizes, prev, pager, next"
                :total="400"></nf-pagination>
        </nf-box>
    </div>
</template>

<script>
import AuthModel from '../../model/AuthModel'
export default {
    name: "userList",
    methods: {
        handleClick(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.auth.delUser(row, (res) => {
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: res.msg
                        });
                        this.auth.getUserList();
                    }
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        onSubmit() {
            console.log('submit!');
        }
    },
    data() {
        return {
            auth: new AuthModel(),
            formInline: {
                user: '',
                region: ''
            },
            options: [
                {
                    label: '区域一',
                    value: 'shanghai'
                },
                {
                    label: '区域二',
                    value: 'beijing'
                }
            ]
        }
    },
    created() {
        this.auth.getUserList();
    }
}
</script>

<style scoped>
</style>
