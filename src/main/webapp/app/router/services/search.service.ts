import axios from 'axios';

export interface SearchFilter {
  region?: string[];
  department?: string[];
  industry?: string[];
  type?: string[];
  startDate?: string;
  endDate?: string;
  fundingRange?: {
    min: number;
    max: number;
  };
}

export interface SearchResult {
  id: number;
  title: string;
  summary: string;
  department: string;
  publishDate: string;
  type: string;
  region: string;
  industry: string[];
  fundingAmount?: number;
  tags: string[];
  matchDegree?: number;
}

export interface SearchResponse {
  content: SearchResult[];
  total: number;
  page: number;
  size: number;
  totalPages: number;
}

export class SearchService {
  private static instance: SearchService;
  private baseUrl = '/api/search';

  private constructor() {}

  public static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService();
    }
    return SearchService.instance;
  }

  // 基础搜索
  public async search(query: string, page: number = 0, size: number = 10): Promise<SearchResponse> {
    try {
      const response = await axios.get(`${this.baseUrl}`, {
        params: { query, page, size }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 高级搜索
  public async advancedSearch(query: string, filters: SearchFilter, page: number = 0, size: number = 10): Promise<SearchResponse> {
    try {
      const response = await axios.post(`${this.baseUrl}/advanced`, {
        query,
        filters,
        page,
        size
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取搜索建议
  public async getSuggestions(keyword: string): Promise<string[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/suggestions`, {
        params: { keyword }
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取热门搜索
  public async getHotSearches(): Promise<string[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/hot`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 获取搜索历史
  public async getSearchHistory(): Promise<string[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/history`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  // 清除搜索历史
  public async clearSearchHistory(): Promise<void> {
    try {
      await axios.delete(`${this.baseUrl}/history`);
    } catch (error) {
      throw error;
    }
  }

  // 获取相关政策推荐
  public async getRelatedPolicies(policyId: number): Promise<SearchResult[]> {
    try {
      const response = await axios.get(`${this.baseUrl}/related/${policyId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export const searchService = SearchService.getInstance(); 