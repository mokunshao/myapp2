<template>
    <div class="cell item" style="">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td width="48" valign="top" align="center" v-if="!noImage">
                        <a @click="$router.push('/member/' + item.userId)"
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
                        <span class="topic_info" v-if="!noImage"
                            ><div class="votes"></div>
                            <strong
                                ><a
                                    @click="
                                        $router.push('/member/' + item.userId)
                                    "
                                    >{{ item.user.username }}</a
                                ></strong
                            >
                            &nbsp;•&nbsp;
                            <span>{{ this.formatDate(item.createdTime) }}</span>
                        </span>
                        <span class="topic_info" v-if="noImage"
                            ><div class="votes"></div>
                            <span>{{ this.formatDate(item.createdTime) }}</span>
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
        noImage: {
            type: Boolean,
        },
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
