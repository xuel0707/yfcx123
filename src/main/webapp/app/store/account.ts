import { defineStore } from 'pinia';
import { useAuthStore } from './auth.store';

declare global {
  interface Window {
    localStorage: Storage;
  }
}

interface AccountState {
  loggedIn: boolean;
  user: {
    id: string;
    login: string;
    email: string;
  } | null;
}

export const useAccountStore = defineStore('account', {
  state: (): AccountState => ({
    loggedIn: false,
    user: null as any
  }),

  getters: {
    isLoggedIn: (state) => state.loggedIn,
    currentUser: (state) => state.user
  },

  actions: {
    async login(credentials: { username: string; password: string }) {
      // 实现登录逻辑
      try {
        // API 调用
        this.loggedIn = true;
      } catch (error) {
        console.error('Login failed:', error);
        throw error;
      }
    },

    async logout() {
      const authStore = useAuthStore();
      authStore.setAuthenticated(false);
      authStore.setUserProfile(null);
      // 可以添加其他登出逻辑
    },

    async fetchUserInfo() {
      // 获取用户信息
      try {
        // API 调用
        this.user = {
          id: '1',
          login: 'user',
          email: 'user@example.com'
        };
      } catch (error) {
        console.error('Failed to fetch user info:', error);
        throw error;
      }
    }
  }
}); 