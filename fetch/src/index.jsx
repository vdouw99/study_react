/**
 * Created by sf on 2017/6/29.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';
// hashHistory对应的是browserHistory，但需要服务器支持

import RouteMap from './router/index.jsx';

render(
    <RouteMap history={hashHistory}/>,
    document.getElementById('root')
);
