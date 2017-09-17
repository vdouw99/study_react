/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
import {Provider} from 'react-redux';

import configureStore from './store/index.jsx';
import RouteMap from './router/index.jsx';

import './static/css/common.less';
import './static/css/font.css';

const store = configureStore();

render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
);