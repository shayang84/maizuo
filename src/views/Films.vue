<template>
    <div>
        <film-swiper :key="looplist.length">
            <film-swiper-item v-for="data in looplist" :key="data.bannerId">
                <img :src="data.imgUrl"/>
            </film-swiper-item>
        </film-swiper>
        <film-header class="fixed"></film-header>
        <router-view></router-view>
    </div>
</template>
<script>
import filmSwiper from './films/FilmSwiper'
import filmSwiperItem from './films/FilmSwiperItem'
import filmHeader from '@/views/films/FilmHeader'
// import axios from 'axios'
import request from '@/util/request'
export default {
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  },
  data () {
    return {
      looplist: []
    }
  },
  //   mounted () {
  //     axios.get(`https://m.maizuo.com/gateway?type=2&cityId=${110100}&k=4005122`)
  //   }
  mounted () {
    // axios.get('https://m.maizuo.com/gateway', {
    //   params: {
    //     type: 2,
    //     cityId: 110100,
    //     k: 4005122
    //   } //X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"16271107005627437949911041","bc":"110100"}
    //     // X-Host: mall.cfg.common-banner
    // }) 为了传headers，改造成下面的形式
    // axios({
    //   url: 'https://m.maizuo.com/gateway',
    //   methods: 'get',
    //   params: {
    //     type: 2,
    //     cityId: 110100,
    //     k: 4005122
    //   },
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16271107005627437949911041","bc":"110100"}',
    //     'X-Host': 'mall.cfg.common-banner'
    //   }
    // }).then(res => {
    //   // console.log(res.data.data);
    //   this.looplist = res.data.data
    // })
    request(
      {
        type: 2,
        cityId: this.$store.state.cityId,
        k: 4005122
      },
      {
        'X-Host': 'mall.cfg.common-banner'
      }
    ).then((res) => {
      // console.log(res)
      this.looplist = res.data
    })
  }
}
</script>
<style scoped lang="scss">
    .swiper-slide {
        img{
            width: 100%;
        }
    }
    .fixed{
        position:sticky;
        top:0px;
        background: white;
        z-index: 100;
    }
</style>
