# Vue 3 + Typescript + Vite2 + Volar

## Volar

由于现阶段 Vetur 并不能很好地支持 vue3 + ts 的语法，所以请在 vscode 中安装 volar 插件

### 构建(测试环境)

```bash
yarn build-dev
```

### 构建（生产环境）

```bash
yarn build
```

### 启动本地服务

```bash
yarn start
```

### 本地预览生产环境

```bash
yarn serve
```

# 目录结构说明

.
├── package.json  
├── .env 所有环境都会加载的环境变量  
├── .env.development 测试服和本地加载的环境变量  
├── .env.production 正式服加载的环境变量  
├── .gitignore  
├── index.html  
├── tsconfig.json ts 文件编译配置  
├── vite.config.ts vite 打包配置  
├── public 项目通用静态资源  
└── src  
 >├── assets 组件静态资源  
 >├── components 通用组件(非逻辑组件)  
 >├── hooks 通用 hook  
 >├── utils 通用工具函数  
 >├── http ajax 通用逻辑  
 >>├── service 通用 ajax 请求函数  
 >>├── errorCode.ts 错误码  
 >>└── index.tsx axios 抽象函数  
 >├── pages 页面模块  
 >>├── Example 例子页面模块  
 >>>├── components 例子模块独立组件  
 >>>├── hooks 例子模块独立 hook  
 >>>├── service 例子模块独立 ajax 逻辑  
 >>>├── utils.ts 例子模块独立工具函数  
 >>>├── index.scss 例子模块样式文件  
 >>>└── index.vue 例子模块单文件组件  
 >├── router 路由配置文件  
 >├── store vuex 配置文件  
 >├── styles 全局样式配置  
 >├── App.vue 应用单文件组件  
 >├── env.d.ts 全局类型定义文件（一般用于定义缺少@types 的依赖库）  
 >├── main.ts 入口文件  
 >└── theme.ts 全局自定义主题配置
