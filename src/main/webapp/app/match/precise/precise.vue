<template>
  <div class="policy-match-precise">
    <h2>精准匹配</h2>

    <!-- 企业信息表单 -->
    <div class="match-form">
      <h3>企业基本信息</h3>
      <div class="form-section">
        <div class="form-group">
          <label>企业名称</label>
          <input 
            type="text" 
            v-model="form.companyName"
            placeholder="请输入企业名称"
          >
        </div>
        <div class="form-group">
          <label>所属行业</label>
          <select v-model="form.industry">
            <option value="">请选择行业</option>
            <option v-for="item in industries" 
                    :key="item.code" 
                    :value="item.code"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>

      <!-- 企业资质 -->
      <div class="form-section">
        <h3>企业资质</h3>
        <div class="form-group">
          <label>企业规模</label>
          <select v-model="form.scale">
            <option value="">请选择规模</option>
            <option value="small">小型企业</option>
            <option value="medium">中型企业</option>
            <option value="large">大型企业</option>
          </select>
        </div>
        <div class="form-group">
          <label>企业类型</label>
          <select v-model="form.type">
            <option value="">请选择类型</option>
            <option value="tech">科技型企业</option>
            <option value="manufacture">制造型企业</option>
            <option value="service">服务型企业</option>
          </select>
        </div>
      </div>

      <!-- 研发情况 -->
      <div class="form-section">
        <h3>研发情况</h3>
        <div class="form-group">
          <label>研发投入（万元）</label>
          <input 
            type="number" 
            v-model="form.rdInvestment"
            placeholder="请输入研发投入金额"
          >
        </div>
        <div class="form-group">
          <label>研发人员数量</label>
          <input 
            type="number" 
            v-model="form.rdStaff"
            placeholder="请输入研发人员数量"
          >
        </div>
      </div>

      <!-- 知识产权 -->
      <div class="form-section">
        <h3>知识产权</h3>
        <div class="form-group">
          <label>发明专利数量</label>
          <input 
            type="number" 
            v-model="form.patents"
            placeholder="请输入发明专利数量"
          >
        </div>
        <div class="form-group">
          <label>软件著作权数量</label>
          <input 
            type="number" 
            v-model="form.copyrights"
            placeholder="请输入软件著作权数量"
          >
        </div>
      </div>

      <button class="submit-btn" @click="handleMatch">开始匹配</button>
    </div>

    <!-- 匹配结果 -->
    <div v-if="matchResults.length > 0" class="match-results">
      <h3>匹配结果</h3>
      <div class="result-list">
        <div v-for="result in matchResults" 
             :key="result.id" 
             class="result-item"
        >
          <div class="result-header">
            <h4>{{ result.title }}</h4>
            <span class="match-rate">匹配度 {{ result.matchRate }}%</span>
          </div>
          <div class="result-content">
            <p>{{ result.summary }}</p>
            <div class="match-points">
              <div v-for="point in result.matchPoints" 
                   :key="point.name"
                   class="point-item"
              >
                <span class="point-label">{{ point.name }}</span>
                <span class="point-value">{{ point.value }}</span>
              </div>
            </div>
          </div>
          <div class="result-footer">
            <button @click="viewDetail(result)">查看详情</button>
            <button @click="startApply(result)">开始申报</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface MatchForm {
  companyName: string;
  industry: string;
  scale: string;
  type: string;
  rdInvestment: number;
  rdStaff: number;
  patents: number;
  copyrights: number;
}

interface MatchPoint {
  name: string;
  value: string;
}

interface MatchResult {
  id: string;
  title: string;
  summary: string;
  matchRate: number;
  matchPoints: MatchPoint[];
}

export default defineComponent({
  name: 'PolicyMatchPrecise',
  setup() {
    const form = ref<MatchForm>({
      companyName: '',
      industry: '',
      scale: '',
      type: '',
      rdInvestment: 0,
      rdStaff: 0,
      patents: 0,
      copyrights: 0
    });

    const industries = ref([
      { code: 'tech', name: '科技创新' },
      { code: 'manufacture', name: '智能制造' },
      { code: 'service', name: '现代服务' }
    ]);

    const matchResults = ref<MatchResult[]>([]);

    const handleMatch = () => {
      // 实现匹配逻辑
      matchResults.value = [
        {
          id: '1',
          title: '科技创新补贴政策',
          summary: '支持企业开展研发创新活动...',
          matchRate: 95,
          matchPoints: [
            { name: '企业规模', value: '符合' },
            { name: '研发投入', value: '达标' },
            { name: '知识产权', value: '优秀' }
          ]
        }
      ];
    };

    const viewDetail = (result: MatchResult) => {
      // 实现查看详情逻辑
    };

    const startApply = (result: MatchResult) => {
      // 实现开始申报逻辑
    };

    return {
      form,
      industries,
      matchResults,
      handleMatch,
      viewDetail,
      startApply
    };
  }
});
</script>

<style scoped>
.policy-match-precise {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.match-form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 30px;
}

.form-section h3 {
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  color: #333;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-btn:hover {
  background: #40a9ff;
}

.match-results {
  margin-top: 40px;
}

.result-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.result-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.match-rate {
  color: #1890ff;
  font-weight: bold;
}

.match-points {
  display: flex;
  gap: 20px;
  margin: 15px 0;
}

.point-item {
  background: #f8f9fa;
  padding: 8px 12px;
  border-radius: 4px;
}

.point-label {
  color: #666;
  margin-right: 8px;
}

.point-value {
  color: #1890ff;
  font-weight: 500;
}

.result-footer {
  display: flex;
  gap: 15px;
  margin-top: 20px;
}

.result-footer button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.result-footer button:first-child {
  background: #f0f0f0;
  color: #333;
}

.result-footer button:last-child {
  background: #1890ff;
  color: white;
}

.result-footer button:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .match-points {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 