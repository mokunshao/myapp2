<template>
    <div id="Rightbar">
        <div class="sep20"></div>
        <div class="box" v-if="user.id">
            <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="48" valign="top">
                                <a @click="jumpToMemberPage"
                                    ><img
                                        :src="defaultAvatarLink"
                                        class="avatar"
                                        border="0"
                                        align="default"
                                        style="max-width: 48px; max-height: 48px;"
                                        alt="xxx"
                                /></a>
                            </td>
                            <td width="10" valign="top"></td>
                            <td width="auto" align="left">
                                <span class="bigger"
                                    ><a @click="jumpToMemberPage">{{
                                        user.username
                                    }}</a></span
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="sep10"></div>
            </div>
            <div class="cell" style="padding: 8px; line-height: 100%;">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="28">
                                <a @click="goToPub"
                                    ><img
                                        src="https:www.v2ex.com/static/img/essentials/compose.png?v=b9e1f045f4ad639733bf9f6dbc62ed4c"
                                        width="28"
                                        border="0"
                                        style="vertical-align: bottom;"
                                /></a>
                            </td>
                            <td width="10"></td>
                            <td width="auto" valign="middle" align="left">
                                <a @click="goToPub">创作新主题</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="box" v-else>
            <div class="cell">
                <strong>欢迎你来到这里</strong>
                <div class="sep5"></div>
                <span class="fade">这是一个关于分享和探索的地方</span>
            </div>
            <div class="inner">
                <div class="sep5"></div>
                <div align="center">
                    <a
                        @click="$router.push('/register')"
                        class="super normal button"
                        >现在注册</a
                    >
                    <div class="sep5"></div>
                    <div class="sep10"></div>
                    已注册用户请 &nbsp;<a @click="$router.push('/login')"
                        >登录</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { defaultAvatarLink } from '../settings';
export default {
    computed: mapState({
        user: (state) => state.user,
    }),
    data() {
        return {
            defaultAvatarLink,
        };
    },
    methods: {
        jumpToMemberPage() {
            this.$router.push('/member/' + this.user.id);
        },
        goToPub() {
            this.$router.push('/pub');
        },
    },
};
</script>
