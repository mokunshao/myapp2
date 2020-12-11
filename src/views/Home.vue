<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="inner" id="Tabs">
                <a href="/?tab=tech" class="tab_current">技术</a
                ><a href="/?tab=creative" class="tab">创意</a
                ><a href="/?tab=play" class="tab">好玩</a
                ><a href="/?tab=apple" class="tab">Apple</a
                ><a href="/?tab=jobs" class="tab">酷工作</a
                ><a href="/?tab=deals" class="tab">交易</a
                ><a href="/?tab=city" class="tab">城市</a
                ><a href="/?tab=qna" class="tab">问与答</a
                ><a href="/?tab=hot" class="tab">最热</a
                ><a href="/?tab=all" class="tab">全部</a
                ><a href="/?tab=r2" class="tab">R2</a
                ><a href="/?tab=nodes" class="tab">节点</a
                ><a href="/?tab=members" class="tab">关注</a>
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
import TopicCell from '../components/TopicCell';

export default {
    components: {
        TopicCell,
    },
};
</script>
