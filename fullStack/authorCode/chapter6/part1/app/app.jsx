/*
 * @file main file for app deskmark
 */

import React from 'react';
import {render} from 'react-dom';
import {bindActionCreators, createStore, applyMiddleware} from 'redux';
import {connect, Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';      // 中间件middleware

import Deskmark from './components/Deskmark/index.jsx';
import rootReducer from './reducers/index.jsx';
import * as actionCreators from './actions/index.jsx';
import 'bootstrap/scss/bootstrap.scss';

// create store with middlewares
const store = applyMiddleware(thunkMiddleware)(createStore)(rootReducer);

// create root component based on component Deskmark
// connect连接组件和store，将store.getState()和store.dispatch()提供给组件
// 第一个参数：mapStateToProps
// mapStateToProps是一个方法，接收参数state（store.getState()的结果），返回一个JS对象，对象的内容会被合并到最终的展示组件上。
// mapStateToProps就是从全局的状态数据中，挑选并计算得到展示组件需要的数据。
// 第二个参数：mapDispatchToProps
// 接收参数dispatch（store的dispatch方法），返回JS对象，对象的内容会被合并到最终的展示组件上。
// 第三个参数：mergeProps
// 对mapStateToProps和mapDispatchToProps等参数进行合并
// 使用Deskmark组件创建根组件
const App = connect(
    state => ({state}),
    dispatch => ({actions: bindActionCreators(actionCreators, dispatch)})
)(Deskmark);

// create DOM container
const container = document.body.appendChild(
    document.createElement('div')
);

// render root conponent with store to DOM container
render(
    <Provider store={store}>
        <App />
    </Provider>,
    container
);
