<template>
  <div class="row justify-content-center">
    <div class="col-8">
      <form name="editForm" novalidate @submit.prevent="save()">
        <h2
          id="yfcx123App.accountInfo.home.createOrEditLabel"
          data-cy="AccountInfoCreateUpdateHeading"
          v-text="t$('yfcx123App.accountInfo.home.createOrEditLabel')"
        ></h2>
        <div>
          <div class="form-group" v-if="accountInfo.id">
            <label for="id" v-text="t$('global.field.id')"></label>
            <input type="text" class="form-control" id="id" name="id" v-model="accountInfo.id" readonly />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.accountId')" for="account-info-accountId"></label>
            <input
              type="number"
              class="form-control"
              name="accountId"
              id="account-info-accountId"
              data-cy="accountId"
              :class="{ valid: !v$.accountId.$invalid, invalid: v$.accountId.$invalid }"
              v-model.number="v$.accountId.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.companyName')" for="account-info-companyName"></label>
            <input
              type="text"
              class="form-control"
              name="companyName"
              id="account-info-companyName"
              data-cy="companyName"
              :class="{ valid: !v$.companyName.$invalid, invalid: v$.companyName.$invalid }"
              v-model="v$.companyName.$model"
            />
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              v-text="t$('yfcx123App.accountInfo.socialCreditCode')"
              for="account-info-socialCreditCode"
            ></label>
            <input
              type="text"
              class="form-control"
              name="socialCreditCode"
              id="account-info-socialCreditCode"
              data-cy="socialCreditCode"
              :class="{ valid: !v$.socialCreditCode.$invalid, invalid: v$.socialCreditCode.$invalid }"
              v-model="v$.socialCreditCode.$model"
            />
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              v-text="t$('yfcx123App.accountInfo.entityLegalPerson')"
              for="account-info-entityLegalPerson"
            ></label>
            <input
              type="text"
              class="form-control"
              name="entityLegalPerson"
              id="account-info-entityLegalPerson"
              data-cy="entityLegalPerson"
              :class="{ valid: !v$.entityLegalPerson.$invalid, invalid: v$.entityLegalPerson.$invalid }"
              v-model="v$.entityLegalPerson.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.password')" for="account-info-password"></label>
            <input
              type="text"
              class="form-control"
              name="password"
              id="account-info-password"
              data-cy="password"
              :class="{ valid: !v$.password.$invalid, invalid: v$.password.$invalid }"
              v-model="v$.password.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.fullyAddress')" for="account-info-fullyAddress"></label>
            <input
              type="text"
              class="form-control"
              name="fullyAddress"
              id="account-info-fullyAddress"
              data-cy="fullyAddress"
              :class="{ valid: !v$.fullyAddress.$invalid, invalid: v$.fullyAddress.$invalid }"
              v-model="v$.fullyAddress.$model"
            />
          </div>
          <div class="form-group">
            <label
              class="form-control-label"
              v-text="t$('yfcx123App.accountInfo.companyContact')"
              for="account-info-companyContact"
            ></label>
            <input
              type="text"
              class="form-control"
              name="companyContact"
              id="account-info-companyContact"
              data-cy="companyContact"
              :class="{ valid: !v$.companyContact.$invalid, invalid: v$.companyContact.$invalid }"
              v-model="v$.companyContact.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.mobileNumber')" for="account-info-mobileNumber"></label>
            <input
              type="text"
              class="form-control"
              name="mobileNumber"
              id="account-info-mobileNumber"
              data-cy="mobileNumber"
              :class="{ valid: !v$.mobileNumber.$invalid, invalid: v$.mobileNumber.$invalid }"
              v-model="v$.mobileNumber.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.accountStatus')" for="account-info-accountStatus"></label>
            <input
              type="number"
              class="form-control"
              name="accountStatus"
              id="account-info-accountStatus"
              data-cy="accountStatus"
              :class="{ valid: !v$.accountStatus.$invalid, invalid: v$.accountStatus.$invalid }"
              v-model.number="v$.accountStatus.$model"
            />
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.createTime')" for="account-info-createTime"></label>
            <div class="d-flex">
              <input
                id="account-info-createTime"
                data-cy="createTime"
                type="datetime-local"
                class="form-control"
                name="createTime"
                :class="{ valid: !v$.createTime.$invalid, invalid: v$.createTime.$invalid }"
                :value="convertDateTimeFromServer(v$.createTime.$model)"
                @change="updateZonedDateTimeField('createTime', $event)"
              />
            </div>
          </div>
          <div class="form-group">
            <label class="form-control-label" v-text="t$('yfcx123App.accountInfo.updateTime')" for="account-info-updateTime"></label>
            <div class="d-flex">
              <input
                id="account-info-updateTime"
                data-cy="updateTime"
                type="datetime-local"
                class="form-control"
                name="updateTime"
                :class="{ valid: !v$.updateTime.$invalid, invalid: v$.updateTime.$invalid }"
                :value="convertDateTimeFromServer(v$.updateTime.$model)"
                @change="updateZonedDateTimeField('updateTime', $event)"
              />
            </div>
          </div>
        </div>
        <div>
          <button type="button" id="cancel-save" data-cy="entityCreateCancelButton" class="btn btn-secondary" @click="previousState()">
            <font-awesome-icon icon="ban"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.cancel')"></span>
          </button>
          <button
            type="submit"
            id="save-entity"
            data-cy="entityCreateSaveButton"
            :disabled="v$.$invalid || isSaving"
            class="btn btn-primary"
          >
            <font-awesome-icon icon="save"></font-awesome-icon>&nbsp;<span v-text="t$('entity.action.save')"></span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts" src="./account-info-update.component.ts"></script>
