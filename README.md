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

# 访问前端界面 http://218.17.137.219:9083
登录密码admin/admin

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

