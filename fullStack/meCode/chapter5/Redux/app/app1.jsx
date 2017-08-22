/**
 * Created by Administrator on 2017/8/15 0015.
 */

// action就是一个特殊的对象，描述了一个特定的行为
// action是信息的载体，里面有action的名称和要传递的信息，然后可以被传递到store中去。
// 传递的方法是store.dispatch方法，action是store唯一信息来源。
// action只是一个普通的JS对象，且必须有一个type属性，表示这个action要完成的功能。
// 3个actin的命名
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const USER_LOGIN = 'USER_LOGIN';
// 对应的构造3个action的值
// let createPostAction = {type: CREATE_POST, data: {id: 1, title: 'new title'}};
// let deletePostAction = {type: DELETE_POST, id: 1};
// let userLoginAction = {type: USER_LOGIN, date: {name: '张三丰', email: 'zhangsf@qq.com'}};


// Action Creator 用来创建不同的action，主要用于异步
function createPost(data) {
    return {type: CREATE_POST, data: data};
}
function deletePost(id) {
    return {type: DELETE_POST, id: id};
}
function userLogin(data) {
    return {type: USER_LOGIN, data: data};
}


// reducer 用来定义整个程序的state如何响应
// 就是一个函数，接收数据和action，返回唯一的值
// 它会根据不同的action更新对应的state值
const initalPostsState = [];
const initalUserState = {isLogin: false, userData: {}};
function posts(state = initalPostsState, action) {
    switch (action.type) {
        // 新建文章
        case CREATE_POST:
            return [...state, action.data];
        // 删除文章
        case DELETE_POST:
            return state.filter((post)=> {
                return post.id != action.id
            });
        default:
            return false;
    }
}
function user(state = initalUserState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                isLogin: true,
                userData: action.data
            });
        default:
            return false;
    }
}
// 注意：不能改变state值。
// Object.assign创建一个state的备份，每次返回都是新的对象，而不是直接改变了state的值


// state数据在Redux都存储在一个对象中
// const initalState = {posts: [], user: {isLogin: false, userDate: {}}};
// // 纯函数，返回一个对象，包括两个函数的返回值
// function rootReducer(state = initalState, action) {
//     return {
//         posts: posts(state.posts, action),
//         user: user(state.user, action)
//     };
// }
// 每个函数只关心state的一部分，当应用很复杂时，可以把不同的reducer拆分到不同的文件中，这样会让文件结构和代码更新清晰合理。

// Redux提供了一个函数combineReducers，可以完成合并函数的工作
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    posts: posts,
    user: user
});


// store是action和reducer的黏合剂，它能完成：
// 保存整个程序的state
// 可以通过getState()方法访问state的值
// 可以通过dispatch()方法执行一个action
// 可以通过subscribe(listener)注册回调，监听state的变化
import {createStore} from 'redux';
// 创建store.reducer这个纯函数作为参数
let store = createStore(rootReducer);
// 使用Redux的createStore方法创建store，现在调用action

console.log('查看store初始值');
console.log(store.getState());

store.subscribe(function () {
    console.log('监听state变化，每次都打印出来');
    console.log(store.getState());
});

// 添加一篇文章
store.dispatch(createPost({id: 1, title: 'new title1'}));

// 再添加一篇文章
store.dispatch(createPost({id: 2, title: 'new title2'}));

// 再添加一篇文章
store.dispatch(createPost({id: 3, title: 'new title3'}));

// 删除一篇文章
store.dispatch(deletePost(2));

// 再添加一篇文章
store.dispatch(createPost({id: 4, title: 'new title4'}));

// 用户登录
store.dispatch(userLogin({"name": "张三丰", "email": "zhangsa@qq.com"}));

console.log('--------------APP1 over-----------');

// let action = addTodo('Use Redux');
// console.log('dispatching', action);
// store.dispatch(action);
// console.log('next state', store.getState());

import React from 'react';
function app1() {
    return (
        <h3>APP1</h3>
    )
}
export default app1;



