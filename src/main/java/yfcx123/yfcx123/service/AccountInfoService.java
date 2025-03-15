package yfcx123.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import yfcx123.domain.AccountInfo;
import yfcx123.repository.AccountInfoRepository;

/**
 * Service Implementation for managing {@link yfcx123.domain.AccountInfo}.
 */
@Service
@Transactional
public class AccountInfoService {

    private static final Logger LOG = LoggerFactory.getLogger(AccountInfoService.class);

    private final AccountInfoRepository accountInfoRepository;

    public AccountInfoService(AccountInfoRepository accountInfoRepository) {
        this.accountInfoRepository = accountInfoRepository;
    }

    /**
     * Save a accountInfo.
     *
     * @param accountInfo the entity to save.
     * @return the persisted entity.
     */
    public Mono<AccountInfo> save(AccountInfo accountInfo) {
        LOG.debug("Request to save AccountInfo : {}", accountInfo);
        return accountInfoRepository.save(accountInfo);
    }

    /**
     * Update a accountInfo.
     *
     * @param accountInfo the entity to save.
     * @return the persisted entity.
     */
    public Mono<AccountInfo> update(AccountInfo accountInfo) {
        LOG.debug("Request to update AccountInfo : {}", accountInfo);
        return accountInfoRepository.save(accountInfo);
    }

    /**
     * Partially update a accountInfo.
     *
     * @param accountInfo the entity to update partially.
     * @return the persisted entity.
     */
    public Mono<AccountInfo> partialUpdate(AccountInfo accountInfo) {
        LOG.debug("Request to partially update AccountInfo : {}", accountInfo);

        return accountInfoRepository
            .findById(accountInfo.getId())
            .map(existingAccountInfo -> {
                if (accountInfo.getAccountId() != null) {
                    existingAccountInfo.setAccountId(accountInfo.getAccountId());
                }
                if (accountInfo.getCompanyName() != null) {
                    existingAccountInfo.setCompanyName(accountInfo.getCompanyName());
                }
                if (accountInfo.getSocialCreditCode() != null) {
                    existingAccountInfo.setSocialCreditCode(accountInfo.getSocialCreditCode());
                }
                if (accountInfo.getEntityLegalPerson() != null) {
                    existingAccountInfo.setEntityLegalPerson(accountInfo.getEntityLegalPerson());
                }
                if (accountInfo.getPassword() != null) {
                    existingAccountInfo.setPassword(accountInfo.getPassword());
                }
                if (accountInfo.getFullyAddress() != null) {
                    existingAccountInfo.setFullyAddress(accountInfo.getFullyAddress());
                }
                if (accountInfo.getCompanyContact() != null) {
                    existingAccountInfo.setCompanyContact(accountInfo.getCompanyContact());
                }
                if (accountInfo.getMobileNumber() != null) {
                    existingAccountInfo.setMobileNumber(accountInfo.getMobileNumber());
                }
                if (accountInfo.getAccountStatus() != null) {
                    existingAccountInfo.setAccountStatus(accountInfo.getAccountStatus());
                }
                if (accountInfo.getCreateTime() != null) {
                    existingAccountInfo.setCreateTime(accountInfo.getCreateTime());
                }
                if (accountInfo.getUpdateTime() != null) {
                    existingAccountInfo.setUpdateTime(accountInfo.getUpdateTime());
                }

                return existingAccountInfo;
            })
            .flatMap(accountInfoRepository::save);
    }

    /**
     * Get all the accountInfos.
     *
     * @return the list of entities.
     */
    @Transactional(readOnly = true)
    public Flux<AccountInfo> findAll() {
        LOG.debug("Request to get all AccountInfos");
        return accountInfoRepository.findAll();
    }

    /**
     * Returns the number of accountInfos available.
     * @return the number of entities in the database.
     *
     */
    public Mono<Long> countAll() {
        return accountInfoRepository.count();
    }

    /**
     * Get one accountInfo by id.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    @Transactional(readOnly = true)
    public Mono<AccountInfo> findOne(Long id) {
        LOG.debug("Request to get AccountInfo : {}", id);
        return accountInfoRepository.findById(id);
    }

    /**
     * Delete the accountInfo by id.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    public Mono<Void> delete(Long id) {
        LOG.debug("Request to delete AccountInfo : {}", id);
        return accountInfoRepository.deleteById(id);
    }
}
