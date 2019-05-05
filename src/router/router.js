import Home from '@/views/Home.vue'

export default [
  {
    path: '',
    name: 'home',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/book',
    name: 'book',
    component: () => import (/* webpackChunkName: "Book" */ '@/views/Book.vue')
  },
  {
    path: '/Teacher',
    name: 'Teacher',
    component: () => import (/* webpackChunkName: "Teacher" */ '@/views/Teacher.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import (/* webpackChunkName: "account" */ '@/views/account.vue')
  },
  {
    path: '/regist',
    name: 'regist',
    component: () => import (/* webpackChunkName: "regist" */ '@/views/regist.vue')
  },
  {
    path: '/resetpwd',
    name: 'resetpwd',
    component: () => import (/* webpackChunkName: "resetpwd" */ '@/views/resetpwd.vue')
  },
  {
    path: '/percenter',
    name: 'percenter',
    component: () => import (/* webpackChunkName: "percenter" */ '@/views/percenter.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import (/* webpackChunkName: "event" */ '@/views/event.vue')
  },
  {
    path: 'about',
    name: 'about',
    component: () => import (/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '*',
    component: () => import ('@/views/404view.vue'),
  }
]
