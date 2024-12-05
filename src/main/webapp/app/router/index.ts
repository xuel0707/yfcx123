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
        path: '/bussiness', // 路由路径
        name: 'Bussiness',
        component: () => import('@/core/bussiness/bussiness.vue'), // 绑定组件
      },
      {
        path: '/news', // 路由路径
        name: 'News',
        component: () => import('@/core/news/news.vue'), // 绑定组件
      },
      {
        path: '/corperate', // 路由路径
        name: 'Corperate',
        component: () => import('@/core/corperate/corperate.vue'), // 绑定组件
      },
      {
        path: '/tools', // 路由路径
        name: 'Tools',
        component: () => import('@/core/tools/tools.vue'), // 绑定组件
      },
      {
        path: '/contact', // 路由路径
        name: 'Contact',
        component: () => import('@/core/contact/contact.vue'), // 绑定组件
      },
      {
        path: '/console', // 路由路径
        name: 'Console',
        component: () => import('@/core/console/console.vue'), // 绑定组件
      },
      {
        path: '/ulogin', // 路由路径
        name: 'Ulogin',
        component: () => import('@/core/ulogin/ulogin.vue'), // 绑定组件
      },
      {
        path: '/register', // 路由路径
        name: 'Register',
        component: () => import('@/core/register/register.vue'), // 绑定组件
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
