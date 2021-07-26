<template>
    <div class="swiper-container" :class="classname">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// import Swiper from 'swiper'//js 查文档找小点，这个是核心
import Swiper from 'swiper/bundle'// js 查文档找小点，
// swiper css文件需要查文档
import 'swiper/swiper-bundle.css'
export default {
  props: {
    perview: {
      default: 1,
      type: Number
    },
    classname: {
      default: 'kerwin',
      type: String
    }
  },
  mounted () {
    new Swiper('.' + this.classname, {
      slidesPerView: this.perview, // 一页显示几个
      // paginationClickable: true,
      spaceBetween: 10,
      freeMode: true
    })
  }
}
</script>
