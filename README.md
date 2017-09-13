# react_study

teacherCode : 老师的代码

topthinking ：一位同学的代码

mater ：《React入门》

fakefish :
https://fakefish.github.io/react-webpack-cookbook/Getting-started.html

$ npm install -g create-react-app
$ create-react-app my-app
$ cd my-app/
$ npm start
在浏览器中打开 http://localhost:3000/


来自redux官方的demo
https://github.com/reactjs/redux

redux教程
http://cn.redux.js.org/docs/introduction/Examples.html

Redux的基础代码
fullStack/meCode/chapter5/Redux/app/app2.jsx

学习redux，主要依赖官方的示例和教程

es6-promise
https://segmentfault.com/a/1190000006557624

此项目常用的依赖（如果实在安装不上的时候，可以参考）
fullStack/authorCode/chapter4/part1/node_modules
http://pan.baidu.com/s/1hsOlryW

谈谈ES6的Promise对象
https://segmentfault.com/a/1190000002928371

来自慕课网的Redux视频教程
http://www.imooc.com/learn/744

React Developer Tools
Redux DevTools
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

react/me1
    整理原来的代码，尚可用，但发现问题：CSS没分离，依赖没有单独打包
    学习完教程，解决打包的配置问题，基础为此项目
    src/ReduxBasicDemo.jsx Redux基础代码
        第一步：定义计算规则，即reducer
        第二步：根据计算规则生成store
        第三步：定义数据state变化之后的派发规则
        第四步：触发数据变化

react/me2
    Redux四步曲 注解
    第一步：定义计算规则，也就是响应规则
        reducer/userinfo.jsx USERINFO_LOGIN UPDATE_CITYNAME
        reducer/index.jsx combineReducers将写在各处的响应规则合并
    第二步：生成store
        store/index.jsx store=createStore(rootReducer, initialState)
    第三步：定义数据state变化之后的派发规则
        index.jsx中，引入Provider，render中用Provider包裹


生命周期
    getDefaultProps : 只会在装载之前调用一次，在组件中赋值的数据会被设置到this.props中。
    getInitialState : 被constructor替代。
    componentWillMount : 在render之前被调用，可以在渲染之前做一些准备工作。
    componentDiDMount : 在render完成且组件装载完成后调用（比如AJAX请求等）。

当组件接收到新的props时，会依次触发以下方法：
    componentWillReceiveProps : 在组件接收到新的props的时候触发，参数nextProps就是传入新的props，可以用它和this.props比较，来决定是否用this.setState实现UI重新渲染。
    shouldComponentUpdate : 在重新render之前被调用，可以返回一个布尔值来决定一个组件是否要更新。如果返回false，那么前面的流程都不会被触发。默认都是true。
    componentWillUpdate : 在render之前被调用，可以在渲染之前做一些准备工作。
    render : 和组件首次加载的方法一样。
    componentDidUpdate : 重新渲染完成后调用，与componentDidMount一样。

组件卸载
    componentWillUnmount : 在组件被卸载或销毁之前调用。


建议使用非约束性
约束性 refs，类似jquery获取节点了
非约束性组件 可以理解为双向数据绑定 详见react/me3/src/components/HomeHeader/index.jsx的this.state.kwd











