import { type ComputedRef, defineComponent, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import TopNavbar from '@/core/top-navbar/top-navbar.vue';
import MainNavbar from '@/core/main-navbar/main-navbar.vue';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import type LoginService from '@/account/login.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Home',
  components: {
    'ribbon': Ribbon,
    'jhi-navbar': JhiNavbar,
    'top-navbar': TopNavbar,
    'main-navbar': MainNavbar,
    'jhi-footer': JhiFooter,
  },
  setup() {
    const loginService = inject<LoginService>('loginService');

    const authenticated = inject<ComputedRef<boolean>>('authenticated');
    const username = inject<ComputedRef<string>>('currentUsername');

    const openLogin = () => {
      loginService.openLogin();
    };

    return {
      authenticated,
      username,
      openLogin,
      t$: useI18n().t,
    };
  },
});
