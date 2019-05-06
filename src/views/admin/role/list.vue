<template>
    <nf-box title="roleList" border>
        <div slot="header__tools">
            <router-link to="create">
                <nf-button type="primary" size="mini">new</nf-button>
            </router-link>
        </div> 
        <nf-table :data="RoleModel.roleList" border>
            <nf-table-column label="roleName" prop="roleName"></nf-table-column>
            <nf-table-column label="roleType" prop="roleType"></nf-table-column>
            <nf-table-column label="roleMenu" prop="roleMenu"></nf-table-column>
            <nf-table-column label="permissions" prop="permissions"></nf-table-column>
            <nf-table-column label="操作">
                <template slot-scope="scope">
                    <nf-button @click="handleClick(scope.row)" type="text" size="small">删除</nf-button>
                </template>
            </nf-table-column>
        </nf-table>
    </nf-box>
</template>

<script>
import RoleModel from '../../../model/RoleModel';

export default {
    data() {
        return {
            RoleModel: new RoleModel(),
        };
    },
    methods: {
        handleClick(row) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
            }).then(() => {
                RoleModel.delete(row.roleName).then((res) => {
                    if (res.code === 200) {
                        this.$message({
                            type: 'success',
                            message: res.msg,
                        });
                        this.RoleModel.getList();
                    }
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除',
                });
            });
        },
    },
    created() {
        this.RoleModel.getList();
    },
};
</script>

