package yfcx123.service;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.time.temporal.ChronoUnit;
import java.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import reactor.core.scheduler.Schedulers;
import tech.jhipster.security.RandomUtil;
import yfcx123.config.Constants;
import yfcx123.domain.Authority;
import yfcx123.domain.User;
import yfcx123.repository.AuthorityRepository;
import yfcx123.repository.UserRepository;
import yfcx123.security.AuthoritiesConstants;
import yfcx123.security.SecurityUtils;
import yfcx123.service.dto.AdminUserDTO;
import yfcx123.service.dto.UserDTO;

/**
 * Service class for managing users.
 */
@Service
public class UserService {

    private static final Logger LOG = LoggerFactory.getLogger(UserService.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthorityRepository authorityRepository;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, AuthorityRepository authorityRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityRepository = authorityRepository;
    }

    /**
     * 密码加密统一入口
     * @param rawPassword 明文密码
     * @return BCrypt加密后的密码
     */
    public String encodePassword(String rawPassword) {
        return passwordEncoder.encode(rawPassword);
    }

    // Method to activate user registration
    @Transactional
    public Mono<User> activateRegistration(String key) {
        LOG.debug("Activating user for activation key {}", key);
        return userRepository
            .findOneByActivationKey(key)
            .flatMap(user -> {
                user.setActivated(true);
                user.setActivationKey(null);
                return saveUser(user);
            })
            .doOnNext(user -> LOG.debug("Activated user: {}", user));
    }

    // Method to complete password reset
    @Transactional
    public Mono<User> completePasswordReset(String newPassword, String key) {
        LOG.debug("Reset user password for reset key {}", key);
        return userRepository
            .findOneByResetKey(key)
            .filter(user -> user.getResetDate().isAfter(Instant.now().minus(1, ChronoUnit.DAYS)))
            .map(user -> {
                user.setPassword(passwordEncoder.encode(newPassword));
                user.setResetKey(null);
                user.setResetDate(null);
                return user;
            })
            .flatMap(this::saveUser);
    }

    // Method to request password reset
    @Transactional
    public Mono<User> requestPasswordReset(String mail) {
        return userRepository
            .findOneByEmailIgnoreCase(mail)
            .filter(User::isActivated)
            .map(user -> {
                user.setResetKey(RandomUtil.generateResetKey());
                user.setResetDate(Instant.now());
                return user;
            })
            .flatMap(this::saveUser);
    }

    // Method to register a new user
    @Transactional
    public Mono<User> registerUser(AdminUserDTO userDTO, String password) {
        return checkUserExistence(userDTO)
            .then(
                Mono.fromCallable(() -> {
                    User newUser = createUserFromDTO(userDTO);
                    newUser.setPassword(passwordEncoder.encode(password));
                    newUser.setActivated(false);
                    newUser.setActivationKey(RandomUtil.generateActivationKey());
                    return newUser;
                })
            )
            .flatMap(newUser ->
                authorityRepository
                    .findById(AuthoritiesConstants.USER)
                    .map(authority -> {
                        newUser.getAuthorities().add(authority);
                        return newUser;
                    })
                    .flatMap(this::saveUser)
            );
    }

    // Helper method to check if user already exists
    private Mono<Void> checkUserExistence(AdminUserDTO userDTO) {
        return Mono.when(
            userRepository
                .findOneByLogin(userDTO.getLogin().toLowerCase())
                .flatMap(existingUser -> {
                    if (!existingUser.isActivated()) {
                        return userRepository.delete(existingUser);
                    } else {
                        return Mono.error(new UsernameAlreadyUsedException());
                    }
                }),
            userRepository
                .findOneByEmailIgnoreCase(userDTO.getEmail())
                .flatMap(existingUser -> {
                    if (!existingUser.isActivated()) {
                        return userRepository.delete(existingUser);
                    } else {
                        return Mono.error(new EmailAlreadyUsedException());
                    }
                })
        );
    }

    // Helper method to create a user from AdminUserDTO
    private User createUserFromDTO(AdminUserDTO userDTO) {
        User newUser = new User();
        newUser.setLogin(userDTO.getLogin().toLowerCase());
        newUser.setFirstName(userDTO.getFirstName());
        newUser.setLastName(userDTO.getLastName());
        if (userDTO.getEmail() != null) {
            newUser.setEmail(userDTO.getEmail().toLowerCase());
        }
        newUser.setImageUrl(userDTO.getImageUrl());
        newUser.setLangKey(userDTO.getLangKey() != null ? userDTO.getLangKey() : Constants.DEFAULT_LANGUAGE);
        return newUser;
    }

    // Method to save user and its authorities
    @Transactional
    public Mono<User> saveUser(User user) {
        return SecurityUtils.getCurrentUserLogin()
            .switchIfEmpty(Mono.just(Constants.SYSTEM))
            .flatMap(login -> {
                if (user.getCreatedBy() == null) {
                    user.setCreatedBy(login);
                }
                user.setLastModifiedBy(login);
                return userRepository.save(user);
            });
    }

    // Method to change password
    @Transactional
    public Mono<Void> changePassword(String currentClearTextPassword, String newPassword) {
        return SecurityUtils.getCurrentUserLogin()
            .flatMap(userRepository::findOneByLogin)
            .map(user -> {
                if (!passwordEncoder.matches(currentClearTextPassword, user.getPassword())) {
                    throw new InvalidPasswordException();
                }
                user.setPassword(passwordEncoder.encode(newPassword));
                return user;
            })
            .flatMap(this::saveUser)
            .doOnNext(user -> LOG.debug("Changed password for User: {}", user))
            .then();
    }

    @Transactional(readOnly = true)
    public Flux<AdminUserDTO> getAllManagedUsers(Pageable pageable) {
        return userRepository.findAllWithAuthorities(pageable).map(AdminUserDTO::new);
    }

    @Transactional(readOnly = true)
    public Mono<User> getUserWithAuthoritiesByLogin(String login) {
        return userRepository.findOneWithAuthoritiesByLogin(login);
    }
}
