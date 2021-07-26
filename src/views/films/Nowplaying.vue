<template>
    <div>
        <!-- <ul>
            <li v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
                <img :src="data.poster">
                <div>
                  <div>{{data.name}}</div>
                  <div class="data.grade?'':'hidden'">观众评分{{data.grade}}</div>
                  <div class="actors">主演: {{handleActors(data.actors)}}</div>
                  <div>{{data.nation}} |{{data.runtime}}分钟</div>
                </div>
            </li>
        </ul> -->
        <van-list
          :loading="loading"
          :finished="finished"
          finished-text="我是有底线的"
          @load="onLoad"
          :immediate-check="false"
        >
          <van-cell v-for="data in datalist" :key="data.filmId" @click="handleClick(data.filmId)">
            <template #value>
              <img :src="data.poster">
              <div>
                <div>{{data.name}}</div>
                <div class="data.grade?'':'hidden'">观众评分{{data.grade}}</div>
                <div class="actors">主演: {{handleActors(data.actors)}}</div>
                <div>{{data.nation}} |{{data.runtime}}分钟</div>
              </div>
            </template>
          </van-cell>
        </van-list>
    </div>
</template>
<script>
// import axios from 'axios'
import axiosrequest from '@/util/axiosrequest'
export default {
  data () {
    return {
      datalist: [],
      current: 1,
      total: 0,
      loading: false, // 是否正在加载中
      finished: false// 是否已经完全结束
    }
  },
  mounted () { // 这里用created也行
    axiosrequest({
      params: {
        cityId: this.$store.state.cityId,
        pageNum: 1,
        pageSize: 10,
        type: 1,
        k: 9554674
      },
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films);
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad () {
      // console.log('到底了')
      this.loading = true
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      this.current++
      axiosrequest({ // 到底再发一次请求
        params: {
          cityId: this.$store.state.cityId,
          pageNum: this.current,
          pageSize: 10,
          type: 1,
          k: 9554674
        },
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
      // console.log(res.data.data.films);
        this.datalist = [...this.datalist, ...res.data.data.films]

        this.loading = false
      })
    },
    handleClick (id) {
      // location.href = '#center'
      // 38-编程式导航 05分10秒
      this.$router.push(`/detail/${id}`)
    },
    handleActors (actors) {
      // 数组对象转换数组字符串
      if (!actors) {
        return '暂无主演'
      }
      return actors.map(item => item.name).join(' ')
    }
  }
}
</script>
<style lang="scss" scoped>
  .van-list{
    .van-cell{
      overflow: hidden;
      padding: 10px;
      img{
        float: left;
        width: 100px;
      }
      .actors{
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 200px;
      }
      .hidden{
        visibility: hidden;
      }
    }
  }
</style>
