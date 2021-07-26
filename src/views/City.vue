<template>
  <div>
    <van-nav-bar title="当前城市">
      <template #left>
        <van-icon name="cross" color="#000" />
      </template>
    </van-nav-bar>
    <van-index-bar :index-list="computedList" @change="handleChange">
        <div v-for="data in datalist" :key="data.type">
            <van-index-anchor :index="data.type" />
            <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="handleCell(item)"/>
        </div>
    </van-index-bar>
  </div>
</template>
<script>
import axiosrequest from '@/util/axiosrequest'
import { Toast } from 'vant'
export default {
  data () {
    return {
      datalist: []
    }
  },
  computed: {
    computedList () {
      return this.datalist.map(item => item.type)
    }
  },
  created () {
    axiosrequest({
      params: {
        k: 3612389
      },
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      // console.log(res.data.data.cities);
      this.datalist = this.filterCity(res.data.data.cities)
    })
  },
  methods: {
    handleChange (index) {
      // console.log(123);
      Toast(index)
    },
    filterCity (cities) {
      var letterArr = []
      var newCities = []
      for (var i = 65; i < 91; i++) {
        letterArr.push(String.fromCharCode(i))
      }
      // console.log(letterArr);
      letterArr.forEach(data => {
        // console.log(data);
        // console.log(cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()=== data));
        var city = cities.filter(item => item.pinyin.substring(0, 1).toUpperCase() === data)
        if (city.length > 0) {
          newCities.push({
            type: data,
            list: city
          })
        }
      })
      // console.log(newCities);
      return newCities
    },
    handleCell (item) {
      // console.log(item.name, item.cityId)
      // this.$store.state.cityName = item.name
      // this.$store.state.cityId = item.cityId
      this.$store.commit('changeCityName', item.name)
      this.$store.commit('changeCityId', item.cityId)
      this.$router.back()
    }
  }
}
</script>
