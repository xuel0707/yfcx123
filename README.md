## 218.17.137.219 
## 用户名：saas #密码：YF@saas2024

## 80端口对外开放的是8383

## 运行容器：

$ docker container run --name jhipster -v /home/saas/yfcx123:/home/jhipster/app -v ~/.m2:/home/jhipster/.m2 -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

## docker进入容器

$ docker container exec -it --user root jhipster bash

## 初始化安装（只执行一次）

$ jhipster

## 启动web服务

$ npm start

## 上传代码
git add .

git commit -m "开发后端"

git push origin main --force

## 下载代码
$ git pull origin main

## 运行数据库容器
$ docker run -d --name mysql-server \
 -p 3306:3306 \
 -e MYSQL_ROOT_PASSWORD=123456 \
 -v /home/saas/yf123_db:/var/lib/mysql \
 mysql:8.0 \
 --character-set-server=utf8mb4 \
 --collation-server=utf8mb4_unicode_ci \
 --bind-address=0.0.0.0

## docker进入容器

$ docker exec -it mysql-server mysql -u root -p
