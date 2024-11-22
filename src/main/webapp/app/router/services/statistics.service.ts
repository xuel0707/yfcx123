import axios from 'axios';

export interface PolicyStatistics {
  totalPolicies: number;
  totalDocuments: number;
  totalDepartments: number;
  totalEnterprises: number;
  monthlyStats: {
    month: string;
    count: number;
  }[];
}

export interface RegionStatistics {
  region: string;
  policyCount: number;
  enterpriseCount: number;
}

export interface IndustryStatistics {
  industry: string;
  policyCount: number;
  fundingAmount: number;
}

export class StatisticsService {
  private static instance: StatisticsService;
  private baseUrl = '/api/statistics';

  private constructor() {}

  public static getInstance(): StatisticsService {
    if (!StatisticsService.instance) {
      StatisticsService.instance = new StatisticsService();
    }
    return StatisticsService.instance;
  }

  // 获取政策统计数据
  public async getPolicyStatistics(): Promise<PolicyStatistics> {
    try {
      const response = await axios.get(`${this.baseUrl}/policies`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取区域统计数据
  public async getRegionStatistics(): Promise<RegionStatistics[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/regions`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取行业统计数据
  public async getIndustryStatistics(): Promise<IndustryStatistics[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/industries`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取趋势分析数据
  public async getTrendAnalysis(params: {
    startDate: string;
    endDate: string;
    type: string;
  }): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/trends`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取政策匹配统计
  public async getMatchingStatistics(enterpriseId: number): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/matching/${enterpriseId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取资金统计数据
  public async getFundingStatistics(params: {
    year: number;
    region?: string;
    industry?: string;
  }): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/funding`, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取实时数据统计
  public async getRealTimeStatistics(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/realtime`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const statisticsService = StatisticsService.getInstance(); 