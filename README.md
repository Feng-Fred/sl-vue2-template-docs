## vite2.8 + vue2.7.14 + ts

支持 ie11 的 ui 组件

# 启用提交自动 run lint

1. 先删除本地的.husky 文件
2. npx husky install
3. npx husky add .husky/pre-commit "npx lint-staged"

### 只有使用 git 命令提交才会自动 run lint，使用插件不会

# 启动本地环境 - npm run start

先修改.env.start 中的 VITE_BASE_URL 来连接本地数据库， 再执行 npm run start

# 启动测试环境 - npm run serve

先修改.env.development 中的 VITE_BASE_URL 来连接本地数据库， 再执行 npm run serve

# review 打包之后的代码 - npm run preview

先修改 index.html 中 window.customUrl.BASE_API_URL 来链接产品数据, 再执行 npm run preview
