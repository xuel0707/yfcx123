<template>
  <div class="diagnosis-specialized">
    <h2>专精特新评分</h2>
    <div class="score-form">
      <!-- 专业化评分 -->
      <div class="form-section">
        <h3>专业化能力</h3>
        <div class="form-group">
          <label>主营业务收入占比（%）</label>
          <input type="number" v-model="form.mainBusinessRatio" max="100" />
        </div>
        <div class="form-group">
          <label>研发人员占比（%）</label>
          <input type="number" v-model="form.rdStaffRatio" max="100" />
        </div>
      </div>

      <!-- 精细化评分 -->
      <div class="form-section">
        <h3>精细化管理</h3>
        <div class="form-group">
          <label>质量管理体系认证</label>
          <select v-model="form.qualitySystem">
            <option value="none">无</option>
            <option value="iso9001">ISO9001</option>
            <option value="iso14001">ISO14001</option>
            <option value="both">两者都有</option>
          </select>
        </div>
        <div class="form-group">
          <label>标准化体系建设</label>
          <select v-model="form.standardSystem">
            <option value="none">无</option>
            <option value="industry">行业标准</option>
            <option value="national">国家标准</option>
            <option value="international">国际标准</option>
          </select>
        </div>
      </div>

      <!-- 创新能力评分 -->
      <div class="form-section">
        <h3>创新能力</h3>
        <div class="form-group">
          <label>发明专利数量</label>
          <input type="number" v-model="form.patents" />
        </div>
        <div class="form-group">
          <label>研发投入比例（%）</label>
          <input type="number" v-model="form.rdRatio" max="100" />
        </div>
      </div>

      <button class="submit-btn" @click="handleSubmit">开始评分</button>
    </div>

    <!-- 评分结果 -->
    <div v-if="scoreResult" class="score-result">
      <div class="score">
        <h3>总分：{{ scoreResult.total }}</h3>
        <div class="score-detail">
          <p>专业化得分：{{ scoreResult.specializedScore }}</p>
          <p>精细化得分：{{ scoreResult.refinedScore }}</p>
          <p>创新能力得分：{{ scoreResult.innovationScore }}</p>
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
  mainBusinessRatio: number;
  rdStaffRatio: number;
  qualitySystem: string;
  standardSystem: string;
  patents: number;
  rdRatio: number;
}

interface ScoreResult {
  total: number;
  specializedScore: number;
  refinedScore: number;
  innovationScore: number;
  suggestion: string;
}

export default defineComponent({
  name: 'DiagnosisSpecialized',
  setup() {
    const form = ref<ScoreForm>({
      mainBusinessRatio: 0,
      rdStaffRatio: 0,
      qualitySystem: 'none',
      standardSystem: 'none',
      patents: 0,
      rdRatio: 0
    });

    const scoreResult = ref<ScoreResult | null>(null);

    const handleSubmit = () => {
      // 计算专业化得分
      const specializedScore = Math.min(
        (form.value.mainBusinessRatio / 2) + (form.value.rdStaffRatio * 2),
        40
      );

      // 计算精细化得分
      let refinedScore = 0;
      switch (form.value.qualitySystem) {
        case 'both': refinedScore += 15; break;
        case 'iso9001': refinedScore += 10; break;
        case 'iso14001': refinedScore += 10; break;
      }
      switch (form.value.standardSystem) {
        case 'international': refinedScore += 15; break;
        case 'national': refinedScore += 10; break;
        case 'industry': refinedScore += 5; break;
      }

      // 计算创新能力得分
      const innovationScore = Math.min(
        (form.value.patents * 5) + (form.value.rdRatio * 2),
        30
      );

      // 生成结果
      const result: ScoreResult = {
        specializedScore,
        refinedScore,
        innovationScore,
        total: specializedScore + refinedScore + innovationScore,
        suggestion: ''
      };

      // 生成建议
      if (result.total >= 80) {
        result.suggestion = '您的企业具备申报专精特新"小巨人"企业的基本条件。';
      } else if (result.total >= 60) {
        result.suggestion = '建议在创新能力和精细化管理方面进一步提升。';
      } else {
        result.suggestion = '建议加强专业化发展，提升研发投入和管理水平。';
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
/* 复用高企评分的样式 */
</style> 