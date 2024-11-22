<template>
  <div class="match-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">政策匹配</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="match-content">
        <!-- 左侧菜单 -->
        <div class="match-menu">
          <div class="menu-title">政策匹配</div>
          <ul class="menu-list">
            <li>
              <router-link to="/match/quick" active-class="active">
                <font-awesome-icon icon="bolt" />
                <span>无感极速匹配</span>
              </router-link>
            </li>
            <li>
              <router-link to="/match/precise" active-class="active">
                <font-awesome-icon icon="bullseye" />
                <span>精准匹配</span>
              </router-link>
            </li>
            <li>
              <router-link to="/match/history" active-class="active">
                <font-awesome-icon icon="history" />
                <span>匹配历史</span>
              </router-link>
            </li>
            <li>
              <router-link to="/match/favorites" active-class="active">
                <font-awesome-icon icon="star" />
                <span>收藏夹</span>
              </router-link>
            </li>
          </ul>

          <!-- 匹配统计 -->
          <div class="match-stats">
            <div class="stat-item">
              <div class="stat-label">今日匹配次数</div>
              <div class="stat-value">{{ stats.todayMatches }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">累计匹配政策</div>
              <div class="stat-value">{{ stats.totalPolicies }}</div>
            </div>
            <div class="stat-item">
              <div class="stat-label">匹配准确率</div>
              <div class="stat-value">{{ stats.accuracy }}%</div>
            </div>
          </div>
        </div>

        <!-- 右侧内容 -->
        <div class="match-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MatchLayout',
  setup() {
    const stats = ref({
      todayMatches: 128,
      totalPolicies: 5642,
      accuracy: 95.8
    });

    return {
      stats
    };
  }
});
</script>

<style scoped>
.match-layout {
  background: #f0f2f5;
  min-height: calc(100vh - 153px);
}

.breadcrumb-nav {
  background: white;
  padding: 12px 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.match-content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.match-menu {
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.menu-title {
  padding: 16px 20px;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
}

.menu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-list li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
}

.menu-list li a:hover,
.menu-list li a.active {
  color: #1890ff;
  background: #e6f7ff;
}

.match-stats {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  margin-top: 20px;
}

.stat-item {
  margin-bottom: 15px;
}

.stat-item:last-child {
  margin-bottom: 0;
}

.stat-label {
  font-size: 13px;
  color: #666;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 20px;
  font-weight: 500;
  color: #1890ff;
}

.match-main {
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 20px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .match-content {
    grid-template-columns: 1fr;
  }

  .match-menu {
    margin-bottom: 20px;
  }

  .match-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .stat-item {
    margin-bottom: 0;
    text-align: center;
  }
}
</style> 