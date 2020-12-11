<template>
    <div class="cell item" style="">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td width="48" valign="top" align="center">
                        <a href="/member/jimiy"
                            ><img
                                width="48"
                                height="48"
                                :src="defaultAvatarLink"
                                class="avatar"
                                border="0"
                                align="default"
                                alt="jimiy"
                        /></a>
                    </td>
                    <td width="10"></td>
                    <td width="auto" valign="middle">
                        <span class="item_title"
                            ><a
                                @click="goToTopic(item.id)"
                                class="topic-link"
                                >{{ item.title }}</a
                            ></span
                        >
                        <div class="sep5"></div>
                        <span class="topic_info"
                            ><div class="votes"></div>
                            <!-- <a class="node" href="/go/qna">问与答</a>
                            &nbsp;•&nbsp; -->
                            <strong
                                ><a>{{ item.user.username }}</a></strong
                            >
                            &nbsp;•&nbsp;
                            <span title="2020-11-12 22:15:11 +08:00">{{
                                this.formatDate(item.createdTime)
                            }}</span>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { defaultAvatarLink } from '../settings';
import { formatDate } from '../utils';

export default {
    data() {
        return {
            defaultAvatarLink,
        };
    },
    props: {
        item: {
            type: Object,
            default: function() {
                return {};
            },
        },
    },
    methods: {
        goToTopic(id) {
            this.$router.push('/t/' + id);
        },
        formatDate,
    },
};
</script>
