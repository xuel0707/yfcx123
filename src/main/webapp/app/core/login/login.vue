<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <h2 class="login-area-title">远方123研发费管理系统</h2>
        <el-form class="login-form" @submit.prevent="handleLogin">
          <el-form-item>
            <el-input v-model="username" placeholder="请输入账号" prefix-icon="User" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="password" type="password" placeholder="请输入密码" prefix-icon="Lock" />
          </el-form-item>
          <el-form-item>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input v-model="captcha" placeholder="请输入验证码" prefix-icon="Lock" />
              </el-col>
              <el-col :span="12">
                <div class="verification-img">
                  <img 
                    src="/content/images/captcha.png" 
                    alt="加载验证码" 
                    @click="refreshCaptcha" 
                    style="width: 110px; cursor: pointer; display: block"
                  />
                </div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="login-btn" @click="handleLogin">登录</el-button>
            <p class="login-link">
              <router-link to="/register">
                <span>没有账号，立即注册</span>
              </router-link>>
              <router-link to="/forget-pwd">
                <span class="forget-pwd">忘记密码?</span>
              </router-link>
            </p>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts" src="./login.component.ts"></script>

<style scoped>
.common-layout {
  background-image: url('/content/images/login-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-main {
  width: auto;
  height: auto;
  position: absolute;
  top: 18vh;
  right: 8vw;
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-origin: content-box;
  background-size: 53px 53px;
}

.login-area-title {
    margin: 50px;
    font-size: 34px;
    font-weight: bold;
    color: #333;
    text-align: right;
    letter-spacing: 3px;
}

h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}

.login-form {
  margin: 0 60px;
  position: relative;
}

.el-form-item {
    margin-bottom: 15px;
}

.el-input {
  margin-bottom: 20px;
}

.login-btn {
  width: 100%;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.login-link {
  margin-top: 10px;
  text-align: center;
}

.login-link span {
  margin: 0 10px;
  color: #007bff;
  cursor: pointer;
}

.login-link a span {
  font-weight: normal;
}
</style>