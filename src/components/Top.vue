<template>
    <div id="Top">
        <div class="content">
            <div class="site-nav">
                <a
                    @click="$router.push('/')"
                    name="top"
                    title="way to explore"
                    ><div id="Logo"></div
                ></a>
                <div id="search-container">
                    <input
                        id="search"
                        type="text"
                        maxlength="128"
                        autocomplete="off"
                        tabindex="1"
                    />
                    <div id="search-result" class="box"></div>
                </div>
                <div class="tools">
                    <a href="/login" class="top">login</a>
                    <a href="/home" class="top">home</a>
                    <a href="/register" class="top">register</a>
                    <a href="/ttodo" class="top">TODO</a>
                    <a
                        href="#;"
                        onclick="if (confirm('确定要从 V2EX 登出？')) { location.href= '/signout?once=80588'; }"
                        class="top"
                        >登出</a
                    >
                </div>
            </div>
        </div>
    </div>
</template>
