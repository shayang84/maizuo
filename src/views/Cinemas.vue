<template>
    <div>
      <!-- 不用引入是因为早就全局引用完了 -->
      <van-nav-bar
        title="影院"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left>
          {{$store.state.cityName}}<van-icon name="arrow-down" size="10" color="#000"/>
        </template>
        <template #right>
          <van-icon name="search" size="25" color="#000"/>
        </template>
      </van-nav-bar>
      <div class="scrollbox" :style="{
        height:height
      }">
          <ul>
            <li v-for="data in $store.state.cinemaList" :key="data.cinemaId" @click="handleClick">
              <div>
                <div>{{data.name}}</div>
                <div class="address">{{data.address}}</div>
              </div>
              <div style="color:red;">
                <div>￥{{data.lowPrice/100}}起</div>
              </div>
            </li>
        </ul>
      </div>
    </div>
</template>
<script>
// import axiosrequest from '@/util/axiosrequest'
import BetterScroll from 'better-scroll'
import { nextTick } from 'vue'
// import { List } from 'vant'
export default {
  data () {
    return {
      // cinemaList: [],
      height: 0
    }
  },
  created () {
    // https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=297654
    if (this.$store.state.cinemaList.length === 0) {
      // vuex的异步缓存流程
      this.$store.dispatch('getCinemaList', this.$store.state.cityId).then(() => {
        nextTick(() => { // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
          new BetterScroll('.scrollbox', {
            click: true,
            scrollbar: {
              fade: true,
              interactive: false
            }
          })
        })
      })
    } else {
      console.log('缓存')
      nextTick(() => { // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
        new BetterScroll('.scrollbox', {
          click: true,
          scrollbar: {
            fade: true,
            interactive: false
          }
        })
      })
    }
    // axiosrequest({
    //   params: {
    //     cityId: this.$store.state.cityId,
    //     ticketFlag: 1,
    //     k: 297654
    //   },
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then(res => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas
    // nextTick(() => { // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
    //   new BetterScroll('.scrollbox', {
    //     click: true,
    //     scrollbar: {
    //       fade: true,
    //       interactive: false
    //     }
    //   })
    // })
    // })
  },
  mounted () {
    this.height = document.documentElement.clientHeight - 50 + 'px'
  },
  methods: {
    handleClick () {
      // console.log('click');
    },
    onClickLeft () {
      // 清空vue缓存数据
      this.$store.commit('clearCinemaList')
      this.$router.push('/city')
    },
    onClickRight () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>
<style lang="scss" scoped>
  li{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    .address{
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 200px;
      font-size: 12px;
      color: gray;
    }
  }

  .scrollbox{
    // height: 500px;
    overflow: hidden;
    position: relative;
  }
</style>
