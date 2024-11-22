import { StatisticsData } from './home.types';

// 格式化统计数据
export const formatStatisticsData = (data: any): StatisticsData => {
  return {
    totalPolicies: Number(data.totalPolicies).toLocaleString(),
    totalAmount: `${(Number(data.totalAmount) / 100000000).toFixed(1)}亿`,
    totalEnterprises: `${(Number(data.totalEnterprises) / 10000).toFixed(1)}万`,
    monthlyIncrease: Number(data.monthlyIncrease).toLocaleString()
  };
};

// 防抖函数
export const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null;
  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  };
};

// 格式化日期
export const formatDate = (date: string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

// 截取摘要
export const truncateSummary = (text: string, length: number = 100): string => {
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
}; 