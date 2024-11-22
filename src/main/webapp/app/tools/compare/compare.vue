<template>
  <div class="policy-compare">
    <h2>政策对比</h2>
    
    <!-- 政策选择区域 -->
    <div class="policy-selector">
      <div class="policy-select-box">
        <h3>政策A</h3>
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchA"
            placeholder="请输入政策名称"
          />
          <div v-if="searchResults.length > 0" class="search-results">
            <div 
              v-for="policy in searchResults" 
              :key="policy.id"
              class="result-item"
              @click="selectPolicyA(policy)"
            >
              {{ policy.title }}
            </div>
          </div>
        </div>
        <div v-if="selectedPolicyA" class="selected-policy">
          <h4>{{ selectedPolicyA.title }}</h4>
          <p>{{ selectedPolicyA.summary }}</p>
        </div>
      </div>

      <div class="vs-icon">VS</div>

      <div class="policy-select-box">
        <h3>政策B</h3>
        <div class="search-box">
          <input 
            type="text" 
            v-model="searchB"
            placeholder="请输入政策名称"
          />
          <div v-if="searchResults.length > 0" class="search-results">
            <div 
              v-for="policy in searchResults" 
              :key="policy.id"
              class="result-item"
              @click="selectPolicyB(policy)"
            >
              {{ policy.title }}
            </div>
          </div>
        </div>
        <div v-if="selectedPolicyB" class="selected-policy">
          <h4>{{ selectedPolicyB.title }}</h4>
          <p>{{ selectedPolicyB.summary }}</p>
        </div>
      </div>
    </div>

    <!-- 对比结果 -->
    <div v-if="selectedPolicyA && selectedPolicyB" class="compare-result">
      <h3>对比结果</h3>
      <table class="compare-table">
        <thead>
          <tr>
            <th>对比项</th>
            <th>{{ selectedPolicyA.title }}</th>
            <th>{{ selectedPolicyB.title }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>发布时间</td>
            <td>{{ selectedPolicyA.publishDate }}</td>
            <td>{{ selectedPolicyB.publishDate }}</td>
          </tr>
          <tr>
            <td>政策级别</td>
            <td>{{ selectedPolicyA.level }}</td>
            <td>{{ selectedPolicyB.level }}</td>
          </tr>
          <tr>
            <td>扶持方式</td>
            <td>{{ selectedPolicyA.supportType }}</td>
            <td>{{ selectedPolicyB.supportType }}</td>
          </tr>
          <tr>
            <td>资助金额</td>
            <td>{{ selectedPolicyA.amount }}</td>
            <td>{{ selectedPolicyB.amount }}</td>
          </tr>
          <tr>
            <td>申报条件</td>
            <td>{{ selectedPolicyA.conditions }}</td>
            <td>{{ selectedPolicyB.conditions }}</td>
          </tr>
        </tbody>
      </table>

      <!-- 差异分析 -->
      <div class="difference-analysis">
        <h4>差异分析</h4>
        <ul>
          <li v-for="(diff, index) in differences" :key="index">
            {{ diff }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

interface Policy {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  level: string;
  supportType: string;
  amount: string;
  conditions: string;
}

export default defineComponent({
  name: 'PolicyCompare',
  setup() {
    const searchA = ref('');
    const searchB = ref('');
    const selectedPolicyA = ref<Policy | null>(null);
    const selectedPolicyB = ref<Policy | null>(null);
    const searchResults = ref<Policy[]>([]);
    const differences = ref<string[]>([]);

    // 模拟搜索功能
    watch([searchA, searchB], ([newSearchA, newSearchB]) => {
      // 实现搜索逻辑
      if (newSearchA || newSearchB) {
        searchResults.value = [
          {
            id: '1',
            title: '科技创新补贴政策',
            summary: '支持企业开展研发创新活动...',
            publishDate: '2024-01-15',
            level: '市级',
            supportType: '资金补助',
            amount: '最高100万元',
            conditions: '高新技术企业，研发投入比例不低于3%'
          }
          // ... 其他搜索结果
        ];
      }
    });

    const selectPolicyA = (policy: Policy) => {
      selectedPolicyA.value = policy;
      searchA.value = '';
      analyzeDifferences();
    };

    const selectPolicyB = (policy: Policy) => {
      selectedPolicyB.value = policy;
      searchB.value = '';
      analyzeDifferences();
    };

    const analyzeDifferences = () => {
      if (selectedPolicyA.value && selectedPolicyB.value) {
        differences.value = [
          '政策A的资助金额更高',
          '政策B的申报条件更宽松',
          // ... 其他差异分析
        ];
      }
    };

    return {
      searchA,
      searchB,
      selectedPolicyA,
      selectedPolicyB,
      searchResults,
      differences,
      selectPolicyA,
      selectPolicyB
    };
  }
});
</script>

<style scoped>
.policy-compare {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.policy-selector {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
}

.policy-select-box {
  flex: 1;
  max-width: 45%;
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.vs-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  margin: 40px 20px;
  background: #1890ff;
  color: white;
  font-weight: bold;
  border-radius: 50%;
}

.search-box {
  position: relative;
  margin-bottom: 20px;
}

.search-box input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.search-results {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
}

.result-item {
  padding: 8px 12px;
  cursor: pointer;
  transition: all 0.3s;
}

.result-item:hover {
  background: #f0f0f0;
}

.selected-policy {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
}

.selected-policy h4 {
  margin: 0 0 10px;
  color: #333;
}

.selected-policy p {
  margin: 0;
  color: #666;
}

.compare-result {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.compare-table th,
.compare-table td {
  padding: 12px;
  border: 1px solid #eee;
  text-align: left;
}

.compare-table th {
  background: #f8f9fa;
  font-weight: 500;
}

.difference-analysis {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 4px;
}

.difference-analysis h4 {
  margin: 0 0 10px;
  color: #333;
}

.difference-analysis ul {
  margin: 0;
  padding-left: 20px;
  color: #666;
}
</style> 