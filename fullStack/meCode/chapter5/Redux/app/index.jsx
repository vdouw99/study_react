/**
 * Created by Administrator on 2017/8/21 0021.
 */

import React from 'react';
import {render} from 'react-dom';
import App1 from './app1.jsx';
import App2 from './app2.jsx';

render(
    <div>
        <App1 />
        <hr />
        <App2 />
    </div>,
    document.getElementById('root')
);
