<template>
    <div id="Top">
        {{ user }}
        <div class="content">
            <div class="site-nav" :style="{ paddingTop: '10px' }">
                <a @click="$router.push('/')" name="top" title="way to explore"
                    ><strong>小论坛</strong></a
                >

                <div class="tools">
                    <a @click="$router.push('/login')" class="top">登录</a>
                    <a @click="$router.push('/register')" class="top">注册</a>
                    <a @click="$router.push('/settings')" class="top">设置</a>
                    <a @click="logout" class="top">登出</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: mapState({
        user: (state) => state.user,
    }),
    methods: {
        logout() {
            console.log('logout 123');
        },
    },
};
</script>
