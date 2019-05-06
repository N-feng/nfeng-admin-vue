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
                <nf-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</nf-checkbox>
                <nf-checkbox-group v-model="RoleModel.roleMenu" @change="handleCheckedCitiesChange">
                    <nf-checkbox v-for="(item,key) in RoleModel.menuList" :label="item.path" :key="key">{{item.title}}</nf-checkbox>
                </nf-checkbox-group>
            </nf-form-item>
            <!-- <nf-form-item prop="permissions" label="Permissions:">
                <nf-select v-model="RoleModel.permissions" placeholder="Permissions">
                    <nf-option v-for="(item,key) in RoleModel.permissionsList" :key="key" :label="item.title" :value="item.path"></nf-option>
                </nf-select>
            </nf-form-item> -->
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
            checkAll: false,
            isIndeterminate: false,
        };
    },
    methods: {
        submit() {
            this.$refs['role-form'].validate((valid) => {
                if (valid) {
                    this.RoleModel.add().then(() => {
                        this.$router.push('/role/list');
                    });
                }
            });
        },
        handleCheckAllChange(val) {
            this.RoleModel.roleMenu = val ? this.RoleModel.pathList : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            const checkedCount = value.length;
            this.checkAll = checkedCount === this.RoleModel.pathList.length;
            this.isIndeterminate = checkedCount > 0
                                    && checkedCount < this.RoleModel.pathList.length;
        },
    },
    created() {
        this.RoleModel.getOption();
    },
};
</script>

