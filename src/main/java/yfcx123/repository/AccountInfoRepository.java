package yfcx123.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;
import yfcx123.domain.AccountInfo;

@Repository
public interface AccountInfoRepository extends JpaRepository<AccountInfo, Long> {
    Optional<AccountInfo> findOneBySocialCreditCode(String socialCreditCode);
    Optional<AccountInfo> findOneByMobileNumber(String mobileNumber);
}
