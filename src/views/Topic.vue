<template>
    <div>
        <div class="sep20"></div>
        <div class="box" style="border-bottom: 0px;">
            <div class="header">
                <div class="fr">
                    <a @click="goToUserPage"
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
                    ><a @click="goToUserPage">{{
                        item.user && item.user.username
                    }}</a>
                    ·
                    <span>{{ this.formatDate(item.createdTime) }}</span>
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
        <div v-if="comments.length">
            <div class="box">
                <div v-for="o in comments" :key="o.id" class="cell">
                    <table
                        cellpadding="0"
                        cellspacing="0"
                        border="0"
                        width="100%"
                    >
                        <tbody>
                            <tr>
                                <td width="48" valign="top" align="center">
                                    <a
                                        @click="
                                            $router.push('/member/' + o.userId)
                                        "
                                    >
                                        <img
                                            :src="defaultAvatarLink"
                                            height="48"
                                            width="48"
                                            class="avatar"
                                            border="0"
                                            align="default"
                                            alt="614457662"
                                        />
                                    </a>
                                </td>
                                <td width="10" valign="top"></td>
                                <td width="auto" valign="top" align="left">
                                    <div class="fr">
                                        &nbsp;&nbsp; <span class="no">1</span>
                                    </div>
                                    <div class="sep3"></div>
                                    <strong
                                        ><a
                                            class="dark"
                                            @click="
                                                $router.push(
                                                    '/member/' + o.userId,
                                                )
                                            "
                                            >{{ o.user && o.user.username }}</a
                                        ></strong
                                    >&nbsp; &nbsp;<span class="ago">{{
                                        formatDate(o.createdTime)
                                    }}</span>
                                    <div class="sep5"></div>
                                    <div
                                        class="reply_content"
                                        v-text="o.content"
                                    ></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="sep20"></div>
        </div>

        <div class="box" id="reply-box" stuck="">
            <div class="cell flex-one-row">
                <div>添加一条新回复</div>
            </div>
            <div class="cell">
                <textarea
                    v-model="comment"
                    name="content"
                    maxlength="10000"
                    class="mll"
                    id="reply_content"
                    style="overflow: hidden; overflow-wrap: break-word; resize: none; height: 112px;"
                ></textarea>
                <div class="sep10"></div>
                <div class="fr">
                    <div class="sep5"></div>
                    <span class="gray">请尽量让自己的回复能够对别人有帮助</span>
                </div>
                <input type="hidden" value="42226" name="once" />
                <input
                    type="submit"
                    value="回复"
                    class="super normal button"
                    @click="postComment"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { defaultAvatarLink } from '../settings';
import { apiGetTopicDetail, apiGetComments, apiPostComment } from '../service';
import { formatDate } from '../utils';

export default {
    data() {
        return {
            defaultAvatarLink,
            item: {},
            comments: [],
            comment: '',
        };
    },
    methods: {
        formatDate,
        goToUserPage() {
            this.$router.push(
                '/member/' + (this.item.user && this.item.user.id),
            );
        },
        postComment() {
            apiPostComment(this.$route.params.id, this.comment).then(() => {
                this.comment = '';
                apiGetComments(this.$route.params.id).then((res) => {
                    if (res?.data) {
                        this.comments = res.data;
                    }
                });
            });
        },
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(id, old) {
                if (id) {
                    apiGetTopicDetail(id).then((res) => {
                        if (res?.data) {
                            this.item = res.data;
                        }
                    });
                    apiGetComments(id).then((res) => {
                        if (res?.data) {
                            this.comments = res.data;
                        }
                    });
                }
            },
        },
    },
};
</script>
