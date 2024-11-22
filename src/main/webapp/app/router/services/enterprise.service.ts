import axios from 'axios';

export interface Enterprise {
  id: number;
  name: string;
  type: string;
  qualifications: string[];
  funding: number;
}

export class EnterpriseService {
  private static instance: EnterpriseService;
  private baseUrl = '/api/enterprises';

  private constructor() {}

  public static getInstance(): EnterpriseService {
    if (!EnterpriseService.instance) {
      EnterpriseService.instance = new EnterpriseService();
    }
    return EnterpriseService.instance;
  }

  public async getQualifications(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/qualifications`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getFunding(): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/funding`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async getDiagnosis(type: string): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/diagnosis/${type}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  public async matchPolicies(enterpriseId: number): Promise<any> {
    try {
      const response = await axios.get(`${this.baseUrl}/${enterpriseId}/match-policies`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const enterpriseService = EnterpriseService.getInstance(); 