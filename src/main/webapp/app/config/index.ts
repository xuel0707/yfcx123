// 应用配置
export const APP_CONFIG = {
  // 应用信息
  APP_NAME: '天策云',
  APP_VERSION: '1.0.0',
  APP_DESCRIPTION: '企业政策服务平台',
  
  // API配置
  API_BASE_URL: process.env.VUE_APP_API_BASE_URL || '/api',
  API_TIMEOUT: 30000,
  
  // 认证配置
  AUTH_TOKEN_KEY: 'token',
  AUTH_REFRESH_TOKEN_KEY: 'refresh_token',
  AUTH_TOKEN_EXPIRES_KEY: 'token_expires',
  
  // 缓存配置
  CACHE_PREFIX: 'tc_',
  CACHE_TTL: 24 * 60 * 60 * 1000, // 24小时
  
  // 分页配置
  PAGE_SIZE: 10,
  PAGE_SIZES: [10, 20, 50, 100],
  
  // 上传配置
  UPLOAD_MAX_SIZE: 10 * 1024 * 1024, // 10MB
  UPLOAD_ALLOWED_TYPES: [
    'image/jpeg',
    'image/png',
    'image/gif',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ],
  
  // 主题配置
  THEME: {
    PRIMARY_COLOR: '#1890ff',
    SUCCESS_COLOR: '#52c41a',
    WARNING_COLOR: '#faad14',
    ERROR_COLOR: '#f5222d',
    LINK_COLOR: '#1890ff',
    HEADING_COLOR: '#333',
    TEXT_COLOR: '#666',
    DISABLED_COLOR: '#ccc',
    BORDER_COLOR: '#e8e8e8',
    BACKGROUND_COLOR: '#f0f2f5'
  },
  
  // 布局配置
  LAYOUT: {
    HEADER_HEIGHT: 60,
    FOOTER_HEIGHT: 60,
    SIDEBAR_WIDTH: 256,
    CONTENT_WIDTH: 1200,
    MOBILE_BREAKPOINT: 768
  },
  
  // 动画配置
  ANIMATION: {
    DURATION: 300,
    EASING: 'cubic-bezier(0.4, 0, 0.2, 1)'
  },
  
  // 通知配置
  NOTIFICATION: {
    DURATION: 4000,
    MAX_COUNT: 5,
    PLACEMENT: 'topRight'
  },
  
  // 日志配置
  LOGGER: {
    LEVEL: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    MAX_LOGS: 1000,
    PERSIST: true
  }
};

// 导出类型
export type AppConfig = typeof APP_CONFIG;

// 导出默认配置
export default APP_CONFIG; 