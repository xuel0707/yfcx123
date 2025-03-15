package yfcx123.service;

import java.time.Duration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

@Component
public class VerificationCodeCache {

    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    // 从配置文件中加载前缀和过期时间，方便后期修改
    @Value("${sms.code.key.prefix:sms:code:}") // 默认值为 sms:code:
    private String keyPrefix;

    @Value("${sms.code.expiration:5}") // 默认过期时间为 5 分钟
    private int expirationMinutes;

    private Duration expiration;

    public VerificationCodeCache() {
        // 初始化过期时间
        this.expiration = Duration.ofMinutes(expirationMinutes);
    }

    public void saveCode(String mobile, String code) {
        redisTemplate.opsForValue().set(keyPrefix + mobile, code, expiration);
    }

    public boolean validateCode(String mobile, String code) {
        String storedCode = redisTemplate.opsForValue().get(keyPrefix + mobile);

        // 如果验证码不存在，返回 false
        if (storedCode == null) {
            return false;
        }

        // 验证验证码是否匹配
        return code.equals(storedCode);
    }
}
