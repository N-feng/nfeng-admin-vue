<template>
    <nf-box title="roleCreate" border>
        <nf-form label-width="100px" ref="role-form" :model="RoleModel" :rules="rules">
            <nf-form-item prop="roleName" label="RoleName:">
                <nf-input v-model="RoleModel.roleName" type="text" placeholder="RoleName"></nf-input>
            </nf-form-item>
            <nf-form-item prop="roleType" label="RoleType:">
                <nf-select v-model="RoleModel.roleType" placeholder="RoleType">
                    <nf-option v-for="(item,key) in RoleModel.typeList" :key="key" :label="item.name" :value="item.value"></nf-option>
                </nf-select>
            </nf-form-item>
            <nf-form-item prop="roleMenu" label="RoleMenu:">
                <nf-checkbox v-model="menuCheckAll" @change="menuHandleCheckAllChange">全选</nf-checkbox>
                <nf-checkbox-group v-model="RoleModel.roleMenu" @change="menuHandleCheckedChange">
                    <nf-checkbox v-for="(item,key) in RoleModel.menuList" :label="item.path" :key="key">{{item.title}}</nf-checkbox>
                </nf-checkbox-group>
            </nf-form-item>
            <nf-form-item prop="permissions" label="Permissions:">
                <nf-checkbox v-model="permCheckAll" @change="permHandleCheckAllChange">全选</nf-checkbox>
                <nf-checkbox-group v-model="RoleModel.permissions" @change="permHandleCheckedChange">
                    <nf-checkbox v-for="(item,key) in RoleModel.permissionsList" :label="item.path" :key="key">{{item.title}}</nf-checkbox>
                </nf-checkbox-group>
            </nf-form-item>
        </nf-form>
        <div slot="footer">
            <router-link to="list">
                <nf-button>Cancel</nf-button>
            </router-link>
            <nf-button type="primary" class="pull-right" @click="submit">Submit</nf-button>
        </div>
    </nf-box>
</template>

<script>
import RoleModel from '../../../model/RoleModel';

export default {
    data() {
        return {
            RoleModel: new RoleModel(),
            rules: {
                roleName: [
                    { required: true, message: 'Please enter your rolename', trigger: 'blur' },
                ],
                roleType: [
                    { required: true, message: 'Please choose your roleType', trigger: 'change' },
                ],
                roleMenu: [
                    { required: true, message: 'Please choose your roleMenu', trigger: 'change' },
                ],
            },
            menuCheckAll: false,
            menuListPath: [],
            permCheckAll: false,
            permListPath: [],
        };
    },
    methods: {
        submit() {
            this.$refs['role-form'].validate((valid) => {
                if (valid) {
                    this.RoleModel.save().then(() => {
                        this.$router.push('/role/list');
                    });
                }
            });
        },
        menuHandleCheckAllChange(val) {
            this.RoleModel.roleMenu = val ? this.menuListPath : [];
        },
        menuHandleCheckedChange(value) {
            const checkedCount = value.length;
            this.menuCheckAll = checkedCount === this.menuListPath.length;
        },
        permHandleCheckAllChange(val) {
            this.RoleModel.permissions = val ? this.permListPath : [];
        },
        permHandleCheckedChange(value) {
            const checkedCount = value.length;
            this.permCheckAll = checkedCount === this.permListPath.length;
        },
    },
    created() {
        const p1 = this.RoleModel.getOption().then(() => {
            this.menuListPath = RoleModel.getAllPath(this.RoleModel.menuList);
            this.permListPath = RoleModel.getAllPath(this.RoleModel.permissionsList);
        });
        if (this.$route.query.roleName) {
            const p2 = this.RoleModel.getDetail(this.$route.query.roleName);
            Promise.all([p1, p2]).then(() => {
                const { roleMenu, permissions } = this.RoleModel;
                this.menuCheckAll = roleMenu.length === this.menuListPath.length;
                this.permCheckAll = permissions.length === this.permListPath.length;
            });
        }
    },
};
</script>

