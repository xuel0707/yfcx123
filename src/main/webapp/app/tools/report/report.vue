<template>
  <div class="data-report">
    <h2>政策大数据报告</h2>

    <!-- 报告概览 -->
    <div class="report-overview">
      <div class="overview-card">
        <h4>政策总数</h4>
        <div class="number">{{ statistics.totalPolicies }}</div>
        <div class="trend up">
          <font-awesome-icon icon="arrow-up" />
          {{ statistics.policyGrowth }}%
        </div>
      </div>
      <div class="overview-card">
        <h4>累计资助金额</h4>
        <div class="number">{{ statistics.totalAmount }}亿</div>
        <div class="trend up">
          <font-awesome-icon icon="arrow-up" />
          {{ statistics.amountGrowth }}%
        </div>
      </div>
      <div class="overview-card">
        <h4>受益企业数</h4>
        <div class="number">{{ statistics.totalEnterprises }}</div>
        <div class="trend up">
          <font-awesome-icon icon="arrow-up" />
          {{ statistics.enterpriseGrowth }}%
        </div>
      </div>
    </div>

    <!-- 政策分布 -->
    <div class="distribution-section">
      <h3>政策分布分析</h3>
      <div class="chart-container">
        <div class="chart-box">
          <h4>行业分布</h4>
          <div class="chart" ref="industryChart"></div>
        </div>
        <div class="chart-box">
          <h4>区域分布</h4>
          <div class="chart" ref="regionChart"></div>
        </div>
      </div>
    </div>

    <!-- 政策趋势 -->
    <div class="trend-section">
      <h3>政策趋势分析</h3>
      <div class="chart-container">
        <div class="chart-box full-width">
          <h4>政策发布趋势</h4>
          <div class="chart" ref="trendChart"></div>
        </div>
      </div>
    </div>

    <!-- 热点分析 -->
    <div class="hotspot-section">
      <h3>政策热点分析</h3>
      <div class="tag-cloud">
        <div 
          v-for="tag in hotspots" 
          :key="tag.keyword"
          class="tag"
          :style="{ fontSize: tag.weight + 'px' }"
        >
          {{ tag.keyword }}
        </div>
      </div>
    </div>

    <!-- 报告下载 -->
    <div class="download-section">
      <h3>报告下载</h3>
      <div class="report-list">
        <div v-for="report in reports" :key="report.id" class="report-item">
          <div class="report-info">
            <h4>{{ report.title }}</h4>
            <p>{{ report.description }}</p>
          </div>
          <button class="download-btn" @click="handleDownload(report)">
            <font-awesome-icon icon="download" />
            下载
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import type { EChartsOption } from 'echarts';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from 'echarts/components';
import { PieChart, LineChart, BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  PieChart,
  LineChart,
  BarChart,
  CanvasRenderer
]);

interface Statistics {
  totalPolicies: number;
  policyGrowth: number;
  totalAmount: number;
  amountGrowth: number;
  totalEnterprises: number;
  enterpriseGrowth: number;
}

interface Hotspot {
  keyword: string;
  weight: number;
}

interface Report {
  id: string;
  title: string;
  description: string;
  url: string;
}

export default defineComponent({
  name: 'DataReport',
  setup() {
    const statistics = ref<Statistics>({
      totalPolicies: 5280,
      policyGrowth: 15.8,
      totalAmount: 326.5,
      amountGrowth: 23.4,
      totalEnterprises: 12680,
      enterpriseGrowth: 18.9
    });

    const hotspots = ref<Hotspot[]>([
      { keyword: '科技创新', weight: 24 },
      { keyword: '数字经济', weight: 22 },
      { keyword: '人才引进', weight: 20 },
      { keyword: '绿色发展', weight: 18 },
      { keyword: '智能制造', weight: 16 }
    ]);

    const reports = ref<Report[]>([
      {
        id: '1',
        title: '2024年第一季度政策分析报告',
        description: '详细分析2024年第一季度政策动态和发展趋势',
        url: '#'
      }
    ]);

    const handleDownload = (report: Report) => {
      // 实现下载逻辑
      console.log('下载报告:', report.title);
    };

    const chartInstance = ref<echarts.ECharts | null>(null);

    onMounted(() => {
      const chartDom = document.getElementById('main-chart');
      if (chartDom) {
        chartInstance.value = echarts.init(chartDom);
        const option: EChartsOption = {
          // 图表配置
        };
        chartInstance.value.setOption(option);
      }
    });

    return {
      statistics,
      hotspots,
      reports,
      handleDownload
    };
  }
});
</script>

<style scoped>
.data-report {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.report-overview {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.overview-card {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.overview-card h4 {
  margin: 0 0 10px;
  color: #666;
}

.overview-card .number {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

.trend {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
}

.trend.up {
  color: #52c41a;
}

.trend.down {
  color: #f5222d;
}

.chart-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 40px;
}

.chart-box {
  flex: 1;
  min-width: 300px;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.chart-box.full-width {
  flex: 0 0 100%;
}

.chart {
  height: 300px;
}

.tag-cloud {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  margin-bottom: 40px;
}

.tag {
  color: #1890ff;
  cursor: pointer;
  transition: all 0.3s;
}

.tag:hover {
  color: #40a9ff;
  transform: scale(1.1);
}

.report-list {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.report-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.report-item:last-child {
  border-bottom: none;
}

.report-info h4 {
  margin: 0 0 5px;
  color: #333;
}

.report-info p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.download-btn {
  background: #1890ff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s;
}

.download-btn:hover {
  background: #40a9ff;
}

@media (max-width: 768px) {
  .report-overview {
    grid-template-columns: 1fr;
  }

  .chart-box {
    flex: 0 0 100%;
  }
}
</style> 