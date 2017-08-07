# React全栈 笔记

Redux + Flux + webpack + Babel整合开发

包：可以用package.json文件描述的文件夹或文件；
模块(module)：任何可以被Node.js中的require方法载入的文件。

安装某个版本的依赖
npm install webpack@1.12.14

loader : 作用于应用中资源文件的转换行为。它是运行在Node.js环境的函数，接收资源文件的源代码作为参数，并返回新的代码。



followAuthorCode
    chapter2
        part1
            熟练习JS打包
            webpack生成文件 webpack index.js bundle.js
            index.js基于CommonJS的模块规范书写，浏览器不支持，所以通过webpack构建应用。
            index.js中引用文件，同目录注意加上“./”。
        part2
            练习通过css-loader和style-loader加载CSS
            webpack index.js bundle.js
            extract-text-webpack-plugin 可以解决CSS从JS中分离
        part3
            通过配置文件webpack.config.js和各种loader，对webpack构建，简化、优雅。
            构建命令：webpack
        part4
            使用插件 html-webpack-plugin
            构建命令：webpack


第3章 初识React
    npm install --babel-core babel-loader babel-preset-latest babel-preset-react --save-dev cnpm --registry=https://registry.npm.taobao.org
    npm install react react-dom --save cnpm --registry=https://registry.npm.taobao.org











