import axios from 'axios';

export interface BusinessPartner {
  id: number;
  name: string;
  type: string;
  contactPerson: string;
  phone: string;
  email: string;
  status: string;
}

export interface ApiService {
  id: number;
  name: string;
  description: string;
  price: number;
  qps: number;
  status: string;
}

export class BusinessService {
  private static instance: BusinessService;
  private baseUrl = '/api/business';

  private constructor() {}

  public static getInstance(): BusinessService {
    if (!BusinessService.instance) {
      BusinessService.instance = new BusinessService();
    }
    return BusinessService.instance;
  }

  // 平台入驻申请
  public async applyPlatform(data: any): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/platform/apply`, data);
    } catch (error) {
      throw error;
    }
  }

  // 服务商合作申请
  public async applyServiceProvider(data: any): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/service-provider/apply`, data);
    } catch (error) {
      throw error;
    }
  }

  // 渠道合作申请
  public async applyChannel(data: any): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/channel/apply`, data);
    } catch (error) {
      throw error;
    }
  }

  // 获取API服务列表
  public async getApiServices(): Promise<ApiService[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/api-services`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 申请API接口服务
  public async applyApiService(serviceId: number, data: any): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/api-services/${serviceId}/apply`, data);
    } catch (error) {
      throw error;
    }
  }

  // 获取合作伙伴列表
  public async getPartners(type: string): Promise<BusinessPartner[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/partners`, {
        params: { type }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取合作申请状态
  public async getApplicationStatus(applicationId: string): Promise<string> {
    try {
      const response = await axios.get(`${this.baseUrl}/applications/${applicationId}/status`);
      return response.data.status;
    } catch (error) {
      throw error;
    }
  }

  // 获取API调用统计
  public async getApiUsageStats(serviceId: number): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/api-services/${serviceId}/stats`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const businessService = BusinessService.getInstance(); 