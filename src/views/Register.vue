<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                注册新用户
            </div>
            <div class="cell">
                <table cellpadding="5" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="120" align="right">用户名</td>
                            <td width="auto" align="left">
                                <input
                                    v-model="username"
                                    type="text"
                                    class="sl"
                                    name="username"
                                    value=""
                                    autofocus="autofocus"
                                    autocorrect="off"
                                    spellcheck="false"
                                    autocapitalize="off"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width="120" align="right">密码</td>
                            <td width="auto" align="left">
                                <input
                                    v-model="password"
                                    type="password"
                                    class="sl"
                                    name="password"
                                    value=""
                                    autocorrect="off"
                                    spellcheck="false"
                                    autocapitalize="off"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td width="120" align="right"></td>
                            <td width="auto" align="left">
                                <input
                                    @click="doRegister"
                                    type="button"
                                    class="super normal button"
                                    value="注册"
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { apiRegister } from '../service';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        doRegister() {
            if (!this.username && !this.password) {
                alert('请输入用户名和密码');
            } else {
                apiRegister(this.username, this.password).then((res) => {
                    if (res?.status === 200) {
                        alert('注册成功');
                        this.$router.push('/login');
                    }
                });
            }
        },
    },
};
</script>
