/**
 * Created by Administrator on 2017/8/22 0022.
 */

// 定义action
function createPost(data) {
    return {type: 'CREATE_POST', data: data};
}
function deletePost(id) {
    return {type: 'DELETE_POST', id: id};
}
function userLogin(data) {
    return {type: 'USER_LOGIN', data: data};
}

// 定义state
const initalPostsState = [];
const initalUsersState = {isLogin: false, userData: {}};

// 定义reducer
function posts(state = initalPostsState, action) {
    switch (action.type) {
        case 'CREATE_POST':
            return [...state, action.data];
        case 'DELETE_POST':
            return state.filter((post)=> {
                return post.id != action.id
            });
        default:
            return false;
    }
}
function user(state = initalUsersState, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            // 创建一个state的备份，每次返回新的对象，不能直接改变state的值
            return Object.assign({}, state, {
                isLogin: true,
                userData: action.data
            });
        default:
            return false;
    }
}

// 把reducer合并到一个函数中
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    posts: posts,
    user: user
});

// 创建项目的store，并将reducer作为某参数
import {createStore} from 'redux';
let store = createStore(rootReducer);

console.log('查看APP2的store的初始值');
console.log(store.getState());

store.subscribe(function () {
    document.write('监听APP2的state的变化<br>');
    document.write(JSON.stringify(store.getState()));
    document.write('<br/><br/>');
});

// 添加文章
store.dispatch(createPost({id: 1, title: '张一丰'}));
store.dispatch(createPost({id: 2, title: '张二丰'}));
store.dispatch(createPost({id: 3, title: '张三丰'}));
// 删除文章
store.dispatch(deletePost(2));
// 用户登录
store.dispatch(userLogin({name: '张八丰', email: 'zhangbafen@qq.com'}));


import React from 'react';
function App2() {
    return (
        <h3>{document.write('<h3>APP2</h3>')}</h3>
    )
}
export default App2;
