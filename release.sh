#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'release'
git push -f git@github.com:Feng-Fred/sl-vue2-template-docs.git master:release

cd -