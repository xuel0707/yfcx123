<template>
  <div class="business-solution">
    <h2>解决方案</h2>

    <!-- 解决方案概览 -->
    <div class="solution-overview">
      <div class="solution-card" v-for="solution in solutions" :key="solution.id">
        <div class="card-icon">
          <font-awesome-icon :icon="solution.icon" />
        </div>
        <h3>{{ solution.title }}</h3>
        <p>{{ solution.description }}</p>
        <button class="detail-btn" @click="showDetail(solution)">了解详情</button>
      </div>
    </div>

    <!-- 方案特点 -->
    <div class="features-section">
      <h3>方案特点</h3>
      <div class="features-grid">
        <div class="feature-item" v-for="feature in features" :key="feature.id">
          <div class="feature-icon">
            <font-awesome-icon :icon="feature.icon" />
          </div>
          <h4>{{ feature.title }}</h4>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- 合作案例 -->
    <div class="cases-section">
      <h3>合作案例</h3>
      <div class="case-list">
        <div class="case-item" v-for="case_ in cases" :key="case_.id">
          <div class="case-image">
            <img :src="case_.image" :alt="case_.title">
          </div>
          <div class="case-content">
            <h4>{{ case_.title }}</h4>
            <p>{{ case_.description }}</p>
            <div class="case-stats">
              <div class="stat-item">
                <span class="label">服务时长</span>
                <span class="value">{{ case_.duration }}</span>
              </div>
              <div class="stat-item">
                <span class="label">成功率</span>
                <span class="value">{{ case_.successRate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 联系我们 -->
    <div class="contact-section">
      <h3>联系我们</h3>
      <div class="contact-form">
        <div class="form-group">
          <label>企业名称</label>
          <input type="text" v-model="contactForm.company">
        </div>
        <div class="form-group">
          <label>联系人</label>
          <input type="text" v-model="contactForm.name">
        </div>
        <div class="form-group">
          <label>联系电话</label>
          <input type="tel" v-model="contactForm.phone">
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" v-model="contactForm.email">
        </div>
        <div class="form-group">
          <label>需求描述</label>
          <textarea v-model="contactForm.description"></textarea>
        </div>
        <button class="submit-btn" @click="handleSubmit">提交需求</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface Solution {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
}

interface Case {
  id: string;
  image: string;
  title: string;
  description: string;
  duration: string;
  successRate: string;
}

interface ContactForm {
  company: string;
  name: string;
  phone: string;
  email: string;
  description: string;
}

export default defineComponent({
  name: 'BusinessSolution',
  setup() {
    const solutions = ref<Solution[]>([
      {
        id: '1',
        icon: 'chart-line',
        title: '政策诊断方案',
        description: '基于大数据分析，为企业提供精准的政策匹配诊断服务'
      },
      {
        id: '2',
        icon: 'file-contract',
        title: '政策申报方案',
        description: '提供全流程的政策申报服务，提高申报成功率'
      },
      {
        id: '3',
        icon: 'users',
        title: '企业咨询方案',
        description: '专业顾问团队提供一对一的企业发展咨询服务'
      }
    ]);

    const features = ref<Feature[]>([
      {
        id: '1',
        icon: 'bullseye',
        title: '精准匹配',
        description: '利用AI算法，实现政策与企业需求的精准匹配'
      }
      // ... 其他特点
    ]);

    const cases = ref<Case[]>([
      {
        id: '1',
        image: '/content/images/case1.jpg',
        title: '某科技企业高企认定',
        description: '协助企业成功获得高新技术企业认定',
        duration: '3个月',
        successRate: '98%'
      }
      // ... 其他案例
    ]);

    const contactForm = ref<ContactForm>({
      company: '',
      name: '',
      phone: '',
      email: '',
      description: ''
    });

    const showDetail = (solution: Solution) => {
      // 实现查看详情逻辑
      console.log('查看方案详情:', solution.title);
    };

    const handleSubmit = () => {
      // 实现表单提交逻辑
      console.log('提交需求:', contactForm.value);
    };

    return {
      solutions,
      features,
      cases,
      contactForm,
      showDetail,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.business-solution {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.solution-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.solution-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s;
}

.solution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 40px;
  color: #1890ff;
  margin-bottom: 20px;
}

.detail-btn {
  background: #1890ff;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.detail-btn:hover {
  background: #40a9ff;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.feature-item {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.feature-icon {
  font-size: 30px;
  color: #1890ff;
  margin-bottom: 15px;
}

.case-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

.case-item {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.case-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.case-content {
  padding: 20px;
}

.case-stats {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.stat-item {
  text-align: center;
}

.stat-item .label {
  color: #666;
  font-size: 14px;
}

.stat-item .value {
  display: block;
  color: #1890ff;
  font-weight: bold;
  margin-top: 5px;
}

.contact-form {
  background: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-group textarea {
  height: 120px;
  resize: vertical;
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

@media (max-width: 768px) {
  .solution-overview,
  .features-grid,
  .case-list {
    grid-template-columns: 1fr;
  }
}
</style> 