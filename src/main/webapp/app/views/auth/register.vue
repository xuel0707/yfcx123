<template>
  <div class="register-container">
    <h2>企业注册</h2>
    <p class="subtitle">注册天策云，享受智能政策服务</p>

    <!-- 注册表单 -->
    <form class="register-form" @submit.prevent="handleSubmit">
      <!-- 企业名称 -->
      <div class="form-group">
        <label>企业名称</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="building" class="input-icon" />
          <input
            type="text"
            v-model="form.companyName"
            placeholder="请输入企业名称"
            :class="{ 'error': errors.companyName }"
            @input="validateCompanyName"
          />
        </div>
        <span class="error-message" v-if="errors.companyName">{{ errors.companyName }}</span>
      </div>

      <!-- 统一社会信用代码 -->
      <div class="form-group">
        <label>统一社会信用代码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="id-card" class="input-icon" />
          <input
            type="text"
            v-model="form.creditCode"
            placeholder="请输入统一社会信用代码"
            :class="{ 'error': errors.creditCode }"
            @input="validateCreditCode"
          />
        </div>
        <span class="error-message" v-if="errors.creditCode">{{ errors.creditCode }}</span>
      </div>

      <!-- 联系人姓名 -->
      <div class="form-group">
        <label>联系人姓名</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="user" class="input-icon" />
          <input
            type="text"
            v-model="form.contactName"
            placeholder="请输入联系人姓名"
            :class="{ 'error': errors.contactName }"
            @input="validateContactName"
          />
        </div>
        <span class="error-message" v-if="errors.contactName">{{ errors.contactName }}</span>
      </div>

      <!-- 手机号 -->
      <div class="form-group">
        <label>手机号</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="mobile-alt" class="input-icon" />
          <input
            type="tel"
            v-model="form.phone"
            placeholder="请输入手机号"
            :class="{ 'error': errors.phone }"
            @input="validatePhone"
          />
          <button 
            type="button" 
            class="verify-code-button"
            :disabled="countdown > 0 || !form.phone"
            @click="sendVerifyCode"
          >
            {{ countdown > 0 ? `${countdown}s后重新获取` : '获取验证码' }}
          </button>
        </div>
        <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>
      </div>

      <!-- 验证码 -->
      <div class="form-group">
        <label>验证码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="key" class="input-icon" />
          <input
            type="text"
            v-model="form.verifyCode"
            placeholder="请输入验证码"
            :class="{ 'error': errors.verifyCode }"
            @input="validateVerifyCode"
          />
        </div>
        <span class="error-message" v-if="errors.verifyCode">{{ errors.verifyCode }}</span>
      </div>

      <!-- 密码 -->
      <div class="form-group">
        <label>密码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="lock" class="input-icon" />
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            placeholder="请设置登录密码"
            :class="{ 'error': errors.password }"
            @input="validatePassword"
          />
          <font-awesome-icon
            :icon="showPassword ? 'eye-slash' : 'eye'"
            class="toggle-password"
            @click="showPassword = !showPassword"
          />
        </div>
        <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
      </div>

      <!-- 确认密码 -->
      <div class="form-group">
        <label>确认密码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="lock" class="input-icon" />
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="form.confirmPassword"
            placeholder="请再次输入密码"
            :class="{ 'error': errors.confirmPassword }"
            @input="validateConfirmPassword"
          />
          <font-awesome-icon
            :icon="showConfirmPassword ? 'eye-slash' : 'eye'"
            class="toggle-password"
            @click="showConfirmPassword = !showConfirmPassword"
          />
        </div>
        <span class="error-message" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</span>
      </div>

      <!-- 服务协议 -->
      <div class="agreement">
        <label class="checkbox-label">
          <input type="checkbox" v-model="form.agreement" />
          <span>我已阅读并同意</span>
        </label>
        <a href="#" @click.prevent="showAgreement">《服务协议》</a>
        <span>和</span>
        <a href="#" @click.prevent="showPrivacy">《隐私政策》</a>
      </div>

      <!-- 注册按钮 -->
      <button type="submit" class="register-button" :disabled="loading || !form.agreement">
        <span v-if="!loading">立即注册</span>
        <font-awesome-icon v-else icon="spinner" spin />
      </button>

      <!-- 登录链接 -->
      <div class="login-link">
        已有账号？
        <router-link to="/auth/login">立即登录</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'RegisterView',
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const countdown = ref(0);

    // 表单数据
    const form = reactive({
      companyName: '',
      creditCode: '',
      contactName: '',
      phone: '',
      verifyCode: '',
      password: '',
      confirmPassword: '',
      agreement: false
    });

    // 错误信息
    const errors = reactive({
      companyName: '',
      creditCode: '',
      contactName: '',
      phone: '',
      verifyCode: '',
      password: '',
      confirmPassword: ''
    });

    // 验证企业名称
    const validateCompanyName = () => {
      if (!form.companyName) {
        errors.companyName = '请输入企业名称';
      } else {
        errors.companyName = '';
      }
    };

    // 验证统一社会信用代码
    const validateCreditCode = () => {
      if (!form.creditCode) {
        errors.creditCode = '请输入统一社会信用代码';
      } else if (!/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/.test(form.creditCode)) {
        errors.creditCode = '请输入正确的统一社会信用代码';
      } else {
        errors.creditCode = '';
      }
    };

    // 验证联系人姓名
    const validateContactName = () => {
      if (!form.contactName) {
        errors.contactName = '请输入联系人姓名';
      } else {
        errors.contactName = '';
      }
    };

    // 验证手机号
    const validatePhone = () => {
      if (!form.phone) {
        errors.phone = '请输入手机号';
      } else if (!/^1[3-9]\d{9}$/.test(form.phone)) {
        errors.phone = '请输入正确��手机号';
      } else {
        errors.phone = '';
      }
    };

    // 验证验证码
    const validateVerifyCode = () => {
      if (!form.verifyCode) {
        errors.verifyCode = '请输入验证码';
      } else if (!/^\d{6}$/.test(form.verifyCode)) {
        errors.verifyCode = '请输入6位数字验证码';
      } else {
        errors.verifyCode = '';
      }
    };

    // 验证密码
    const validatePassword = () => {
      if (!form.password) {
        errors.password = '请设置登录密码';
      } else if (form.password.length < 6) {
        errors.password = '密码长度不能小于6位';
      } else {
        errors.password = '';
      }
      // 同时验证确认密码
      if (form.confirmPassword) {
        validateConfirmPassword();
      }
    };

    // 验证确认密码
    const validateConfirmPassword = () => {
      if (!form.confirmPassword) {
        errors.confirmPassword = '请再次输入密码';
      } else if (form.confirmPassword !== form.password) {
        errors.confirmPassword = '两次输入的密码不一致';
      } else {
        errors.confirmPassword = '';
      }
    };

    // 发送验证码
    const sendVerifyCode = async () => {
      validatePhone();
      if (errors.phone) return;

      countdown.value = 60;
      const timer = setInterval(() => {
        countdown.value--;
        if (countdown.value === 0) {
          clearInterval(timer);
        }
      }, 1000);

      try {
        // TODO: 调用发送验证码接口
      } catch (error) {
        console.error('Send verify code failed:', error);
      }
    };

    // 显示服务协议
    const showAgreement = () => {
      // TODO: 显示服务协议弹窗
    };

    // 显示隐私政策
    const showPrivacy = () => {
      // TODO: 显示隐私政策弹窗
    };

    // 提交表单
    const handleSubmit = async () => {
      validateCompanyName();
      validateCreditCode();
      validateContactName();
      validatePhone();
      validateVerifyCode();
      validatePassword();
      validateConfirmPassword();

      if (Object.values(errors).some(error => error)) {
        return;
      }

      loading.value = true;
      try {
        // TODO: 调用注册接口
        router.push('/auth/login');
      } catch (error) {
        console.error('Register failed:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      form,
      errors,
      loading,
      showPassword,
      showConfirmPassword,
      countdown,
      validateCompanyName,
      validateCreditCode,
      validateContactName,
      validatePhone,
      validateVerifyCode,
      validatePassword,
      validateConfirmPassword,
      sendVerifyCode,
      showAgreement,
      showPrivacy,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.register-container {
  padding: 40px;
  max-width: 500px;
}

h2 {
  margin: 0;
  font-size: 24px;
  color: #333;
  text-align: center;
}

.subtitle {
  margin: 10px 0 30px;
  color: #666;
  text-align: center;
  font-size: 14px;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #333;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 12px;
  color: #999;
}

.toggle-password {
  position: absolute;
  right: 12px;
  color: #999;
  cursor: pointer;
}

input {
  width: 100%;
  height: 40px;
  padding: 0 40px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  transition: all 0.3s;
}

input:focus {
  border-color: #1890ff;
  box-shadow: 0 0 0 2px rgba(24,144,255,0.2);
  outline: none;
}

input.error {
  border-color: #ff4d4f;
}

.error-message {
  font-size: 12px;
  color: #ff4d4f;
}

.verify-code-button {
  position: absolute;
  right: 8px;
  height: 32px;
  padding: 0 12px;
  font-size: 14px;
  color: #1890ff;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
}

.verify-code-button:disabled {
  color: #999;
  cursor: not-allowed;
}

.agreement {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  color: #666;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.agreement a {
  color: #1890ff;
  text-decoration: none;
}

.register-button {
  height: 40px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.register-button:hover {
  background: #40a9ff;
}

.register-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #1890ff;
  text-decoration: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .register-container {
    padding: 20px;
  }
}
</style> 