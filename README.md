#218.17.137.219
#用户名：saas
#密码：YF@saas2024
#80端口对外开放的是8383


#运行容器：
docker container run --name jhipster -v /home/saas/yfcx123:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

#docker进入容器
docker container exec -it --user root jhipster bash

#初始化安装（只执行一次）
jhipster


#启动web服务
npm start

#上传代码
git add .
git commit -m "首页修改完善"
git push origin main

#下载代码
git pull origin main


xuelei0707@gmail.com
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

#总体架构：
/
├── src/
│   └── main/
│       ├── java/            # Java 源代码
│       ├── resources/       # 资源文件
│       │   └── config/      # 配置文件目录
│       │       ├── application.yml          # 主配置文件
│       │       ├── application-dev.yml      # 开发环境配置
│       │       └── application-prod.yml     # 生产环境配置
│       └── webapp/         # Web资源
├── target/                 # 编译输出目录
└── pom.xml                # Maven 项目配置文件



运行数据库容器
docker run -d --name mysql-server \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v /home/saas/yf123_db:/var/lib/mysql \
  mysql:8.0 \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci \
  --bind-address=0.0.0.0  


#docker进入容器
docker exec -it mysql-server mysql -u root -p

-- 创建数据库
CREATE DATABASE yf123;


-- 切换到新数据库
USE yf123;

1、register.vue组件的后端设计；

-- 创建账户信息表
CREATE TABLE IF NOT EXISTS `account_info` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '账户唯一ID',
  `companyName` VARCHAR(100) NOT NULL COMMENT '企业名称',
  `socialCreditCode` CHAR(18) NOT NULL UNIQUE COMMENT '统一社会信用代码',
  `entityLegalPerson` VARCHAR(50) NOT NULL COMMENT '企业法人',
  `password` VARCHAR(255) NOT NULL COMMENT '加密密码',
  `fullyAddress` VARCHAR(255) NOT NULL COMMENT '完整地址（省市区+详细地址）',
  `companyContact` VARCHAR(50) NOT NULL COMMENT '企业联系人',
  `mobileNumber` VARCHAR(20) NOT NULL COMMENT '手机号码',
  `accountStatus` TINYINT(1) DEFAULT 1 COMMENT '账户状态（1-正常，0-冻结）',
  `createTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updateTime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  INDEX `idx_social_credit_code` (`socialCreditCode`),
  INDEX `idx_mobile` (`mobileNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='企业账户信息表';

springboot后端设计
1、创建实体类 AccountInfo；src/main/java/yfcx123/domain/AccountInfo.java
2、创建数据传输对象 (DTO)；src/main/java/yfcx123/service/dto/AccountRegisterDTO.java
3、创建服务层 RegisterService；src/main/java/yfcx123/service/AccountService.java；
4、创建控制器 RegisterController；src/main/java/yfcx123/web/rest/RegisterController.java
5、配置短信服务（可选）
5.1：添加依赖
在 pom.xml 中添加了阿里云的短信 SDK 依赖
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-core</artifactId>
    <version>4.2.5</version> <!-- 确保版本是最新的 -->
</dependency>

<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>aliyun-java-sdk-dysmsapi</artifactId>
    <version>1.0.0</version> <!-- 阿里云短信服务SDK -->
</dependency>
5.2：配置阿里云的 AccessKey 和 AccessKeySecret
在 src/main/resources/application.yml 中添加以下配置：
application:
  # 阿里云短信服务配置（开发环境明文，生产环境需加密）
  aliyun:
    sms:
      access-key-id: LTA15tRBBHaAF6cGqBbln6ed
      access-key-secret: wDbp1GAWWsIFgCzEQNbTmPUfluTMRg
      sign-name: "远方123"
      template-code: "SMS_285020683"
      code-expire: 300
      send-limit: 3
5.3：创建短信服务类src/main/java/yfcx123/service/SmsService.java
5.4：在控制器中使用 SmsService 发送验证码src/main/java/yfcx123/web/rest/SmsController.java
5.5：处理响应
6、配置加密器src/main/java/yfcx123/config/SecurityConfiguration.java
7、配置数据库（JPA）
在 src/main/resources/application.yml 中添加以下配置：
spring:
  config:
    activate:
      on-profile: '!api-docs'
  datasource:
    url: jdbc:mysql://localhost:3306/yf123?useSSL=false&serverTimezone=UTC&useLegacyDatetimeCode=false
    username: root
    password: 123456
    driver-class-name: com.mysql.cj.jdbc.Driver
  # redis:
  #   host: localhost
  #   port: 6379
  jpa:
    database-platform: org.hibernate.dialect.MySQL8Dialect
    hibernate:
      ddl-auto: update  # 选项有 create、create-drop、update、none
    show-sql: true  # 打印 SQL 到控制台
    properties:
      hibernate:
        format_sql: true  # 格式化 SQL
