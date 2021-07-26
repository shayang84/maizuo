<template>
    <div class="swiper-container kerwin">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
// import Swiper from 'swiper'//js 查文档找小点，这个是核心
import Swiper from 'swiper/bundle'// js 查文档找小点，
// swiper css文件需要查文档
import 'swiper/swiper-bundle.css'
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    new Swiper('.kerwin', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: this.loop,
      autoplay: {
        delay: 1500,
        stopOnLastSlide: false,
        disableOnInteraction: true
      }
    })
  }
}
</script>
