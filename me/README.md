原来的设置
// "build": "rm -rf ./build && NODE_ENV=production webpack --config ./webpack.production.config.js --progress --colors"


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
npm install react-addons-css-transition-group --save
npm install react-addons-pure-render-mixin --save
npm install react-redux --save
npm install react-router --save
npm install react-swipe --save
npm install redux --save
npm install swipe-js-iso --save
npm install whatwg-fetch --save

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
npm run start

打包项目
npm run build

智能组件：公用的，放在containers文件夹中
木偶组件：放在components文件夹中

智能组件：公用的，放在containers文件夹中
在日常开发中，我们也简称“页面”。为何说它“智能”，因为它只会做一些很聪明的事儿，脏活累活都不干。它只对数据负责，只需要获取了数据、定义好数据操作的相关函数，然后将这些数据、函数直接传递给具体实现的组件即可。

木偶组件：放在components文件夹中
 这里“木偶”一词用的特别形象，它总是被人拿线牵着。它从智能组件（或页面）那里接受到数据、函数，然后就开始做一些展示工作，它的工作就是把拿到的数据展示给用户，函数操作开放给用户。至于数据内容是什么，函数操作是什么，它不关心。


生命周期
comopentDidMount
组件第一次加载时渲染完成的事件，一般在此获取网络数据。实际开始项目开发时，会经常用到。

shouldComponentUpdate
主要用于性能优化，React 的性能优化也是一个很重要的话题，后面一并讲解。

componentDidUpdate
组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。

componentWillUnmount
组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等。

todoList包含两个子组件：Input和List

router打包出来有点问题，具体看一下这个帖子：
https://segmentfault.com/a/1190000007238999

淘宝镜像
cnpm --registry=https://registry.npm.taobao.org

redux教程
http://v.ku6.com/show/XPQZ9Ir3aSw3KNpO12tmEg...html?from=my
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html

一、store
Store是保存数据的地方，可以当作一个容器。整个应用只能有一个store。
Redux提供createStore函数，用来生成store。

import {createStore} from 'redux';
const store = createStore(fn);

createStore函数接受另一个函数作为参数，返回新生成的store对象。


二、state
store对象包含所有数据，如果想得到某个时点的数据，就要对store生成快照，这个时点的数据集合，就是state。
当前时刻的state，可以通过store.getState()得到。

const state = store.getState();

Redux规定，一个state对应一个view。只要state相同，view就相同，反之亦然。


三、action
state的变化，会导致view的变化。但是，用户接触不到state，所以，state的变化必须是由view导致的。
action就是view发出的通知，表示state应该发生变化了。
action是一个对象，其中的type属性是必须的，表示action的名称。
action描述当前发生的事情，改变state的唯一方法，就是使用action。


四、action creator
view要发送多少种消息，就会有多少种action。
手写太麻烦，所以我们有必要定一个函数来生成action，这个函数就是action creator。


五、store.dispatch()
是view发出action的唯一方法


六、Reducer
store收到action后，必须给出一个新的state，这样view才会发生变化。这种state的计算过程，就是reducer。


七、store.subscribe()
一旦state发生变化，就自动执行stor.subscribe()函数。
所以，只要把view的更新函数入也listen，就会实现view的自动渲染。
对于react，就是render()方法或setState()方法。



























