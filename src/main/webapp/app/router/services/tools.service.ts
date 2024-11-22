import axios from 'axios';

export interface PolicyReport {
  id: number;
  title: string;
  type: string;
  date: string;
  content: string;
}

export interface PolicyMap {
  id: number;
  name: string;
  type: string;
  relations: Array<{
    target: number;
    weight: number;
  }>;
}

export class ToolsService {
  private static instance: ToolsService;
  private baseUrl = '/api/tools';

  private constructor() {}

  public static getInstance(): ToolsService {
    if (!ToolsService.instance) {
      ToolsService.instance = new ToolsService();
    }
    return ToolsService.instance;
  }

  // 政策推送设置
  public async setPushSettings(settings: any): Promise<void> {
    try {
      await axios.post(`${this.baseUrl}/push/settings`, settings);
    } catch (error) {
      throw error;
    }
  }

  // 获取政策图谱
  public async getPolicyMap(type: string): Promise<PolicyMap[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/map`, {
        params: { type }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 政策对比
  public async comparePolicies(policyIds: number[]): Promise<any> {
    try {
      const response = await axios.post(`${this.baseUrl}/compare`, { policyIds });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取政策报告
  public async getPolicyReport(type: string): Promise<PolicyReport> {
    try {
      const response = await axios.get(`${this.baseUrl}/report/${type}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 生成政策分析报告
  public async generateReport(params: any): Promise<string> {
    try {
      const response = await axios.post(`${this.baseUrl}/report/generate`, params);
      return response.data.reportUrl;
    } catch (error) {
      throw error;
    }
  }

  // 获取政策标签
  public async getPolicyTags(): Promise<string[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/tags`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const toolsService = ToolsService.getInstance(); 