<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                <a href="/">V2EX</a>
                <span class="chevron">&nbsp;›&nbsp;</span> 注册新用户
            </div>
            <div class="cell">
                <div class="topic_content markdown_body">
                    <p>欢迎来到 V2EX，这里是创意工作者的数字化公共空间。</p>
                    <p>你可以通过以下方式注册成为新用户。</p>
                    <p>
                        如果你之前已经使用电子邮件注册，那么请从
                        <a href="/signin">这里</a> 登入。
                    </p>
                </div>
            </div>
            <div class="dock_area">
                <div class="signup_methods">
                    <div
                        class="signup_method"
                        onclick="location.href = '/auth/google?once=82393'"
                    >
                        <div
                            class="signup_method_icon signup_method_google"
                        ></div>
                        <div class="signup_method_label">
                            Continue with Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
