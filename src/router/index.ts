import store from '@/store'
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/films',
    name: '',
    component: () => import(/* webpackChunkName: 'films' */ '@/views/Film.vue'),
    meta: { showTab: true },
    children: [
      {
        path: '/films/filmList/:type',
        name: 'FilmList',
        component: () => import(/* webpackChunkName: 'ComingSoon' */ '@/views/film/FilmList.vue'),
        meta: { showTab: true }
      },
      {
        path: '/films',
        redirect: '/films/filmList/1'
      }
    ]
  },
  {
    path: '/film/:filmId',
    name: 'FilmDetail',
    component: () => import(/* webpackChunkName: 'filmDetail' */ '@/views/filmDetail/index.vue')
  },
  {
    path: '/cinemas',
    name: '',
    component: () => import(/* webpackChunkName: 'cinemas' */ '@/views/Cinema.vue'),
    meta: { showTab: true }
  },
  {
    path: '/center',
    name: '',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/Center.vue'),
    meta: { requiresAuth: true, showTab: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/Login.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/Setting.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/city',
    name: 'City',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/City.vue')
  },

  {
    path: '*',
    redirect: '/films'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      router.push({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
export default router
