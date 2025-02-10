package yfcx123.domain;

import java.io.Serializable;
import java.time.ZonedDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A AccountInfo.
 */
@Table("account_info")
@SuppressWarnings("common-java:DuplicatedBlocks")
public class AccountInfo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Column("account_id")
    private Integer accountId;

    @Column("company_name")
    private String companyName;

    @Column("social_credit_code")
    private String socialCreditCode;

    @Column("entity_legal_person")
    private String entityLegalPerson;

    @Column("password")
    private String password;

    @Column("fully_address")
    private String fullyAddress;

    @Column("company_contact")
    private String companyContact;

    @Column("mobile_number")
    private String mobileNumber;

    @Column("account_status")
    private Integer accountStatus;

    @Column("create_time")
    private ZonedDateTime createTime;

    @Column("update_time")
    private ZonedDateTime updateTime;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public AccountInfo id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getAccountId() {
        return this.accountId;
    }

    public AccountInfo accountId(Integer accountId) {
        this.setAccountId(accountId);
        return this;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    public String getCompanyName() {
        return this.companyName;
    }

    public AccountInfo companyName(String companyName) {
        this.setCompanyName(companyName);
        return this;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getSocialCreditCode() {
        return this.socialCreditCode;
    }

    public AccountInfo socialCreditCode(String socialCreditCode) {
        this.setSocialCreditCode(socialCreditCode);
        return this;
    }

    public void setSocialCreditCode(String socialCreditCode) {
        this.socialCreditCode = socialCreditCode;
    }

    public String getEntityLegalPerson() {
        return this.entityLegalPerson;
    }

    public AccountInfo entityLegalPerson(String entityLegalPerson) {
        this.setEntityLegalPerson(entityLegalPerson);
        return this;
    }

    public void setEntityLegalPerson(String entityLegalPerson) {
        this.entityLegalPerson = entityLegalPerson;
    }

    public String getPassword() {
        return this.password;
    }

    public AccountInfo password(String password) {
        this.setPassword(password);
        return this;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullyAddress() {
        return this.fullyAddress;
    }

    public AccountInfo fullyAddress(String fullyAddress) {
        this.setFullyAddress(fullyAddress);
        return this;
    }

    public void setFullyAddress(String fullyAddress) {
        this.fullyAddress = fullyAddress;
    }

    public String getCompanyContact() {
        return this.companyContact;
    }

    public AccountInfo companyContact(String companyContact) {
        this.setCompanyContact(companyContact);
        return this;
    }

    public void setCompanyContact(String companyContact) {
        this.companyContact = companyContact;
    }

    public String getMobileNumber() {
        return this.mobileNumber;
    }

    public AccountInfo mobileNumber(String mobileNumber) {
        this.setMobileNumber(mobileNumber);
        return this;
    }

    public void setMobileNumber(String mobileNumber) {
        this.mobileNumber = mobileNumber;
    }

    public Integer getAccountStatus() {
        return this.accountStatus;
    }

    public AccountInfo accountStatus(Integer accountStatus) {
        this.setAccountStatus(accountStatus);
        return this;
    }

    public void setAccountStatus(Integer accountStatus) {
        this.accountStatus = accountStatus;
    }

    public ZonedDateTime getCreateTime() {
        return this.createTime;
    }

    public AccountInfo createTime(ZonedDateTime createTime) {
        this.setCreateTime(createTime);
        return this;
    }

    public void setCreateTime(ZonedDateTime createTime) {
        this.createTime = createTime;
    }

    public ZonedDateTime getUpdateTime() {
        return this.updateTime;
    }

    public AccountInfo updateTime(ZonedDateTime updateTime) {
        this.setUpdateTime(updateTime);
        return this;
    }

    public void setUpdateTime(ZonedDateTime updateTime) {
        this.updateTime = updateTime;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof AccountInfo)) {
            return false;
        }
        return getId() != null && getId().equals(((AccountInfo) o).getId());
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "AccountInfo{" +
            "id=" + getId() +
            ", accountId=" + getAccountId() +
            ", companyName='" + getCompanyName() + "'" +
            ", socialCreditCode='" + getSocialCreditCode() + "'" +
            ", entityLegalPerson='" + getEntityLegalPerson() + "'" +
            ", password='" + getPassword() + "'" +
            ", fullyAddress='" + getFullyAddress() + "'" +
            ", companyContact='" + getCompanyContact() + "'" +
            ", mobileNumber='" + getMobileNumber() + "'" +
            ", accountStatus=" + getAccountStatus() +
            ", createTime='" + getCreateTime() + "'" +
            ", updateTime='" + getUpdateTime() + "'" +
            "}";
    }
}
