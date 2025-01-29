<template>
  <div>
    <h2 id="page-heading" data-cy="AccountInfoHeading">
      <span v-text="t$('yfcx123App.accountInfo.home.title')" id="account-info-heading"></span>
      <div class="d-flex justify-content-end">
        <button class="btn btn-info mr-2" @click="handleSyncList" :disabled="isFetching">
          <font-awesome-icon icon="sync" :spin="isFetching"></font-awesome-icon>
          <span v-text="t$('yfcx123App.accountInfo.home.refreshListLabel')"></span>
        </button>
        <router-link :to="{ name: 'AccountInfoCreate' }" custom v-slot="{ navigate }">
          <button
            @click="navigate"
            id="jh-create-entity"
            data-cy="entityCreateButton"
            class="btn btn-primary jh-create-entity create-account-info"
          >
            <font-awesome-icon icon="plus"></font-awesome-icon>
            <span v-text="t$('yfcx123App.accountInfo.home.createLabel')"></span>
          </button>
        </router-link>
      </div>
    </h2>
    <br />
    <div class="alert alert-warning" v-if="!isFetching && accountInfos && accountInfos.length === 0">
      <span v-text="t$('yfcx123App.accountInfo.home.notFound')"></span>
    </div>
    <div class="table-responsive" v-if="accountInfos && accountInfos.length > 0">
      <table class="table table-striped" aria-describedby="accountInfos">
        <thead>
          <tr>
            <th scope="row"><span v-text="t$('global.field.id')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.accountId')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.companyName')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.socialCreditCode')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.entityLegalPerson')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.password')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.fullyAddress')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.companyContact')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.mobileNumber')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.accountStatus')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.createTime')"></span></th>
            <th scope="row"><span v-text="t$('yfcx123App.accountInfo.updateTime')"></span></th>
            <th scope="row"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="accountInfo in accountInfos" :key="accountInfo.id" data-cy="entityTable">
            <td>
              <router-link :to="{ name: 'AccountInfoView', params: { accountInfoId: accountInfo.id } }">{{ accountInfo.id }}</router-link>
            </td>
            <td>{{ accountInfo.accountId }}</td>
            <td>{{ accountInfo.companyName }}</td>
            <td>{{ accountInfo.socialCreditCode }}</td>
            <td>{{ accountInfo.entityLegalPerson }}</td>
            <td>{{ accountInfo.password }}</td>
            <td>{{ accountInfo.fullyAddress }}</td>
            <td>{{ accountInfo.companyContact }}</td>
            <td>{{ accountInfo.mobileNumber }}</td>
            <td>{{ accountInfo.accountStatus }}</td>
            <td>{{ formatDateShort(accountInfo.createTime) || '' }}</td>
            <td>{{ formatDateShort(accountInfo.updateTime) || '' }}</td>
            <td class="text-right">
              <div class="btn-group">
                <router-link :to="{ name: 'AccountInfoView', params: { accountInfoId: accountInfo.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-info btn-sm details" data-cy="entityDetailsButton">
                    <font-awesome-icon icon="eye"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="t$('entity.action.view')"></span>
                  </button>
                </router-link>
                <router-link :to="{ name: 'AccountInfoEdit', params: { accountInfoId: accountInfo.id } }" custom v-slot="{ navigate }">
                  <button @click="navigate" class="btn btn-primary btn-sm edit" data-cy="entityEditButton">
                    <font-awesome-icon icon="pencil-alt"></font-awesome-icon>
                    <span class="d-none d-md-inline" v-text="t$('entity.action.edit')"></span>
                  </button>
                </router-link>
                <b-button
                  @click="prepareRemove(accountInfo)"
                  variant="danger"
                  class="btn btn-sm"
                  data-cy="entityDeleteButton"
                  v-b-modal.removeEntity
                >
                  <font-awesome-icon icon="times"></font-awesome-icon>
                  <span class="d-none d-md-inline" v-text="t$('entity.action.delete')"></span>
                </b-button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-modal ref="removeEntity" id="removeEntity">
      <template #modal-title>
        <span
          id="yfcx123App.accountInfo.delete.question"
          data-cy="accountInfoDeleteDialogHeading"
          v-text="t$('entity.delete.title')"
        ></span>
      </template>
      <div class="modal-body">
        <p id="jhi-delete-accountInfo-heading" v-text="t$('yfcx123App.accountInfo.delete.question', { id: removeId })"></p>
      </div>
      <template #modal-footer>
        <div>
          <button type="button" class="btn btn-secondary" v-text="t$('entity.action.cancel')" @click="closeDialog()"></button>
          <button
            type="button"
            class="btn btn-primary"
            id="jhi-confirm-delete-accountInfo"
            data-cy="entityConfirmDeleteButton"
            v-text="t$('entity.action.delete')"
            @click="removeAccountInfo()"
          ></button>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts" src="./account-info.component.ts"></script>
