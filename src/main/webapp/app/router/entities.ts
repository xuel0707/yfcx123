import { Authority } from '@/shared/security/authority';
/* tslint:disable */
// prettier-ignore
const Entities = () => import('@/entities/entities.vue');

const AccountInfo = () => import('@/entities/account-info/account-info.vue');
const AccountInfoUpdate = () => import('@/entities/account-info/account-info-update.vue');
const AccountInfoDetails = () => import('@/entities/account-info/account-info-details.vue');

// jhipster-needle-add-entity-to-router-import - JHipster will import entities to the router here

export default {
  path: '/',
  component: Entities,
  children: [
    {
      path: 'account-info',
      name: 'AccountInfo',
      component: AccountInfo,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'account-info/new',
      name: 'AccountInfoCreate',
      component: AccountInfoUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'account-info/:accountInfoId/edit',
      name: 'AccountInfoEdit',
      component: AccountInfoUpdate,
      meta: { authorities: [Authority.USER] },
    },
    {
      path: 'account-info/:accountInfoId/view',
      name: 'AccountInfoView',
      component: AccountInfoDetails,
      meta: { authorities: [Authority.USER] },
    },
    // jhipster-needle-add-entity-to-router - JHipster will add entities to the router here
  ],
};
