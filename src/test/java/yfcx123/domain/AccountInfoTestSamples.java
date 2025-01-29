package yfcx123.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.AtomicLong;

public class AccountInfoTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));
    private static final AtomicInteger intCount = new AtomicInteger(random.nextInt() + (2 * Short.MAX_VALUE));

    public static AccountInfo getAccountInfoSample1() {
        return new AccountInfo()
            .id(1L)
            .accountId(1)
            .companyName("companyName1")
            .socialCreditCode("socialCreditCode1")
            .entityLegalPerson("entityLegalPerson1")
            .password("password1")
            .fullyAddress("fullyAddress1")
            .companyContact("companyContact1")
            .mobileNumber("mobileNumber1")
            .accountStatus(1);
    }

    public static AccountInfo getAccountInfoSample2() {
        return new AccountInfo()
            .id(2L)
            .accountId(2)
            .companyName("companyName2")
            .socialCreditCode("socialCreditCode2")
            .entityLegalPerson("entityLegalPerson2")
            .password("password2")
            .fullyAddress("fullyAddress2")
            .companyContact("companyContact2")
            .mobileNumber("mobileNumber2")
            .accountStatus(2);
    }

    public static AccountInfo getAccountInfoRandomSampleGenerator() {
        return new AccountInfo()
            .id(longCount.incrementAndGet())
            .accountId(intCount.incrementAndGet())
            .companyName(UUID.randomUUID().toString())
            .socialCreditCode(UUID.randomUUID().toString())
            .entityLegalPerson(UUID.randomUUID().toString())
            .password(UUID.randomUUID().toString())
            .fullyAddress(UUID.randomUUID().toString())
            .companyContact(UUID.randomUUID().toString())
            .mobileNumber(UUID.randomUUID().toString())
            .accountStatus(intCount.incrementAndGet());
    }
}
