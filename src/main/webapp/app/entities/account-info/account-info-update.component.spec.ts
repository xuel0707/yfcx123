/* tslint:disable max-line-length */
import { vitest } from 'vitest';
import { type MountingOptions, shallowMount } from '@vue/test-utils';
import sinon, { type SinonStubbedInstance } from 'sinon';
import { type RouteLocation } from 'vue-router';

import dayjs from 'dayjs';
import AccountInfoUpdate from './account-info-update.vue';
import AccountInfoService from './account-info.service';
import { DATE_TIME_LONG_FORMAT } from '@/shared/composables/date-format';
import AlertService from '@/shared/alert/alert.service';

type AccountInfoUpdateComponentType = InstanceType<typeof AccountInfoUpdate>;

let route: Partial<RouteLocation>;
const routerGoMock = vitest.fn();

vitest.mock('vue-router', () => ({
  useRoute: () => route,
  useRouter: () => ({ go: routerGoMock }),
}));

const accountInfoSample = { id: 123 };

describe('Component Tests', () => {
  let mountOptions: MountingOptions<AccountInfoUpdateComponentType>['global'];
  let alertService: AlertService;

  describe('AccountInfo Management Update Component', () => {
    let comp: AccountInfoUpdateComponentType;
    let accountInfoServiceStub: SinonStubbedInstance<AccountInfoService>;

    beforeEach(() => {
      route = {};
      accountInfoServiceStub = sinon.createStubInstance<AccountInfoService>(AccountInfoService);
      accountInfoServiceStub.retrieve.onFirstCall().resolves(Promise.resolve([]));

      alertService = new AlertService({
        i18n: { t: vitest.fn() } as any,
        bvToast: {
          toast: vitest.fn(),
        } as any,
      });

      mountOptions = {
        stubs: {
          'font-awesome-icon': true,
          'b-input-group': true,
          'b-input-group-prepend': true,
          'b-form-datepicker': true,
          'b-form-input': true,
        },
        provide: {
          alertService,
          accountInfoService: () => accountInfoServiceStub,
        },
      };
    });

    afterEach(() => {
      vitest.resetAllMocks();
    });

    describe('load', () => {
      beforeEach(() => {
        const wrapper = shallowMount(AccountInfoUpdate, { global: mountOptions });
        comp = wrapper.vm;
      });
      it('Should convert date from string', () => {
        // GIVEN
        const date = new Date('2019-10-15T11:42:02Z');

        // WHEN
        const convertedDate = comp.convertDateTimeFromServer(date);

        // THEN
        expect(convertedDate).toEqual(dayjs(date).format(DATE_TIME_LONG_FORMAT));
      });

      it('Should not convert date if date is not present', () => {
        expect(comp.convertDateTimeFromServer(null)).toBeNull();
      });
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', async () => {
        // GIVEN
        const wrapper = shallowMount(AccountInfoUpdate, { global: mountOptions });
        comp = wrapper.vm;
        comp.accountInfo = accountInfoSample;
        accountInfoServiceStub.update.resolves(accountInfoSample);

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(accountInfoServiceStub.update.calledWith(accountInfoSample)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });

      it('Should call create service on save for new entity', async () => {
        // GIVEN
        const entity = {};
        accountInfoServiceStub.create.resolves(entity);
        const wrapper = shallowMount(AccountInfoUpdate, { global: mountOptions });
        comp = wrapper.vm;
        comp.accountInfo = entity;

        // WHEN
        comp.save();
        await comp.$nextTick();

        // THEN
        expect(accountInfoServiceStub.create.calledWith(entity)).toBeTruthy();
        expect(comp.isSaving).toEqual(false);
      });
    });

    describe('Before route enter', () => {
      it('Should retrieve data', async () => {
        // GIVEN
        accountInfoServiceStub.find.resolves(accountInfoSample);
        accountInfoServiceStub.retrieve.resolves([accountInfoSample]);

        // WHEN
        route = {
          params: {
            accountInfoId: `${accountInfoSample.id}`,
          },
        };
        const wrapper = shallowMount(AccountInfoUpdate, { global: mountOptions });
        comp = wrapper.vm;
        await comp.$nextTick();

        // THEN
        expect(comp.accountInfo).toMatchObject(accountInfoSample);
      });
    });

    describe('Previous state', () => {
      it('Should go previous state', async () => {
        accountInfoServiceStub.find.resolves(accountInfoSample);
        const wrapper = shallowMount(AccountInfoUpdate, { global: mountOptions });
        comp = wrapper.vm;
        await comp.$nextTick();

        comp.previousState();
        await comp.$nextTick();

        expect(routerGoMock).toHaveBeenCalledWith(-1);
      });
    });
  });
});
