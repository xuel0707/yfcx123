<template>
  <div class="specialized-score">
    <h2>专精特新评分</h2>

    <!-- 评分表单 -->
    <div class="score-form">
      <!-- 专业化能力评分 -->
      <div class="form-section">
        <h3>专业化能力评分</h3>
        <div class="form-group">
          <label>主营业务收入（万元）</label>
          <input 
            type="number" 
            v-model="form.mainBusinessIncome"
            placeholder="请输入主营业务收入"
          >
        </div>
        <div class="form-group">
          <label>主营业务收入占比（%）</label>
          <input 
            type="number" 
            v-model="form.mainBusinessRatio"
            placeholder="请输入主营业务收入占比"
            max="100"
          >
        </div>
        <div class="form-group">
          <label>细分市场排名</label>
          <select v-model="form.marketRanking">
            <option value="">请选择</option>
            <option value="top3">前3名</option>
            <option value="top5">前5名</option>
            <option value="top10">前10名</option>
          </select>
        </div>
      </div>

      <!-- 创新能力评分 -->
      <div class="form-section">
        <h3>创新能力评分</h3>
        <div class="form-group">
          <label>研发投入（万元）</label>
          <input 
            type="number" 
            v-model="form.rdInvestment"
            placeholder="请输入研发投入"
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
        <div class="form-group">
          <label>有效专利数量</label>
          <input 
            type="number" 
            v-model="form.patents"
            placeholder="请输入有效专利数量"
          >
        </div>
      </div>

      <!-- 特色评分 -->
      <div class="form-section">
        <h3>特色评分</h3>
        <div class="form-group">
          <label>获得荣誉资质</label>
          <div class="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                v-model="form.qualifications"
                value="highTech"
              > 高新技术企业
            </label>
            <label>
              <input 
                type="checkbox" 
                v-model="form.qualifications"
                value="iso"
              > ISO认证
            </label>
            <label>
              <input 
                type="checkbox" 
                v-model="form.qualifications"
                value="industry"
              > 行业标准制定者
            </label>
          </div>
        </div>
        <div class="form-group">
          <label>品牌影响力</label>
          <select v-model="form.brandInfluence">
            <option value="">请选择</option>
            <option value="international">国际知名</option>
            <option value="national">国内知名</option>
            <option value="regional">区域知名</option>
          </select>
        </div>
      </div>

      <button class="submit-btn" @click="handleSubmit">开始评分</button>
    </div>

    <!-- 评分结果 -->
    <div v-if="scoreResult" class="score-result">
      <div class="total-score">
        <h3>总分：{{ scoreResult.totalScore }}</h3>
        <div class="score-progress">
          <div 
            class="progress-bar" 
            :style="{ width: scoreResult.totalScore + '%' }"
          ></div>
        </div>
      </div>

      <div class="score-details">
        <div class="detail-item">
          <h4>专业化得分</h4>
          <div class="score">{{ scoreResult.specializedScore }}</div>
          <p>{{ scoreResult.specializedComment }}</p>
        </div>
        <div class="detail-item">
          <h4>创新能力得分</h4>
          <div class="score">{{ scoreResult.innovationScore }}</div>
          <p>{{ scoreResult.innovationComment }}</p>
        </div>
        <div class="detail-item">
          <h4>特色得分</h4>
          <div class="score">{{ scoreResult.specialScore }}</div>
          <p>{{ scoreResult.specialComment }}</p>
        </div>
      </div>

      <div class="improvement-suggestions">
        <h3>改进建议</h3>
        <ul>
          <li v-for="(suggestion, index) in scoreResult.suggestions" 
              :key="index"
          >
            {{ suggestion }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface ScoreForm {
  mainBusinessIncome: number;
  mainBusinessRatio: number;
  marketRanking: string;
  rdInvestment: number;
  rdStaff: number;
  patents: number;
  qualifications: string[];
  brandInfluence: string;
}

interface ScoreResult {
  totalScore: number;
  specializedScore: number;
  specializedComment: string;
  innovationScore: number;
  innovationComment: string;
  specialScore: number;
  specialComment: string;
  suggestions: string[];
}

export default defineComponent({
  name: 'SpecializedScore',
  setup() {
    const form = ref<ScoreForm>({
      mainBusinessIncome: 0,
      mainBusinessRatio: 0,
      marketRanking: '',
      rdInvestment: 0,
      rdStaff: 0,
      patents: 0,
      qualifications: [],
      brandInfluence: ''
    });

    const scoreResult = ref<ScoreResult | null>(null);

    const calculateScore = () => {
      // 计算专业化得分
      const specializedScore = Math.min(
        (form.value.mainBusinessRatio / 2) + 
        (form.value.mainBusinessIncome / 1000),
        40
      );

      // 计算创新能力得分
      const innovationScore = Math.min(
        (form.value.rdInvestment / 1000) + 
        (form.value.rdStaff * 2) + 
        (form.value.patents * 5),
        30
      );

      // 计算特色得分
      let specialScore = form.value.qualifications.length * 5;
      switch (form.value.brandInfluence) {
        case 'international': specialScore += 20; break;
        case 'national': specialScore += 15; break;
        case 'regional': specialScore += 10; break;
      }
      specialScore = Math.min(specialScore, 30);

      // 生成评分结果
      return {
        totalScore: specializedScore + innovationScore + specialScore,
        specializedScore,
        specializedComment: getSpecializedComment(specializedScore),
        innovationScore,
        innovationComment: getInnovationComment(innovationScore),
        specialScore,
        specialComment: getSpecialComment(specialScore),
        suggestions: generateSuggestions(specializedScore, innovationScore, specialScore)
      };
    };

    const handleSubmit = () => {
      scoreResult.value = calculateScore();
    };

    // 生成评语和建议的辅助函数
    const getSpecializedComment = (score: number) => {
      if (score >= 35) return '专业化程度非常高';
      if (score >= 25) return '专业化程度较高';
      return '需要进一步提升专业化水平';
    };

    const getInnovationComment = (score: number) => {
      if (score >= 25) return '创新能力突出';
      if (score >= 15) return '创新能力良好';
      return '需要加强创新投入';
    };

    const getSpecialComment = (score: number) => {
      if (score >= 25) return '特色优势明显';
      if (score >= 15) return '具有一定特色';
      return '需要打造特色优势';
    };

    const generateSuggestions = (
      specializedScore: number, 
      innovationScore: number, 
      specialScore: number
    ) => {
      const suggestions: string[] = [];
      
      if (specializedScore < 25) {
        suggestions.push('建议提高主营业务集中度，强化专业化发展方向');
      }
      
      if (innovationScore < 15) {
        suggestions.push('建议加大研发投入，增加研发人员配置');
      }
      
      if (specialScore < 15) {
        suggestions.push('建议积极申请相关资质认证，提升品牌影响力');
      }
      
      return suggestions;
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
.specialized-score {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.score-form {
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

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 5px;
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
  margin-top: 40px;
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.total-score {
  text-align: center;
  margin-bottom: 30px;
}

.total-score h3 {
  font-size: 24px;
  margin-bottom: 15px;
}

.score-progress {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: #1890ff;
  transition: width 0.6s ease;
}

.score-details {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.detail-item {
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 8px;
}

.detail-item h4 {
  margin-bottom: 10px;
  color: #666;
}

.detail-item .score {
  font-size: 24px;
  font-weight: bold;
  color: #1890ff;
  margin-bottom: 10px;
}

.improvement-suggestions {
  background: #f8f9fa;
  padding: 20px;
  border-radius: 8px;
}

.improvement-suggestions ul {
  margin: 0;
  padding-left: 20px;
}

.improvement-suggestions li {
  margin-bottom: 10px;
  color: #666;
}

@media (max-width: 768px) {
  .score-details {
    grid-template-columns: 1fr;
  }
}
</style> 