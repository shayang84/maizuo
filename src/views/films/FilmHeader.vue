<template>
    <ul>
        <router-link to="/films/nowplaying" custom v-slot ="{navigate,isActive}">
            <li @click="navigate">
                <span :class="isActive?'niuma-active':''">正在热映</span>
            </li>
        </router-link>
        <router-link to="/films/comingsoon" custom v-slot ="{navigate,isActive}">
            <li @click="navigate">
                <span :class="isActive?'niuma-active':''">即将上映</span>
            </li>
        </router-link>
    </ul>
</template>
<style scoped lang="scss">
    ul{
        display: flex;
        li{
            flex: 1;
            text-align: center;
            height: 50px;
            line-height: 50px;
        }
    }
    .niuma-active{
        color:red;
        border-bottom: 2px solid red;
    }
</style>
