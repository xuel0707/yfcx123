import { createRouter as createVueRouter, createWebHistory } from 'vue-router';
const ForgetPwd = () => import('@/core/forget-pwd/forget-pwd.vue');
const Register = () => import('@/core/register/register.vue');
const Entrance = () => import('@/core/entrance/entrance.vue');
const Login = () => import('@/core/login/login.vue');
const Home = () => import('@/core/home/home.vue');
const Todo = () => import('@/core/todo/todo.vue');
const BasicInfo = () => import('@/core/basicinfo/basicinfo.vue');
const Project = () => import('@/core/project/project.vue');
const Costs = () => import('@/core/costs/costs.vue');
const Results = () => import('@/core/results/results.vue');
const HighTech = () => import('@/core/hightech/hightech.vue');
const Export = () => import('@/core/export/export.vue');
const Manage = () => import('@/core/manage/manage.vue');
const Error = () => import('@/core/error/error.vue');
import account from '@/router/account';
import admin from '@/router/admin';
import entities from '@/router/entities';
import pages from '@/router/pages';

export const createRouter = () =>
  createVueRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Entrance',
        component: Entrance,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/register',
        name: 'Register',
        component: Register,
      },
      {
        path: '/forget-pwd',
        name: 'Forget-pwd',
        component: ForgetPwd,
      },
      {
        path: '/home',
        name: 'Home',
        component: Home,
      },
      {
        path: '/todo',
        name: 'Todo',
        component: Todo,
      },
      {
        path: '/basicinfo',
        name: 'BasicInfo',
        component: BasicInfo,
      },
      {
        path: '/project',
        name: 'Project',
        component: Project,
      },
      {
        path: '/costs',
        name: 'Costs',
        component: Costs,
      },
      {
        path: '/results',
        name: 'Results',
        component: Results,
      },
      {
        path: '/hightech',
        name: 'HighTech',
        component: HighTech,
      },
      {
        path: '/export',
        name: 'Export',
        component: Export,
      },
      {
        path: '/manage',
        name: 'Manage',
        component: Manage,
      },
      {
        path: '/forbidden',
        name: 'Forbidden',
        component: Error,
        meta: { error403: true },
      },
      {
        path: '/not-found',
        name: 'NotFound',
        component: Error,
        meta: { error404: true },
      },
      // ...account,
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
