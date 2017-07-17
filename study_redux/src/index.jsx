/**
 * Created by sf on 2017/7/14.
 */

import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './app.js';
import Redux02_Todo from './Redux02_Todo.jsx';

let store = createStore(Redux02_Todo);

render(
    <div>
        <App />
        <h3>宣布失败，老老实实跟着官网学习吧。</h3>
        <Redux02_Todo />
    </div>,
    document.getElementById('root')
);
