<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                登录
            </div>
            <div class="cell">
                <!-- <form method="post" action="/signin"> -->
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
                                    @click="doLogin"
                                    type="button"
                                    class="super normal button"
                                    value="登录"
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
import { apiLogin } from '../service';
export default {
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        doLogin() {
            apiLogin(this.username, this.password).then((res) => {
                console.log(res);
                if (res?.data) {
                    this.$store.commit('setUser', res.data);
                }
            });
        },
    },
};
</script>
