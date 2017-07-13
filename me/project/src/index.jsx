/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';

import Hello from './components/hello/index.jsx';
import Todo from './containers/Todo/index.jsx';
import RouteMap from './router/routeMap.jsx';

// 性能测试
import Perf from 'react-addons-perf';
// if (__DEV__) {
window.Perf = Perf;
// }

render(
    <div onclick="alert()">
        <Hello />
        <div style={{clear:'both'}}></div>
        <Todo />
        <div style={{clear:'both'}}></div>
        <RouteMap/>
        <div style={{clear:'both'}}></div>
    </div>,
    document.getElementById('root')
);
