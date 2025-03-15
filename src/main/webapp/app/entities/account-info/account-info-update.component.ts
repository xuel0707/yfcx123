import { type Ref, computed, defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';

import AccountInfoService from './account-info.service';
import { useDateFormat, useValidation } from '@/shared/composables';
import { useAlertService } from '@/shared/alert/alert.service';

import { AccountInfo, type IAccountInfo } from '@/shared/model/account-info.model';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'AccountInfoUpdate',
  setup() {
    const accountInfoService = inject('accountInfoService', () => new AccountInfoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const accountInfo: Ref<IAccountInfo> = ref(new AccountInfo());
    const isSaving = ref(false);
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'zh-cn'), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);

    const retrieveAccountInfo = async accountInfoId => {
      try {
        const res = await accountInfoService().find(accountInfoId);
        res.createTime = new Date(res.createTime);
        res.updateTime = new Date(res.updateTime);
        accountInfo.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.accountInfoId) {
      retrieveAccountInfo(route.params.accountInfoId);
    }

    const { t: t$ } = useI18n();
    const validations = useValidation();
    const validationRules = {
      accountId: {},
      companyName: {},
      socialCreditCode: {},
      entityLegalPerson: {},
      password: {},
      fullyAddress: {},
      companyContact: {},
      mobileNumber: {},
      accountStatus: {},
      createTime: {},
      updateTime: {},
    };
    const v$ = useVuelidate(validationRules, accountInfo as any);
    v$.value.$validate();

    return {
      accountInfoService,
      alertService,
      accountInfo,
      previousState,
      isSaving,
      currentLanguage,
      v$,
      ...useDateFormat({ entityRef: accountInfo }),
      t$,
    };
  },
  created(): void {},
  methods: {
    save(): void {
      this.isSaving = true;
      if (this.accountInfo.id) {
        this.accountInfoService()
          .update(this.accountInfo)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showInfo(this.t$('yfcx123App.accountInfo.updated', { param: param.id }));
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      } else {
        this.accountInfoService()
          .create(this.accountInfo)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showSuccess(this.t$('yfcx123App.accountInfo.created', { param: param.id }).toString());
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      }
    },
  },
});
