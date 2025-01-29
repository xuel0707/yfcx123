import { type ComputedRef, defineComponent, inject } from 'vue';
import { useI18n } from 'vue-i18n';
import Ribbon from '@/core/ribbon/ribbon.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import TopNavbar from '@/core/top-navbar/top-navbar.vue';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Project',
  components: {
    'ribbon': Ribbon,
    'jhi-navbar': JhiNavbar,
    'top-navbar': TopNavbar,
  },
  setup() {
    return {
      t$: useI18n().t,
    };
  },
});
