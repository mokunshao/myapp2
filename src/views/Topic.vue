<template>
    <div>
        <div class="sep20"></div>
        <div class="box" style="border-bottom: 0px;">
            <div class="header">
                <div class="fr">
                    <a
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
                <h1>{{ item.title }}</h1>

                <small class="gray"
                    ><a>{{ item.user.username }}</a> ·
                    <span title="2020-12-11 09:32:41 +08:00">{{
                        this.formatDate(item.createdTime)
                    }}</span>
                </small>
            </div>
            <div class="cell">
                <div
                    class="topic_content"
                    v-text="item.content"
                    style="white-space:pre-wrap"
                ></div>
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
                                <strong><a class="dark">614457662</a></strong
                                >&nbsp; &nbsp;<span class="ago">{{
                                    item.createdTime
                                }}</span>
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
import { apiGetTopicDetail } from '../service';
import { formatDate } from '../utils';

export default {
    data() {
        return {
            defaultAvatarLink,
            item: {},
        };
    },
    methods: {
        formatDate,
    },
    mounted() {
        const id = this.$route.params.id;
        apiGetTopicDetail(id).then((res) => {
            if (res?.data) {
                this.item = res.data;
            }
        });
    },
};
</script>
