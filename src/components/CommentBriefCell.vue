<template>
    <div>
        <div class="dock_area">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <tbody>
                    <tr>
                        <td
                            style="padding: 10px 15px 8px 15px; font-size: 12px; text-align: left;"
                        >
                            <div class="fr">
                                <span
                                    class="fade"
                                    title="2020-12-03 17:34:53 +08:00"
                                    >{{ formatDate(item.createdTime) }}</span
                                >
                            </div>
                            <span class="gray"
                                >回复了主题
                                <span class="chevron"> › </span>
                                <a>{{ item.topic.title }}</a></span
                            >
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="inner">
            <div class="reply_content">{{ item.content }}</div>
        </div>
    </div>
</template>

<script>
import { formatDate } from '../utils';

export default {
    props: {
        item: { type: Object },
    },
    methods: {
        formatDate,
    },
};
</script>
