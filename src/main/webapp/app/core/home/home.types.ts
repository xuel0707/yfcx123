// 搜索类型定义
export interface SearchType {
  id: string;
  name: string;
  placeholder: string;
}

// 政策分类定义
export interface PolicyCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  description: string;
}

// 统计数据定义
export interface StatisticsData {
  totalPolicies: string;
  totalAmount: string;
  totalEnterprises: string;
  monthlyIncrease: string;
}

// 最新政策定义
export interface LatestPolicy {
  id: number;
  title: string;
  type: string;
  department: string;
  publishDate: string;
  summary: string;
}

// 政策解读定义
export interface PolicyInterpretation {
  id: number;
  title: string;
  author: string;
  date: string;
  summary: string;
  image: string;
}

// 首页状态定义
export interface HomeState {
  searchQuery: string;
  currentSearchType: SearchType;
  showTypeDropdown: boolean;
  loading: {
    policies: boolean;
    statistics: boolean;
    interpretations: boolean;
  };
  latestPolicies: LatestPolicy[];
  interpretations: PolicyInterpretation[];
  statisticsData: StatisticsData;
  hotKeywords: string[];
} 