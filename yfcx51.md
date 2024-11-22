#运行容器：
docker container run --name yfcx123_develop -v /home/saas/yfcx123:/workspace/yfcx123 -v ~/.m2:/workspace/yfcx123/.m2  -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

#docker进入容器
docker container exec -it --user root yfcx123_develop bash

#进入app目录
cd /workspace/yfcx123

#初始化安装（只执行一次）
jhipster

#启动web服务
npm start