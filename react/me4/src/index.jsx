/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import 'whatwg-fetch';
import 'es6-promise';

import configureStore from './store/index.jsx';
import RouteMap from './router/index.jsx';
import {PHP_HOST} from './config/index.jsx';
import jquery from 'jquery';

import './static/css/common.less';
import './static/css/font.css';

const store = configureStore();

// // fetch请求数据
// fetch(PHP_HOST + 'react/me4/api_php/search/page/city/cate/index.php').then(function (response) {
//     if (response.status >= 400) {
//         throw new Error("Bad response from server");
//     }
//     return response.json();
// }).then(function (stories) {
//     console.log('byFetch', stories);
// });
//
// // jquery的Ajax请求数据
// jquery(function () {
//     jquery.ajax({
//         url: PHP_HOST + 'react/me4/api_php/search/page/city/cate/index.php',
//         type: 'get',
//         data: {},
//         success: function (response) {
//             console.log('byJquery', response);
//         }
//     });
// });

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);