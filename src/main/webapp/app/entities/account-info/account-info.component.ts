import { type Ref, defineComponent, inject, onMounted, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import AccountInfoService from './account-info.service';
import { type IAccountInfo } from '@/shared/model/account-info.model';
import { useDateFormat } from '@/shared/composables';
import { useAlertService } from '@/shared/alert/alert.service';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'AccountInfo',
  setup() {
    const { t: t$ } = useI18n();
    const dateFormat = useDateFormat();
    const accountInfoService = inject('accountInfoService', () => new AccountInfoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const accountInfos: Ref<IAccountInfo[]> = ref([]);

    const isFetching = ref(false);

    const clear = () => {};

    const retrieveAccountInfos = async () => {
      isFetching.value = true;
      try {
        const res = await accountInfoService().retrieve();
        accountInfos.value = res.data;
      } catch (err) {
        alertService.showHttpError(err.response);
      } finally {
        isFetching.value = false;
      }
    };

    const handleSyncList = () => {
      retrieveAccountInfos();
    };

    onMounted(async () => {
      await retrieveAccountInfos();
    });

    const removeId: Ref<number> = ref(null);
    const removeEntity = ref<any>(null);
    const prepareRemove = (instance: IAccountInfo) => {
      removeId.value = instance.id;
      removeEntity.value.show();
    };
    const closeDialog = () => {
      removeEntity.value.hide();
    };
    const removeAccountInfo = async () => {
      try {
        await accountInfoService().delete(removeId.value);
        const message = t$('yfcx123App.accountInfo.deleted', { param: removeId.value }).toString();
        alertService.showInfo(message, { variant: 'danger' });
        removeId.value = null;
        retrieveAccountInfos();
        closeDialog();
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    return {
      accountInfos,
      handleSyncList,
      isFetching,
      retrieveAccountInfos,
      clear,
      ...dateFormat,
      removeId,
      removeEntity,
      prepareRemove,
      closeDialog,
      removeAccountInfo,
      t$,
    };
  },
});
