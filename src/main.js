import { createApp } from 'vue'
import App from './App.vue'
// import Child from './components/Child.vue'
import router from './router'
import top from '@/directive/Top'
import Vant from 'vant'
import 'vant/lib/index.css'
import store from './store'

// createApp(App).use(store).use(router).mount('#app')
createApp(App)
  .use(router)// this.$router
  .directive('top', top)
  .use(Vant)
  .use(store)// this.$store
//   .component('child', Child) 全局定义方案
  .mount('#app')
