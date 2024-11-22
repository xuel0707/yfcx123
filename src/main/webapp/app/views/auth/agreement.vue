<template>
  <div class="agreement-container">
    <div class="agreement-header">
      <h2>服务协议</h2>
      <button class="close-button" @click="$emit('close')">
        <font-awesome-icon icon="times" />
      </button>
    </div>

    <div class="agreement-content">
      <h3>一、总则</h3>
      <p>1.1 天策云服务协议（以下简称"本协议"）是由深圳市天策云科技有限公司（以下简称"天策云"）与用户（以下简称"您"）就天策云提供的服务所订立的相关权利义务规范。</p>
      <p>1.2 您在注册成为天策云用户之前，应当仔细阅读本协议，确保对本协议内容的含义及相应的法律后果已充分理解并同意。</p>

      <h3>二、服务内容</h3>
      <p>2.1 天策云为您提供以下服务：</p>
      <ul>
        <li>政策信息查询和匹配服务</li>
        <li>企业诊断分析服务</li>
        <li>政策解读和咨询服务</li>
        <li>其他相关的增值服务</li>
      </ul>

      <h3>三、用户注册</h3>
      <p>3.1 您承诺以下事项：</p>
      <ul>
        <li>提供真实、准确、完整的注册信息</li>
        <li>及时更新注册资料，确保其真实性和有效性</li>
        <li>妥善保管账号和密码，不得将账号转让或出借给他人使用</li>
      </ul>

      <h3>四、用户权利和义务</h3>
      <p>4.1 您享有以下权利：</p>
      <ul>
        <li>使用天策云提供的各项服务</li>
        <li>对服务提出意见和建议</li>
        <li>参与天策云组织的各项活动</li>
      </ul>

      <h3>五、知识产权</h3>
      <p>5.1 天策云平台上的所有内容，包括但不限于文字、图片、数据、分析报告等，均受著作权法和其他知识产权法律法规的保护。</p>

      <h3>六、保密条款</h3>
      <p>6.1 天策云承诺对您的企业信息严格保密，不会向任何第三方泄露。</p>

      <h3>七、免责声明</h3>
      <p>7.1 天策云对以下情况不承担责任：</p>
      <ul>
        <li>因不可抗力导致的服务中断或终止</li>
        <li>因您的原因导致的任何损失</li>
        <li>第三方通过技术手段干扰服务的正常运行</li>
      </ul>

      <h3>八、协议修改</h3>
      <p>8.1 天策云保留随时修改本协议的权利，修改后的协议将在平台上公布。</p>

      <h3>九、法律适用</h3>
      <p>9.1 本协议的订立、执行和解释及争议的解决均应适用中华人民共和国法律。</p>
    </div>

    <div class="agreement-footer">
      <button class="primary-button" @click="$emit('close')">我已阅读并同意</button>
    </div>
  </div>
</template>

<style scoped>
.agreement-container {
  background: white;
  border-radius: 8px;
  max-width: 800px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
}

.agreement-header {
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.agreement-header h2 {
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

.agreement-content {
  padding: 20px;
  overflow-y: auto;
  flex: 1;
}

.agreement-content h3 {
  font-size: 18px;
  color: #333;
  margin: 20px 0 10px;
}

.agreement-content p {
  margin: 10px 0;
  line-height: 1.6;
  color: #666;
}

.agreement-content ul {
  margin: 10px 0;
  padding-left: 20px;
}

.agreement-content li {
  margin: 5px 0;
  color: #666;
}

.agreement-footer {
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
.agreement-content::-webkit-scrollbar {
  width: 6px;
}

.agreement-content::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.agreement-content::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .agreement-container {
    max-width: 100%;
    height: 100vh;
    border-radius: 0;
  }

  .agreement-content {
    padding: 15px;
  }

  .agreement-footer {
    padding: 15px;
  }

  .primary-button {
    width: 100%;
  }
}
</style> 