import { createRouter as createVueRouter, createWebHistory } from 'vue-router';

import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';

export const createRouter = () =>
  createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/core/home/home.vue'),
      },
      {
        path: '/yffgl', // 路由路径
        name: 'Yffgl',
        component: () => import ('@/entities/yffgl/login.vue'), // 绑定组件
      },
      {
        path: '/forbidden',
        name: 'Forbidden',
        component: () => import('@/core/error/error.vue'),
        meta: { error403: true },
      },
      {
        path: '/not-found',
        name: 'NotFound',
        component: () => import('@/core/error/error.vue'),
        meta: { error404: true },
      },
      ...admin,
      entities,
      ...pages,
    ],
  });

const router = createRouter();

router.beforeResolve(async (to, from, next) => {
  if (!to.matched.length) {
    next({ path: '/not-found' });
    return;
  }
  next();
});

export default router;
