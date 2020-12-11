<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="header">
                <a @click="$router.push('/member/' + userId)">{{ name }}</a>
                <span class="chevron">&nbsp;›&nbsp;</span> 全部主题
                <div class="fr f12">
                    <span class="snow">主题总数&nbsp;</span>
                    <strong class="gray">{{ topics.length }}</strong>
                </div>
            </div>
            <TopicCell v-for="o in topics" :key="o.id" :item="o" noImage />
        </div>
    </div>
</template>

<script>
import TopicCell from '../components/TopicCell.vue';
import { apiGetTopicsByUserId } from '../service';

export default {
    components: { TopicCell },
    data() {
        return {
            topics: [],
            name: '',
            userId: null,
        };
    },
    watch: {
        '$route.params.id': {
            immediate: true,
            handler(id, old) {
                if (id) {
                    apiGetTopicsByUserId(id).then((res) => {
                        if (res?.data) {
                            this.topics = res.data;
                            this.name =
                                this.topics[0] && this.topics[0].user.username;
                            this.userId = this.topics[0].user.id;
                        }
                    });
                }
            },
        },
    },
};
</script>
