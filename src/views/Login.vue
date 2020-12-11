<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                <a href="/">V2EX</a>
                <span class="chevron">&nbsp;›&nbsp;</span> 登录 &nbsp;
                <li class="fa fa-lock"></li>
            </div>
            <div class="cell">
                <form method="post" action="/signin">
                    <table
                        cellpadding="5"
                        cellspacing="0"
                        border="0"
                        width="100%"
                    >
                        <tbody>
                            <tr>
                                <td width="120" align="right">用户名</td>
                                <td width="auto" align="left">
                                    <input
                                        type="text"
                                        class="sl"
                                        name="6995812db725b969292169325e9dc9f3bb740cfaa5cea65f3078b28152f2c574"
                                        value=""
                                        autofocus="autofocus"
                                        autocorrect="off"
                                        spellcheck="false"
                                        autocapitalize="off"
                                        placeholder="用户名或电子邮箱地址"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td width="120" align="right">密码</td>
                                <td width="auto" align="left">
                                    <input
                                        type="password"
                                        class="sl"
                                        name="6397f2734366cc4b96778ee89f607b07602396e2d4f83dae5b6584a511e17711"
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
                                        type="hidden"
                                        value="82393"
                                        name="once"
                                    /><input
                                        type="submit"
                                        class="super normal button"
                                        value="登录"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <input type="hidden" value="/" name="next" />
                </form>
            </div>
        </div>
    </div>
</template>
