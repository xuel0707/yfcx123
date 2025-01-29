/* tslint:disable max-line-length */
import { vitest } from 'vitest';
import { type MountingOptions, shallowMount } from '@vue/test-utils';
import sinon, { type SinonStubbedInstance } from 'sinon';

import AccountInfo from './account-info.vue';
import AccountInfoService from './account-info.service';
import AlertService from '@/shared/alert/alert.service';

type AccountInfoComponentType = InstanceType<typeof AccountInfo>;

const bModalStub = {
  render: () => {},
  methods: {
    hide: () => {},
    show: () => {},
  },
};

describe('Component Tests', () => {
  let alertService: AlertService;

  describe('AccountInfo Management Component', () => {
    let accountInfoServiceStub: SinonStubbedInstance<AccountInfoService>;
    let mountOptions: MountingOptions<AccountInfoComponentType>['global'];

    beforeEach(() => {
      accountInfoServiceStub = sinon.createStubInstance<AccountInfoService>(AccountInfoService);
      accountInfoServiceStub.retrieve.resolves({ headers: {} });

      alertService = new AlertService({
        i18n: { t: vitest.fn() } as any,
        bvToast: {
          toast: vitest.fn(),
        } as any,
      });

      mountOptions = {
        stubs: {
          bModal: bModalStub as any,
          'font-awesome-icon': true,
          'b-badge': true,
          'b-button': true,
          'router-link': true,
        },
        directives: {
          'b-modal': {},
        },
        provide: {
          alertService,
          accountInfoService: () => accountInfoServiceStub,
        },
      };
    });

    describe('Mount', () => {
      it('Should call load all on init', async () => {
        // GIVEN
        accountInfoServiceStub.retrieve.resolves({ headers: {}, data: [{ id: 123 }] });

        // WHEN
        const wrapper = shallowMount(AccountInfo, { global: mountOptions });
        const comp = wrapper.vm;
        await comp.$nextTick();

        // THEN
        expect(accountInfoServiceStub.retrieve.calledOnce).toBeTruthy();
        expect(comp.accountInfos[0]).toEqual(expect.objectContaining({ id: 123 }));
      });
    });
    describe('Handles', () => {
      let comp: AccountInfoComponentType;

      beforeEach(async () => {
        const wrapper = shallowMount(AccountInfo, { global: mountOptions });
        comp = wrapper.vm;
        await comp.$nextTick();
        accountInfoServiceStub.retrieve.reset();
        accountInfoServiceStub.retrieve.resolves({ headers: {}, data: [] });
      });

      it('Should call delete service on confirmDelete', async () => {
        // GIVEN
        accountInfoServiceStub.delete.resolves({});

        // WHEN
        comp.prepareRemove({ id: 123 });

        comp.removeAccountInfo();
        await comp.$nextTick(); // clear components

        // THEN
        expect(accountInfoServiceStub.delete.called).toBeTruthy();

        // THEN
        await comp.$nextTick(); // handle component clear watch
        expect(accountInfoServiceStub.retrieve.callCount).toEqual(1);
      });
    });
  });
});
