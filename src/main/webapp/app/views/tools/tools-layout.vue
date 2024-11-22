<template>
  <div class="tools-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">政策工具</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="tools-content">
        <!-- 左侧菜单 -->
        <div class="tools-menu">
          <div class="menu-title">政策工具</div>
          <ul class="menu-list">
            <li>
              <router-link to="/tools/push" active-class="active">
                政策推送
              </router-link>
            </li>
            <li>
              <router-link to="/tools/map" active-class="active">
                政策图谱
              </router-link>
            </li>
            <li>
              <router-link to="/tools/compare" active-class="active">
                政策对比
              </router-link>
            </li>
            <li>
              <router-link to="/tools/report" active-class="active">
                大数据报告
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="tools-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tools-layout {
  background: #f0f2f5;
  min-height: calc(100vh - 153px);
}

.breadcrumb-nav {
  background: white;
  padding: 12px 0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
}

.breadcrumb {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
  content: '/';
  margin: 0 8px;
  color: #999;
}

.breadcrumb-item a {
  color: #666;
  text-decoration: none;
}

.breadcrumb-item.active {
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.tools-content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.tools-menu {
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
  display: block;
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

.tools-main {
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 20px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .tools-content {
    grid-template-columns: 1fr;
  }

  .tools-menu {
    margin-bottom: 20px;
  }
}
</style> 