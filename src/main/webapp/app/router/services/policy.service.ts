import axios from 'axios';

export class PolicyService {
  private static instance: PolicyService;
  private baseUrl = '/api/policies';

  private constructor() {}

  public static getInstance(): PolicyService {
    if (!PolicyService.instance) {
      PolicyService.instance = new PolicyService();
    }
    return PolicyService.instance;
  }

  public async searchPolicies(query: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/search`, {
        params: { q: query }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getNotices(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/notices`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getAnnouncements(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/announcements`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getInterpretations(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/interpretations`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getRecommendedPolicies(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/recommended`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const policyService = PolicyService.getInstance(); 