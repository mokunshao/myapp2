<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="inner" id="Tabs">
                <a href="/?tab=tech" class="tab_current">全部</a>
                <a href="/?tab=tech" class="tab">技术</a
                ><a href="/?tab=creative" class="tab">创意</a
                ><a href="/?tab=play" class="tab">好玩</a>
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
