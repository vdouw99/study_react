/**
 * Created by Administrator on 2017/9/12 0012.
 */

import React from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router';

import RouteMap from './router/index.jsx';

import './static/css/common.less';
import './static/css/font.css';

render(
    <div>
        <RouteMap history={hashHistory}/>
    </div>,
    document.getElementById('root')
);