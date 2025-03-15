<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-image style="width: 100%; height: 100%" src="/content/images/register_header.jpg" :fit="fit" />
      </el-header>
      <el-main>
        <el-form :label-position="labelPosition" label-width="auto" :model="formLabelAlign">
          <span class="common-title">找回密码</span>
          <el-divider class="thick-divider" />

          <el-form-item label="用户账号" :label-position="itemLabelPosition">
            <input v-model="username" placeholder="请输入账号" style="width: 550px" />
          </el-form-item>
          <el-form-item label="手机号码" :label-position="itemLabelPosition">
            <input v-model="mobileNumber" @input="validateMobile" placeholder="请输入手机号码" style="width: 550px" />
          </el-form-item>
          <el-form-item label="短信验证码" :label-position="itemLabelPosition">
            <input v-model="smsCode" placeholder="请输入短信验证码" style="width: 450px" />
            <el-button type="primary" :disabled="!isValidMobile || isCounting" @click="sendCode">
              {{ countdown > 0 ? `${countdown}秒后重试` : '获取验证码' }}
            </el-button>
          </el-form-item>

          <el-form-item label="新密码" :label-position="itemLabelPosition">
            <input v-model="password" type="password" placeholder="请输入密码" style="width: 550px" />
          </el-form-item>

          <el-form-item label="确认新密码" :label-position="itemLabelPosition">
            <input v-model="rpassword" type="password" placeholder="确认密码" style="width: 550px" />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="onSubmit">修改密码</el-button>
            <el-button @click="goToLogin">返回登录</el-button>
          </el-form-item>
        </el-form>
      </el-main>
      <el-footer>
        <div id="footer" class="footer">
          <p></p>
          <p></p>
          <p>版权所有©2024-2025 深圳远方创新数据咨询有限公司</p>
          <p>
            全国营销与客服热线：0755-27960108 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            技术支持：深圳远方创新数据咨询有限公司问题反馈或意见
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts" src="./forget-pwd.component.ts"></script>

<style scoped>
.common-title {
  font-size: 18px;
  font-weight: bold;
}

.thick-divider {
  border-top-width: 2px; /* 修改线条的宽度 */
  width: 66.6%;
  border-color: #0000cd; /* 修改线条的颜色 */
}

.footer {
  background-color: #353d47;
  border-top: 2px solid #efeb09;
  height: 80px;
  text-align: center; /* 使内容居中 */
  color: white; /* 设置字体颜色为白色 */
  bottom: 0; /* 底部对齐 */
  width: 100%; /* 宽度为100% */
}

.footer p {
  color: white; /* 确保段落文本也是白色 */
  line-height: 0.5em; /* 设置行距为1em */
  font-size: 12px;
}
</style>
