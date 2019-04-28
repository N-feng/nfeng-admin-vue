<template>
    <nf-box title="roleCreate" border>
        <nf-form label-width="100px" ref="role-form" :model="RoleModel" :rules="rules">
            <nf-form-item prop="rolename" label="Rolename:">
                <nf-input v-model="RoleModel.rolename" type="text" placeholder="Rolename"></nf-input>
            </nf-form-item>
            <nf-form-item prop="roleType" label="Roletype:">
                <nf-select v-model="RoleModel.roleType" placeholder="Roletype">
                    <nf-option v-for="(item,key) in RoleModel.roleTypeList" :key="key" :label="item.name" :value="item.value"></nf-option>
                </nf-select>
            </nf-form-item>
            <nf-form-item prop="rolemenu" label="Rolemenu:">
                <nf-select v-model="RoleModel.rolemenu" placeholder="Rolemenu">
                    <nf-option label="全部" value="all"></nf-option>
                    <nf-option v-for="(item,key) in RoleModel.roleMenuList" :key="key" :label="item.title" :value="item.path"></nf-option>
                </nf-select>
            </nf-form-item>
            <nf-form-item prop="permissions" label="Permissions:">
                <nf-select v-model="RoleModel.permissions" placeholder="Permissions">
                    <nf-option v-for="(item,key) in RoleModel.permissionsList" :key="key" :label="item.title" :value="item.path"></nf-option>
                </nf-select>
            </nf-form-item>
        </nf-form>
        <nf-button type="primary" class="btn pull-right" @click="submit" slot="footer">Submit</nf-button>
    </nf-box>
</template>

<script>
import RoleModel from '../../../model/RoleModel';

export default {
    data() {
        return {
            RoleModel: new RoleModel(),
            rules: {
                rolename: [
                    { required: true, message: 'Please enter your rolename', trigger: 'blur' },
                ],
                roleType: [
                    { required: true, message: 'Please choose your roleType', trigger: 'change' },
                ],
            },
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
    },
    created() {
        this.RoleModel.getList();
    },
};
</script>

