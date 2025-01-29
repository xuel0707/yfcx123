package yfcx123.service.dto;

import jakarta.validation.constraints.*;
import java.io.Serializable;
import java.util.Objects;

public class AccountRegisterDTO implements Serializable {

    @NotBlank
    @Size(max = 100)
    private String companyName;

    @NotBlank
    @Size(min = 18, max = 18)
    private String socialCreditCode;

    @NotBlank
    @Size(max = 50)
    private String entityLegalPerson;

    @NotBlank
    @Size(min = 6, max = 50)  // 密码长度要求根据实际业务调整
    private String password;

    @NotBlank
    @Size(max = 255)
    private String fullyAddress;

    @NotBlank
    @Size(max = 50)
    private String companyContact;

    @NotBlank
    @Pattern(regexp = "^1[3-9]\\d{9}$", message = "手机号格式不正确")
    private String mobileNumber;

    @NotBlank
    @Size(min = 6, max = 6)
    private String smsCode;

    // ------------------- Getters & Setters -------------------
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
        this.password = password;
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

    public String getSmsCode() {
        return smsCode;
    }

    public void setSmsCode(String smsCode) {
        this.smsCode = smsCode;
    }

    // ------------------- toString 方法 -------------------
    @Override
    public String toString() {
        return "AccountRegisterDTO{" +
                "companyName='" + companyName + '\'' +
                ", socialCreditCode='" + socialCreditCode + '\'' +
                ", entityLegalPerson='" + entityLegalPerson + '\'' +
                ", password='" + password + '\'' +
                ", fullyAddress='" + fullyAddress + '\'' +
                ", companyContact='" + companyContact + '\'' +
                ", mobileNumber='" + mobileNumber + '\'' +
                ", smsCode='" + smsCode + '\'' +
                '}';
    }

    // ------------------- equals 方法 -------------------
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        AccountRegisterDTO that = (AccountRegisterDTO) o;
        return Objects.equals(companyName, that.companyName) &&
                Objects.equals(socialCreditCode, that.socialCreditCode) &&
                Objects.equals(entityLegalPerson, that.entityLegalPerson) &&
                Objects.equals(password, that.password) &&
                Objects.equals(fullyAddress, that.fullyAddress) &&
                Objects.equals(companyContact, that.companyContact) &&
                Objects.equals(mobileNumber, that.mobileNumber) &&
                Objects.equals(smsCode, that.smsCode);
    }

    // ------------------- hashCode 方法 -------------------
    @Override
    public int hashCode() {
        return Objects.hash(companyName, socialCreditCode, entityLegalPerson, password, fullyAddress, companyContact, mobileNumber, smsCode);
    }
}
