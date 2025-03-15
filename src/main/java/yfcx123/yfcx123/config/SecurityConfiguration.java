package yfcx123.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * Spring Security 配置类
 * 在该类中配置 PasswordEncoder Bean 用于密码加密
 */
@Configuration
public class SecurityConfiguration {

    /**
     * 配置 PasswordEncoder Bean
     * @return BCryptPasswordEncoder 加密器
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(); // 使用 BCrypt 加密
    }
}
