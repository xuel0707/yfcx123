package yfcx123.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.time.Instant;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


@Entity
@Table(name = "account_info")
public class AccountInfo extends AbstractAuditingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @NotBlank
    @Size(max = 100)
    @Column(name = "company_name", length = 100, nullable = false)
    private String companyName;

    @NotBlank
    @Size(min = 18, max = 18)
    @Column(name = "social_credit_code", length = 18, unique = true, nullable = false)
    private String socialCreditCode;

    @NotBlank
    @Size(max = 50)
    @Column(name = "entity_legal_person", length = 50, nullable = false)
    private String entityLegalPerson;

    @NotBlank
    @Column(name = "password", nullable = false)
    private String password;

    @NotBlank
    @Size(max = 255)
    @Column(name = "fully_address", nullable = false)
    private String fullyAddress;

    @NotBlank
    @Size(max = 50)
    @Column(name = "company_contact", length = 50, nullable = false)
    private String companyContact;

    @NotBlank
    @Pattern(regexp = "^1[3-9]\\d{9}$") // 手机号正则校验
    @Column(name = "mobile_number", length = 20, nullable = false)
    private String mobileNumber;

    @Column(name = "account_status", columnDefinition = "TINYINT(1) DEFAULT 1")
    private Integer accountStatus = 1; // 1-正常 0-冻结

    // 继承 AbstractAuditingEntity 自动获得 createTime 和 updateTime
    // 无需手动定义这两个字段

    // ------------------- Getters & Setters -------------------

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getSocialCreditCode() {
        return socialCreditCode;
    }

    public void setSocialCreditCode(String socialCreditCode) {
        this.socialCreditCode = socialCreditCode;
    }

    public String getEntityLegalPerson() {
        return entityLegalPerson;
    }

    public void setEntityLegalPerson(String entityLegalPerson) {
        this.entityLegalPerson = entityLegalPerson;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        this.password = passwordEncoder.encode(password); // 加密密码
    }

    public String getFullyAddress() {
        return fullyAddress;
    }

    public void setFullyAddress(String fullyAddress) {
        this.fullyAddress = fullyAddress;
    }

    public String getCompanyContact() {
        return companyContact;
    }

    public void setCompanyContact(String companyContact) {
        this.companyContact = companyContact;
    }

    public String getMobileNumber() {
        return mobileNumber;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Integer getAccountStatus() {
        return accountStatus;
    }

    public void setAccountStatus(Integer accountStatus) {
        this.accountStatus = accountStatus;
    }
}
