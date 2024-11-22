<template>
  <div class="login-container">
    <h2>欢迎登录</h2>
    <p class="subtitle">登录天策云，开启智能政策服务</p>

    <!-- 登录表单 -->
    <form class="login-form" @submit.prevent="handleSubmit">
      <!-- 用户名/手机号输入框 -->
      <div class="form-group">
        <label>用户名/手机号</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="user" class="input-icon" />
          <input
            type="text"
            v-model="form.username"
            placeholder="请输入用户名或手机号"
            :class="{ 'error': errors.username }"
            @input="validateUsername"
          />
        </div>
        <span class="error-message" v-if="errors.username">{{ errors.username }}</span>
      </div>

      <!-- 密码输入框 -->
      <div class="form-group">
        <label>密码</label>
        <div class="input-wrapper">
          <font-awesome-icon icon="lock" class="input-icon" />
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="form.password"
            placeholder="请输入密码"
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

      <!-- 记住密码和忘记密码 -->
      <div class="form-options">
        <label class="remember-me">
          <input type="checkbox" v-model="form.rememberMe" />
          <span>记住密码</span>
        </label>
        <router-link to="/auth/forgot-password" class="forgot-password">
          忘记密码？
        </router-link>
      </div>

      <!-- 登录按钮 -->
      <button type="submit" class="login-button" :disabled="loading">
        <span v-if="!loading">登录</span>
        <font-awesome-icon v-else icon="spinner" spin />
      </button>

      <!-- 其他登录方式 -->
      <div class="other-login">
        <div class="divider">
          <span>其他登录方式</span>
        </div>
        <div class="social-login">
          <button type="button" class="social-button wechat">
            <font-awesome-icon :icon="['fab', 'weixin']" />
          </button>
          <button type="button" class="social-button alipay">
            <font-awesome-icon :icon="['fab', 'alipay']" />
          </button>
        </div>
      </div>

      <!-- 注册链接 -->
      <div class="register-link">
        还没有账号？
        <router-link to="/auth/register">立即注册</router-link>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAuthStore } from '@/store/auth.store';

export default defineComponent({
  name: 'LoginView',
  setup() {
    const router = useRouter();
    const route = useRoute();
    const authStore = useAuthStore();
    const loading = ref(false);
    const showPassword = ref(false);

    // 表单数据
    const form = reactive({
      username: '',
      password: '',
      rememberMe: false
    });

    // 错误信息
    const errors = reactive({
      username: '',
      password: ''
    });

    // 验证用户名
    const validateUsername = () => {
      if (!form.username) {
        errors.username = '请输入用户名或手机号';
      } else {
        errors.username = '';
      }
    };

    // 验证密码
    const validatePassword = () => {
      if (!form.password) {
        errors.password = '请输入密码';
      } else if (form.password.length < 6) {
        errors.password = '密码长度不能小于6位';
      } else {
        errors.password = '';
      }
    };

    // 提交表单
    const handleSubmit = async () => {
      validateUsername();
      validatePassword();

      if (errors.username || errors.password) {
        return;
      }

      loading.value = true;
      try {
        await authStore.login(form.username, form.password);
        const redirectPath = route.query.redirect as string || '/';
        router.push(redirectPath);
      } catch (error: any) {
        console.error('Login failed:', error);
      } finally {
        loading.value = false;
      }
    };

    return {
      form,
      errors,
      loading,
      showPassword,
      handleSubmit,
      validateUsername,
      validatePassword
    };
  }
});
</script>

<style scoped>
.login-container {
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

.login-form {
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

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  cursor: pointer;
}

.forgot-password {
  font-size: 14px;
  color: #1890ff;
  text-decoration: none;
}

.login-button {
  height: 40px;
  background: #1890ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.login-button:hover {
  background: #40a9ff;
}

.login-button:disabled {
  background: #d9d9d9;
  cursor: not-allowed;
}

.other-login {
  margin-top: 20px;
}

.divider {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #f0f0f0;
}

.divider span {
  padding: 0 16px;
  color: #999;
  font-size: 14px;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-button {
  width: 40px;
  height: 40px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  transition: all 0.3s;
}

.social-button.wechat:hover {
  color: #07c160;
  border-color: #07c160;
}

.social-button.alipay:hover {
  color: #1677ff;
  border-color: #1677ff;
}

.register-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.register-link a {
  color: #1890ff;
  text-decoration: none;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .login-container {
    padding: 20px;
  }
}
</style> 