/**
 * Created by Administrator on 2017/8/15 0015.
 */

import {combineReducers, createStore} from 'redux';
import Handlebars from 'handlebars';

// action是信息的载体，里面有action的名称和要传递的信息，然后可以被传递到store中去。
// 传递的方法是store.dispatch方法，action是store唯一信息来源。
// action只是一个普通的JS对象，且必须有一个type属性，表示这个action要完成的功能。
// 3个actin的命名
const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const USER_LOGIN = 'USER_LOGIN';
// 对应的构造3个action的值
let createPostAction = {type: CREATE_POST, data: {id: 1, title: 'new title'}};
let deletePostAction = {type: DELETE_POST, id: 1};
let userLoginAction = {type: USER_LOGIN, date: {name: '张三丰', email: 'zhangsf@qq.com'}};


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
const initalPostsState = [];
const initalUserState = {isLogin: false, userData: {}};
function posts(state = initalPostState, action) {
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






/*
 const source = ` <div class="oprate"><p> 文章列表: 总数 {{posts.length}}</p>
 {{#if posts}}
 <ul>
 {{#each posts}}
 <li>{{this.id}} --- {{this.title}}</li>
 {{/each}}
 </ul>
 {{/if}}
 <p> 用户信息： 是否登录：{{user.isLogin}}</p>
 {{#if user.isLogin}}
 用户邮箱：{{user.userData.email}} 用户名：{{user.userData.name}}
 {{/if}}</div>`;

 const template = Handlebars.compile(source);

 function displayPage(data) {
 const html = template(data);
 document.body.innerHTML += html;
 console.log(data);
 }

 // inital states
 const initalPostsState = [];

 const initalUserState = {
 isLogin: false,
 userData: {

 }
 };


 // action names
 const CREATE_POST = 'CREATE_POST';
 const DELETE_POST = 'DELETE_POST';
 const USER_LOGIN = 'USER_LOGIN';

 // action creators
 function createPost(data) {
 return {
 type: CREATE_POST,
 data
 };
 }
 function deletePost(id) {
 return {
 type: DELETE_POST,
 id
 };
 }
 function userLogin(data) {
 return {
 type: USER_LOGIN,
 data
 };
 }
 function posts(state = initalPostsState, action) {
 switch (action.type) {
 case CREATE_POST:
 return [...state, action.data];
 case DELETE_POST:
 return state.filter(post => post.id !== action.id);
 default:
 return state;
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
 return state;
 }
 }

 const rootReducer = combineReducers({
 posts,
 user
 });

 const store = createStore(rootReducer);

 document.body.innerHTML += '<h2>初始化状态</h2>';

 displayPage(store.getState());

 store.subscribe(() => {
 displayPage(store.getState());
 });

 // create two posts
 document.body.innerHTML += '<h2>创建两篇文章</h2>';
 store.dispatch(createPost({ id: 1, title: 'new title' }));
 // store.dispatch({type: CREATE_POST, data: {id: 1, title: 'new title'}});
 store.dispatch(createPost({ id: 2, title: 'the second title' }));
 // store.dispatch({type: CREATE_POST, data: {id: 2, title: 'the second title'}});

 // delete one post
 document.body.innerHTML += '<h2>删除一篇文章</h2>';
 store.dispatch(deletePost(1));
 // store.dispatch({type: DELETE_POST, id: 1});

 // User login
 document.body.innerHTML += '<h2>用户登录</h2>';
 store.dispatch(userLogin({ name: 'viking', email: 'viking@v.me' }));
 // store.dispatch({type: USER_LOGIN, data: {name: 'viking', email: 'viking@v.me'}});


 */
