<template>
  <div class="enterprise-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">查企业</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="enterprise-content">
        <!-- 左侧菜单 -->
        <div class="enterprise-menu">
          <div class="menu-title">查企业</div>
          <ul class="menu-list">
            <li>
              <router-link to="/enterprise/qualification" active-class="active">
                <font-awesome-icon icon="medal" />
                <span>资质荣誉</span>
              </router-link>
            </li>
            <li>
              <router-link to="/enterprise/funding" active-class="active">
                <font-awesome-icon icon="hand-holding-usd" />
                <span>已获资助</span>
              </router-link>
            </li>
            <li>
              <router-link to="/enterprise/patents" active-class="active">
                <font-awesome-icon icon="lightbulb" />
                <span>专利信息</span>
              </router-link>
            </li>
            <li>
              <router-link to="/enterprise/projects" active-class="active">
                <font-awesome-icon icon="project-diagram" />
                <span>项目信息</span>
              </router-link>
            </li>
            <li>
              <router-link to="/enterprise/analysis" active-class="active">
                <font-awesome-icon icon="chart-line" />
                <span>企业分析</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="enterprise-main">
          <!-- 搜索区域 -->
          <div class="search-box">
            <input 
              type="text" 
              class="search-input" 
              placeholder="请输入企业名称、统一社会信用代码..."
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button class="search-button" @click="handleSearch">
              <font-awesome-icon icon="search" />
              <span>搜索</span>
            </button>
          </div>

          <!-- 路由视图 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'EnterpriseLayout',
  setup() {
    const router = useRouter();
    const searchQuery = ref('');

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({
          path: '/enterprise/search',
          query: { q: searchQuery.value }
        });
      }
    };

    return {
      searchQuery,
      handleSearch
    };
  }
});
</script>

<style scoped>
.enterprise-layout {
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

.enterprise-content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.enterprise-menu {
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

.enterprise-main {
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 20px;
}

.search-box {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.search-input {
  flex: 1;
  height: 40px;
  padding: 0 15px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
}

.search-input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  outline: none;
}

.search-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  height: 40px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
}

.search-button:hover {
  background: #40a9ff;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .enterprise-content {
    grid-template-columns: 1fr;
  }

  .enterprise-menu {
    margin-bottom: 20px;
  }

  .search-box {
    flex-direction: column;
  }

  .search-button {
    width: 100%;
  }
}
</style> 