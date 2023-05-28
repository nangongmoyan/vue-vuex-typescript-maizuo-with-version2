import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/films',
    name: '',
    component: () => import(/* webpackChunkName: 'films' */ '@/views/films/index.vue'),
    children: [
      {
        path: '/films/nowPlaying',
        name: 'NowPlaying',
        component: () => import(/* webpackChunkName: 'NowPlaying' */ '@/views/films/NowPlaying.vue')
      }, {
        path: '/films/comingSoon',
        name: 'ComingSoon',
        component: () => import(/* webpackChunkName: 'ComingSoon' */ '@/views/films/ComingSoon.vue')
      },
      {
        path: '/films',
        redirect: '/films/nowPlaying'
      }
    ]
  },
  {
    path: '/film/:filmId',
    name: 'FilmDetail',
    component: () => import(/* webpackChunkName: 'filmDetail' */ '@/views/film/FilmDetail.vue')
  },
  {
    path: '/cinemas',
    name: '',
    component: () => import(/* webpackChunkName: 'cinemas' */ '@/views/cinemas/index.vue')
  },
  {
    path: '/center',
    name: '',
    component: () => import(/* webpackChunkName: 'center' */ '@/views/center/index.vue')
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
