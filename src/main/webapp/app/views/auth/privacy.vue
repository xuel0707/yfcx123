<template>
  <div class="privacy-container">
    <div class="privacy-header">
      <h2>隐私政策</h2>
      <button class="close-button" @click="$emit('close')">
        <font-awesome-icon icon="times" />
      </button>
    </div>

    <div class="privacy-content">
      <h3>一、信息收集</h3>
      <p>1.1 我们收集的信息类型：</p>
      <ul>
        <li>企业基本信息（企业名称、统一社会信用代码等）</li>
        <li>联系人信息（姓名、手机号、邮箱等）</li>
        <li>账户信息（用户名、密码等）</li>
        <li>使用记录（搜索历史、浏览记录等）</li>
      </ul>

      <h3>二、信息使用</h3>
      <p>2.1 我们使用收集的信息用于：</p>
      <ul>
        <li>提供政策匹配和推送服务</li>
        <li>改进产品功能和用户体验</li>
        <li>发送服务通知和活动信息</li>
        <li>提供客户支持服务</li>
      </ul>

      <h3>三、信息保护</h3>
      <p>3.1 我们采取以下措施保护您的信息：</p>
      <ul>
        <li>数据加密存储和传输</li>
        <li>访问权限控制和审计</li>
        <li>定期安全评估和升级</li>
        <li>员工保密培训和管理</li>
      </ul>

      <h3>四、信息共享</h3>
      <p>4.1 我们不会向第三方出售您的个人信息。</p>
      <p>4.2 在以下情况下，我们可能会共享您的信息：</p>
      <ul>
        <li>获得您的明确授权</li>
        <li>法律法规要求</li>
        <li>保护天策云的合法权益</li>
      </ul>

      <h3>五、Cookie使用</h3>
      <p>5.1 我们使用Cookie来：</p>
      <ul>
        <li>保持您的登录状态</li>
        <li>记住您的偏好设置</li>
        <li>分析网站使用情况</li>
        <li>优化用户体验</li>
      </ul>

      <h3>六、用户权利</h3>
      <p>6.1 您享有以下权利：</p>
      <ul>
        <li>访问和更正您的个人信息</li>
        <li>删除您的账户信息</li>
        <li>撤回授权同意</li>
        <li>投诉举报</li>
      </ul>

      <h3>七、隐私政策更新</h3>
      <p>7.1 我们保留随时更新本隐私政策的权利，更新后的政策将在平台上公布。</p>

      <h3>八、联系我们</h3>
      <p>8.1 如果您对本隐私政策有任何疑问，请通过以下方式联系我们：</p>
      <ul>
        <li>电话：400-004-5577</li>
        <li>邮箱：privacy@tianceyun.com</li>
        <li>地址：深圳市龙华区民治街道新牛社区民治大道234号万科天誉2栋1层101</li>
      </ul>
    </div>

    <div class="privacy-footer">
      <button class="primary-button" @click="$emit('close')">我已阅读并同意</button>
    </div>
  </div>
</template>

<style scoped>
.privacy-container {
  background: white;
  border-radius: 8px;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.privacy-header {
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.privacy-header h2 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 20px;
  color: #999;
  cursor: pointer;
  padding: 4px;
  transition: all 0.3s;
}

.close-button:hover {
  color: #666;
}

.privacy-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.privacy-content h3 {
  font-size: 18px;
  color: #333;
  margin: 20px 0 10px;
}

.privacy-content p {
  margin: 10px 0;
  line-height: 1.6;
  color: #666;
}

.privacy-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.privacy-content li {
  margin: 5px 0;
  color: #666;
}

.privacy-footer {
  padding: 20px;
  border-top: 1px solid #f0f0f0;
  text-align: center;
}

.primary-button {
  background: #1890ff;
  color: white;
  border: none;
  padding: 10px 30px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.primary-button:hover {
  background: #40a9ff;
}

/* 自定义滚动条样式 */
.privacy-content::-webkit-scrollbar {
  width: 6px;
}

.privacy-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.privacy-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .privacy-container {
    max-width: 100%;
    height: 100vh;
    border-radius: 0;
  }

  .privacy-content {
    padding: 15px;
  }

  .privacy-footer {
    padding: 15px;
  }

  .primary-button {
    width: 100%;
  }
}
</style> 