package yfcx123.service;

import com.aliyuncs.DefaultAcsClient;
import com.aliyuncs.exceptions.ClientException;
import com.aliyuncs.profile.DefaultProfile;
import com.aliyuncs.profile.IClientProfile;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsRequest;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * SmsService类，用于调用阿里云短信服务发送验证码。
 */
@Service
public class SmsService {

    // 从配置文件中读取阿里云的AccessKey和AccessKeySecret
    @Value("${application.aliyun.sms.access-key-id}")
    private String accessKeyId;

    @Value("${application.aliyun.sms.access-key-secret}")
    private String accessKeySecret;

    @Value("${application.aliyun.sms.sign-name}")
    private String signName;

    @Value("${application.aliyun.sms.template-code}")
    private String templateCode;

    // 短信验证码有效期
    @Value("${application.aliyun.sms.code-expire}")
    private int codeExpire;

    // 每个手机号的短信发送限制
    @Value("${application.aliyun.sms.send-limit}")
    private int sendLimit;

    /**
     * 发送短信验证码
     *
     * @param mobile 手机号
     * @param code   验证码
     * @throws ClientException 阿里云客户端异常
     */
    public SendSmsResponse sendSms(String mobile, String code) throws ClientException {

        // 创建客户端配置
        IClientProfile profile = DefaultProfile.getProfile(
                "cn-hangzhou", // 阿里云短信服务的地域ID
                accessKeyId,
                accessKeySecret
        );
        
        DefaultProfile.addEndpoint("cn-hangzhou", "cn-hangzhou", "Dysmsapi", "dysmsapi.aliyuncs.com");

        // 创建短信客户端
        DefaultAcsClient acsClient = new DefaultAcsClient(profile);

        // 创建短信请求对象
        SendSmsRequest request = new SendSmsRequest();
        request.setPhoneNumbers(mobile);  // 手机号
        request.setSignName(signName);    // 短信签名
        request.setTemplateCode(templateCode);  // 短信模板
        request.setTemplateParam("{\"code\":\"" + code + "\"}"); // 短信模板中的验证码参数

        // 发送短信
        SendSmsResponse response = acsClient.getAcsResponse(request);

        // 根据返回的结果进行处理
        if ("OK".equals(response.getCode())) {
            // 短信发送成功
            System.out.println("短信发送成功");
        } else {
            // 短信发送失败，打印错误信息
            System.out.println("短信发送失败，错误信息：" + response.getMessage());
        }

        return response;
    }
}
