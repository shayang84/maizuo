<template>
  <footer>
    <ul>
        <!-- 声明式导航 a连接 -->
        <!-- 编程式导航 location.href -->
        <!-- router-link 是包含在router模块里的不用额外引入 -->
        <!-- vue2+vuerouter3 tag=li -->
        <router-link :to="'/films'" custom v-slot ="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'niuma-active':''">
                <i class="iconfont icon-color"></i>
                <span>电影</span>
            </li>
        </router-link>
        <router-link :to="'/cinemas'" custom v-slot ="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'niuma-active':''">
                <i class="iconfont icon-training"></i>
                <span>影院</span>
            </li>
        </router-link>
        <router-link :to="'/center'" custom v-slot ="{navigate,isActive}">
            <li @click="navigate" :class="isActive?'niuma-active':''">
                <i class="iconfont icon-account"></i>
                <span>我的</span>
            </li>
        </router-link>
<!--         <router-link :to="'/cinemas'">影院</router-link>
        <router-link :to="'/center'">我的</router-link> -->
    </ul>
  </footer>
</template>
<script>
import '../assets/iconfont/iconfont.css'// 引入css模块
export default {

}
</script>
<style scoped lang="scss">
.niuma-active {
  color: red;
}
footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  line-height: 25px;
  background:white;
  z-index: 100;
  ul {
    display: flex;
    li {
      flex: 1;
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
