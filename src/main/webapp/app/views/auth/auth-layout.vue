<template>
  <div class="auth-layout">
    <!-- Logo -->
    <div class="auth-header">
      <router-link to="/" class="logo-link">
        <img src="/content/images/logo-4.png" alt="天策云" class="logo">
        <span class="brand">天策云</span>
      </router-link>
    </div>

    <!-- 主要内容区域 -->
    <div class="auth-container">
      <div class="auth-content">
        <!-- 左侧介绍 -->
        <div class="auth-intro">
          <h2>欢迎使用天策云</h2>
          <p>智能政策匹配 · 精准企业画像</p>
          <div class="intro-features">
            <div class="feature-item">
              <font-awesome-icon icon="database" />
              <div class="feature-text">
                <h3>海量政策数据</h3>
                <p>覆盖全国各地政策文件</p>
              </div>
            </div>
            <div class="feature-item">
              <font-awesome-icon icon="robot" />
              <div class="feature-text">
                <h3>智能匹配推送</h3>
                <p>精准匹配企业适用政策</p>
              </div>
            </div>
            <div class="feature-item">
              <font-awesome-icon icon="chart-line" />
              <div class="feature-text">
                <h3>企业诊断分析</h3>
                <p>多维度企业能力评估</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧表单 -->
        <div class="auth-form">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <div class="auth-footer">
      <p>版权所有 © 2024 天策云 All Rights Reserved.</p>
      <p>粤ICP备19047291号</p>
    </div>
  </div>
</template>

<style scoped>
.auth-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f0f2f5;
}

.auth-header {
  padding: 20px 0;
  text-align: center;
}

.logo-link {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

.logo {
  height: 40px;
  margin-right: 10px;
}

.brand {
  font-size: 24px;
  font-weight: 600;
  color: #1890ff;
}

.auth-container {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.auth-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  max-width: 1000px;
  width: 100%;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 40px;
}

.auth-intro {
  padding-right: 40px;
  border-right: 1px solid #f0f0f0;
}

.auth-intro h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 10px;
}

.auth-intro > p {
  color: #666;
  font-size: 16px;
  margin-bottom: 40px;
}

.intro-features {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.feature-item .svg-inline--fa {
  font-size: 24px;
  color: #1890ff;
}

.feature-text h3 {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.feature-text p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

.auth-form {
  padding-left: 40px;
}

.auth-footer {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 13px;
}

.auth-footer p {
  margin: 5px 0;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .auth-content {
    grid-template-columns: 1fr;
    padding: 20px;
  }

  .auth-intro {
    padding-right: 0;
    border-right: none;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 20px;
    text-align: center;
  }

  .auth-form {
    padding-left: 0;
    padding-top: 20px;
  }

  .feature-item {
    justify-content: center;
  }
}
</style> 