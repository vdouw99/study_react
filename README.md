# react_study

构建工具
webpack
babel
less postcss

系统框架
react
react-router
redux

数据交互
fetch
mock

其他辅助
npm
git

windows用户
"start": "set NODE_ENV=dev && webpack-dev-server"
"mock": "node --harmony ./mock/server.js"
"build": "rd/s/q build && set NODE_ENV=production && webpack"
根目录记得创建“build”文件夹

webpack-dev-server
监听代码改动，实时在浏览器中呈现

（npm install webpack webpack-dev-server --save-dev）

（npm install react react-dom --save）
为什么没有-dev？因为程序发布后，也要用react和react-dom

查看package.json你会发现，webpack在devDependencies里，因为项目上线了，就不需要了；
react在dependencies里，因为一直需要。








