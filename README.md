# 论坛项目后台管理系统
------------------------

#### 技术栈
vue2 + vue-router + webpack + ES6/7 + axios + elementUI + font-Awesome

#### 项目预览
[https://yy.kpzs.com/dist/index.html#/login](https://yy.kpzs.com/dist/index.html#/login)


#### 说明

>  本说明主要用于如何用 vue2 架构论坛项目后台管理系统

>  开发环境 Windows10  Chrome 71




#### 目录结构
------------------------

```bash
├── /dist/            # 生成打包后文件
├── /public/          # public中的静态资源会被复制到输出目录(dist)中
├── /src/             # 源码目录
│ ├── /api/           # 接口文档
│ ├── /assets/        # 组件静态资源
│ ├── /components/    # 公共组件
│ ├── /router/        # 路由配置
| ├── /styles/        # 公共样式
│ ├── /utils/         # 公共方法
│ ├── /views/         # 路由组件(页面维度)
│ ├── App.vue         # 组件入口
│ └── main.js         # 程序入口
├── /static/          # 非组件静态资源
├── .browserslistrc   # 目标浏览器配置表
├── .gitignore        # git忽略文件
├── .postcssrc.js     # 解析器
├── babel.config.js   # 配置文件
├── package-lock.json # 项目依赖
├── package.json      # 项目依赖
└── README.md         # 项目文档
├── vue.config.js     # vue项目配置文件
```

#### 注意事项

项目安装依赖为国内淘宝镜像,在开始运行项目之前必须安装国内淘宝NPM镜像.
``` bash
# 安装淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

# 查询淘宝镜像版本
cnpm -v

```

#### 运行项目
------------------------

``` bash
# 安装项目依赖,需要先安装淘宝镜像(请先看注意事项)
cnpm install

# 项目运行 localhost:8080
npm run start

# 项目打包
npm run build


```





