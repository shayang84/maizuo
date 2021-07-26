import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Films from '../views/Films.vue'
import Cinemas from '../views/Cinemas.vue'
import Center from '../views/Center.vue'
import Nowplaying from '../views/films/Nowplaying.vue'
import Commingsoon from '../views/films/Commingsoon.vue'
import Detail from '../views/films/Detail.vue'
import City from '../views/City.vue'
import Search from '../views/Search.vue'
// 什么时候全称？?
// import Login from '../views/Login.vue'

const routes = [
  {
    path: '/films',
    component: Films,
    children: [
      {
        path: '/films/nowplaying',
        component: Nowplaying
      },
      {
        path: '/films/comingsoon',
        component: Commingsoon
      },
      {
        path: '/films',
        redirect: '/films/nowplaying'
      }
    ]
  },
  {
    path: '/cinemas',
    component: Cinemas// 注意compontent别写错了
  },
  {
    path: '/cinemas/search',
    component: Search// 注意compontent别写错了
  },
  {
    path: '/city',
    component: City// 注意compontent别写错了
  },
  {
    path: '/login',
    // component: Login// 注意compontent别写错了
    component: () => import('../views/Login.vue')
  },
  {
    path: '/center',
    component: Center,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/detail/:myid', // 动态路由
    component: Detail
  },
  {
    path: '/',
    redirect: '/films' // 重定向
  },
  // {
  //   path: '*',
  //   redirect: '/films'//重定向
  //   // vue2 + vue router 3 非上面路径都会被重定向至films路径
  // }
  {
    path: '/:pathMath(.*)*', // :pathMath是占位符，可以是任何东西如:kerwin
    // 可以匹配的有 /a /b  /a/a /a/b .... 正则匹配规则
    redirect: '/films'
  }// vue3 + vue router 4
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),//history模式
  history: createWebHashHistory(), // hash
  routes
})

router.beforeEach((to, from, next) => {
  // if (to.meta.requireAuth && !auth.isLoggedIn()) {
  if (to.meta.requireAuth) {
    // return {
    //   path: '/login',
    //   query: { redirect: to.fullPath }
    // }
    if (localStorage.getItem('token')) {
      next()
    } else {
      next('/login')
    }
    console.log('拦截')
  } else {
    next()
  }
})
export default router
