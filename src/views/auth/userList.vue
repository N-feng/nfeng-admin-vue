<template>
<div class="content">
    <nf-box title="userList">
        <nf-table :data="auth.userList" border>
            <nf-table-column label="user" prop="user"></nf-table-column>
            <nf-table-column label="icon" prop="icon"></nf-table-column>
            <nf-table-column label="操作" width="300">
                <template slot-scope="scope">
                    <nf-button @click="handleClick(scope.row)" type="text" size="small">删除</nf-button>
                </template>
            </nf-table-column>
        </nf-table>
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
        }
    },
    data() {
        return {
            auth: new AuthModel()
        }
    },
    created() {
        this.auth.getUserList();
    }
}
</script>

<style scoped>

</style>
