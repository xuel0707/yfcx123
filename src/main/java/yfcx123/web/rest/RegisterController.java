package yfcx123.web.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import yfcx123.service.AccountService;
import yfcx123.service.UserService;
import yfcx123.service.dto.AccountRegisterDTO;
import yfcx123.web.rest.vm.RegisterVM;

import jakarta.validation.Valid;

/**
 * Controller to handle account registration requests.
 */
@RestController
@RequestMapping("/api")
public class RegisterController {

    private static final Logger LOG = LoggerFactory.getLogger(RegisterController.class);

    private final AccountService accountService;
    private final UserService userService;  
    private final PasswordEncoder passwordEncoder;

    public RegisterController(AccountService accountService, UserService userService, PasswordEncoder passwordEncoder) {
        this.accountService = accountService;
        this.userService = userService; 
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * {@code POST /register} : register a new account.
     *
     * @param registerVM the new account information to be registered.
     * @return the response with HTTP status code 201 (Created) and the account details.
     */
    @PostMapping("/register")
    public ResponseEntity<?> registerAccount(@Valid @RequestBody RegisterVM registerVM) {
        LOG.debug("REST request to register a new account : {}", registerVM);

        // Create AccountRegisterDTO from RegisterVM
        AccountRegisterDTO accountDTO = new AccountRegisterDTO();
        accountDTO.setCompanyName(registerVM.getCompanyName());
        accountDTO.setSocialCreditCode(registerVM.getSocialCreditCode());
        accountDTO.setEntityLegalPerson(registerVM.getEntityLegalPerson());
        accountDTO.setPassword(registerVM.getPassword());
        accountDTO.setFullyAddress(registerVM.getFullyAddress());
        accountDTO.setCompanyContact(registerVM.getCompanyContact());
        accountDTO.setMobileNumber(registerVM.getMobileNumber());
        accountDTO.setSmsCode(registerVM.getSmsCode());

        try {
            // Encrypt password using UserService's encodePassword method
            String encryptedPassword = userService.encodePassword(accountDTO.getPassword());
            accountDTO.setPassword(encryptedPassword);  // Replace the plain password with the encrypted one

            // Call service layer to register the account
            accountService.registerAccount(accountDTO);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (Exception e) {
            LOG.error("Account registration failed: {}", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Account registration failed");
        }
    }

    /**
     * {@code GET /register} : check if registration is available (optional).
     * This could be used to check registration status or other information.
     * @return a message indicating the registration status.
     */
    @GetMapping(value = "/register", produces = "text/plain")
    public String isRegistrationAvailable() {
        LOG.debug("REST request to check if registration is available");
        // This can be extended to check for any conditions, for example, whether registration is open
        return "Registration is open!";
    }
}
