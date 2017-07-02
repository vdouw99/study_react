/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';

import Hello from './components/hello/index.jsx';

// 性能测试
import Perf from 'react-addons-perf';
// if (__DEV__) {
window.Perf = Perf;
// }

render(
    <Hello />,
    document.getElementById('root')
);
