<template>
  <div class="diagnosis-layout">
    <!-- 面包屑导航 -->
    <nav class="breadcrumb-nav">
      <div class="container">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <router-link to="/">首页</router-link>
          </li>
          <li class="breadcrumb-item active">企业诊断</li>
        </ol>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <div class="container">
      <div class="diagnosis-content">
        <!-- 左侧菜单 -->
        <div class="diagnosis-menu">
          <div class="menu-title">企业诊断</div>
          <ul class="menu-list">
            <li>
              <router-link to="/diagnosis/hightech" active-class="active">
                高企评分
              </router-link>
            </li>
            <li>
              <router-link to="/diagnosis/specialized" active-class="active">
                专精特新评分
              </router-link>
            </li>
            <li>
              <router-link to="/diagnosis/innovation" active-class="active">
                科技型中小企业评分
              </router-link>
            </li>
            <li>
              <router-link to="/diagnosis/unicorn" active-class="active">
                独角兽评分
              </router-link>
            </li>
          </ul>
        </div>

        <!-- 右侧内容 -->
        <div class="diagnosis-main">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.diagnosis-layout {
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

.diagnosis-content {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 20px;
  margin: 20px 0;
}

.diagnosis-menu {
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

.diagnosis-main {
  background: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  padding: 20px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .diagnosis-content {
    grid-template-columns: 1fr;
  }

  .diagnosis-menu {
    margin-bottom: 20px;
  }
}
</style> 