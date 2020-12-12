<template>
    <div>
        <div class="sep20"></div>
        <div class="box" id="box">
            <div class="cell">
                设置新密码
            </div>
        </div>
        <div class="box inner">
            <table cellpadding="5" cellspacing="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td width="120" align="right">当前密码</td>
                        <td width="auto" align="left">
                            <input
                                type="password"
                                class="sl"
                                v-model="oldPassword"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width="120" align="right">新密码</td>
                        <td width="auto" align="left">
                            <input
                                type="password"
                                class="sl"
                                v-model="password"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width="120" align="right">再次输入新密码</td>
                        <td width="auto" align="left">
                            <input
                                type="password"
                                class="sl"
                                v-model="confirmPassword"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td width="120" align="right"></td>
                        <td width="auto" align="left">
                            <input
                                type="hidden"
                                value="64365"
                                name="once"
                            /><input
                                @click="changePassword"
                                type="submit"
                                class="super normal button"
                                value="更改密码"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { apiChangePassword } from '../service';
export default {
    data() {
        return {
            oldPassword: '',
            password: '',
            confirmPassword: '',
        };
    },
    methods: {
        changePassword() {
            console.log(this.oldPassword, this.password, this.confirmPassword);
            if (!(this.oldPassword && this.password && this.confirmPassword)) {
                alert('请填写所有项目');
            } else if (this.password !== this.confirmPassword) {
                alert('确认密码与新密码不一致');
            } else {
                apiChangePassword(this.oldPassword, this.password).then(
                    (res) => {
                        if (res?.status === 200) {
                            alert('密码修改成功');
                            this.oldPassword = '';
                            this.password = '';
                            this.confirmPassword = '';
                        }
                    },
                );
            }
        },
    },
};
</script>
