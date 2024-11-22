import axios from 'axios';

export interface Notification {
  id: number;
  type: 'policy' | 'system' | 'match' | 'application';
  title: string;
  content: string;
  status: 'read' | 'unread';
  createTime: string;
}

export interface NotificationPreference {
  email: boolean;
  sms: boolean;
  wechat: boolean;
  browser: boolean;
  types: string[];
}

export class NotificationService {
  private static instance: NotificationService;
  private baseUrl = '/api/notifications';

  private constructor() {}

  public static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  // 获取未读消息列表
  public async getUnreadNotifications(): Promise<Notification[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/unread`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取所有消息
  public async getAllNotifications(params: {
    page: number;
    size: number;
    type?: string;
  }): Promise<{
    content: Notification[];
    total: number;
  }> {
    try {
      const response = await axios.get(`${this.baseUrl}`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 标记消息为已读
  public async markAsRead(notificationIds: number[]): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/read`, { notificationIds });
    } catch (error) {
      throw error;
    }
  }

  // 删除消息
  public async deleteNotifications(notificationIds: number[]): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}`, { data: { notificationIds } });
    } catch (error) {
      throw error;
    }
  }

  // 获取通知设置
  public async getPreferences(): Promise<NotificationPreference> {
    try {
      const response = await axios.get(`${this.baseUrl}/preferences`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 更新通知设置
  public async updatePreferences(preferences: Partial<NotificationPreference>): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/preferences`, preferences);
    } catch (error) {
      throw error;
    }
  }

  // 订阅消息推送
  public async subscribe(subscription: PushSubscription): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/subscribe`, subscription);
    } catch (error) {
      throw error;
    }
  }

  // 取消订阅消息推送
  public async unsubscribe(): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/unsubscribe`);
    } catch (error) {
      throw error;
    }
  }
}

export const notificationService = NotificationService.getInstance(); 