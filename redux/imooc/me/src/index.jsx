/**
 * Created by Administrator on 2017/8/15 0015.
 */

import React from 'react';
import {render} from 'react-dom';

import Test from './components/test.jsx';

render(
    <div>
        <Test testProp="testProp" />
    </div>,
    document.getElementById('root')
);