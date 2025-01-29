package yfcx123.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static yfcx123.domain.AccountInfoTestSamples.*;

import org.junit.jupiter.api.Test;
import yfcx123.web.rest.TestUtil;

class AccountInfoTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(AccountInfo.class);
        AccountInfo accountInfo1 = getAccountInfoSample1();
        AccountInfo accountInfo2 = new AccountInfo();
        assertThat(accountInfo1).isNotEqualTo(accountInfo2);

        accountInfo2.setId(accountInfo1.getId());
        assertThat(accountInfo1).isEqualTo(accountInfo2);

        accountInfo2 = getAccountInfoSample2();
        assertThat(accountInfo1).isNotEqualTo(accountInfo2);
    }
}
