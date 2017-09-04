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












