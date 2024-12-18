import { defineComponent, provide } from 'vue';
import { useI18n } from 'vue-i18n';
import JhiFooter from '@/core/jhi-footer/jhi-footer.vue';
import JhiNavbar from '@/core/jhi-navbar/jhi-navbar.vue';
import HomeBar from '@/core/home/home.vue';

import { useAlertService } from '@/shared/alert/alert.service';

import '@/shared/config/dayjs';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'App',
  components: {
    'jhi-navbar': JhiNavbar,
    'home': HomeBar,
    'jhi-footer': JhiFooter,
  },
  setup() {
    provide('alertService', useAlertService());

    return {
      t$: useI18n().t,
    };
  },
});
