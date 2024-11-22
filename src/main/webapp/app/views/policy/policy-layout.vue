<template>
  <div class="policy-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">查政策</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="policy-content">
        <!-- 左侧菜单 -->
        <div class="policy-menu">
          <div class="menu-title">查政策</div>
          <ul class="menu-list">
            <li>
              <router-link to="/policy/original" active-class="active">
                <font-awesome-icon icon="file-alt" />
                <span>政策原文</span>
              </router-link>
            </li>
            <li>
              <router-link to="/policy/projects" active-class="active">
                <font-awesome-icon icon="project-diagram" />
                <span>政策项目</span>
              </router-link>
            </li>
            <li>
              <router-link to="/policy/departments" active-class="active">
                <font-awesome-icon icon="building" />
                <span>发布部门</span>
              </router-link>
            </li>
            <li>
              <router-link to="/policy/regions" active-class="active">
                <font-awesome-icon icon="map-marker-alt" />
                <span>地区政策</span>
              </router-link>
            </li>
            <li>
              <router-link to="/policy/industries" active-class="active">
                <font-awesome-icon icon="industry" />
                <span>行业政策</span>
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="policy-main">
          <!-- 搜索区域 -->
          <div class="search-box">
            <input 
              type="text" 
              class="search-input" 
              placeholder="请输入政策关键词..."
              v-model="searchQuery"
              @keyup.enter="handleSearch"
            />
            <button class="search-button" @click="handleSearch">
              <font-awesome-icon icon="search" />
              <span>搜索</span>
            </button>
          </div>

          <!-- 筛选条件 -->
          <div class="filter-section">
            <div class="filter-item">
              <span class="filter-label">发布时间：</span>
              <div class="filter-options">
                <a href="#" 
                  v-for="option in timeOptions" 
                  :key="option.value"
                  :class="{ active: selectedTime === option.value }"
                  @click.prevent="selectedTime = option.value"
                >
                  {{ option.label }}
                </a>
              </div>
            </div>
            <div class="filter-item">
              <span class="filter-label">政策级别：</span>
              <div class="filter-options">
                <a href="#" 
                  v-for="option in levelOptions" 
                  :key="option.value"
                  :class="{ active: selectedLevel === option.value }"
                  @click.prevent="selectedLevel = option.value"
                >
                  {{ option.label }}
                </a>
              </div>
            </div>
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
  name: 'PolicyLayout',
  setup() {
    const router = useRouter();
    const searchQuery = ref('');
    const selectedTime = ref('all');
    const selectedLevel = ref('all');

    const timeOptions = [
      { label: '全部', value: 'all' },
      { label: '最近一周', value: 'week' },
      { label: '最近一月', value: 'month' },
      { label: '最近三月', value: 'quarter' },
      { label: '最近一年', value: 'year' }
    ];

    const levelOptions = [
      { label: '全部', value: 'all' },
      { label: '国家级', value: 'national' },
      { label: '省级', value: 'provincial' },
      { label: '市级', value: 'city' },
      { label: '区级', value: 'district' }
    ];

    const handleSearch = () => {
      if (searchQuery.value.trim()) {
        router.push({
          path: '/policy/search',
          query: { 
            q: searchQuery.value,
            time: selectedTime.value,
            level: selectedLevel.value
          }
        });
      }
    };

    return {
      searchQuery,
      selectedTime,
      selectedLevel,
      timeOptions,
      levelOptions,
      handleSearch
    };
  }
});
</script>

<style scoped>
.policy-layout {
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

.policy-content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.policy-menu {
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

.policy-main {
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

.filter-section {
  border-top: 1px solid #f0f0f0;
  padding-top: 20px;
}

.filter-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.filter-label {
  width: 80px;
  color: #666;
  font-size: 14px;
}

.filter-options {
  flex: 1;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.filter-options a {
  color: #666;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s;
}

.filter-options a:hover,
.filter-options a.active {
  color: #1890ff;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .policy-content {
    grid-template-columns: 1fr;
  }

  .policy-menu {
    margin-bottom: 20px;
  }

  .search-box {
    flex-direction: column;
  }

  .search-button {
    width: 100%;
  }

  .filter-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .filter-label {
    width: auto;
  }
}
</style> 