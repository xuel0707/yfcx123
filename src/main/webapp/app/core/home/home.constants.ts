import { SearchType, PolicyCategory } from './home.types';

// 搜索类型配置
export const SEARCH_TYPES: SearchType[] = [
  { id: 'all', name: '全文搜索', placeholder: '请输入关键词搜索政策...' },
  { id: 'title', name: '标题搜索', placeholder: '请输入政策标题关键词...' },
  { id: 'content', name: '正文搜索', placeholder: '请输入政策内容关键词...' },
  { id: 'department', name: '部门搜索', placeholder: '请输入发布部门名称...' }
];

// 政策分类配置
export const POLICY_CATEGORIES: PolicyCategory[] = [
  {
    id: 'funding',
    name: '资金扶持',
    icon: 'hand-holding-usd',
    count: 12580,
    description: '各类补贴资助、专项资金'
  },
  {
    id: 'tax',
    name: '税收优惠',
    icon: 'file-invoice-dollar', 
    count: 8426,
    description: '税收减免、税收优惠'
  },
  {
    id: 'innovation',
    name: '创新支持',
    icon: 'lightbulb',
    count: 6352,
    description: '研发支持、成果转化'
  },
  {
    id: 'talent',
    name: '人才政策',
    icon: 'user-tie',
    count: 5890,
    description: '人才引进、培养资助'
  },
  {
    id: 'industry',
    name: '产业政策',
    icon: 'industry',
    count: 9654,
    description: '产业发展、转型升级'
  },
  {
    id: 'platform',
    name: '平台建设',
    icon: 'cubes',
    count: 3245,
    description: '公共平台、服务体系'
  }
];

// 默认统计数据
export const DEFAULT_STATISTICS = {
  totalPolicies: '0',
  totalAmount: '0',
  totalEnterprises: '0',
  monthlyIncrease: '0'
};

// 热门搜索关键词
export const DEFAULT_HOT_KEYWORDS = [
  '高新技术企业',
  '研发费用加计扣除',
  '专精特新',
  '科技创新',
  '人才引进'
]; 