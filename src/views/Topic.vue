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
                    <span>{{ formatDate(item.createdTime) }}</span>
                </small>
            </div>
            <div class="cell">
                <div
                    class="topic_content"
                    v-text="item.content"
                    style="white-space:pre-wrap"
                ></div>
                <div v-if="item.userId === user.id">
                    <br />
                    <input
                        type="button"
                        value="删除"
                        class="super normal button"
                        @click="deletePost(item.id)"
                    />
                    &nbsp;&nbsp;
                    <input
                        type="button"
                        value="编辑"
                        class="super normal button"
                        @click="modifyPost(item)"
                    />
                </div>
            </div>
        </div>
        <div class="sep20"></div>
        <div v-if="comments.length">
            <div class="box">
                <div v-for="(o, key) in comments" :key="o.id" class="cell">
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
                                        &nbsp;&nbsp;
                                        <span class="no">{{ key + 1 }}</span>
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
                                    <div v-if="o.userId === user.id">
                                        <br />
                                        <input
                                            type="button"
                                            value="删除"
                                            class="super normal button"
                                            @click="deleteComment(o.id)"
                                        />
                                        &nbsp;&nbsp;
                                        <input
                                            type="button"
                                            value="编辑"
                                            class="super normal button"
                                            @click="modifyComment(o)"
                                        />
                                    </div>
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
        <Modal v-show="showModal" @close="close" @confirm="confirm">
            <template slot="header">
                <div v-if="editingMode === 'comment'">编辑评论</div>
                <div v-if="editingMode === 'topic'">编辑主题</div>
            </template>
            <template slot="default">
                <div v-if="editingMode === 'comment'">
                    <input
                        ref="commentAfterEdit"
                        type="text"
                        placeholder="评论"
                        :value="currentEditingComment.content"
                    />
                </div>
                <div v-if="editingMode === 'topic'">
                    <input
                        ref="titleAfterEdit"
                        type="text"
                        placeholder="标题"
                        :value="currentEditingTopic.title"
                    />
                    <textarea
                        ref="contentAfterEdit"
                        type="text"
                        placeholder="正文"
                        :value="currentEditingTopic.content"
                    />
                </div>
            </template>
        </Modal>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { defaultAvatarLink } from '../settings';
import {
    apiGetTopicDetail,
    apiGetComments,
    apiPostComment,
    apiDeleteTopic,
    apiDeletComment,
    apiUpdateTopic,
    apiUpdateTopicComment,
} from '../service';
import { formatDate } from '../utils';
import Modal from '../components/Modal.vue';

export default {
    components: { Modal },
    computed: mapState({
        user: (state) => state.user,
    }),
    data() {
        return {
            showModal: false,
            defaultAvatarLink,
            item: {},
            comments: [],
            comment: '',
            editingMode: 'comment', // comment or topic
            currentEditingComment: {},
            currentEditingTopic: {},
        };
    },
    methods: {
        confirm() {
            if (this.editingMode === 'comment') {
                const content = this.$refs.commentAfterEdit.value;
                const id = this.currentEditingComment.id;
                apiUpdateTopicComment(id, content).then(() => {
                    alert('更新成功');
                    this.close();
                    apiGetComments(this.$route.params.id).then((res) => {
                        if (res?.data) {
                            this.comments = res.data;
                        }
                    });
                });
            } else {
                const title = this.$refs.titleAfterEdit.value;
                const content = this.$refs.contentAfterEdit.value;
                const id = this.currentEditingTopic.id;
                apiUpdateTopic(id, title, content).then(() => {
                    alert('更新成功');
                    this.close();
                    apiGetTopicDetail(id).then((res) => {
                        if (res?.data) {
                            this.item = res.data;
                        }
                    });
                });
            }
        },
        open() {
            this.showModal = true;
        },
        close() {
            this.showModal = false;
            this.currentEditingTopic = {};
            this.currentEditingComment = {};
        },
        modifyComment(comment) {
            this.currentEditingComment = { ...comment };
            this.editingMode = 'comment';
            this.open();
        },
        deleteComment(id) {
            const bool = confirm('是否要删除这条评论？');
            if (bool) {
                apiDeletComment(id).then((res) => {
                    if (res.status === 200) {
                        apiGetComments(this.$route.params.id).then((res) => {
                            if (res?.data) {
                                this.comments = res.data;
                            }
                        });
                    }
                });
            }
            console.log('deleteComment', id);
        },
        modifyPost(item) {
            this.currentEditingTopic = { ...item };
            this.editingMode = 'topic';
            this.open();
        },
        deletePost(id) {
            const bool = confirm('是否要删除这篇文章？');
            if (bool) {
                apiDeleteTopic(id).then((res) => {
                    if (res.status === 200) {
                        this.$router.push('/');
                    }
                });
            }
        },
        formatDate,
        goToUserPage() {
            this.$router.push(
                '/member/' + (this.item.user && this.item.user.id),
            );
        },
        postComment() {
            if (this.comment) {
                apiPostComment(this.$route.params.id, this.comment).then(() => {
                    this.comment = '';
                    apiGetComments(this.$route.params.id).then((res) => {
                        if (res?.data) {
                            this.comments = res.data;
                        }
                    });
                });
            } else {
                alert('请输入评论');
            }
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
