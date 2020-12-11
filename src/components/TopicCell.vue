<template>
    <div class="cell item" style="">
        <table cellpadding="0" cellspacing="0" border="0" width="100%">
            <tbody>
                <tr>
                    <td width="auto" valign="middle">
                        <span class="item_title"
                            ><a @click="goToTopic" class="topic-link"
                                >如何避免假短信</a
                            ></span
                        >
                        <div class="sep5"></div>
                        <span class="topic_info"
                            ><div class="votes"></div>
                            <a class="node" href="/go/qna">问与答</a>
                            &nbsp;•&nbsp;
                            <strong
                                ><a href="/member/nutting">nutting</a></strong
                            >
                            &nbsp;•&nbsp;
                            <span title="2020-11-12 22:15:11 +08:00"
                                >28 天前</span
                            >
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    methods: {
        goToTopic() {
            this.$router.push('/t/12');
            // console.log(1212);
        },
    },
};
</script>
