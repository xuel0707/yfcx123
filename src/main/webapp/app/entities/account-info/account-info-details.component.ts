import { type Ref, defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';

import AccountInfoService from './account-info.service';
import { useDateFormat } from '@/shared/composables';
import { type IAccountInfo } from '@/shared/model/account-info.model';
import { useAlertService } from '@/shared/alert/alert.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'AccountInfoDetails',
  setup() {
    const dateFormat = useDateFormat();
    const accountInfoService = inject('accountInfoService', () => new AccountInfoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);
    const accountInfo: Ref<IAccountInfo> = ref({});

    const retrieveAccountInfo = async accountInfoId => {
      try {
        const res = await accountInfoService().find(accountInfoId);
        accountInfo.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.accountInfoId) {
      retrieveAccountInfo(route.params.accountInfoId);
    }

    return {
      ...dateFormat,
      alertService,
      accountInfo,

      previousState,
      t$: useI18n().t,
    };
  },
});
