<template>
  <div v-if="filmInfo">
    <detail-header v-top="50">
      {{filmInfo.name}}
    </detail-header>
    <!-- <img :src="filmInfo.poster"/> -->
    <!-- 44detail 16:07 -->
      <!-- backgroundImage:'url('+filmInfo.poster+')' -->
    <div :style="{
      backgroundImage:`url(${filmInfo.poster})`
    }" class="poster"></div>
    <div>{{filmInfo.name}}--{{filmInfo.filmType.name}}</div>
    <div>
      {{filmInfo.category}}
    </div>
    <div>
      {{handelDate(filmInfo.premiereAt)}}
    </div>
    <div :class="isCollpased?'collapsed':'uncollapsed'">
      {{filmInfo.synopsis}}
    </div>
    <div style="text-align:center">
      <!-- class可以跟:class共存 -->
      <i class="iconfont" :class="isCollpased?'icon-moreunfold':'icon-less'" @click="isCollpased=!isCollpased"></i>
    </div>
    <!-- 44detail 37.28 -->
    <div>
      <div>演职人员</div>
      <detail-swiper :perview="3.5" classname="actors">
        <detail-swiper-item v-for="(data,index) in filmInfo.actors" :key="index">
          <div :style="{
            backgroundImage:`url(${data.avatarAddress})`}" class="avatar">
          </div>
          <div style="text-align:center">
            <div>{{data.name}}</div>
            <div>{{data.role}}</div>
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div>
      <div>剧照</div>
      <detail-swiper :perview="2.5" classname="photo">
        <detail-swiper-item v-for="(data,index) in filmInfo.photos" :key="index">
          <div :style="{
            backgroundImage:`url(${data})`}" class="avatar" @click="handlePreview(index)">
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import axiosrequest from '@/util/axiosrequest'
import moment from 'moment'

import detailSwiper from '@/components/detail/DetailSwiper'
import detailSwiperItem from '@/components/detail/DetailSwiperItem'
import detailHeader from '@/components/detail/DetailHeader'
import { ImagePreview } from 'vant'// 预览图方法
export default {
  data () {
    return {
      filmInfo: null,
      isCollpased: true
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  mounted () {
    // this.$route.params.myid//当前匹配的路径
    // get传id获取当前页面的详情
    // axios({
    //   url: 'https://m.maizuo.com/gateway',
    //   params: {
    //     filmId: 5588,
    //     k: 2737803
    //   },
    //   headers: {
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16271624135679222370598913","bc":"110100"}',
    //     'X-Host': 'mall.film-ticket.film.info'
    //   }
    // }).then(res => {
    //   // console.log(res.data.data.film)
    // })

    axiosrequest({
      params: {
        filmId: this.$route.params.myid,
        k: 2737803
      },
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data.data.film)
      this.filmInfo = res.data.data.film
      // Toast.clear()
    })
    /*     window.onscroll = ()=>{
      // console.log('scorll',document.documentElement.scrollTop);
    } */
  },
  methods: {
    handelDate (data) {
      return moment(data * 1000).format('YYYY-MM-DD')
    },
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index
      })
    }
  }
}
</script>
<style lang="scss" coped>
  /* img{
    width:100%
  } */
  .poster{
    height: 200px;
    background-size: cover;
    background-position:center;
  }

  .collapsed{
    height: 50px;
    line-height: 25px;
    overflow: hidden;
  }
  .uncollapsed{
    // height: 50px;
    line-height: 25px;
    // overflow: hidden;
  }
  .avatar{
    width:100%;
    height:85px;
    background-position:center;
    background-size:cover;
  }
</style>
