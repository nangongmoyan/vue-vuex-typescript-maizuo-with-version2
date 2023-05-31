import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/films',
    name: '',
    component: () => import(/* webpackChunkName: 'films' */ '@/views/Film.vue'),
    children: [
      {
        path: '/films/filmList/:type',
        name: 'FilmList',
        component: () => import(/* webpackChunkName: 'ComingSoon' */ '@/views/film/FilmList.vue')
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
    component: () => import(/* webpackChunkName: 'cinemas' */ '@/views/Cinema.vue')
  },
  {
    path: '/center',
    name: '',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/Center.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/Login.vue')
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

export default router
