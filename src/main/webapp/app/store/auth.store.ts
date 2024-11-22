import { defineStore } from 'pinia';

interface UserProfile {
  login: string;
  // 添加其他用户属性
}

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    userProfile: null as UserProfile | null
  }),
  
  actions: {
    setAuthenticated(value: boolean) {
      this.isAuthenticated = value;
    },
    
    setUserProfile(profile: UserProfile | null) {
      this.userProfile = profile;
    }
  }
}); 