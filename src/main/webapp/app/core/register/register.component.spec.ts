import { describe, it, expect, vi, beforeEach } from 'vitest';
import { shallowMount, config } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';
import axios from 'axios';
import register from './register.vue';
import { ElMessage } from 'element-plus';

// 配置全局组件存根
config.global.stubs = {
  'el-image': true,
  'el-header': true,
  'el-main': true,
  'el-footer': true,
  'el-container': true,
  'el-form': true,
  'el-form-item': true,
  'el-input': true,
  'el-button': true,
  'el-checkbox': true,
  'el-cascader': true,
  'el-divider': true
};

// 创建路由实例
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/', name: 'Login', component: { template: '<div>Login</div>' } }
  ]
});

// 模拟 axios 的 POST 请求
vi.mock('axios', () => ({
  post: vi.fn().mockResolvedValue({ data: { status: 'success' } })
}));

describe('Register Component', () => {
  let wrapper: ReturnType<typeof shallowMount>;

  beforeEach(() => {
    wrapper = shallowMount(register, {
      global: {
        plugins: [router],
        mocks: {
          pcaTextArr: [{ value: '110000', label: '北京市' }]
        }
      }
    });
    wrapper.vm.selectedOptions = []; // 初始化 selectedOptions
  });

  it('初始化状态验证', () => {
    expect(wrapper.vm.companyName).toBe('');
    expect(wrapper.vm.socialCreditCode).toBe('');
    expect(wrapper.vm.entityLegalPerson).toBe('');
    expect(wrapper.vm.loginPassword).toBe('');
    expect(wrapper.vm.verifyPassword).toBe('');
    expect(wrapper.vm.detailedAddress).toBe('');
    expect(wrapper.vm.companyContact).toBe('');
    expect(wrapper.vm.mobileNumber).toBe('');
    expect(wrapper.vm.smsCode).toBe('');
    expect(wrapper.vm.isAgreed).toBe(false);
    expect(wrapper.vm.selectedOptions).toEqual([]);
    expect(wrapper.vm.countdown).toBe(0);
    expect(wrapper.vm.isValidMobile).toBe(false);
  });

  it('发送短信验证码', async () => {
    wrapper.vm.mobileNumber = '13800138000';
    wrapper.vm.sendCode();
    expect(wrapper.vm.countdown).toBe(60);
  });

  it('短信验证码输入框根据手机号有效性变化', () => {
    wrapper.vm.mobileNumber = '13800138000'; // 有效号码
    wrapper.vm.validateMobile();
    expect(wrapper.vm.isValidMobile).toBe(true);

    wrapper.vm.mobileNumber = '123456'; // 无效号码
    wrapper.vm.validateMobile();
    expect(wrapper.vm.isValidMobile).toBe(false);
  });

  it('注册表单提交：未同意协议', async () => {
    const messageMock = vi.spyOn(ElMessage, 'warning');
    wrapper.vm.isAgreed = false;
    await wrapper.vm.onSubmit();
    expect(messageMock).toBeCalledWith('请同意用户协议');
  });

  it('注册表单提交：密码不一致', async () => {
    const messageMock = vi.spyOn(ElMessage, 'error');
    wrapper.vm.loginPassword = 'password123';
    wrapper.vm.verifyPassword = 'password456';
    wrapper.vm.isAgreed = true;
    await wrapper.vm.onSubmit();
    expect(messageMock).toBeCalledWith('两次输入的密码不一致');
  });

  it('注册表单提交：成功', async () => {
    wrapper.vm.loginPassword = 'password123';
    wrapper.vm.verifyPassword = 'password123';
    wrapper.vm.isAgreed = true;
    const messageMock = vi.spyOn(ElMessage, 'success');
    const pushMock = vi.spyOn(wrapper.vm.$router, 'push');

    await wrapper.vm.onSubmit();
    expect(messageMock).toBeCalledWith('注册成功，请登录');
    expect(pushMock).toBeCalledWith('/');
  });

  it('路由跳转至登录页', async () => {
    const pushMock = vi.spyOn(wrapper.vm.$router, 'push');
    await wrapper.vm.goToLogin();
    expect(pushMock).toBeCalledWith('/');
  });
});