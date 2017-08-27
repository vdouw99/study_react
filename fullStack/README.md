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
解决方案可以参考：http://www.cnblogs.com/zhongxia/p/5834089.html
2017-08-10


第6章 使用Redux
6.1 在React项目中使用Redux
6.1.1 如何在React项目中使用
    与其说如何使用Redux，不如说如何获取并使用store的内容，以及创建并触发action的过程。
1、从store获取数据
    属性传递
        Redux的特点是单一数据源，即整个应用的状态信息都保存在一个store中，因为需要由store将数据从React组件树的根节点传入。
        为了在数据变化时更新界面，还需要对store进行监听。
    组件自行获取状态数据
        把createStore的结果通过一个独立的模块以module export的方式暴露出来，所有组件都可以直接去import这个模块获取store，然后对store进行subscribe。
2、创建与触发action
    创建action，即使用actionCreator
    触发action，即通过store.dispatch将上一步得到的action作用到特定的store上。

6.1.2 react-redux
    react-redux是Redux官方提供的React绑定，用于辅助在React项目中使用Redux。
1、Provider
    store的提供者，一般把原有的组件树根节点包裹在Provider中。
2、connect
    用来连接store与组件

6.1.3 组件组织
1、展示组件与容器组件
    Presentational Component : 专注于界面展示
    Container Component : 为展示组件提供容器
2、组织不同类型的组件

6.1.4 开发工具
    Redux DevTools
        const store = creactStore(reducer,ininialState,window.devtoolsExtension && window.devTooolsExtension());
        middleware的使用方法参照P168

6.2 使用Redux重构Deskmark
6.2.1 概要
1、整理步骤
(1)整理action，实现action creator
(2)设计store state，实现reducer
(3)划分界面内容，实现展示组件
(4)通过容器给件连接store与展示组件
2、目录结构

6.2.2 创建与触发action
整理action分3步
定义action第1步：定义类型（action type）
定义类型为常量，相比于字符串字面量，便于发现低级错误
定义action第2步：定义内容的格式
定义action第3步：定义action creator






















