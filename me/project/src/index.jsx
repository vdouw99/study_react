/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';

import Hello from './components/hello/index.jsx';
import Todo from './containers/Todo/index.jsx';

// 性能测试
import Perf from 'react-addons-perf';
// if (__DEV__) {
window.Perf = Perf;
// }

render(
    <div>
        <Hello />
        <div style={{clear:'both'}}></div>
        <Todo />
    </div>,
    document.getElementById('root')
);
