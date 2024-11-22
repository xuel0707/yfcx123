import { createPinia } from 'pinia';
import { useAuthStore } from './auth.store';
import { useAppStore } from './app.store';

// 创建 Pinia 实例
const pinia = createPinia();

// 创建 App Store
export const createAppStore = () => {
  return {
    auth: useAuthStore(),
    app: useAppStore()
  };
};

// 创建 App Store 类型
export type AppStore = ReturnType<typeof createAppStore>;

// 导出 Pinia 实例
export default pinia; 