import { createStore } from 'vuex'
import axiosrequest from '@/util/axiosrequest'
import createPersistedState from 'vuex-persistedstate'
export default createStore({
  plugins: [createPersistedState({
    reducer: (values) => {
      return {
        cityName: values.cityName,
        cityId: values.cityId
      }
    }
  })],
  strict: true,
  state: { // 共享状态
    cityName: '北京',
    cityId: '110100',
    cinemaList: [] // 缓存的影院数据
  },
  mutations: {
    // 唯一修改状态的地方
    changeCityName (state, cityname) {
      // console.log(cityname)
      state.cityName = cityname
    },
    changeCityId (state, cityId) {
      // console.log(cityId)
      state.cityId = cityId
    },
    changeCinemaList (state, list) {
      state.cinemaList = list
    },
    clearCinemaList (state) {
      state.cinemaList = []
    }
  },
  actions: { // 异步请求数据的地方
    getCinemaList (store, cityId) {
      return axiosrequest({
        params: {
          cityId: cityId,
          ticketFlag: 1,
          k: 297654
        },
        headers: {
          'X-Host': 'mall.film-ticket.cinema.list'
        }
      }).then((res) => {
        // console.log(res.data.data.cinemas)
        // this.cinemaList = res.data.data.cinemas
        store.commit('changeCinemaList', res.data.data.cinemas)
      })
    }
  },
  modules: {
  }
})
