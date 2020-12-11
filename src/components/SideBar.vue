<template>
    <div id="Rightbar">
        <div class="sep20"></div>
        <div class="box">
            <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="48" valign="top">
                                <a
                                    ><img
                                        src="https://cdn.v2ex.com/gravatar/6b8d978e37b2739e9406a2365d666a0c?s=48&amp;d=retro"
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
                                    ><a @click="jumpToMemberPage">xxx</a></span
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
                                <a href="/new"
                                    ><img
                                        src="https:www.v2ex.com/static/img/essentials/compose.png?v=b9e1f045f4ad639733bf9f6dbc62ed4c"
                                        width="28"
                                        border="0"
                                        style="vertical-align: bottom;"
                                /></a>
                            </td>
                            <td width="10"></td>
                            <td width="auto" valign="middle" align="left">
                                <a href="/new">创作新主题</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        jumpToMemberPage() {
            this.$router.push('/member');
        },
    },
};
</script>
