<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="73" valign="top" align="center">
                                <img
                                    height="73"
                                    width="73"
                                    :src="defaultAvatarLink"
                                    class="avatar"
                                    border="0"
                                    align="default"
                                    :alt="userData.username"
                                />
                                <div class="sep10"></div>
                            </td>
                            <td width="10"></td>
                            <td width="auto" valign="top" align="left">
                                <h1 style="margin-bottom: 5px;">
                                    {{ userData.username }}
                                </h1>
                                <div class="sep10"></div>
                                <span class="gray"
                                    >第 {{ userData.id }} 号会员
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="sep5"></div>
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell">
                <span class="gray">ta 最近创建的主题</span>
            </div>
            <TopicCell v-for="o in topics" :key="o.id" :item="o" noImage />
            <div class="inner">
                <span class="chevron">»</span>
                <a @click="$router.push('/member/topics/' + userData.id)"
                    >ta 创建的更多主题</a
                >
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell"><span class="gray">ta 最近回复了</span></div>
            <CommentBriefCell
                v-for="o in topicComments"
                :key="o.id"
                :item="o"
            />
            <div class="inner">
                <span class="chevron">»</span>
                <a @click="$router.push('/member/comments/' + userData.id)"
                    >ta 创建的更多回复</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import CommentBriefCell from '../components/CommentBriefCell';
import TopicCell from '../components/TopicCell';
import { defaultAvatarLink } from '../settings';
import {
    apiGetUserInfo,
    apiGetUserSomeTopic,
    apiGetUserSomeTopicComment,
} from '../service';
import { formatDate } from '../utils';

export default {
    data() {
        return {
            defaultAvatarLink,
            userData: {},
            topics: [],
            topicComments: [],
        };
    },
    components: {
        TopicCell,
        CommentBriefCell,
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(id, old) {
                if (id) {
                    apiGetUserInfo(id).then((res) => {
                        if (res?.data) {
                            this.userData = res.data;
                        }
                    });
                    apiGetUserSomeTopic(id).then((res) => {
                        if (res?.data) {
                            this.topics = res.data;
                        }
                    });
                    apiGetUserSomeTopicComment(id).then((res) => {
                        if (res?.data) {
                            this.topicComments = res.data;
                        }
                    });
                }
            },
        },
    },
    methods: {
        formatDate,
    },
};
</script>
