<template>
  <div class="settings-container">
    <h2>账号设置</h2>

    <!-- 通知设置 -->
    <div class="settings-section">
      <h3>通知设置</h3>
      <div class="settings-form">
        <div class="form-item">
          <label class="switch">
            <input type="checkbox" v-model="settings.pushNotification">
            <span class="slider"></span>
          </label>
          <span class="setting-label">站内消息通知</span>
        </div>
        <div class="form-item">
          <label class="switch">
            <input type="checkbox" v-model="settings.emailNotification">
            <span class="slider"></span>
          </label>
          <span class="setting-label">邮件通知</span>
        </div>
        <div class="form-item">
          <label class="switch">
            <input type="checkbox" v-model="settings.smsNotification">
            <span class="slider"></span>
          </label>
          <span class="setting-label">短信通知</span>
        </div>
      </div>
    </div>

    <!-- 订阅设置 -->
    <div class="settings-section">
      <h3>订阅设置</h3>
      <div class="settings-form">
        <div class="form-group">
          <label>关注的政策类型</label>
          <div class="checkbox-group">
            <label v-for="type in policyTypes" :key="type.value" class="checkbox-item">
              <input 
                type="checkbox" 
                :value="type.value"
                v-model="settings.policyTypes"
              >
              <span>{{ type.label }}</span>
            </label>
          </div>
        </div>
        <div class="form-group">
          <label>关注的地区</label>
          <div class="checkbox-group">
            <label v-for="region in regions" :key="region.value" class="checkbox-item">
              <input 
                type="checkbox" 
                :value="region.value"
                v-model="settings.regions"
              >
              <span>{{ region.label }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>

    <!-- 安全设置 -->
    <div class="settings-section">
      <h3>安全设置</h3>
      <div class="settings-list">
        <div class="setting-item">
          <div class="setting-info">
            <h4>登录密码</h4>
            <p>建议您定期更换密码，设置安全性高的密码可以使账号更安全</p>
          </div>
          <button class="modify-button" @click="showChangePassword = true">
            修改
          </button>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <h4>手机绑定</h4>
            <p>已绑定：{{ maskPhone(userInfo.phone) }}</p>
          </div>
          <button class="modify-button" @click="showChangePhone = true">
            修改
          </button>
        </div>
        <div class="setting-item">
          <div class="setting-info">
            <h4>邮箱绑定</h4>
            <p>已绑定：{{ maskEmail(userInfo.email) }}</p>
          </div>
          <button class="modify-button" @click="showChangeEmail = true">
            修改
          </button>
        </div>
      </div>
    </div>

    <!-- 保存按钮 -->
    <div class="settings-footer">
      <button class="save-button" @click="handleSave" :disabled="loading">
        <span v-if="!loading">保存设置</span>
        <font-awesome-icon v-else icon="spinner" spin />
      </button>
    </div>

    <!-- 修改密码对话框 -->
    <Dialog 
      v-model="showChangePassword"
      title="修改密码"
      :show-footer="true"
      @confirm="handleChangePassword"
    >
      <div class="dialog-form">
        <div class="form-group">
          <label>当前密码</label>
          <input 
            type="password" 
            v-model="passwordForm.oldPassword"
            placeholder="请输入当前密码"
          >
        </div>
        <div class="form-group">
          <label>新密码</label>
          <input 
            type="password" 
            v-model="passwordForm.newPassword"
            placeholder="请输入新密码"
          >
        </div>
        <div class="form-group">
          <label>确认新密码</label>
          <input 
            type="password" 
            v-model="passwordForm.confirmPassword"
            placeholder="请再次输入新密码"
          >
        </div>
      </div>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted } from 'vue';
import { memberService } from '@/services/member.service';
import Dialog from '@/shared/components/dialog.vue';

export default defineComponent({
  name: 'MemberSettings',
  components: {
    Dialog
  },
  setup() {
    const loading = ref(false);
    const showChangePassword = ref(false);
    const showChangePhone = ref(false);
    const showChangeEmail = ref(false);

    // 用户信息
    const userInfo = reactive({
      phone: '13800138000',
      email: 'example@email.com'
    });

    // 设置表单
    const settings = reactive({
      pushNotification: true,
      emailNotification: true,
      smsNotification: false,
      policyTypes: [],
      regions: []
    });

    // 密码修改表单
    const passwordForm = reactive({
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    });

    // 政策类型选项
    const policyTypes = [
      { label: '资金扶持', value: 'funding' },
      { label: '税收优惠', value: 'tax' },
      { label: '创新支持', value: 'innovation' },
      { label: '人才政策', value: 'talent' }
    ];

    // 地区选项
    const regions = [
      { label: '深圳', value: 'sz' },
      { label: '广州', value: 'gz' },
      { label: '东莞', value: 'dg' },
      { label: '珠海', value: 'zh' }
    ];

    // 掩码处理手机号
    const maskPhone = (phone: string) => {
      return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
    };

    // 掩码处理邮箱
    const maskEmail = (email: string) => {
      const [name, domain] = email.split('@');
      return `${name.charAt(0)}***@${domain}`;
    };

    // 保存设置
    const handleSave = async () => {
      loading.value = true;
      try {
        await memberService.updateSettings(settings);
        // TODO: 显示成功提示
      } catch (error) {
        console.error('Save settings failed:', error);
        // TODO: 显示错误提示
      } finally {
        loading.value = false;
      }
    };

    // 修改密码
    const handleChangePassword = async () => {
      // TODO: 实现密码修改逻辑
    };

    // 初始化数据
    onMounted(async () => {
      try {
        const data = await memberService.getSettings();
        Object.assign(settings, data);
      } catch (error) {
        console.error('Load settings failed:', error);
      }
    });

    return {
      loading,
      settings,
      userInfo,
      policyTypes,
      regions,
      showChangePassword,
      showChangePhone,
      showChangeEmail,
      passwordForm,
      maskPhone,
      maskEmail,
      handleSave,
      handleChangePassword
    };
  }
});
</script>

<style scoped>
.settings-container {
  padding: 20px;
}

h2 {
  margin: 0 0 30px;
  font-size: 24px;
  color: #333;
}

.settings-section {
  background: white;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 20px;
}

h3 {
  margin: 0 0 20px;
  font-size: 18px;
  color: #333;
}

.settings-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.setting-label {
  font-size: 14px;
  color: #666;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-group label {
  font-size: 14px;
  color: #333;
}

.checkbox-group {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.setting-item:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.setting-info h4 {
  margin: 0 0 8px;
  font-size: 16px;
  color: #333;
}

.setting-info p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

.modify-button {
  padding: 6px 16px;
  background: white;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  color: #666;
  cursor: pointer;
  transition: all 0.3s;
}

.modify-button:hover {
  color: #1890ff;
  border-color: #1890ff;
}

.settings-footer {
  margin-top: 30px;
  text-align: center;
}

.save-button {
  padding: 10px 30px;
  background: #1890ff;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.save-button:hover {
  background: #40a9ff;
}

.save-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}

/* 开关样式 */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #1890ff;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* 对话框表单样式 */
.dialog-form {
  padding: 20px;
}

.dialog-form .form-group {
  margin-bottom: 20px;
}

.dialog-form input {
  width: 100%;
  height: 36px;
  padding: 0 12px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
}

.dialog-form input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  outline: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .settings-container {
    padding: 15px;
  }

  .checkbox-group {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 