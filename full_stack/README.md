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

npm install --save bundle-loader connect-history-api-fallback es6-promise fastclick prismjs react react-addons-perf react-addons-pure-render-mixin react-dom react-redux react-router react-router-dom react-swipe redux whatwg-fetch

npm install --save-dev autoprefixer babel-cli babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-latest babel-preset-react babel-preset-stage-2 bundle-collapser cnpm css-loader ejs-loader envify eslint eslint-loader express extract-text-webpack-plugin file-loader html-loader html-webpack-plugin img-loader koa koa-router less less-loader open-browser-webpack-plugin optimize-css-assets-webpack-plugin postcss postcss-loader resolve-url-loader style-loader uglify-js uglify-js-brunch uglifyify uglifyjs-webpack-plugin url-loader webpack webpack-dev-server


第3章 初识React
    npm install --babel-core babel-loader babel-preset-latest babel-preset-react --save-dev cnpm --registry=https://registry.npm.taobao.org
    npm install react react-dom --save cnpm --registry=https://registry.npm.taobao.org

当程序越来越复杂后，组件的复杂程度也会成倍的提高，所以就需要验证组件传入的属性。

state状态
    state是组件内部的属性，组件本身是一个状态机，可以在constructor中通过this.state直接定义，然后根据这些值来渲染不同的UI。
    当state的值发生改变时，可以通过this.setState方法让组件再次调用render方法，渲染新的UI。


生命周期
getDefaultProps : 只会在装载之前调用一次，在组件中赋值的数据会被设置到this.props中。
getInitialState : 被constructor替代。
componentWillMount : 在render之前被调用，可以在渲染之前做一些准备工作。
componentDifMount : 在render完成且组件装载完成后调用（比如AJAX请求等）。
ReactElement :

当组件接收到新的props时，会依次触发以下方法：
componentWillReceiveProps : 在组件接收到新的props的时候触发，参数nextProps就是传入新的props，可以用它和this.props比较，来决定是否用this.setState实现UI重新渲染。
shouldComponentUpdate : 在重新render之前被调用，可以返回一个布尔值来决定一个组件是否要更新。如果返回false，那么前面的流程都不会被触发。默认都是true。
componentWillUpdate : 在render之前被调用，可以在渲染之前做一些准备工作。
render : 和组件首次加载的方法一样。
componentDidUpdate : 重新渲染完成后调用，与componentDidMount一样。

组件卸载
componentWillUnmount : 在组件被卸载或销毁之前调用。


bootstrap暂时作为插件外部引入，但在打包的时候，要复制public文件夹，似乎不是一个很好的解决方案。
先这样吧，后面再研究。













