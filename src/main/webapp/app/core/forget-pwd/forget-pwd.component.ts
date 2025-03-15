import { type ComputedRef, defineComponent, ref, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Register',
  components: {
    ribbon: Ribbon,
  },

  setup() {
    const username = ref('');
    const mobileNumber = ref('');
    const smsCode = ref('');
    const password = ref('');
    const rpassword = ref('');

    // 短信验证相关状态
    const countdown = ref(0);
    const isValidMobile = ref(false);
    const timer = ref<ReturnType<typeof setInterval> | null>(null);

    const router = useRouter();
    const { t } = useI18n();
    const goToLogin = () => {
      router.push('/');
    };

    // 手机号验证
    const validateMobile = () => {
      isValidMobile.value = /^1[3-9]\d{9}$/.test(mobileNumber.value);
    };

    // 发送验证码（完整实现版）
    const sendCode = async () => {
      try {
        // 预校验手机格式
        if (!isValidMobile.value) {
          ElMessage.warning('请输入有效的11位手机号码');
          return;
        }

        // 调用后端接口（携带必要参数）
        const { data } = await axios.post<{
          code: number;
          message: string;
          requestId?: string;
        }>(
          '/api/sms-code',
          {
            mobile: mobileNumber.value,
            templateCode: 'SMS_285020683', // 使用图片中的模板CODE
          },
          {
            timeout: 3000, // 3秒超时设置
            headers: {
              'Content-Type': 'application/json;charset=UTF-8',
            },
          },
        );

        // 处理阿里云响应状态
        switch (data.code) {
          case 200:
            startCountdown();
            ElMessage.success({
              message: '验证码已发送至您的手机，5分钟内有效',
              duration: 5000,
              showClose: true,
            });
            break;
          case 429:
            ElMessage.warning('操作过于频繁，请60秒后再试');
            startCountdown(60); // 强制进入冷却
            break;
          case 500:
            ElMessage.error(`服务异常：${data.message || '请联系管理员'}`);
            break;
          default:
            ElMessageBox.alert(data.message || '短信服务暂不可用');
        }
      } catch (error: any) {
        console.error('短信服务调用失败:', error);

        // 精细化错误处理
        const errorMap = new Map<string, string>([
          ['ECONNABORTED', '请求超时，请检查网络连接'],
          ['Network Error', '网络连接不可用'],
          ['ERR_BAD_REQUEST', '无效的请求参数'],
          ['403', 'AccessKey验证失败'],
        ]);

        const statusCode = error.response?.status;
        const errorCode = error.code || statusCode;
        const errorMessage = errorMap.get(errorCode) || error.response?.data?.message || '服务暂时不可用，请稍后重试';

        ElMessage.error({
          message: `发送失败：${errorMessage}`,
          duration: 3000,
          showClose: true,
        });
      }
    };

    // 修改后的倒计时方法（支持自定义时长）
    const startCountdown = (seconds: number = 60) => {
      countdown.value = seconds;
      if (timer.value) clearInterval(timer.value);

      timer.value = setInterval(() => {
        if (countdown.value <= 0) {
          clearInterval(timer.value!);
          timer.value = null;
          return;
        }
        countdown.value--;
      }, 1000);
    };

    // 组件卸载时清除定时器
    onBeforeUnmount(() => {
      if (timer.value) {
        clearInterval(timer.value);
      }
    });

    // 提交处理
    const onSubmit = async () => {
      try {
        if (password.value !== rpassword.value) {
          ElMessage.error('两次输入的密码不一致');
          return;
        }

        // 调用注册接口
        await axios.post('/api/modifypasswd', {
          username: username.value,
          password: password.value,
          rpassword: rpassword.value,
        });

        ElMessage.success('修改成功，请登录');
        router.push('/');
      } catch (error: any) {
        ElMessage.error(`修改失败: ${error.response?.data?.message || error.message}`);
      }
    };

    return {
      username,
      mobileNumber,
      smsCode,
      password,
      rpassword,
      countdown,
      isValidMobile,
      timer,
      goToLogin,
      validateMobile,
      sendCode,
      onSubmit,
      t$: useI18n().t,
    };
  },
});
