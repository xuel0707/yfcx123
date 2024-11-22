import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAppStore = defineStore('app', () => {
  // 状态
  const loading = ref(false);
  const theme = ref<'light' | 'dark'>('light');
  const sidebarCollapsed = ref(false);
  const notifications = ref<any[]>([]);
  const unreadCount = ref(0);

  // 计算属性
  const isDarkMode = computed(() => theme.value === 'dark');
  const hasUnreadNotifications = computed(() => unreadCount.value > 0);

  // 方法
  const setLoading = (value: boolean) => {
    loading.value = value;
  };

  const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', theme.value);
  };

  const toggleSidebar = () => {
    sidebarCollapsed.value = !sidebarCollapsed.value;
  };

  const addNotification = (notification: any) => {
    notifications.value.unshift(notification);
    if (!notification.read) {
      unreadCount.value++;
    }
  };

  const markNotificationAsRead = (id: number) => {
    const notification = notifications.value.find(n => n.id === id);
    if (notification && !notification.read) {
      notification.read = true;
      unreadCount.value--;
    }
  };

  const clearNotifications = () => {
    notifications.value = [];
    unreadCount.value = 0;
  };

  // 初始化
  const initialize = () => {
    // 从本地存储加载主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      theme.value = savedTheme as 'light' | 'dark';
    }
  };

  // 初始化调用
  initialize();

  return {
    // 状态
    loading,
    theme,
    sidebarCollapsed,
    notifications,
    unreadCount,

    // 计算属性
    isDarkMode,
    hasUnreadNotifications,

    // 方法
    setLoading,
    toggleTheme,
    toggleSidebar,
    addNotification,
    markNotificationAsRead,
    clearNotifications,
    initialize
  };
}); 