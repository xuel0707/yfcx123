<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <div v-if="accountInfo">
        <h2 class="jh-entity-heading" data-cy="accountInfoDetailsHeading">
          <span v-text="t$('yfcx123App.accountInfo.detail.title')"></span> {{ accountInfo.id }}
        </h2>
        <dl class="row jh-entity-details">
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.accountId')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.accountId }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.companyName')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.companyName }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.socialCreditCode')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.socialCreditCode }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.entityLegalPerson')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.entityLegalPerson }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.password')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.password }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.fullyAddress')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.fullyAddress }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.companyContact')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.companyContact }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.mobileNumber')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.mobileNumber }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.accountStatus')"></span>
          </dt>
          <dd>
            <span>{{ accountInfo.accountStatus }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.createTime')"></span>
          </dt>
          <dd>
            <span v-if="accountInfo.createTime">{{ formatDateLong(accountInfo.createTime) }}</span>
          </dd>
          <dt>
            <span v-text="t$('yfcx123App.accountInfo.updateTime')"></span>
          </dt>
          <dd>
            <span v-if="accountInfo.updateTime">{{ formatDateLong(accountInfo.updateTime) }}</span>
          </dd>
        </dl>
        <button type="submit" @click.prevent="previousState()" class="btn btn-info" data-cy="entityDetailsBackButton">
          <font-awesome-icon icon="arrow-left"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.back')"></span>
        </button>
        <router-link
          v-if="accountInfo.id"
          :to="{ name: 'AccountInfoEdit', params: { accountInfoId: accountInfo.id } }"
          custom
          v-slot="{ navigate }"
        >
          <button @click="navigate" class="btn btn-primary">
            <font-awesome-icon icon="pencil-alt"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.edit')"></span>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./account-info-details.component.ts"></script>
