<template>
  <div class="dashboard-container">
    <!-- 用户信息卡片 -->
    <div class="user-card">
      <div class="user-info">
        <div class="avatar">
          <font-awesome-icon icon="user-circle" size="3x" />
        </div>
        <div class="info">
          <h3 class="username">{{ userInfo.username }}</h3>
          <p class="company">{{ userInfo.company }}</p>
          <div class="member-type">
            <span class="badge">{{ userInfo.memberType }}</span>
            <span class="expire-date">有效期至：{{ userInfo.expireDate }}</span>
          </div>
        </div>
      </div>
      <div class="user-stats">
        <div class="stat-item">
          <div class="stat-value">{{ userInfo.points }}</div>
          <div class="stat-label">积分</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ userInfo.matchCount }}</div>
          <div class="stat-label">匹配次数</div>
        </div>
        <div class="stat-item">
          <div class="stat-value">{{ userInfo.favoriteCount }}</div>
          <div class="stat-label">收藏政策</div>
        </div>
      </div>
    </div>

    <!-- 快捷功能 -->
    <div class="quick-actions">
      <div v-for="action in quickActions" 
           :key="action.id" 
           class="action-card"
           @click="handleActionClick(action)">
        <div class="action-icon">
          <font-awesome-icon :icon="action.icon" />
        </div>
        <div class="action-info">
          <h4>{{ action.name }}</h4>
          <p>{{ action.description }}</p>
        </div>
      </div>
    </div>

    <!-- 最近匹配 -->
    <div class="recent-matches">
      <div class="section-header">
        <h3>最近匹配</h3>
        <router-link to="/match/history" class="view-more">
          查看更多
          <font-awesome-icon icon="arrow-right" />
        </router-link>
      </div>
      <div class="matches-list">
        <div v-for="match in recentMatches" 
             :key="match.id" 
             class="match-item">
          <div class="match-info">
            <span class="match-date">{{ match.date }}</span>
            <h4 class="match-title">{{ match.title }}</h4>
            <p class="match-desc">{{ match.description }}</p>
          </div>
          <div class="match-score">
            <div class="score-value">{{ match.score }}%</div>
            <div class="score-label">匹配度</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 订阅政策 -->
    <div class="subscribed-policies">
      <div class="section-header">
        <h3>订阅政策</h3>
        <router-link to="/member/subscriptions" class="view-more">
          查看更多
          <font-awesome-icon icon="arrow-right" />
        </router-link>
      </div>
      <div class="policies-list">
        <div v-for="policy in subscribedPolicies" 
             :key="policy.id" 
             class="policy-item">
          <div class="policy-type">{{ policy.type }}</div>
          <h4 class="policy-title">{{ policy.title }}</h4>
          <div class="policy-meta">
            <span>{{ policy.department }}</span>
            <span>{{ policy.publishDate }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { memberService } from '@/services/member.service';

export default defineComponent({
  name: 'MemberDashboard',
  setup() {
    const router = useRouter();

    // 用户信息
    const userInfo = ref({
      username: '张三',
      company: '深圳市科技创新有限公司',
      memberType: '企业会员',
      expireDate: '2024-12-31',
      points: 1280,
      matchCount: 56,
      favoriteCount: 23
    });

    // 快捷功能
    const quickActions = ref([
      {
        id: 'match',
        name: '政策匹配',
        icon: 'random',
        description: '智能匹配企业适用政策'
      },
      {
        id: 'diagnosis',
        name: '企业诊断',
        icon: 'chart-line',
        description: '多维度企业能力评估'
      },
      {
        id: 'subscribe',
        name: '订阅设置',
        icon: 'bell',
        description: '个性化政策订阅推送'
      },
      {
        id: 'profile',
        name: '企业档案',
        icon: 'building',
        description: '完善企业基本信息'
      }
    ]);

    // 最近匹配
    const recentMatches = ref([
      {
        id: 1,
        date: '2024-03-15',
        title: '高新技术企业认定',
        description: '符合科技型中小企业评价条件，建议申请认定',
        score: 95
      },
      // ... 其他匹配记录
    ]);

    // 订阅政策
    const subscribedPolicies = ref([
      {
        id: 1,
        type: '申报通知',
        title: '关于开展2024年科技创新专项资金申报的通知',
        department: '科技创新局',
        publishDate: '2024-03-14'
      },
      // ... 其他订阅政策
    ]);

    // 处理快捷功能点击
    const handleActionClick = (action: any) => {
      router.push(`/${action.id}`);
    };

    // 初始化数据
    onMounted(async () => {
      try {
        const profile = await memberService.getProfile();
        userInfo.value = profile;
        // TODO: 加载其他数据
      } catch (error) {
        console.error('Failed to load dashboard data:', error);
      }
    });

    return {
      userInfo,
      quickActions,
      recentMatches,
      subscribedPolicies,
      handleActionClick
    };
  }
});
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  display: grid;
  gap: 20px;
}

/* 用户信息卡片样式 */
.user-card {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.user-info {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.avatar {
  color: #1890ff;
}

.info h3 {
  margin: 0 0 8px;
  font-size: 20px;
  color: #333;
}

.info .company {
  margin: 0 0 12px;
  color: #666;
}

.member-type {
  display: flex;
  align-items: center;
  gap: 12px;
}

.badge {
  background: #e6f7ff;
  color: #1890ff;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.expire-date {
  color: #999;
  font-size: 12px;
}

.user-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #f0f0f0;
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
}

.stat-label {
  color: #666;
  font-size: 14px;
}

/* 快捷功能样式 */
.quick-actions {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.action-card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s;
  border: 1px solid #f0f0f0;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  border-color: #1890ff;
}

.action-icon {
  font-size: 24px;
  color: #1890ff;
  margin-bottom: 12px;
}

.action-info h4 {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.action-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

/* 最近匹配和订阅政策样式 */
.recent-matches,
.subscribed-policies {
  background: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.section-header h3 {
  margin: 0;
  font-size: 18px;
  color: #333;
}

.view-more {
  color: #1890ff;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.matches-list,
.policies-list {
  display: grid;
  gap: 16px;
}

.match-item,
.policy-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  transition: all 0.3s;
}

.match-item:hover,
.policy-item:hover {
  border-color: #1890ff;
  background: #f8f9fa;
}

.match-date,
.policy-type {
  font-size: 12px;
  color: #1890ff;
  margin-bottom: 8px;
}

.match-title,
.policy-title {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.match-desc,
.policy-meta {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.match-score {
  text-align: center;
}

.score-value {
  font-size: 24px;
  font-weight: 600;
  color: #52c41a;
}

.score-label {
  font-size: 12px;
  color: #666;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .quick-actions {
    grid-template-columns: repeat(2, 1fr);
  }

  .user-stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .match-item,
  .policy-item {
    flex-direction: column;
    text-align: center;
  }

  .match-score {
    margin-top: 12px;
  }
}
</style> 