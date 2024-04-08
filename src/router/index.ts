import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: {
      title: '小说阅读器'
    },
    component: () => import('../views/home/index.vue')
  }

];

export default createRouter({
  routes,
  history: createWebHistory()
});