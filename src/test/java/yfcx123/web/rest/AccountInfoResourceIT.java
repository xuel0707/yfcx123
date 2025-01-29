package yfcx123.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
import static yfcx123.domain.AccountInfoAsserts.*;
import static yfcx123.web.rest.TestUtil.createUpdateProxyForBean;
import static yfcx123.web.rest.TestUtil.sameInstant;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;
import yfcx123.IntegrationTest;
import yfcx123.domain.AccountInfo;
import yfcx123.repository.AccountInfoRepository;
import yfcx123.repository.EntityManager;

/**
 * Integration tests for the {@link AccountInfoResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class AccountInfoResourceIT {

    private static final Integer DEFAULT_ACCOUNT_ID = 1;
    private static final Integer UPDATED_ACCOUNT_ID = 2;

    private static final String DEFAULT_COMPANY_NAME = "AAAAAAAAAA";
    private static final String UPDATED_COMPANY_NAME = "BBBBBBBBBB";

    private static final String DEFAULT_SOCIAL_CREDIT_CODE = "AAAAAAAAAA";
    private static final String UPDATED_SOCIAL_CREDIT_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_ENTITY_LEGAL_PERSON = "AAAAAAAAAA";
    private static final String UPDATED_ENTITY_LEGAL_PERSON = "BBBBBBBBBB";

    private static final String DEFAULT_PASSWORD = "AAAAAAAAAA";
    private static final String UPDATED_PASSWORD = "BBBBBBBBBB";

    private static final String DEFAULT_FULLY_ADDRESS = "AAAAAAAAAA";
    private static final String UPDATED_FULLY_ADDRESS = "BBBBBBBBBB";

    private static final String DEFAULT_COMPANY_CONTACT = "AAAAAAAAAA";
    private static final String UPDATED_COMPANY_CONTACT = "BBBBBBBBBB";

    private static final String DEFAULT_MOBILE_NUMBER = "AAAAAAAAAA";
    private static final String UPDATED_MOBILE_NUMBER = "BBBBBBBBBB";

    private static final Integer DEFAULT_ACCOUNT_STATUS = 1;
    private static final Integer UPDATED_ACCOUNT_STATUS = 2;

    private static final ZonedDateTime DEFAULT_CREATE_TIME = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_CREATE_TIME = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final ZonedDateTime DEFAULT_UPDATE_TIME = ZonedDateTime.ofInstant(Instant.ofEpochMilli(0L), ZoneOffset.UTC);
    private static final ZonedDateTime UPDATED_UPDATE_TIME = ZonedDateTime.now(ZoneId.systemDefault()).withNano(0);

    private static final String ENTITY_API_URL = "/api/account-infos";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private ObjectMapper om;

    @Autowired
    private AccountInfoRepository accountInfoRepository;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private AccountInfo accountInfo;

    private AccountInfo insertedAccountInfo;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AccountInfo createEntity() {
        return new AccountInfo()
            .accountId(DEFAULT_ACCOUNT_ID)
            .companyName(DEFAULT_COMPANY_NAME)
            .socialCreditCode(DEFAULT_SOCIAL_CREDIT_CODE)
            .entityLegalPerson(DEFAULT_ENTITY_LEGAL_PERSON)
            .password(DEFAULT_PASSWORD)
            .fullyAddress(DEFAULT_FULLY_ADDRESS)
            .companyContact(DEFAULT_COMPANY_CONTACT)
            .mobileNumber(DEFAULT_MOBILE_NUMBER)
            .accountStatus(DEFAULT_ACCOUNT_STATUS)
            .createTime(DEFAULT_CREATE_TIME)
            .updateTime(DEFAULT_UPDATE_TIME);
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static AccountInfo createUpdatedEntity() {
        return new AccountInfo()
            .accountId(UPDATED_ACCOUNT_ID)
            .companyName(UPDATED_COMPANY_NAME)
            .socialCreditCode(UPDATED_SOCIAL_CREDIT_CODE)
            .entityLegalPerson(UPDATED_ENTITY_LEGAL_PERSON)
            .password(UPDATED_PASSWORD)
            .fullyAddress(UPDATED_FULLY_ADDRESS)
            .companyContact(UPDATED_COMPANY_CONTACT)
            .mobileNumber(UPDATED_MOBILE_NUMBER)
            .accountStatus(UPDATED_ACCOUNT_STATUS)
            .createTime(UPDATED_CREATE_TIME)
            .updateTime(UPDATED_UPDATE_TIME);
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(AccountInfo.class).block();
        } catch (Exception e) {
            // It can fail, if other entities are still referring this - it will be removed later.
        }
    }

    @BeforeEach
    public void initTest() {
        accountInfo = createEntity();
    }

    @AfterEach
    public void cleanup() {
        if (insertedAccountInfo != null) {
            accountInfoRepository.delete(insertedAccountInfo).block();
            insertedAccountInfo = null;
        }
        deleteEntities(em);
    }

    @Test
    void createAccountInfo() throws Exception {
        long databaseSizeBeforeCreate = getRepositoryCount();
        // Create the AccountInfo
        var returnedAccountInfo = webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isCreated()
            .expectBody(AccountInfo.class)
            .returnResult()
            .getResponseBody();

        // Validate the AccountInfo in the database
        assertIncrementedRepositoryCount(databaseSizeBeforeCreate);
        assertAccountInfoUpdatableFieldsEquals(returnedAccountInfo, getPersistedAccountInfo(returnedAccountInfo));

        insertedAccountInfo = returnedAccountInfo;
    }

    @Test
    void createAccountInfoWithExistingId() throws Exception {
        // Create the AccountInfo with an existing ID
        accountInfo.setId(1L);

        long databaseSizeBeforeCreate = getRepositoryCount();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeCreate);
    }

    @Test
    void getAllAccountInfosAsStream() {
        // Initialize the database
        accountInfoRepository.save(accountInfo).block();

        List<AccountInfo> accountInfoList = webTestClient
            .get()
            .uri(ENTITY_API_URL)
            .accept(MediaType.APPLICATION_NDJSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentTypeCompatibleWith(MediaType.APPLICATION_NDJSON)
            .returnResult(AccountInfo.class)
            .getResponseBody()
            .filter(accountInfo::equals)
            .collectList()
            .block(Duration.ofSeconds(5));

        assertThat(accountInfoList).isNotNull();
        assertThat(accountInfoList).hasSize(1);
        AccountInfo testAccountInfo = accountInfoList.get(0);

        // Test fails because reactive api returns an empty object instead of null
        // assertAccountInfoAllPropertiesEquals(accountInfo, testAccountInfo);
        assertAccountInfoUpdatableFieldsEquals(accountInfo, testAccountInfo);
    }

    @Test
    void getAllAccountInfos() {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        // Get all the accountInfoList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(accountInfo.getId().intValue()))
            .jsonPath("$.[*].accountId")
            .value(hasItem(DEFAULT_ACCOUNT_ID))
            .jsonPath("$.[*].companyName")
            .value(hasItem(DEFAULT_COMPANY_NAME))
            .jsonPath("$.[*].socialCreditCode")
            .value(hasItem(DEFAULT_SOCIAL_CREDIT_CODE))
            .jsonPath("$.[*].entityLegalPerson")
            .value(hasItem(DEFAULT_ENTITY_LEGAL_PERSON))
            .jsonPath("$.[*].password")
            .value(hasItem(DEFAULT_PASSWORD))
            .jsonPath("$.[*].fullyAddress")
            .value(hasItem(DEFAULT_FULLY_ADDRESS))
            .jsonPath("$.[*].companyContact")
            .value(hasItem(DEFAULT_COMPANY_CONTACT))
            .jsonPath("$.[*].mobileNumber")
            .value(hasItem(DEFAULT_MOBILE_NUMBER))
            .jsonPath("$.[*].accountStatus")
            .value(hasItem(DEFAULT_ACCOUNT_STATUS))
            .jsonPath("$.[*].createTime")
            .value(hasItem(sameInstant(DEFAULT_CREATE_TIME)))
            .jsonPath("$.[*].updateTime")
            .value(hasItem(sameInstant(DEFAULT_UPDATE_TIME)));
    }

    @Test
    void getAccountInfo() {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        // Get the accountInfo
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, accountInfo.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(accountInfo.getId().intValue()))
            .jsonPath("$.accountId")
            .value(is(DEFAULT_ACCOUNT_ID))
            .jsonPath("$.companyName")
            .value(is(DEFAULT_COMPANY_NAME))
            .jsonPath("$.socialCreditCode")
            .value(is(DEFAULT_SOCIAL_CREDIT_CODE))
            .jsonPath("$.entityLegalPerson")
            .value(is(DEFAULT_ENTITY_LEGAL_PERSON))
            .jsonPath("$.password")
            .value(is(DEFAULT_PASSWORD))
            .jsonPath("$.fullyAddress")
            .value(is(DEFAULT_FULLY_ADDRESS))
            .jsonPath("$.companyContact")
            .value(is(DEFAULT_COMPANY_CONTACT))
            .jsonPath("$.mobileNumber")
            .value(is(DEFAULT_MOBILE_NUMBER))
            .jsonPath("$.accountStatus")
            .value(is(DEFAULT_ACCOUNT_STATUS))
            .jsonPath("$.createTime")
            .value(is(sameInstant(DEFAULT_CREATE_TIME)))
            .jsonPath("$.updateTime")
            .value(is(sameInstant(DEFAULT_UPDATE_TIME)));
    }

    @Test
    void getNonExistingAccountInfo() {
        // Get the accountInfo
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_PROBLEM_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putExistingAccountInfo() throws Exception {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the accountInfo
        AccountInfo updatedAccountInfo = accountInfoRepository.findById(accountInfo.getId()).block();
        updatedAccountInfo
            .accountId(UPDATED_ACCOUNT_ID)
            .companyName(UPDATED_COMPANY_NAME)
            .socialCreditCode(UPDATED_SOCIAL_CREDIT_CODE)
            .entityLegalPerson(UPDATED_ENTITY_LEGAL_PERSON)
            .password(UPDATED_PASSWORD)
            .fullyAddress(UPDATED_FULLY_ADDRESS)
            .companyContact(UPDATED_COMPANY_CONTACT)
            .mobileNumber(UPDATED_MOBILE_NUMBER)
            .accountStatus(UPDATED_ACCOUNT_STATUS)
            .createTime(UPDATED_CREATE_TIME)
            .updateTime(UPDATED_UPDATE_TIME);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, updatedAccountInfo.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(updatedAccountInfo))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertPersistedAccountInfoToMatchAllProperties(updatedAccountInfo);
    }

    @Test
    void putNonExistingAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, accountInfo.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, longCount.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateAccountInfoWithPatch() throws Exception {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the accountInfo using partial update
        AccountInfo partialUpdatedAccountInfo = new AccountInfo();
        partialUpdatedAccountInfo.setId(accountInfo.getId());

        partialUpdatedAccountInfo
            .companyName(UPDATED_COMPANY_NAME)
            .entityLegalPerson(UPDATED_ENTITY_LEGAL_PERSON)
            .fullyAddress(UPDATED_FULLY_ADDRESS)
            .companyContact(UPDATED_COMPANY_CONTACT)
            .mobileNumber(UPDATED_MOBILE_NUMBER)
            .accountStatus(UPDATED_ACCOUNT_STATUS)
            .createTime(UPDATED_CREATE_TIME)
            .updateTime(UPDATED_UPDATE_TIME);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedAccountInfo.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedAccountInfo))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the AccountInfo in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertAccountInfoUpdatableFieldsEquals(
            createUpdateProxyForBean(partialUpdatedAccountInfo, accountInfo),
            getPersistedAccountInfo(accountInfo)
        );
    }

    @Test
    void fullUpdateAccountInfoWithPatch() throws Exception {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        long databaseSizeBeforeUpdate = getRepositoryCount();

        // Update the accountInfo using partial update
        AccountInfo partialUpdatedAccountInfo = new AccountInfo();
        partialUpdatedAccountInfo.setId(accountInfo.getId());

        partialUpdatedAccountInfo
            .accountId(UPDATED_ACCOUNT_ID)
            .companyName(UPDATED_COMPANY_NAME)
            .socialCreditCode(UPDATED_SOCIAL_CREDIT_CODE)
            .entityLegalPerson(UPDATED_ENTITY_LEGAL_PERSON)
            .password(UPDATED_PASSWORD)
            .fullyAddress(UPDATED_FULLY_ADDRESS)
            .companyContact(UPDATED_COMPANY_CONTACT)
            .mobileNumber(UPDATED_MOBILE_NUMBER)
            .accountStatus(UPDATED_ACCOUNT_STATUS)
            .createTime(UPDATED_CREATE_TIME)
            .updateTime(UPDATED_UPDATE_TIME);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedAccountInfo.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(partialUpdatedAccountInfo))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the AccountInfo in the database

        assertSameRepositoryCount(databaseSizeBeforeUpdate);
        assertAccountInfoUpdatableFieldsEquals(partialUpdatedAccountInfo, getPersistedAccountInfo(partialUpdatedAccountInfo));
    }

    @Test
    void patchNonExistingAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, accountInfo.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, longCount.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamAccountInfo() throws Exception {
        long databaseSizeBeforeUpdate = getRepositoryCount();
        accountInfo.setId(longCount.incrementAndGet());

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(om.writeValueAsBytes(accountInfo))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the AccountInfo in the database
        assertSameRepositoryCount(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteAccountInfo() {
        // Initialize the database
        insertedAccountInfo = accountInfoRepository.save(accountInfo).block();

        long databaseSizeBeforeDelete = getRepositoryCount();

        // Delete the accountInfo
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, accountInfo.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        assertDecrementedRepositoryCount(databaseSizeBeforeDelete);
    }

    protected long getRepositoryCount() {
        return accountInfoRepository.count().block();
    }

    protected void assertIncrementedRepositoryCount(long countBefore) {
        assertThat(countBefore + 1).isEqualTo(getRepositoryCount());
    }

    protected void assertDecrementedRepositoryCount(long countBefore) {
        assertThat(countBefore - 1).isEqualTo(getRepositoryCount());
    }

    protected void assertSameRepositoryCount(long countBefore) {
        assertThat(countBefore).isEqualTo(getRepositoryCount());
    }

    protected AccountInfo getPersistedAccountInfo(AccountInfo accountInfo) {
        return accountInfoRepository.findById(accountInfo.getId()).block();
    }

    protected void assertPersistedAccountInfoToMatchAllProperties(AccountInfo expectedAccountInfo) {
        // Test fails because reactive api returns an empty object instead of null
        // assertAccountInfoAllPropertiesEquals(expectedAccountInfo, getPersistedAccountInfo(expectedAccountInfo));
        assertAccountInfoUpdatableFieldsEquals(expectedAccountInfo, getPersistedAccountInfo(expectedAccountInfo));
    }

    protected void assertPersistedAccountInfoToMatchUpdatableProperties(AccountInfo expectedAccountInfo) {
        // Test fails because reactive api returns an empty object instead of null
        // assertAccountInfoAllUpdatablePropertiesEquals(expectedAccountInfo, getPersistedAccountInfo(expectedAccountInfo));
        assertAccountInfoUpdatableFieldsEquals(expectedAccountInfo, getPersistedAccountInfo(expectedAccountInfo));
    }
}
