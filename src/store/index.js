import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        boards: [],
        checkedBoardId: 'all',
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setBoards(state, payload) {
            state.boards = payload;
        },
        setCheckedBoardId(state, payload) {
            state.checkedBoardId = payload;
        },
    },
    actions: {},
    modules: {},
});
