import axios from 'axios';

export interface MemberProfile {
  id: number;
  username: string;
  enterpriseName: string;
  level: string;
  points: number;
  expireDate: string;
  contacts: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface MemberSettings {
  pushNotification: boolean;
  emailNotification: boolean;
  smsNotification: boolean;
  policyTypes: string[];
  regions: string[];
}

export class MemberService {
  private static instance: MemberService;
  private baseUrl = '/api/members';

  private constructor() {}

  public static getInstance(): MemberService {
    if (!MemberService.instance) {
      MemberService.instance = new MemberService();
    }
    return MemberService.instance;
  }

  // 获取会员信息
  public async getProfile(): Promise<MemberProfile> {
    try {
      const response = await axios.get(`${this.baseUrl}/profile`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 更新会员信息
  public async updateProfile(profile: Partial<MemberProfile>): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/profile`, profile);
    } catch (error) {
      throw error;
    }
  }

  // 获取会员设置
  public async getSettings(): Promise<MemberSettings> {
    try {
      const response = await axios.get(`${this.baseUrl}/settings`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 更新会员设置
  public async updateSettings(settings: Partial<MemberSettings>): Promise<void> {
    try {
      await axios.put(`${this.baseUrl}/settings`, settings);
    } catch (error) {
      throw error;
    }
  }

  // 获取会员积分历史
  public async getPointsHistory(): Promise<any[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/points/history`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取会员订阅的政策
  public async getSubscribedPolicies(): Promise<any[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/policies/subscribed`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 订阅政策
  public async subscribePolicies(policyIds: number[]): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/policies/subscribe`, { policyIds });
    } catch (error) {
      throw error;
    }
  }

  // 取消订阅政策
  public async unsubscribePolicies(policyIds: number[]): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/policies/unsubscribe`, { policyIds });
    } catch (error) {
      throw error;
    }
  }
}

export const memberService = MemberService.getInstance(); 