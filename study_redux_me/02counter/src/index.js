/**
 * Created by sf on 2017/7/18.
 */

// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore} from 'redux';
// const render1 = () => ReactDOM.render(
//     <div>123</div>,
//     document.getElementById('root')
// );
// render1();

// 上面这种写法也可以，只是我看不懂而已

import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';

import Counter from './components/Counter.js';

render(
    <div>
        <Counter></Counter>
    </div>,
    document.getElementById('root')
);