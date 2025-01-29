/* tslint:disable max-line-length */
import { vitest } from 'vitest';
import { type MountingOptions, shallowMount } from '@vue/test-utils';
import sinon, { type SinonStubbedInstance } from 'sinon';
import { type RouteLocation } from 'vue-router';

import AccountInfoDetails from './account-info-details.vue';
import AccountInfoService from './account-info.service';
import AlertService from '@/shared/alert/alert.service';

type AccountInfoDetailsComponentType = InstanceType<typeof AccountInfoDetails>;

let route: Partial<RouteLocation>;
const routerGoMock = vitest.fn();

vitest.mock('vue-router', () => ({
  useRoute: () => route,
  useRouter: () => ({ go: routerGoMock }),
}));

const accountInfoSample = { id: 123 };

describe('Component Tests', () => {
  let alertService: AlertService;

  afterEach(() => {
    vitest.resetAllMocks();
  });

  describe('AccountInfo Management Detail Component', () => {
    let accountInfoServiceStub: SinonStubbedInstance<AccountInfoService>;
    let mountOptions: MountingOptions<AccountInfoDetailsComponentType>['global'];

    beforeEach(() => {
      route = {};
      accountInfoServiceStub = sinon.createStubInstance<AccountInfoService>(AccountInfoService);

      alertService = new AlertService({
        i18n: { t: vitest.fn() } as any,
        bvToast: {
          toast: vitest.fn(),
        } as any,
      });

      mountOptions = {
        stubs: {
          'font-awesome-icon': true,
          'router-link': true,
        },
        provide: {
          alertService,
          accountInfoService: () => accountInfoServiceStub,
        },
      };
    });

    describe('Navigate to details', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        accountInfoServiceStub.find.resolves(accountInfoSample);
        route = {
          params: {
            accountInfoId: `${123}`,
          },
        };
        const wrapper = shallowMount(AccountInfoDetails, { global: mountOptions });
        const comp = wrapper.vm;
        // WHEN
        await comp.$nextTick();

        // THEN
        expect(comp.accountInfo).toMatchObject(accountInfoSample);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        accountInfoServiceStub.find.resolves(accountInfoSample);
        const wrapper = shallowMount(AccountInfoDetails, { global: mountOptions });
        const comp = wrapper.vm;
        await comp.$nextTick();

        comp.previousState();
        await comp.$nextTick();

        expect(routerGoMock).toHaveBeenCalledWith(-1);
      });
    });
  });
});
