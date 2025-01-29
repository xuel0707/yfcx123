package yfcx123.web.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import yfcx123.service.SmsService;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;

/**
 * 控制器类，用于处理短信验证码相关的请求。
 */
@RestController
@RequestMapping("/api/sms")
public class SmsController {

    private final SmsService smsService;

    @Autowired
    public SmsController(SmsService smsService) {
        this.smsService = smsService;
    }

    /**
     * 发送短信验证码
     *
     * @param mobile 用户的手机号
     * @return 发送结果
     */
    @PostMapping("/send-code")
    public ResponseEntity<?> sendSmsCode(@RequestParam String mobile) {
        // 生成一个6位的随机验证码
        String code = generateRandomCode();

        try {
            // 调用 SmsService 来发送验证码
            SendSmsResponse response = smsService.sendSms(mobile, code);

            // 如果短信发送成功
            if ("OK".equals(response.getCode())) {
                return ResponseEntity.ok(new ApiResponse(true, "验证码发送成功"));
            } else {
                // 如果阿里云返回错误码
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body(new ApiResponse(false, "短信发送失败：" + response.getMessage()));
            }
        } catch (ClientException e) {
            // 捕获阿里云短信服务的异常，并返回失败信息
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse(false, "验证码发送失败，原因：" + e.getMessage()));
        }
    }

    /**
     * 生成一个随机的6位验证码
     * @return 随机验证码
     */
    private String generateRandomCode() {
        return String.valueOf((int) (Math.random() * 900000) + 100000); // 生成6位随机数字
    }

    /**
     * API响应标准类，用于封装返回的数据
     */
    public static class ApiResponse {
        private boolean success;
        private String message;

        public ApiResponse(boolean success, String message) {
            this.success = success;
            this.message = message;
        }

        // Getters and setters
        public boolean isSuccess() {
            return success;
        }

        public void setSuccess(boolean success) {
            this.success = success;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
