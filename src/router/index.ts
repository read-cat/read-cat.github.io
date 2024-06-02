import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '小说阅读器'
    },
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/plugin',
    name: 'plugin',
    meta: {
      title: '插件'
    },
    component: () => import('../views/plugin/index.vue')
  },
  {
    path: '/download',
    name: 'download',
    meta: {
      title: '下载'
    },
    component: () => import('../views/download/index.vue')
  },
  {
    path: '/insiders',
    name: 'insiders',
    meta: {
      title: '内测'
    },
    component: () => import('../views/insiders/index.vue')
  },
  {
    path: '/dev',
    name: 'dev',
    meta: {
      title: '插件开发文档'
    },
    component: () => import('../views/dev/index.vue')
  },

];

export default createRouter({
  routes,
  history: createWebHistory()
});