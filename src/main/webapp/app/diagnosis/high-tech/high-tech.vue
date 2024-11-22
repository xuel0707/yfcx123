<template>
  <div class="diagnosis-high-tech">
    <h2>高企评分</h2>
    <div class="score-form">
      <!-- 评分表单 -->
      <div class="form-section">
        <h3>研发投入</h3>
        <div class="form-group">
          <label>研发费用（万元）</label>
          <input type="number" v-model="form.researchCost" />
        </div>
        <div class="form-group">
          <label>营业收入（万元）</label>
          <input type="number" v-model="form.revenue" />
        </div>
      </div>

      <div class="form-section">
        <h3>知识产权</h3>
        <div class="form-group">
          <label>发明专利数量</label>
          <input type="number" v-model="form.patents" />
        </div>
        <div class="form-group">
          <label>软件著作权数量</label>
          <input type="number" v-model="form.copyrights" />
        </div>
      </div>

      <button class="submit-btn" @click="handleSubmit">开始评分</button>
    </div>

    <!-- 评分结果 -->
    <div v-if="scoreResult" class="score-result">
      <div class="score">
        <h3>总分：{{ scoreResult.total }}</h3>
        <div class="score-detail">
          <p>研发投入得分：{{ scoreResult.researchScore }}</p>
          <p>知识产权得分：{{ scoreResult.patentScore }}</p>
        </div>
      </div>
      <div class="suggestion">
        <h3>评估建议</h3>
        <p>{{ scoreResult.suggestion }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ScoreForm {
  researchCost: number;
  revenue: number;
  patents: number;
  copyrights: number;
}

interface ScoreResult {
  total: number;
  researchScore: number;
  patentScore: number;
  suggestion: string;
}

export default defineComponent({
  name: 'DiagnosisHighTech',
  setup() {
    const form = ref<ScoreForm>({
      researchCost: 0,
      revenue: 0,
      patents: 0,
      copyrights: 0
    });

    const scoreResult = ref<ScoreResult | null>(null);

    const handleSubmit = () => {
      // 实现评分逻辑
      const result: ScoreResult = {
        total: 0,
        researchScore: 0,
        patentScore: 0,
        suggestion: ''
      };

      // 计算研发投入得分
      const researchRatio = form.value.researchCost / form.value.revenue;
      result.researchScore = researchRatio >= 0.03 ? 30 : Math.floor(researchRatio * 1000);

      // 计算知识产权得分
      result.patentScore = (form.value.patents * 10) + (form.value.copyrights * 5);

      // 计算总分
      result.total = result.researchScore + result.patentScore;

      // 生成建议
      if (result.total >= 60) {
        result.suggestion = '您的企业具备申报高新技术企业的基本条件。';
      } else {
        result.suggestion = '建议加大研发投入，增加知识产权储备。';
      }

      scoreResult.value = result;
    };

    return {
      form,
      scoreResult,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.diagnosis-high-tech {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.score-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 20px;
}

.form-group {
  margin: 10px 0;
  display: flex;
  align-items: center;
}

.form-group label {
  width: 150px;
  color: #666;
}

.form-group input {
  flex: 1;
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

.score-result {
  margin-top: 20px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.score {
  text-align: center;
  margin-bottom: 20px;
}

.score h3 {
  color: #1890ff;
  font-size: 24px;
}

.score-detail {
  color: #666;
}

.suggestion {
  border-top: 1px solid #eee;
  padding-top: 20px;
}
</style> 