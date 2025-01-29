package yfcx123.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import yfcx123.repository.AccountInfoRepository;
import yfcx123.service.dto.AccountRegisterDTO;

@Service
@Transactional
public class AccountService {
    
    private final AccountInfoRepository accountInfoRepository;
    private final PasswordEncoder passwordEncoder;
    private final VerificationCodeCache verificationCodeCache; // 确保此类存在并能正常工作
    private static final Logger logger = LoggerFactory.getLogger(AccountService.class);

    @Autowired
    public AccountService(AccountInfoRepository accountInfoRepository, 
                          PasswordEncoder passwordEncoder,
                          VerificationCodeCache verificationCodeCache) {
        this.accountInfoRepository = accountInfoRepository;
        this.passwordEncoder = passwordEncoder;
        this.verificationCodeCache = verificationCodeCache;
    }

    public void registerAccount(AccountRegisterDTO accountDTO) {
        


    }

}
