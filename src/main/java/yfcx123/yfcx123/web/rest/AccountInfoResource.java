package yfcx123.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;
import yfcx123.domain.AccountInfo;
import yfcx123.repository.AccountInfoRepository;
import yfcx123.service.AccountInfoService;
import yfcx123.web.rest.errors.BadRequestAlertException;

/**
 * REST controller for managing {@link yfcx123.domain.AccountInfo}.
 */
@RestController
@RequestMapping("/api/account-infos")
public class AccountInfoResource {

    private static final Logger LOG = LoggerFactory.getLogger(AccountInfoResource.class);

    private static final String ENTITY_NAME = "accountInfo";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final AccountInfoService accountInfoService;

    private final AccountInfoRepository accountInfoRepository;

    public AccountInfoResource(AccountInfoService accountInfoService, AccountInfoRepository accountInfoRepository) {
        this.accountInfoService = accountInfoService;
        this.accountInfoRepository = accountInfoRepository;
    }

    /**
     * {@code POST  /account-infos} : Create a new accountInfo.
     *
     * @param accountInfo the accountInfo to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new accountInfo, or with status {@code 400 (Bad Request)} if the accountInfo has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("")
    public Mono<ResponseEntity<AccountInfo>> createAccountInfo(@RequestBody AccountInfo accountInfo) throws URISyntaxException {
        LOG.debug("REST request to save AccountInfo : {}", accountInfo);
        if (accountInfo.getId() != null) {
            throw new BadRequestAlertException("A new accountInfo cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return accountInfoService
            .save(accountInfo)
            .map(result -> {
                try {
                    return ResponseEntity.created(new URI("/api/account-infos/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /account-infos/:id} : Updates an existing accountInfo.
     *
     * @param id the id of the accountInfo to save.
     * @param accountInfo the accountInfo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accountInfo,
     * or with status {@code 400 (Bad Request)} if the accountInfo is not valid,
     * or with status {@code 500 (Internal Server Error)} if the accountInfo couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/{id}")
    public Mono<ResponseEntity<AccountInfo>> updateAccountInfo(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody AccountInfo accountInfo
    ) throws URISyntaxException {
        LOG.debug("REST request to update AccountInfo : {}, {}", id, accountInfo);
        if (accountInfo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accountInfo.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return accountInfoRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return accountInfoService
                    .update(accountInfo)
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(result ->
                        ResponseEntity.ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                            .body(result)
                    );
            });
    }

    /**
     * {@code PATCH  /account-infos/:id} : Partial updates given fields of an existing accountInfo, field will ignore if it is null
     *
     * @param id the id of the accountInfo to save.
     * @param accountInfo the accountInfo to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated accountInfo,
     * or with status {@code 400 (Bad Request)} if the accountInfo is not valid,
     * or with status {@code 404 (Not Found)} if the accountInfo is not found,
     * or with status {@code 500 (Internal Server Error)} if the accountInfo couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<AccountInfo>> partialUpdateAccountInfo(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody AccountInfo accountInfo
    ) throws URISyntaxException {
        LOG.debug("REST request to partial update AccountInfo partially : {}, {}", id, accountInfo);
        if (accountInfo.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, accountInfo.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return accountInfoRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<AccountInfo> result = accountInfoService.partialUpdate(accountInfo);

                return result
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(res ->
                        ResponseEntity.ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, res.getId().toString()))
                            .body(res)
                    );
            });
    }

    /**
     * {@code GET  /account-infos} : get all the accountInfos.
     *
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of accountInfos in body.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<List<AccountInfo>> getAllAccountInfos() {
        LOG.debug("REST request to get all AccountInfos");
        return accountInfoService.findAll().collectList();
    }

    /**
     * {@code GET  /account-infos} : get all the accountInfos as a stream.
     * @return the {@link Flux} of accountInfos.
     */
    @GetMapping(value = "", produces = MediaType.APPLICATION_NDJSON_VALUE)
    public Flux<AccountInfo> getAllAccountInfosAsStream() {
        LOG.debug("REST request to get all AccountInfos as a stream");
        return accountInfoService.findAll();
    }

    /**
     * {@code GET  /account-infos/:id} : get the "id" accountInfo.
     *
     * @param id the id of the accountInfo to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the accountInfo, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/{id}")
    public Mono<ResponseEntity<AccountInfo>> getAccountInfo(@PathVariable("id") Long id) {
        LOG.debug("REST request to get AccountInfo : {}", id);
        Mono<AccountInfo> accountInfo = accountInfoService.findOne(id);
        return ResponseUtil.wrapOrNotFound(accountInfo);
    }

    /**
     * {@code DELETE  /account-infos/:id} : delete the "id" accountInfo.
     *
     * @param id the id of the accountInfo to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/{id}")
    public Mono<ResponseEntity<Void>> deleteAccountInfo(@PathVariable("id") Long id) {
        LOG.debug("REST request to delete AccountInfo : {}", id);
        return accountInfoService
            .delete(id)
            .then(
                Mono.just(
                    ResponseEntity.noContent()
                        .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
                        .build()
                )
            );
    }
}
