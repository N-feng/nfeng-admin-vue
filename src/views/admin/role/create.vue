<template>
    <nf-box title="roleCreate" border>
        <nf-form label-width="100px">
            <nf-form-item prop="username" label="Rolename:">
                <nf-input type="text" placeholder="Rolename" v-model="RoleModel.rolename"></nf-input>
            </nf-form-item>
            <nf-form-item prop="password" label="Roletype:">
                <nf-input type="text" placeholder="Roletype" v-model="RoleModel.rolename"></nf-input>
            </nf-form-item>
            <nf-form-item prop="password" label="Rolemenu:">
                <nf-input type="text" placeholder="Rolemenu" v-model="RoleModel.rolemenu"></nf-input>
            </nf-form-item>
            <nf-form-item prop="password" label="Permissions:">
                <nf-input type="text" placeholder="Permissions" v-model="RoleModel.permissions"></nf-input>
            </nf-form-item>
            <nf-form-item>
                <!-- <nf-button type="primary" class="btn" @click="submit">Login</nf-button> -->
            </nf-form-item>
        </nf-form>
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
};
</script>

