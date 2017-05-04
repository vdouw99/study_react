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

深入理解javascript原型和闭包
http://www.cnblogs.com/wangfupeng1988/p/3977924.html

安装一堆支持
npm install autoprefixer --save-dev
npm install babel-core --save-dev
npm install babel-loader --save-dev
npm install babel-plugin-react-transform --save-dev
npm install babel-preset-es2015 --save-dev
npm install babel-preset-react --save-dev
npm install css-loader --save-dev
npm install eslint --save-dev
npm install eslint-loader --save-dev
npm install extract-text-webpack-plugin --save-dev
npm install file-loader --save-dev
npm install html-webpack-plugin --save-dev
npm install json-loader --save-dev
npm install koa --save-dev
npm install koa-router --save-dev
npm install less --save-dev
npm install less-loader --save-dev
npm install open-browser-webpack-plugin --save-dev
npm install postcss-loader --save-dev
npm install react-transform-hmr --save-dev
npm install style-loader --save-dev
npm install url-loader --save-dev

npm install es6-promise --save
// 先这样安装了一下（npm install es6-promise）
immutable
react-addons-css-transition-group
react-addons-pure-render-mixin
react-redux
// 先这样安装了一下（npm install react-redux）
react-router
// 先这样安装了一下（npm install react-router）
react-swipe
redux
swipe-js-iso
whatwg-fetch

启动项目
npm start

打包项目
npm run build




