/**
 * Created by sf on 2017/7/14.
 */

import React from 'react';
import {render} from 'react-dom';
import App from './app.js';

import {createStore} from 'redux';
import {Provider, connect} from 'react-redux';

render(
    <div>
        <App />
        <h3>宣布失败，老老实实跟着官网学习吧。</h3>
    </div>,
    document.getElementById('root')
);
