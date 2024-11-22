218.17.137.219
用户名：saas
密码：YF@saas2024
80端口对外开放的是8383

部署方式：

docker container run --name tianceyun_develop -v /home/saas/tianceyun:/workspace/tianceyun -v ~/.m2:/workspace/tianceyun/.m2  -p 8080:8080 -p 9000:9000 -p 3001:3001 -d -t jhipster/jhipster

#docker进入容器
docker container exec -it --user root tianceyun_develop bash

#进入app目录
cd /workspace/tianceyun

jhipster

#启动web服务
npm start

./mvnw

src/
├── main/                  # 主要源代码目录
│   └── webapp/           # Web应用程序目录
│       ├── app/          # Vue应用主目录
│       │   ├── core/     # 核心组件
│       │   │   ├── home/         # 首页组件
│       │   │   ├── jhi-navbar/   # 导航栏组件
│       │   │   └── jhi-footer/   # 页脚组件
│       │   └── app.vue   # 应用根组件
│       ├── api/          # API接口定义和请求封装
│       ├── components/   # 通用组件库
│       ├── router/       # 路由配置
│       ├── store/        # Vuex状态管理
│       ├── types/        # TypeScript类型定义
│       └── utils/        # 工具函数库
└── test/                 # 测试相关代码

主要功能模块：
1. app/ - 核心应用模块
   - core/ - 包含主要的页面组件
   - app.vue - 应用入口组件

2. api/ - 后端API接口模块
   - 封装后端接口调用
   - 处理请求/响应拦截
   - 统一错误处理

3. components/ - 通用组件库
   - 可复用的UI组件
   - 业务组件

4. router/ - 路由管理
   - 路由配置
   - 路由守卫
   - 权限控制

5. store/ - 状态管理
   - Vuex store配置
   - 状态模块划分
   - 数据持久化

6. types/ - 类型定义
   - 接口类型定义
   - 组件Props类型
   - 通用类型声明

7. utils/ - 工具函数
   - 通用工具方法
   - 常量定义
   - 辅助函数



