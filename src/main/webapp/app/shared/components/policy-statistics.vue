<template>
  <div class="policy-statistics">
    <div class="stat-grid">
      <div class="stat-card">
        <div class="stat-icon">
          <font-awesome-icon icon="file-alt" />
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ formatNumber(data.totalPolicies) }}</div>
          <div class="stat-label">收录政策总数</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <font-awesome-icon icon="building" />
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ formatNumber(data.totalDepartments) }}</div>
          <div class="stat-label">发布部门数量</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <font-awesome-icon icon="yuan-sign" />
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ formatAmount(data.totalAmount) }}</div>
          <div class="stat-label">扶持资金总额</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <font-awesome-icon icon="chart-line" />
        </div>
        <div class="stat-info">
          <div class="stat-value">{{ formatNumber(data.monthlyIncrease) }}</div>
          <div class="stat-label">本月新增政策</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface StatisticsData {
  totalPolicies: number;
  totalDepartments: number;
  totalAmount: number;
  monthlyIncrease: number;
}

export default defineComponent({
  name: 'PolicyStatistics',
  props: {
    data: {
      type: Object as PropType<StatisticsData>,
      required: true
    }
  },
  setup() {
    const formatNumber = (num: number): string => {
      return num.toLocaleString();
    };

    const formatAmount = (amount: number): string => {
      return `${(amount / 100000000).toFixed(1)}亿`;
    };

    return {
      formatNumber,
      formatAmount
    };
  }
});
</script>

<style scoped>
.policy-statistics {
  padding: 40px 0;
  background: white;
}

.stat-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.stat-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
  transition: all 0.3s;
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.stat-icon {
  font-size: 32px;
  color: #1890ff;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.stat-label {
  font-size: 14px;
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .stat-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 