package yfcx123.web.rest.vm;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * ViewModel for account registration.
 */
public class RegisterVM {

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
    @Size(min = 4, max = 50)
    private String password;

    @NotBlank
    @Size(max = 255)
    private String fullyAddress;

    @NotBlank
    @Size(max = 50)
    private String companyContact;

    @NotBlank
    @Pattern(regexp = "^1[3-9]\\d{9}$")
    private String mobileNumber;

    @NotBlank
    @Size(min = 6, max = 6)
    private String smsCode;

    // Getters and Setters

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

    @Override
    public String toString() {
        return "RegisterVM{" +
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
}
