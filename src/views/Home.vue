<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="inner" id="Tabs">
                <a
                    key="all"
                    href="#"
                    @click="
                        (e) => {
                            e.preventDefault();
                            changeBoard('all');
                        }
                    "
                    :class="checkedBoardId === 'all' ? 'tab_current' : 'tab'"
                    >全部</a
                >
                <a
                    v-for="board in boards"
                    :key="board.id"
                    href="#"
                    @click="
                        (e) => {
                            e.preventDefault();
                            changeBoard(board.id);
                        }
                    "
                    :class="checkedBoardId === board.id ? 'tab_current' : 'tab'"
                    >{{ board.name }}</a
                >
            </div>
            <TopicCell v-for="item in topicList" :item="item" :key="item.id" />
            <!-- <div class="inner">
                <span class="chevron">»</span> &nbsp;<a href="/recent"
                    >更多新主题</a
                >
            </div> -->
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TopicCell from '../components/TopicCell';
import { apiGetTopics } from '../service';

export default {
    data() {
        return {
            topicList: [],
        };
    },
    computed: mapState({
        boards: (state) => state.boards,
        checkedBoardId: (state) => state.checkedBoardId,
    }),
    components: {
        TopicCell,
    },
    methods: {
        changeBoard(boardId) {
            this.$store.commit('setCheckedBoardId', boardId);
        },
    },
    watch: {
        checkedBoardId: {
            handler(newName, oldName) {
                apiGetTopics(newName).then((res) => {
                    if (res?.data) {
                        this.topicList = res.data;
                    }
                });
            },
            immediate: true,
        },
    },
};
</script>
