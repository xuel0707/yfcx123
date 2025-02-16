# 开发服务器 218.17.137.219
用户名：saas

密码：YF@saas2024

以下是服务器端口对应关系：

9000->9083

8080->8383

22->8322

## 前端webapp容器（如已运行则不执行）：
$ docker container run --name jhipster -v /home/saas/yfcx123:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

# 进入webapp容器
$ docker container exec -it --user root jhipster bash

# 启动web服务
$ npm start

# 访问前端界面
浏览器访问:http://218.17.137.219:9083

登录密码admin/admin

# 代码组织结构
/home/jhipster/app/src/main# tree
.
├── docker
│   ├── app.yml
│   ├── grafana
│   │   └── provisioning
│   │       ├── dashboards
│   │       │   ├── dashboard.yml
│   │       │   └── JVM.json
│   │       └── datasources
│   │           └── datasource.yml
│   ├── jhipster-control-center.yml
│   ├── jib
│   │   └── entrypoint.sh
│   ├── monitoring.yml
│   ├── postgresql.yml
│   ├── prometheus
│   │   └── prometheus.yml
│   ├── services.yml
│   └── sonar.yml
├── java
│   └── yfcx123
│       ├── aop
│       │   └── logging
│       │       ├── LoggingAspect.java
│       │       └── package-info.java
│       ├── config
│       │   ├── ApplicationProperties.java
│       │   ├── AsyncConfiguration.java
│       │   ├── Constants.java
│       │   ├── CRLFLogConverter.java
│       │   ├── DatabaseConfiguration.java
│       │   ├── DateTimeFormatConfiguration.java
│       │   ├── JacksonConfiguration.java
│       │   ├── LiquibaseConfiguration.java
│       │   ├── LoggingAspectConfiguration.java
│       │   ├── LoggingConfiguration.java
│       │   ├── package-info.java
│       │   ├── ReactorConfiguration.java
│       │   ├── SecurityConfiguration.java
│       │   ├── SecurityJwtConfiguration.java
│       │   └── WebConfigurer.java
│       ├── domain
│       │   ├── AbstractAuditingEntity.java
│       │   ├── AccountInfo.java
│       │   ├── AuthorityCallback.java
│       │   ├── Authority.java
│       │   ├── package-info.java
│       │   └── User.java
│       ├── GeneratedByJHipster.java
│       ├── management
│       │   ├── package-info.java
│       │   └── SecurityMetersService.java
│       ├── package-info.java
│       ├── repository
│       │   ├── AccountInfoRepositoryInternalImpl.java
│       │   ├── AccountInfoRepository.java
│       │   ├── AccountInfoSqlHelper.java
│       │   ├── AuthorityRepository.java
│       │   ├── EntityManager.java
│       │   ├── package-info.java
│       │   ├── rowmapper
│       │   │   ├── AccountInfoRowMapper.java
│       │   │   ├── ColumnConverter.java
│       │   │   ├── package-info.java
│       │   │   └── UserRowMapper.java
│       │   ├── UserRepository.java
│       │   └── UserSqlHelper.java
│       ├── security
│       │   ├── AuthoritiesConstants.java
│       │   ├── DomainUserDetailsService.java
│       │   ├── package-info.java
│       │   ├── SecurityUtils.java
│       │   └── UserNotActivatedException.java
│       ├── service
│       │   ├── AccountInfoService.java
│       │   ├── dto
│       │   │   ├── AdminUserDTO.java
│       │   │   ├── package-info.java
│       │   │   ├── PasswordChangeDTO.java
│       │   │   └── UserDTO.java
│       │   ├── EmailAlreadyUsedException.java
│       │   ├── InvalidPasswordException.java
│       │   ├── MailService.java
│       │   ├── mapper
│       │   │   ├── package-info.java
│       │   │   └── UserMapper.java
│       │   ├── MobileNumberAlreadyUsedException.java
│       │   ├── package-info.java
│       │   ├── SocialCreditCodeAlreadyUsedException.java
│       │   ├── UsernameAlreadyUsedException.java
│       │   ├── UserService.java
│       │   └── VerificationCodeCache.java
│       ├── web
│       │   ├── filter
│       │   │   ├── package-info.java
│       │   │   └── SpaWebFilter.java
│       │   └── rest
│       │       ├── AccountInfoResource.java
│       │       ├── AccountResource.java
│       │       ├── AuthenticateController.java
│       │       ├── AuthorityResource.java
│       │       ├── errors
│       │       │   ├── BadRequestAlertException.java
│       │       │   ├── EmailAlreadyUsedException.java
│       │       │   ├── ErrorConstants.java
│       │       │   ├── ExceptionTranslator.java
│       │       │   ├── FieldErrorVM.java
│       │       │   ├── InvalidPasswordException.java
│       │       │   ├── LoginAlreadyUsedException.java
│       │       │   └── package-info.java
│       │       ├── package-info.java
│       │       ├── PublicUserResource.java
│       │       ├── UserResource.java
│       │       └── vm
│       │           ├── KeyAndPasswordVM.java
│       │           ├── LoginVM.java
│       │           ├── ManagedUserVM.java
│       │           └── package-info.java
│       └── Yfcx123App.java
├── resources
│   ├── banner.txt
│   ├── config
│   │   ├── application-dev.yml
│   │   ├── application-prod.yml
│   │   ├── application-tls.yml
│   │   ├── application.yml
│   │   ├── liquibase
│   │   │   ├── changelog
│   │   │   │   ├── 00000000000000_initial_schema.xml
│   │   │   │   └── 20250129083231_added_entity_AccountInfo.xml
│   │   │   ├── data
│   │   │   │   ├── authority.csv
│   │   │   │   ├── user_authority.csv
│   │   │   │   └── user.csv
│   │   │   ├── fake-data
│   │   │   │   └── account_info.csv
│   │   │   └── master.xml
│   │   └── tls
│   │       └── keystore.p12
│   ├── i18n
│   │   ├── messages.properties
│   │   └── messages_zh_CN.properties
│   ├── logback-spring.xml
│   └── templates
│       ├── error.html
│       └── mail
│           ├── activationEmail.html
│           ├── creationEmail.html
│           └── passwordResetEmail.html
└── webapp
    ├── 404.html
    ├── app
    │   ├── account
    │   │   ├── account.service.spec.ts
    │   │   ├── account.service.ts
    │   │   ├── activate
    │   │   │   ├── activate.component.spec.ts
    │   │   │   ├── activate.component.ts
    │   │   │   ├── activate.service.ts
    │   │   │   └── activate.vue
    │   │   ├── change-password
    │   │   │   ├── change-password.component.spec.ts
    │   │   │   ├── change-password.component.ts
    │   │   │   └── change-password.vue
    │   │   ├── login-form
    │   │   │   ├── login-form.component.spec.ts
    │   │   │   ├── login-form.component.ts
    │   │   │   └── login-form.vue
    │   │   ├── login.service.ts
    │   │   ├── register
    │   │   │   ├── register.component.spec.ts
    │   │   │   ├── register.component.ts
    │   │   │   ├── register.service.ts
    │   │   │   └── register.vue
    │   │   ├── reset-password
    │   │   │   ├── finish
    │   │   │   │   ├── reset-password-finish.component.spec.ts
    │   │   │   │   ├── reset-password-finish.component.ts
    │   │   │   │   └── reset-password-finish.vue
    │   │   │   └── init
    │   │   │       ├── reset-password-init.component.spec.ts
    │   │   │       ├── reset-password-init.component.ts
    │   │   │       └── reset-password-init.vue
    │   │   └── settings
    │   │       ├── settings.component.spec.ts
    │   │       ├── settings.component.ts
    │   │       └── settings.vue
    │   ├── admin
    │   │   ├── configuration
    │   │   │   ├── configuration.component.spec.ts
    │   │   │   ├── configuration.component.ts
    │   │   │   ├── configuration.service.ts
    │   │   │   └── configuration.vue
    │   │   ├── docs
    │   │   │   ├── docs.component.ts
    │   │   │   └── docs.vue
    │   │   ├── health
    │   │   │   ├── health.component.spec.ts
    │   │   │   ├── health.component.ts
    │   │   │   ├── health-modal.component.spec.ts
    │   │   │   ├── health-modal.component.ts
    │   │   │   ├── health-modal.vue
    │   │   │   ├── health.service.spec.ts
    │   │   │   ├── health.service.ts
    │   │   │   └── health.vue
    │   │   ├── logs
    │   │   │   ├── logs.component.spec.ts
    │   │   │   ├── logs.component.ts
    │   │   │   ├── logs.service.ts
    │   │   │   └── logs.vue
    │   │   ├── metrics
    │   │   │   ├── metrics.component.spec.ts
    │   │   │   ├── metrics.component.ts
    │   │   │   ├── metrics-modal.component.spec.ts
    │   │   │   ├── metrics-modal.component.ts
    │   │   │   ├── metrics-modal.vue
    │   │   │   ├── metrics.service.ts
    │   │   │   └── metrics.vue
    │   │   └── user-management
    │   │       ├── user-management.component.spec.ts
    │   │       ├── user-management.component.ts
    │   │       ├── user-management-edit.component.spec.ts
    │   │       ├── user-management-edit.component.ts
    │   │       ├── user-management-edit.vue
    │   │       ├── user-management.service.ts
    │   │       ├── user-management-view.component.spec.ts
    │   │       ├── user-management-view.component.ts
    │   │       ├── user-management-view.vue
    │   │       └── user-management.vue
    │   ├── app.component.ts
    │   ├── app.vue
    │   ├── constants.ts
    │   ├── core
    │   │   ├── basicinfo
    │   │   │   ├── basicinfo.component.spec.ts
    │   │   │   ├── basicinfo.component.ts
    │   │   │   └── basicinfo.vue
    │   │   ├── costs
    │   │   │   ├── costs.component.spec.ts
    │   │   │   ├── costs.component.ts
    │   │   │   └── costs.vue
    │   │   ├── error
    │   │   │   ├── error.component.spec.ts
    │   │   │   ├── error.component.ts
    │   │   │   └── error.vue
    │   │   ├── export
    │   │   │   ├── export.component.spec.ts
    │   │   │   ├── export.component.ts
    │   │   │   └── export.vue
    │   │   ├── forget-pwd
    │   │   │   ├── forget-pwd.component.spec.ts
    │   │   │   ├── forget-pwd.component.ts
    │   │   │   └── forget-pwd.vue
    │   │   ├── hightech
    │   │   │   ├── hightech.component.spec.ts
    │   │   │   ├── hightech.component.ts
    │   │   │   └── hightech.vue
    │   │   ├── home
    │   │   │   ├── home.component.spec.ts
    │   │   │   ├── home.component.ts
    │   │   │   └── home.vue
    │   │   ├── jhi-footer
    │   │   │   ├── jhi-footer.component.ts
    │   │   │   └── jhi-footer.vue
    │   │   ├── jhi-navbar
    │   │   │   ├── jhi-navbar.component.spec.ts
    │   │   │   ├── jhi-navbar.component.ts
    │   │   │   └── jhi-navbar.vue
    │   │   ├── login
    │   │   │   ├── login.component.spec.ts
    │   │   │   ├── login.component.ts
    │   │   │   └── login.vue
    │   │   ├── main-navbar
    │   │   │   ├── main-navbar.component.spec.ts
    │   │   │   ├── main-navbar.component.ts
    │   │   │   └── main-navbar.vue
    │   │   ├── manage
    │   │   │   ├── manage.component.spec.ts
    │   │   │   ├── manage.component.ts
    │   │   │   └── manage.vue
    │   │   ├── project
    │   │   │   ├── project.component.spec.ts
    │   │   │   ├── project.component.ts
    │   │   │   └── project.vue
    │   │   ├── register
    │   │   │   ├── register.component.spec.ts
    │   │   │   ├── register.component.ts
    │   │   │   └── register.vue
    │   │   ├── results
    │   │   │   ├── results.component.spec.ts
    │   │   │   ├── results.component.ts
    │   │   │   └── results.vue
    │   │   ├── ribbon
    │   │   │   ├── ribbon.component.spec.ts
    │   │   │   ├── ribbon.component.ts
    │   │   │   └── ribbon.vue
    │   │   ├── todo
    │   │   │   ├── todo.component.spec.ts
    │   │   │   ├── todo.component.ts
    │   │   │   └── todo.vue
    │   │   └── top-navbar
    │   │       ├── top-navbar.component.spec.ts
    │   │       ├── top-navbar.component.ts
    │   │       └── top-navbar.vue
    │   ├── declarations.d.ts
    │   ├── entities
    │   │   ├── account-info
    │   │   │   ├── account-info.component.spec.ts
    │   │   │   ├── account-info.component.ts
    │   │   │   ├── account-info-details.component.spec.ts
    │   │   │   ├── account-info-details.component.ts
    │   │   │   ├── account-info-details.vue
    │   │   │   ├── account-info.service.spec.ts
    │   │   │   ├── account-info.service.ts
    │   │   │   ├── account-info-update.component.spec.ts
    │   │   │   ├── account-info-update.component.ts
    │   │   │   ├── account-info-update.vue
    │   │   │   └── account-info.vue
    │   │   ├── entities.component.ts
    │   │   ├── entities-menu.component.ts
    │   │   ├── entities-menu.vue
    │   │   ├── entities.vue
    │   │   └── user
    │   │       └── user.service.ts
    │   ├── locale
    │   │   └── translation.service.ts
    │   ├── main.ts
    │   ├── router
    │   │   ├── account.ts
    │   │   ├── admin.ts
    │   │   ├── entities.ts
    │   │   ├── index.ts
    │   │   └── pages.ts
    │   ├── shared
    │   │   ├── alert
    │   │   │   ├── alert.service.spec.ts
    │   │   │   └── alert.service.ts
    │   │   ├── composables
    │   │   │   ├── date-format.ts
    │   │   │   ├── index.ts
    │   │   │   └── validation.ts
    │   │   ├── computables
    │   │   │   ├── arrays.ts
    │   │   │   └── index.ts
    │   │   ├── config
    │   │   │   ├── axios-interceptor.spec.ts
    │   │   │   ├── axios-interceptor.ts
    │   │   │   ├── config-bootstrap-vue.ts
    │   │   │   ├── config.ts
    │   │   │   ├── dayjs.ts
    │   │   │   ├── languages.ts
    │   │   │   └── store
    │   │   │       ├── account-store.ts
    │   │   │       └── translation-store.ts
    │   │   ├── data
    │   │   │   ├── data-utils.service.spec.ts
    │   │   │   └── data-utils.service.ts
    │   │   ├── jhi-item-count.component.ts
    │   │   ├── jhi-item-count.vue
    │   │   ├── model
    │   │   │   ├── account-info.model.ts
    │   │   │   └── user.model.ts
    │   │   ├── security
    │   │   │   └── authority.ts
    │   │   └── sort
    │   │       ├── jhi-sort-indicator.component.ts
    │   │       ├── jhi-sort-indicator.vue
    │   │       ├── sorts.spec.ts
    │   │       └── sorts.ts
    │   ├── shims-vue.d.ts
    │   ├── store.ts
    │   └── test-setup.ts
    ├── content
    │   ├── css
    │   │   ├── chunk-72f59dd9.efe5000c.css
    │   │   └── loading.css
    │   ├── images
    │   │   ├── avatar.73e91683.png
    │   │   ├── captcha.png
    │   │   ├── data.png
    │   │   ├── echart1.png
    │   │   ├── echart2.png
    │   │   ├── echart3.png
    │   │   ├── echart4.png
    │   │   ├── enterprise_bg.png
    │   │   ├── jhipster_family_member_0_head-192.png
    │   │   ├── jhipster_family_member_0_head-256.png
    │   │   ├── jhipster_family_member_0_head-384.png
    │   │   ├── jhipster_family_member_0_head-512.png
    │   │   ├── jhipster_family_member_0.svg
    │   │   ├── jhipster_family_member_1_head-192.png
    │   │   ├── jhipster_family_member_1_head-256.png
    │   │   ├── jhipster_family_member_1_head-384.png
    │   │   ├── jhipster_family_member_1_head-512.png
    │   │   ├── jhipster_family_member_1.svg
    │   │   ├── jhipster_family_member_2_head-192.png
    │   │   ├── jhipster_family_member_2_head-256.png
    │   │   ├── jhipster_family_member_2_head-384.png
    │   │   ├── jhipster_family_member_2_head-512.png
    │   │   ├── jhipster_family_member_2.svg
    │   │   ├── jhipster_family_member_3_head-192.png
    │   │   ├── jhipster_family_member_3_head-256.png
    │   │   ├── jhipster_family_member_3_head-384.png
    │   │   ├── jhipster_family_member_3_head-512.png
    │   │   ├── jhipster_family_member_3.svg
    │   │   ├── login-bg.jpg
    │   │   ├── logo-jhipster.png
    │   │   ├── noData.f90cf818.png
    │   │   ├── num1.png
    │   │   ├── num2.png
    │   │   ├── num3.png
    │   │   ├── num4.png
    │   │   ├── num5.png
    │   │   └── register_header.jpg
    │   ├── scss
    │   │   ├── _bootstrap-variables.scss
    │   │   ├── global.scss
    │   │   └── vendor.scss
    │   └── static
    │       ├── images
    │       │   └── loading.gif
    │       └── js
    │           └── base-loading.js
    ├── favicon.ico
    ├── i18n
    │   └── zh-cn
    │       ├── accountInfo.json
    │       ├── activate.json
    │       ├── configuration.json
    │       ├── error.json
    │       ├── global.json
    │       ├── health.json
    │       ├── home.json
    │       ├── login.json
    │       ├── logs.json
    │       ├── metrics.json
    │       ├── password.json
    │       ├── register.json
    │       ├── reset.json
    │       ├── sessions.json
    │       ├── settings.json
    │       ├── user-management.json
    │       └── zh-cn.js
    ├── index.html
    ├── manifest.webapp
    ├── robots.txt
    ├── swagger-ui
    │   ├── dist
    │   │   └── images
    │   │       └── throbber.gif
    │   └── index.html
    └── WEB-INF
        └── web.xml

# 运行mysql容器
$ docker run -d --name mysql-server \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -v /home/saas/yf123_db:/var/lib/mysql \
  mysql:8.0 \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci \
  --bind-address=0.0.0.0  

# 进入mysql容器
$ docker exec -it mysql-server mysql -u root -p

