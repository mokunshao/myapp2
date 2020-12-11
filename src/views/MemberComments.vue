<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                <a @click="$router.push('/member/' + userId)">{{ name }}</a>
                <span class="chevron">&nbsp;›&nbsp;</span> 全部回复
                <div class="fr f12">
                    <span class="snow">主题总数&nbsp;</span>
                    <strong class="gray">{{ list.length }}</strong>
                </div>
            </div>
            <CommentBriefCell v-for="o in list" :key="o.id" :item="o" />
        </div>
    </div>
</template>

<script>
import CommentBriefCell from '../components/CommentBriefCell.vue';
import { apiGetTopicCommentsByUserId } from '../service';

export default {
    components: { CommentBriefCell },
    data() {
        return {
            list: [],
            name: '',
            userId: null,
        };
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(id, old) {
                if (id) {
                    apiGetTopicCommentsByUserId(id).then((res) => {
                        if (res?.data) {
                            this.list = res.data;
                            this.name =
                                this.list[0] && this.list[0].user.username;
                            this.userId = this.list[0].user.id;
                        }
                    });
                }
            },
        },
    },
};
</script>
