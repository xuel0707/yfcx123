<template>
  <div class="policy-push">
    <h2>政策推送</h2>
    
    <!-- 推送设置 -->
    <div class="push-settings">
      <h3>推送设置</h3>
      <div class="settings-form">
        <div class="form-group">
          <label>推送频率</label>
          <select v-model="settings.frequency">
            <option value="daily">每日</option>
            <option value="weekly">每周</option>
            <option value="monthly">每月</option>
          </select>
        </div>

        <div class="form-group">
          <label>关注领域</label>
          <div class="checkbox-group">
            <label v-for="field in fields" :key="field.value">
              <input 
                type="checkbox" 
                v-model="settings.interestedFields" 
                :value="field.value"
              />
              {{ field.label }}
            </label>
          </div>
        </div>

        <div class="form-group">
          <label>推送方式</label>
          <div class="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                v-model="settings.pushMethods" 
                value="email"
              />
              邮件
            </label>
            <label>
              <input 
                type="checkbox" 
                v-model="settings.pushMethods" 
                value="wechat"
              />
              微信
            </label>
          </div>
        </div>

        <button class="save-btn" @click="handleSave">保存设置</button>
      </div>
    </div>

    <!-- 推送历史 -->
    <div class="push-history">
      <h3>推送历史</h3>
      <div class="history-list">
        <div v-for="item in historyList" :key="item.id" class="history-item">
          <div class="item-header">
            <span class="date">{{ item.date }}</span>
            <span :class="['status', item.status]">{{ item.statusText }}</span>
          </div>
          <div class="item-content">
            <h4>{{ item.title }}</h4>
            <p>{{ item.summary }}</p>
          </div>
          <div class="item-footer">
            <a :href="item.link" target="_blank">查看详情</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

interface PushSettings {
  frequency: string;
  interestedFields: string[];
  pushMethods: string[];
}

interface HistoryItem {
  id: string;
  date: string;
  status: string;
  statusText: string;
  title: string;
  summary: string;
  link: string;
}

export default defineComponent({
  name: 'PolicyPush',
  setup() {
    const fields = [
      { value: 'tech', label: '科技创新' },
      { value: 'finance', label: '财税金融' },
      { value: 'talent', label: '人才引进' },
      { value: 'industry', label: '产业发展' }
    ];

    const settings = ref<PushSettings>({
      frequency: 'weekly',
      interestedFields: [],
      pushMethods: []
    });

    const historyList = ref<HistoryItem[]>([
      {
        id: '1',
        date: '2024-01-20',
        status: 'success',
        statusText: '已推送',
        title: '关于支持科技创新的若干政策',
        summary: '为促进科技创新发展，提供研发补贴、设备补助等支持...',
        link: '#'
      }
      // ... 其他历史记录
    ]);

    const handleSave = () => {
      // 实现保存设置的逻辑
      console.log('保存设置:', settings.value);
    };

    return {
      fields,
      settings,
      historyList,
      handleSave
    };
  }
});
</script>

<style scoped>
.policy-push {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.push-settings,
.push-history {
  background: white;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
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

select {
  width: 200px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.save-btn {
  background: #1890ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.save-btn:hover {
  background: #40a9ff;
}

.history-item {
  border: 1px solid #eee;
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 15px;
}

.item-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.status {
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
}

.status.success {
  background: #f6ffed;
  color: #52c41a;
}

.item-content h4 {
  margin: 0 0 10px;
  color: #333;
}

.item-content p {
  color: #666;
  margin: 0;
}

.item-footer {
  margin-top: 10px;
  text-align: right;
}

.item-footer a {
  color: #1890ff;
  text-decoration: none;
}

.item-footer a:hover {
  text-decoration: underline;
}
</style> 