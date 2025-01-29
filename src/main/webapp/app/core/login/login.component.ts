import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import LoginForm from '@/account/login-form/login-form.vue';
import { useRouter } from 'vue-router';

// 从 @element-plus/icons-vue 包中按需导入
import { User, Lock } from '@element-plus/icons-vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Login',
  components: {
    ribbon: Ribbon,
    'login-form': LoginForm,
    'User': User,
    'Lock': Lock,
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const captcha = ref('');

    const router = useRouter();

    const handleLogin = () => {
      // 定义一个函数来设置样式
      function applyErrorDivStyles(element) {
        element.style.zIndex = 1;
        element.style.color = '#f56c6c';
        element.style.fontSize = '12px';
        element.style.lineHeight = '1';
        element.style.paddingTop = '2px';
        element.style.position = 'absolute';
        element.style.top = '100%';
        element.style.left = '0';
      }

      var formItemContents = document.querySelectorAll('.el-form-item__content');

      if(username.value === ''){
        var existingErrorDiv = formItemContents[0].querySelector('.el-form-item__error');
        if (!existingErrorDiv) {
            var errorDiv = document.createElement('div');
            errorDiv.className = 'el-form-item__error';
            errorDiv.textContent = '请输入用户名';
            applyErrorDivStyles(errorDiv);
            formItemContents[0].appendChild(errorDiv);
        }
        return;
      }

      if(password.value === ''){
        var existingErrorDiv = formItemContents[1].querySelector('.el-form-item__error');
        if (!existingErrorDiv) {
            var errorDiv = document.createElement('div');
            errorDiv.className = 'el-form-item__error';
            errorDiv.textContent = '请输入密码';
            applyErrorDivStyles(errorDiv);
            formItemContents[1].appendChild(errorDiv);
        }
        return;
      }

      if(captcha.value === ''){
        var existingErrorDiv = formItemContents[2].querySelector('.el-form-item__error');
        if (!existingErrorDiv) {
            var errorDiv = document.createElement('div');
            errorDiv.className = 'el-form-item__error';
            errorDiv.textContent = '请输入验证码';
            applyErrorDivStyles(errorDiv);
            formItemContents[2].appendChild(errorDiv);
        }
        return;
      }

      if (username.value === 'admin' && password.value === 'admin') {
        if (captcha.value !== 'SZGE') {
          var existingErrorDiv = formItemContents[2].querySelector('.el-form-item__error');
          if (!existingErrorDiv) {
              var errorDiv = document.createElement('div');
              errorDiv.className = 'el-form-item__error';
              errorDiv.textContent = '验证码错误';
              applyErrorDivStyles(errorDiv);
              formItemContents[2].appendChild(errorDiv);
          }
          return;
        }
        router.push('/home').then(() => {
          window.location.reload();
        });
      } else {
        var existingErrorDiv = formItemContents[0].querySelector('.el-form-item__error');
        if (!existingErrorDiv) {
            var errorDiv = document.createElement('div');
            errorDiv.className = 'el-form-item__error';
            errorDiv.textContent = '用户名或密码错误';
            applyErrorDivStyles(errorDiv);
            formItemContents[0].appendChild(errorDiv);
        }
        return;
      }
    };

    const refreshCaptcha = () => {
      console.log('refreshCaptcha');
      captcha.value = '';
    };

    return {
      username,
      password,
      captcha,
      handleLogin,
      refreshCaptcha,
      t$: useI18n().t,
    };
  },
});
