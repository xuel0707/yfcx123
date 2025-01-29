package yfcx123.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import yfcx123.domain.AccountInfo;

/**
 * Spring Data R2DBC repository for the AccountInfo entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AccountInfoRepository extends ReactiveCrudRepository<AccountInfo, Long>, AccountInfoRepositoryInternal {
    @Override
    <S extends AccountInfo> Mono<S> save(S entity);

    @Override
    Flux<AccountInfo> findAll();

    @Override
    Mono<AccountInfo> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface AccountInfoRepositoryInternal {
    <S extends AccountInfo> Mono<S> save(S entity);

    Flux<AccountInfo> findAllBy(Pageable pageable);

    Flux<AccountInfo> findAll();

    Mono<AccountInfo> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<AccountInfo> findAllBy(Pageable pageable, Criteria criteria);
}
