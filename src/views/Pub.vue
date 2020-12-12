<template>
    <div>
        <div class="sep20"></div>
        <div class="box" id="box">
            <div class="cell">
                创作新主题
            </div>
            <div class="cell">
                主题标题
            </div>
            <div class="cell" style="padding: 0px;">
                <textarea
                    v-model="title"
                    class="msl"
                    rows="1"
                    maxlength="120"
                    id="topic_title"
                    name="title"
                    autofocus="autofocus"
                    placeholder="请在这里输入主题标题"
                ></textarea>
            </div>
            <div class="cell">
                正文
            </div>
            <div
                style="text-align: left; border-bottom: 1px solid #e2e2e2; font-size: 14px; line-height: 120%;"
            >
                <textarea
                    v-model="content"
                    rows="6"
                    placeholder="请在这里输入正文"
                    style="width: 100%; box-sizing: border-box; border: none; outline: none;"
                    name="content"
                ></textarea>
            </div>
            <div class="cell">
                请选择一个节点
                <select
                    v-model="boardId"
                    name="node_name"
                    style="width: 300px; font-size: 14px;"
                >
                    <option></option>
                    <option :value="o.id" v-for="o in boards" :key="o.id">{{
                        o.name
                    }}</option>
                </select>
            </div>
            <input type="hidden" name="content" value="" id="topic_content" />
            <input type="hidden" name="once" value="64365" />
            <div class="cell">
                <button
                    type="button"
                    class="super normal button"
                    @click="publishTopic"
                >
                    &nbsp;发布主题
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { apiPostTopic } from '../service';

export default {
    computed: mapState({
        boards: (state) => state.boards,
    }),
    data() {
        return {
            title: '',
            content: '',
            boardId: '',
        };
    },
    methods: {
        publishTopic() {
            if (!(this.title && this.content && this.boardId)) {
                alert('请填写所有项目');
            } else {
                apiPostTopic(this.title, this.content, this.boardId).then(
                    (res) => {
                        if (res?.status === 200) {
                            alert('发表成功');
                            this.title = '';
                            this.content = '';
                            this.boardId = '';
                            this.$router.push('/');
                        }
                    },
                );
            }
        },
    },
};
</script>
