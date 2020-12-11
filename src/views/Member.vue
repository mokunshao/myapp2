<template>
    <div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell">
                <table cellpadding="0" cellspacing="0" border="0" width="100%">
                    <tbody>
                        <tr>
                            <td width="73" valign="top" align="center">
                                <img
                                    :src="defaultAvatarLink"
                                    class="avatar"
                                    border="0"
                                    align="default"
                                    alt="nutting"
                                />
                                <div class="sep10"></div>
                            </td>
                            <td width="10"></td>
                            <td width="auto" valign="top" align="left">
                                <h1 style="margin-bottom: 5px;">nutting</h1>
                                <div class="sep10"></div>
                                <span class="gray">第 180793 号会员 </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="sep5"></div>
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell">
                <span class="gray">nutting 最近创建的主题</span>
            </div>
            <TopicCell />
            <div class="inner">
                <span class="chevron">»</span>
                <a>nutting 创建的更多主题</a>
            </div>
        </div>
        <div class="sep20"></div>
        <div class="box">
            <div class="cell"><span class="gray">nutting 最近回复了</span></div>
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
                                        >7 天前</span
                                    >
                                </div>
                                <span class="gray"
                                    >回复了主题
                                    <span class="chevron"> › </span>
                                    <a
                                        >看了有位兄弟月化
                                        5%被群嘲了，来点实际的，讨论下哪些理财方案可以接近年化
                                        10-15%</a
                                    ></span
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="inner">
                <div class="reply_content">没有这种好事</div>
            </div>
            <div class="inner">
                <span class="chevron">»</span>
                <a>nutting 创建的更多回复</a>
            </div>
        </div>
    </div>
</template>

<script>
import TopicCell from '../components/TopicCell';
import { defaultAvatarLink } from '../settings';
export default {
    data() {
        return {
            defaultAvatarLink,
        };
    },
    components: {
        TopicCell,
    },
};
</script>
