<template>
    <div id="app">
        <Top />
        <div id="Wrapper">
            <div class="content">
                <div id="Leftbar"></div>
                <SideBar />
                <div id="Main">
                    <router-view />
                </div>
            </div>
            <div class="c"></div>
            <div class="sep20"></div>
        </div>
        <Bottom />
    </div>
</template>

<script>
import Top from './components/Top';
import SideBar from './components/SideBar';
import Bottom from './components/Bottom';
import { apiGetAllBoardName } from './service';
import { localGet } from './utils';

export default {
    components: {
        Top,
        SideBar,
        Bottom,
    },
    mounted() {
        const user = localGet('user');
        if (user) {
            this.$store.commit('setUser', user);
        }
        apiGetAllBoardName().then((res) => {
            if (res?.data) {
                this.$store.commit('setBoards', res.data);
            }
        });
    },
};
</script>

<style lang="scss">
a {
    cursor: pointer;
}
#app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
#Wrapper {
    flex: 1;
}
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }

// #nav {
//     padding: 30px;

//     a {
//         font-weight: bold;
//         color: #2c3e50;

//         &.router-link-exact-active {
//             color: #42b983;
//         }
//     }
// }
</style>
