<template>
  <div>
    <tabbar></tabbar>
    <!-- 留个位置 -路由容器-->
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import tabbar from './components/Tabbar.vue'
export default {
  components: {
    tabbar
  }
}
</script>
<style lang= "scss">
  *{
    margin: 0;
    padding: 0;
  }

  ul{
    list-style: none;
  }
  html,body{
    height: 100%;
  }
  section{
    padding-bottom: 50px;
  }
</style>
