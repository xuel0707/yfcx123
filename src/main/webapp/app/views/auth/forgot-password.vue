<template>
  <div class="forgot-password-container">
    <h2>找回密码</h2>
    <p class="subtitle">通过手机号验证找回密码</p>

    <!-- 找回密码表单 -->
    <form class="forgot-password-form" @submit.prevent="handleSubmit">
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

      <!-- 新密码 -->
      <div class="form-group">
        <label>新密码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="lock" class="input-icon" />
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            placeholder="请设置新密码"
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

      <!-- 确认新密码 -->
      <div class="form-group">
        <label>确认新密码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="lock" class="input-icon" />
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="form.confirmPassword"
            placeholder="请再次输入新密码"
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

      <!-- 提交按钮 -->
      <button type="submit" class="submit-button" :disabled="loading">
        <span v-if="!loading">重置密码</span>
        <font-awesome-icon v-else icon="spinner" spin />
      </button>

      <!-- 返回登录 -->
      <div class="back-to-login">
        <router-link to="/auth/login">返回登录</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ForgotPasswordView',
  setup() {
    const router = useRouter();
    const loading = ref(false);
    const showPassword = ref(false);
    const showConfirmPassword = ref(false);
    const countdown = ref(0);

    // 表单数据
    const form = reactive({
      phone: '',
      verifyCode: '',
      password: '',
      confirmPassword: ''
    });

    // 错误信息
    const errors = reactive({
      phone: '',
      verifyCode: '',
      password: '',
      confirmPassword: ''
    });

    // 验证手机号
    const validatePhone = () => {
      if (!form.phone) {
        errors.phone = '请输入手机号';
      } else if (!/^1[3-9]\d{9}$/.test(form.phone)) {
        errors.phone = '请输入正确的手机号';
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
        errors.password = '请设置新密码';
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
        errors.confirmPassword = '请再次输入新密码';
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

    // 提交表单
    const handleSubmit = async () => {
      validatePhone();
      validateVerifyCode();
      validatePassword();
      validateConfirmPassword();

      if (Object.values(errors).some(error => error)) {
        return;
      }

      loading.value = true;
      try {
        // TODO: 调用重置密码接口
        router.push('/auth/login');
      } catch (error) {
        console.error('Reset password failed:', error);
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
      validatePhone,
      validateVerifyCode,
      validatePassword,
      validateConfirmPassword,
      sendVerifyCode,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.forgot-password-container {
  padding: 40px;
  max-width: 400px;
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

.forgot-password-form {
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

.submit-button {
  height: 40px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.submit-button:hover {
  background: #40a9ff;
}

.submit-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}

.back-to-login {
  text-align: center;
  font-size: 14px;
}

.back-to-login a {
  color: #1890ff;
  text-decoration: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .forgot-password-container {
    padding: 20px;
  }
}
</style> 