<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" />
    <ul>
      <li
        v-for="data in computedList"
        :key="data.cinemaId"
        @click="handleClick"
      >
        <div>
          <div>{{ data.name }}</div>
          <div class="address">{{ data.address }}</div>
        </div>
        <div style="color: red">
          <div>￥{{ data.lowPrice / 100 }}起</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedList () {
      if (this.value === '') { return [] }
      // return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) ||item.address.toUpperCase().includes(this.value.toUpperCase()))
      return this.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    },
    ...mapState(['cinemaList', 'cityId'])
  },
  created () {
    // if (this.$store.state.cinemaList.length === 0) {
    if (this.cinemaList.length === 0) {
    //   this.$store.dispatch("getCinemaList", this.cityId);
      this.getCinemaList(this.cityId)
    } else {
    //   console.log("缓存");
    }
  },
  methods: {
    ...mapActions(['getCinemaList'])
  }
}
</script>
<style scoped lang="scss">
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
</style>
