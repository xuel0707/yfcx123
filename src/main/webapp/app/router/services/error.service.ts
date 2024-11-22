import axios, { AxiosError } from 'axios';
import { notification } from 'ant-design-vue';

export interface ErrorResponse {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
}

export class ErrorService {
  private static instance: ErrorService;

  private constructor() {
    this.initializeAxiosInterceptor();
  }

  public static getInstance(): ErrorService {
    if (!ErrorService.instance) {
      ErrorService.instance = new ErrorService();
    }
    return ErrorService.instance;
  }

  // 初始化 Axios 拦截器
  private initializeAxiosInterceptor(): void {
    axios.interceptors.response.use(
      response => response,
      error => this.handleAxiosError(error)
    );
  }

  // 处理 Axios 错误
  private handleAxiosError(error: AxiosError): Promise<never> {
    if (error.response) {
      const errorResponse = error.response.data as ErrorResponse;
      this.showErrorNotification(errorResponse);

      // 处理特定状态码
      switch (error.response.status) {
        case 401:
          this.handleUnauthorized();
          break;
        case 403:
          this.handleForbidden();
          break;
        case 404:
          this.handleNotFound();
          break;
        case 500:
          this.handleServerError();
          break;
      }
    } else if (error.request) {
      // 请求已发出但没有收到响应
      this.handleNetworkError();
    } else {
      // 请求配置出错
      this.handleRequestError(error.message);
    }

    return Promise.reject(error);
  }

  // 显示错误通知
  private showErrorNotification(error: ErrorResponse): void {
    notification.error({
      message: '错误',
      description: error.message || '发生未知错误',
      duration: 4
    });
  }

  // 处理未授权错误
  private handleUnauthorized(): void {
    // 重定向到登录页面或显示登录弹窗
    window.location.href = '/login';
  }

  // 处理禁止访问错误
  private handleForbidden(): void {
    notification.error({
      message: '访问被拒绝',
      description: '您没有权限访问此资源',
      duration: 4
    });
  }

  // 处理资源未找到错误
  private handleNotFound(): void {
    notification.error({
      message: '资源未找到',
      description: '请求的资源不存在',
      duration: 4
    });
  }

  // 处理服务器错误
  private handleServerError(): void {
    notification.error({
      message: '服务器错误',
      description: '服务器发生错误，请稍后重试',
      duration: 4
    });
  }

  // 处理网络错误
  private handleNetworkError(): void {
    notification.error({
      message: '网络错误',
      description: '无法连接到服务器，请检查网络连接',
      duration: 4
    });
  }

  // 处理请求错误
  private handleRequestError(message: string): void {
    notification.error({
      message: '请求错误',
      description: message || '发送请求时发生错误',
      duration: 4
    });
  }

  // 记录错误日志
  public logError(error: Error | AxiosError): void {
    // 可以将错误日志发送到服务器或保存到本地
    console.error('Error:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
  }
}

export const errorService = ErrorService.getInstance(); 