
# 开发服务器 218.17.137.219
# 用户名：saas
# 密码：YF@saas2024
# 80端口对外开放的是8383
# ssh端口：8322


# 运行容器：
$ docker container run --name jhipster -v /home/saas/yfcx123:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

# docker进入app容器
$ docker container exec -it --user root jhipster bash

# 启动web服务
$ npm start

# 访问前端界面 http://218.17.137.219:9083
# 登录密码admin/admin

# 上传代码

$ git add .

$ git commit -m "Initial commit"

$ git push origin main

# 下载代码
$ git pull origin main


# 总体架构：

![image](https://github.com/user-attachments/assets/068c623f-ebd9-496c-9f02-4e635bb4fccf)


# 运行mysql容器
$ docker run -d --name mysql-server \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v /home/saas/yf123_db:/var/lib/mysql \
  mysql:8.0 \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci \
  --bind-address=0.0.0.0  


# docker进入mysql容器
$ docker exec -it mysql-server mysql -u root -p

# 创建数据库
CREATE DATABASE yf123;


# 切换到新数据库
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

查看表结构
DESCRIBE account_info;



