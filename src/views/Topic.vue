<template>
    <div>
        <div class="sep20"></div>
        <div class="box" style="border-bottom: 0px;">
            <div class="header">
                <div class="fr">
                    <a href="/member/nutting"
                        ><img
                            :src="defaultAvatarLink"
                            height="73"
                            width="73"
                            class="avatar"
                            border="0"
                            align="default"
                            alt="nutting"
                    /></a>
                </div>
                <h1>redis 性能问题</h1>

                <small class="gray"
                    ><a href="/member/nutting">nutting</a> ·
                    <span title="2020-12-11 09:32:41 +08:00"
                        >6 小时 51 分钟前</span
                    >
                </small>
            </div>
            <div class="cell">
                <div class="topic_content">
                    默认编译，默认参数启动，用自带的 benchmark 测试 <br />i5
                    4590+ssd 750evo，每秒 20w 次 <br />i5 7400+机械，每秒 14w 次
                    <br />其他的 amd r3 3200，r5 3600, 第八代 i5
                    笔记本，都是一般说的每秒 8w 次 <br /><br />好像 8w
                    次挺正常，为啥第一个平台表现那么好呢，那台机器很烂啊，h81
                    主板，15 年 2000 块装的，i5 4590 后来换的
                </div>
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box">
            <div id="r_9909738" class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="48" valign="top" align="center">
                                <img
                                    :src="defaultAvatarLink"
                                    height="48"
                                    width="48"
                                    class="avatar"
                                    border="0"
                                    align="default"
                                    alt="614457662"
                                />
                            </td>
                            <td width="10" valign="top"></td>
                            <td width="auto" valign="top" align="left">
                                <div class="fr">
                                    &nbsp;&nbsp; <span class="no">1</span>
                                </div>
                                <div class="sep3"></div>
                                <strong
                                    ><a href="/member/614457662" class="dark"
                                        >614457662</a
                                    ></strong
                                >&nbsp; &nbsp;<span class="ago"
                                    >6 小时 48 分钟前</span
                                >
                                <div class="sep5"></div>
                                <div class="reply_content">ssd 的原因？</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box" id="reply-box" stuck="">
            <div class="cell flex-one-row">
                <div>添加一条新回复</div>
            </div>
            <div class="cell">
                <form method="post" action="/t/734347">
                    <textarea
                        name="content"
                        maxlength="10000"
                        class="mll"
                        id="reply_content"
                        onfocus="setReplyBoxSticky();"
                        style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 112px;"
                    ></textarea>
                    <div class="sep10"></div>
                    <div class="fr">
                        <div class="sep5"></div>
                        <span class="gray"
                            >请尽量让自己的回复能够对别人有帮助</span
                        >
                    </div>
                    <input type="hidden" value="42226" name="once" />
                    <input
                        type="submit"
                        value="回复"
                        class="super normal button"
                    />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { defaultAvatarLink } from '../settings';
export default {
    data() {
        return {
            defaultAvatarLink,
        };
    },
};
</script>
