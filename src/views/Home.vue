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

            <TopicCell />
            <div class="inner">
                <span class="chevron">»</span> &nbsp;<a href="/recent"
                    >更多新主题</a
                >
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TopicCell from '../components/TopicCell';

export default {
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
};
</script>
